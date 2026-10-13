import http from 'node:http';
import { readFile, writeFile, mkdir, readdir, rename } from 'node:fs/promises';
import { randomBytes } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { validateInput, newRun, runTrial } from './src/core.mjs';
import { jsonSafe, scriptSafe } from './src/preview.mjs';
import { validateComment, upsertComment, commentsMarkdown } from './src/annotations.mjs';

const ROOT = fileURLToPath(new URL('.', import.meta.url));
const ID = /^[0-9a-f-]{36}$/;
const page = (js, css, data) => `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Benchmark · Jason</title><style>${css.replace(/<\/style/gi, '<\\/style')}</style></head><body><div id="root"></div><script>window.__BENCHMARK__=${jsonSafe(data)};</script><script>${scriptSafe(js)}</script></body></html>`;
export async function createWorkbench({ root = ROOT, apiKey = process.env.PORTKEY_API_KEY, fetchImpl = fetch } = {}) {
  const [js, css, runtime] = await Promise.all(['app.js', 'app.css', 'react-runtime.js'].map(name => readFile(path.join(root, 'dist', name), 'utf8')));
  const runsDir = path.join(root, 'runs');
  const notesDir = path.join(root, 'notes');
  await mkdir(runsDir, { recursive: true });
  await mkdir(notesDir, { recursive: true });
  const csrf = randomBytes(24).toString('hex');
  let active = null;
  const jobs = new Set();
  const locks = new Map();
  async function serial(key,operation) {
    const previous=locks.get(key) || Promise.resolve();
    const task=previous.catch(()=>{}).then(operation);locks.set(key,task);
    try{return await task;}finally{if(locks.get(key)===task)locks.delete(key);}
  }
  const write = async (file, content) => { await writeFile(file + '.tmp', content, { mode: 0o600 }); await rename(file + '.tmp', file); };
  const readRun = async id => JSON.parse(await readFile(path.join(runsDir, id, 'run.json'), 'utf8'));
  const notesFor = async id => { try { return JSON.parse(await readFile(path.join(runsDir,id,'annotations.json'),'utf8')); } catch { return {}; } };
  const save = async run => {
    const dir = path.join(runsDir, run.id); await mkdir(dir, { recursive: true });
    await write(path.join(dir,'run.json'), JSON.stringify(run,null,2));
    await write(path.join(dir,'index.html'), page(js,css,{ offline:true, run, runtime, annotations:await notesFor(run.id) }));
  };
  // Preserve incomplete runs after a server interruption; never silently retry paid calls.
  for (const id of await readdir(runsDir)) {
    if (!ID.test(id)) continue;
    const run = await readRun(id);
    if (run.status === 'running') { run.status = 'interrupted'; await save(run); }
  }
  async function execute(run) {
    try {
      for (let i=0; i<run.trials.length; i++) {
        run.trials[i].status = 'requesting'; await save(run);
        run.trials[i] = await runTrial(run,run.trials[i],{ apiKey, fetchImpl });
        await save(run);
      }
      run.status = 'complete'; run.finishedAt = new Date().toISOString(); await save(run);
    } catch { run.status = 'save-error'; console.error('Benchmark could not save the run. Check available disk space.'); }
    finally { active = null; }
  }
  const server = http.createServer(async (req,res) => {
    const port = server.address()?.port;
    const hosts = [`127.0.0.1:${port}`,`localhost:${port}`];
    res.setHeader('X-Content-Type-Options','nosniff');
    res.setHeader('Referrer-Policy','no-referrer');
    res.setHeader('Cache-Control','no-store');
    res.setHeader('Content-Security-Policy',"default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; font-src data:; img-src 'self' data: blob:; frame-src 'self' about:; object-src 'none'; base-uri 'none'; frame-ancestors 'none'");
    const respond = (status,data,type='application/json') => { res.writeHead(status,{'Content-Type':`${type}; charset=utf-8`}); res.end(type==='application/json' ? JSON.stringify(data) : data); };
    if (!hosts.includes(req.headers.host)) return respond(403,{error:'Local requests only.'});
    if (req.headers.origin && !hosts.some(h=>req.headers.origin===`http://${h}`)) return respond(403,{error:'Cross-origin requests are not allowed.'});
    try {
      const url = new URL(req.url, `http://${req.headers.host}`);
      const route = url.pathname;
      if (req.method==='GET' && route==='/') return respond(200,page(js,css,{offline:false,runtime}),'text/html');
      if (req.method==='GET' && route==='/api/config') return respond(200,{ready:Boolean(apiKey),csrf,active});
      const jigMatch=route.match(/^\/api\/jig-notes\/([a-z0-9-]{1,60})$/);
      if(jigMatch && req.method==='GET') {
        try{return respond(200,JSON.parse(await readFile(path.join(notesDir,jigMatch[1]+'.json'),'utf8')));}
        catch(error){if(error.code==='ENOENT')return respond(200,{annotations:[]});throw error;}
      }
      if (req.method==='GET' && route==='/api/runs') {
        const list=[];
        for(const id of await readdir(runsDir)) if(ID.test(id)) { const r=await readRun(id);list.push({id,title:r.input.title,createdAt:r.createdAt,status:r.status}); }
        return respond(200,list.sort((a,b)=>b.createdAt.localeCompare(a.createdAt)));
      }
      const match = route.match(/^\/(api\/runs|reports)\/([0-9a-f-]{36})(?:\/(annotations))?$/);
      if(match && req.method==='GET') {
        const run=await readRun(match[2]);
        return match[1]==='reports' ? respond(200,await readFile(path.join(runsDir,run.id,'index.html'),'utf8'),'text/html') : respond(200,{run,annotations:await notesFor(run.id)});
      }
      if(req.method!=='POST') return respond(404,{error:'Not found.'});
      if(req.headers['x-benchmark-token']!==csrf) return respond(403,{error:'Reload the local page before saving or running.'});
      if(!req.headers['content-type']?.startsWith('application/json')) return respond(415,{error:'Expected JSON.'});
      let body='';
      for await(const chunk of req) { body+=chunk; if(Buffer.byteLength(body)>10000000) return respond(413,{error:'Request is too large.'}); }
      const input=JSON.parse(body);
      if(jigMatch) {
        const stem=path.join(notesDir,jigMatch[1]);
        return await serial(stem,async()=>{
        let prior={annotations:[]};try{prior=JSON.parse(await readFile(stem+'.json','utf8'));}catch(error){if(error.code!=='ENOENT')throw error;}
        const annotations=upsertComment(prior.annotations,validateComment(input.comment));
        const title=String(input.title || 'Layout').slice(0,150);
        await write(stem+'.json',JSON.stringify({title,annotations},null,2));
        await write(stem+'.md',commentsMarkdown(title,annotations));
        return respond(200,{annotations});
        });
      }
      if(match?.[3]==='annotations') {
        return await serial(match[2],async()=>{
        const run=await readRun(match[2]);
        if(run.status==='running') return respond(409,{error:'Wait for this run to finish before annotating.'});
        if(!run.trials.some(t=>t.id===input.trialId)) return respond(400,{error:'Invalid annotation target.'});
        const notes=await notesFor(run.id); notes[input.trialId]=upsertComment(notes[input.trialId] || [],validateComment(input.comment));
        await write(path.join(runsDir,run.id,'annotations.json'),JSON.stringify(notes,null,2)); await save(run);
        await write(path.join(runsDir,run.id,'annotations.md'),Object.entries(notes).map(([id,items])=>commentsMarkdown(`${run.input.title} / ${id}`,items)).join('\n'));
        return respond(200,{saved:true});
        });
      }
      if(route==='/api/runs') {
        if(!apiKey) return respond(409,{error:'Add PORTKEY_API_KEY to tools/benchmark/.env, then restart the server.'});
        if(active) return respond(409,{error:'A benchmark is already running. Wait for it to finish.'});
        const run=newRun(validateInput(input)); active=run.id;
        try { await save(run); } catch(error) { active=null; throw error; }
        const job=execute(run);jobs.add(job);job.finally(()=>jobs.delete(job));
        return respond(202,{id:run.id});
      }
      return respond(404,{error:'Not found.'});
    } catch(error) {
      if(error.code==='ENOENT') return respond(404,{error:'Run not found.'});
      return respond(400,{error: error.code ? 'Could not access the local run files.' : error.message});
    }
  });
  return {server, jobs};
}
if(process.argv[1] && path.resolve(process.argv[1])===fileURLToPath(import.meta.url)) {
  const {server}=await createWorkbench();
  const port=Number(process.env.BENCHMARK_PORT || 4317);
  server.listen(port,'127.0.0.1',()=>console.log(`Benchmark: http://127.0.0.1:${port}\nRuns: ${path.join(ROOT,'runs')}`));
}
