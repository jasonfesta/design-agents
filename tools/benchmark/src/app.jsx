import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Jig, downloadFile } from '../../../resources/jigs/layout-jig/Jig.jsx';
import { previewHtml, reactDownload } from './preview.mjs';
import './style.css';
import JigPreview from './JigPreview.jsx';
import { commentsMarkdown, upsertComment } from './annotations.mjs';

const boot = window.__BENCHMARK__;
const empty = { title:'', revision:'', baseline:'', prompt:'', width:1440, height:900, maxTokens:4096, temperature:'', models:[{provider:'',model:''},{provider:'',model:''}], images:[] };
async function api(url, body, token) {
  const res = await fetch(url, body ? {method:'POST',headers:{'Content-Type':'application/json','x-benchmark-token':token},body:JSON.stringify(body)} : undefined);
  const data = await res.json(); if(!res.ok) throw new Error(data.error || 'Request failed.'); return data;
}
function Frame({trial, viewport, theme, runtime}) {
  const ref = useRef(null);
  const [state,setState] = useState('Loading preview…');
  const doc = useMemo(()=>previewHtml(trial,runtime,theme),[trial.compiled,trial.css,runtime,theme]);
  useEffect(()=>{
    setState('Loading preview…');
    const receive = e=>{
      if(e.source!==ref.current?.contentWindow || e.data?.benchmarkPreview!==true || e.data.id!==trial.id) return;
      setState(e.data.status==='error' ? `Runtime error: ${String(e.data.error).slice(0,600)}` : 'Preview mounted · visual quality needs review');
    };
    window.addEventListener('message',receive);
    const timer=setTimeout(()=>setState(s=>s==='Loading preview…' ? 'No render confirmation. Inspect the code before retrying.' : s),8000);
    return ()=>{window.removeEventListener('message',receive);clearTimeout(timer);};
  },[doc]);
  return <><iframe ref={ref} title={`${trial.model} layout`} sandbox="allow-scripts" referrerPolicy="no-referrer" srcDoc={doc} style={{width:viewport.width,height:viewport.height,colorScheme:theme}} /><p className="preview-state" role="status">{state}</p></>;
}
function Report({run, annotations:initial, token}) {
  const [viewport,setViewport]=useState({width:run.input.width,height:run.input.height});
  const [theme,setTheme]=useState('light');
  const [show,setShow]=useState(false);
  const [annotations,setAnnotations]=useState(initial || {});
  const baseUrl=boot.offline ? location.href.split('#')[0] : `${location.origin}/?run=${run.id}`;
  useEffect(()=>{ if(boot.offline) {try {const saved=JSON.parse(localStorage.getItem(`benchmark:${run.id}`));if(saved)setAnnotations(saved);} catch { /* Browser-local storage may be unavailable for file URLs. */ }} },[run.id]);
  async function annotate(trialId,comment) {
    const next={...annotations,[trialId]:upsertComment(annotations[trialId] || [],comment)};
    if(boot.offline) {
      localStorage.setItem(`benchmark:${run.id}`,JSON.stringify(next));
      downloadFile('annotations.md',Object.entries(next).map(([id,items])=>commentsMarkdown(`${run.input.title} / ${id}`,items)).join('\n'),'text/markdown');
    }
    else await api(`/api/runs/${run.id}/annotations`,{trialId,comment},token);
    setAnnotations(next);
  }
  return <main className="report">
    <div className="report-heading"><div><p className="eyebrow">DIAL → BENCHMARK</p><h1>{run.input.title}</h1><p>{run.input.revision || 'Revision not supplied'} · {new Date(run.createdAt).toLocaleString()} · {run.status}</p></div>
      <div className="buttons">
        <button onClick={()=>setShow(!show)}>{show?'Hide previews':'Render React previews'}</button>
        <button onClick={()=>downloadFile('annotations.json',JSON.stringify(annotations,null,2),'application/json')}>Export annotations</button>
        {!boot.offline && <a className="button" href={`/reports/${run.id}`} target="_blank" rel="noreferrer">Saved local page ↗</a>}
      </div>
    </div>
    <details className="snapshot"><summary>Frozen prompt & baseline · {run.promptHash.slice(0,12)}</summary><pre>{run.input.prompt}</pre><details><summary>Dial baseline</summary><pre>{run.input.baseline}</pre></details><p>Original viewport: {run.input.width} × {run.input.height}. Comparing views uses linked dimensions and theme. Generation timing is end-to-end request time, not rendering performance. Cost is unavailable.</p><p>One request per model, sequentially. No automatic repair. Account-side Portkey policies can still affect routing; returned model IDs are recorded.</p></details>
    <div className="comparison">
      {run.trials.map(trial=><article className="trial" key={trial.id} id={trial.id}>
        <div className="trial-heading"><h2>{trial.model}</h2><span className={`status ${trial.status.includes('error')?'error':''}`}>{trial.status}</span></div>
        <p className="route">{trial.provider} · returned: {trial.returnedModel || '—'}</p>
        <dl className="metrics"><div><dt>Request time</dt><dd>{trial.durationMs==null?'—':`${(trial.durationMs/1000).toFixed(2)}s`}</dd></div><div><dt>Input tokens</dt><dd>{trial.usage?.prompt_tokens?.toLocaleString() ?? '—'}</dd></div><div><dt>Output tokens</dt><dd>{trial.usage?.completion_tokens?.toLocaleString() ?? '—'}</dd></div><div><dt>Finish reason</dt><dd>{trial.finishReason || '—'}</dd></div></dl>
        {trial.error && <p className="error-message">{trial.error}</p>}
        {trial.compiled && <Jig contained title={`${trial.model} layout`} model={trial.returnedModel || trial.model} viewport={viewport} theme={theme} onTheme={setTheme} url={`${baseUrl}#${trial.id}`} annotations={annotations[trial.id] || []} onAnnotation={comment=>annotate(trial.id,comment)} onDownload={()=>downloadFile(`${trial.id}.jsx`,reactDownload(trial),'text/javascript')}>
          {show ? <Frame trial={trial} viewport={viewport} theme={theme} runtime={boot.runtime}/> : <div className="preview-placeholder">Ready to render. Open previews to inspect the generated React.</div>}
        </Jig>}
        <details className="code"><summary>React & CSS</summary><pre>{trial.jsx || trial.rawText || 'No code returned yet.'}</pre>{trial.css && <pre>{trial.css}</pre>}</details>
        <details className="code"><summary>Raw response & metrics</summary><pre>{trial.rawResponse || 'Waiting for response.'}</pre></details>
      </article>)}
    </div>
    <p className="footnote">Raw trials stay unchanged. Bring the selected result back to Dial for review and integration. {boot.offline ? 'Annotations saved here use this browser; export them to carry them with the page.' : `Saved in tools/benchmark/runs/${run.id}/index.html.`}</p>
  </main>;
}
function App() {
  const [config,setConfig]=useState(null), [form,setForm]=useState(empty), [error,setError]=useState('');
  const [saved,setSaved]=useState([]),[current,setCurrent]=useState(boot.run?{run:boot.run,annotations:boot.annotations}:null);
  const [runId,setRunId]=useState(new URLSearchParams(location.search).get('run'));
  const [busy,setBusy]=useState(false);
  useEffect(()=>{
    if(boot.offline)return;
    api('/api/config').then(setConfig).catch(e=>setError(e.message));
    api('/api/runs').then(setSaved).catch(e=>setError(e.message));
  },[]);
  useEffect(()=>{
    if(!runId || boot.offline)return;
    let cancelled=false,timer;
    const load=async()=>{
      try {const data=await api(`/api/runs/${runId}`);if(cancelled)return;setCurrent(data);if(data.run.status==='running')timer=setTimeout(load,1800);else setBusy(false);}
      catch(e){if(!cancelled){setError(e.message);setBusy(false);}}
    };load();return()=>{cancelled=true;clearTimeout(timer);};
  },[runId]);
  const field=(name,value)=>setForm(f=>({...f,[name]:value}));
  const modelField=(i,name,value)=>setForm(f=>({...f,models:f.models.map((m,j)=>j===i?{...m,[name]:value}:m)}));
  async function submit(e) {
    e.preventDefault();setError('');setBusy(true);
    try {const data=await api('/api/runs',form,config.csrf);history.pushState({},'',`?run=${data.id}`);setRunId(data.id);}
    catch(e){setError(e.message);setBusy(false);}
  }
  async function readSources(files) {
    try {
      if(files.length>8 || [...files].reduce((n,f)=>n+f.size,0)>180000)throw new Error('Choose up to 8 text files, under 180 KB combined.');
      const text=await Promise.all([...files].map(async file=>`FILE: ${file.name}\n${await file.text()}`));
      field('baseline',text.join('\n\n'));
    } catch(e){setError(e.message);}
  }
  async function readImages(files) {
    try {
      if(files.length>3 || [...files].some(f=>f.size>2000000 || !['image/png','image/jpeg','image/webp'].includes(f.type)))throw new Error('Choose up to 3 PNG/JPEG/WebP screenshots, at most 2 MB each.');
      const images=await Promise.all([...files].map(file=>new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);})));field('images',images);
    } catch(e){setError(e.message);}
  }
  return <><header className="topbar"><a href="/" className="brand">jason <span>/ benchmark</span></a><span className="local-label">LOCAL WORKSPACE</span></header>
    {error && <div className="error-banner" role="alert">{error}</div>}
    {current ? <Report key={current.run.id} run={current.run} annotations={current.annotations} token={config?.csrf}/> : <main className="setup">
      <p className="eyebrow">AN INDEPENDENT AGENT · AFTER DIAL</p><h1>One layout.<br/>The same prompt.<br/><span>A different model.</span></h1><p className="intro">Start with a Dial layout you like. Compare how selected models respond to one change request, then take your choice back into Dial.</p>
      <form onSubmit={submit}>
        <fieldset><legend>01 / Your Dial baseline</legend><div className="two-col"><label>Layout name<input required value={form.title} onChange={e=>field('title',e.target.value)} placeholder="e.g. Studio dashboard" maxLength={100}/></label><label>Saved revision<input value={form.revision} onChange={e=>field('revision',e.target.value)} placeholder="Version, commit, or file reference" maxLength={200}/></label></div>
          <label>Source and direction<textarea required rows={6} value={form.baseline} onChange={e=>field('baseline',e.target.value)} placeholder="Paste the approved component, CSS, Taste notes, and relevant Atlas settings…" maxLength={200000}/></label>
          <div className="two-col"><label className="file-label">Import source files<input type="file" multiple accept=".jsx,.tsx,.js,.ts,.css,.json,.md,.txt" onChange={e=>readSources(e.target.files)}/></label><label className="file-label">Reference screenshots · {form.images.length}/3<input type="file" multiple accept="image/png,image/jpeg,image/webp" onChange={e=>readImages(e.target.files)}/></label></div>
        </fieldset>
        <fieldset><legend>02 / One request for every model</legend><label>Prompt<textarea required rows={4} value={form.prompt} onChange={e=>field('prompt',e.target.value)} placeholder="What should each model do with this layout?" maxLength={16000}/></label><div className="four-col">{[['width','Width',240,3840],['height','Height',240,3840],['maxTokens','Output token limit',256,16000],['temperature','Temperature (optional)',0,2]].map(([name,label,min,max])=><label key={name}>{label}<input type="number" min={min} max={max} step={name==='temperature'?'0.1':'1'} value={form[name]} onChange={e=>field(name,e.target.value)} required={name!=='temperature'}/></label>)}</div></fieldset>
        <fieldset><legend>03 / Your Portkey routes</legend><p className="hint">Use managed provider slugs and model IDs from your Portkey account. Each run makes one request per model.</p>{form.models.map((m,i)=><div className="model-row" key={i}><span>{String(i+1).padStart(2,'0')}</span><label>Provider slug<input required placeholder="@your-provider" value={m.provider} onChange={e=>modelField(i,'provider',e.target.value)}/></label><label>Model ID<input required placeholder="Exact model ID" value={m.model} onChange={e=>modelField(i,'model',e.target.value)}/></label>{i>1 && <button type="button" onClick={()=>field('models',form.models.filter((_,j)=>j!==i))}>Remove</button>}</div>)}{form.models.length<4 && <button type="button" onClick={()=>field('models',[...form.models,{provider:'',model:''}])}>+ Add model</button>}
        </fieldset>
        <div className="run-footer"><p>{config?.ready?'Portkey key is configured on this machine.':'Set PORTKEY_API_KEY in tools/benchmark/.env and restart to run.'}</p><button className="primary" type="submit" disabled={busy || !config?.ready}>{busy?'Running…':'Run benchmark →'}</button></div>
      </form>
      {saved.length>0 && <section className="history"><h2>Saved runs</h2>{saved.map(r=><a key={r.id} href={`?run=${r.id}`}><strong>{r.title}</strong><span>{r.status} · {new Date(r.createdAt).toLocaleDateString()}</span></a>)}</section>}
    </main>}
  </>;
}
createRoot(document.getElementById('root')).render(new URLSearchParams(location.search).has('jig') ? <JigPreview/> : <App/>);
