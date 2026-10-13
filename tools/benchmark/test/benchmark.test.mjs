import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, cp, readFile, readdir } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { once } from 'node:events';
import { randomUUID } from 'node:crypto';
import { validateInput, newRun, runTrial, compileResponse } from '../src/core.mjs';
import { previewHtml, reactDownload, jsonSafe } from '../src/preview.mjs';
import { createWorkbench } from '../server.mjs';
import { validateComment, commentsMarkdown, upsertComment } from '../src/annotations.mjs';

const input=()=>validateInput({title:'Liked Dial layout',revision:'v3',baseline:'function App(){ return <h1>Dial</h1> }',prompt:'Add a working search field.',width:375,height:812,maxTokens:4096,models:[{provider:'@first',model:'model-a'},{provider:'@second',model:'model-b'}]});
const output={jsx:'function App(){const [n,s]=React.useState(0);return <button onClick={()=>s(n+1)}>{n}</button>}',css:'body{color:#123}'};
const response=(model='actual-a')=>new Response(JSON.stringify({model,choices:[{message:{content:JSON.stringify(output)},finish_reason:'stop'}],usage:{prompt_tokens:12,completion_tokens:34}}),{status:200});

test('requires a saved baseline and rejects duplicate or unsafe routes',()=>{
  assert.throws(()=>validateInput({...input(),baseline:''}),/baseline/);
  assert.throws(()=>validateInput({...input(),models:[input().models[0],input().models[0]]}),/distinct/);
  assert.throws(()=>validateInput({...input(),models:[{provider:'@first\nsecret',model:'a'},input().models[1]]}),/slug/);
  assert.throws(()=>validateInput({...input(),images:['https://example.com/private.png']}),/images/);
});
test('model requests keep the exact snapshot and omit unspecified temperature',async()=>{
  const run=newRun(input()),requests=[];
  for(const trial of run.trials) {
    const result=await runTrial(run,trial,{apiKey:'private-test-key',fetchImpl:async(url,init)=>{requests.push({url,...init});return response();}});
    assert.equal(result.status,'compiled');assert.equal(result.usage.completion_tokens,34);
    assert.equal(result.returnedModel,'actual-a');assert.equal(result.cost,null);
    assert.ok(!JSON.stringify(result).includes('private-test-key'));
  }
  const [a,b]=requests.map(r=>JSON.parse(r.body));assert.notEqual(a.model,b.model);delete a.model;delete b.model;assert.deepEqual(a,b);assert.deepEqual(a,run.request);
  assert.ok(!('temperature' in a));assert.equal(requests[0].headers['x-portkey-cache-force-refresh'],'true');
});
test('saves HTTP errors without retries or secret leakage',async()=>{
  let calls=0;const run=newRun(input());
  const result=await runTrial(run,run.trials[0],{apiKey:'private-test-key',fetchImpl:async()=>{calls++;return new Response('provider rejected private-test-key',{status:429});}});
  assert.equal(calls,1);assert.equal(result.status,'request-error');assert.equal(result.httpStatus,429);assert.match(result.rawResponse,/REDACTED/);assert.ok(!JSON.stringify(result).includes('private-test-key'));
});
test('records unusable output and rejects imports without executing code',async()=>{
  const run=newRun(input());const result=await runTrial(run,run.trials[0],{apiKey:'x',fetchImpl:async()=>new Response(JSON.stringify({choices:[{message:{content:'not JSON'}}]}))});
  assert.equal(result.status,'compile-error');assert.equal(result.rawText,'not JSON');
  await assert.rejects(()=>compileResponse(JSON.stringify({jsx:'import secret from "node:fs"; function App(){return secret}',css:''})),/imports are not supported/);
  const compiled=await compileResponse(JSON.stringify(output));assert.match(compiled.compiled,/window.__layoutApp/);assert.match(reactDownload(compiled),/export default function DialLayout/);
});
test('embedded report/preview values cannot escape script elements',()=>{
  const malicious='</script><script>parent.evil()</script>';
  assert.ok(!jsonSafe({malicious}).includes('</script>'));
  const html=previewHtml({id:'model-1',css:malicious,compiled:malicious},'runtime');
  assert.equal((html.match(/<script>/g)||[]).length,3); // two harness scripts plus escaped text in JS string
  assert.match(html,/connect-src 'none'/);assert.match(html,/form-action 'none'/);
});
test('annotation records retain coordinates and update the same pin',()=>{
  const c=validateComment({id:randomUUID(),text:'Move this button\nKeep its label.',x:120,y:200,viewport:{width:375,height:812},theme:'light',model:'actual-a'});
  const list=upsertComment([],c),updated=upsertComment(list,{...c,text:'Move it left.'});
  assert.equal(updated.length,1);assert.equal(updated[0].createdAt,list[0].createdAt);
  assert.equal(updated[0].history[0].text,c.text);
  assert.match(commentsMarkdown('Dial',list),/120, 200/);assert.match(commentsMarkdown('Dial',list),/> Keep its label/);
  assert.throws(()=>validateComment({...c,x:900}),/coordinates/);
});
test('local server saves a standalone report and pinned Markdown, blocks other origins',async t=>{
  const root=await mkdtemp(path.join(tmpdir(),'jason-benchmark-test-'));
  await cp(new URL('../dist/',import.meta.url),path.join(root,'dist'),{recursive:true});
  const {server,jobs}=await createWorkbench({root,apiKey:'server-private-key',fetchImpl:async(_,init)=>response(JSON.parse(init.body).model)});
  server.listen(0,'127.0.0.1');await once(server,'listening');
  t.after(()=>new Promise(resolve=>server.close(resolve)));
  const base=`http://127.0.0.1:${server.address().port}`;
  const config=await (await fetch(`${base}/api/config`)).json();assert.equal(config.ready,true);assert.ok(!JSON.stringify(config).includes('server-private-key'));
  const post=(route,body,headers={})=>fetch(base+route,{method:'POST',headers:{'Content-Type':'application/json','x-benchmark-token':config.csrf,...headers},body:JSON.stringify(body)});
  assert.equal((await post('/api/runs',input(),{Origin:'https://unrelated.example'})).status,403);
  assert.equal((await post('/api/runs',input(),{'x-benchmark-token':'bad'})).status,403);
  const res=await post('/api/runs',input());assert.equal(res.status,202);const {id}=await res.json();await Promise.all([...jobs]);
  const report=await readFile(path.join(root,'runs',id,'index.html'),'utf8');
  assert.match(report,/Liked Dial layout/);assert.ok(!report.includes('server-private-key'));assert.ok(!report.includes('fonts.googleapis.com'));
  const saved=JSON.parse(await readFile(path.join(root,'runs',id,'run.json'),'utf8'));assert.equal(saved.status,'complete');assert.equal(saved.trials.length,2);
  const comment={id:randomUUID(),text:'Tighten this spacing.',x:80,y:150,viewport:{width:375,height:812},theme:'light',model:'model-a'};
  assert.equal((await post('/api/jig-notes/test',{comment,title:'Review'})).status,200);
  assert.match(await readFile(path.join(root,'notes','test.md'),'utf8'),/Tighten this spacing/);
  const extra=[{...comment,id:randomUUID(),text:'Second pin.'},{...comment,id:randomUUID(),text:'Third pin.'}];
  await Promise.all(extra.map(c=>post('/api/jig-notes/test',{comment:c,title:'Review'})));
  const allNotes=await (await fetch(`${base}/api/jig-notes/test`)).json();assert.equal(allNotes.annotations.length,3);
  assert.equal((await post(`/api/runs/${id}/annotations`,{trialId:'model-1',comment})).status,200);
  assert.match(await readFile(path.join(root,'runs',id,'annotations.md'),'utf8'),/80, 150/);
  assert.equal((await readdir(path.join(root,'runs',id))).filter(n=>n.endsWith('.tmp')).length,0);
});
