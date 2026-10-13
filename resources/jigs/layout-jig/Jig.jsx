import React, { useEffect, useRef, useState } from 'react';
import './jig.css';

export function downloadFile(name, content, type = 'text/plain') {
  const url = URL.createObjectURL(new Blob([content], { type }));
  const a = document.createElement('a'); a.href = url; a.download = name; a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

/** Review UI only. Keep the actual layout and its font inside the supplied stage. */
export function Jig({ title, model = 'Not recorded', viewport, theme, onTheme, onDownload, url, annotations = [], onAnnotation, children, contained = false }) {
  const [open,setOpen]=useState(false), [keyboard,setKeyboard]=useState(false);
  const [placing,setPlacing]=useState(false),[draft,setDraft]=useState(null),[saving,setSaving]=useState(false);
  const [message,setMessage]=useState('');
  const stage=useRef(null),trigger=useRef(null),dock=useRef(null);
  useEffect(()=>{
    const esc=e=>{if(e.key==='Escape'){setPlacing(false);setDraft(null);trigger.current?.focus();setOpen(false);}};
    window.addEventListener('keydown',esc);return()=>window.removeEventListener('keydown',esc);
  },[]);
  function point(x,y) {
    setDraft({id:crypto.randomUUID(),x:Math.round(x),y:Math.round(y),text:'',viewport:{...viewport},theme,model,createdAt:new Date().toISOString()});
    setPlacing(false);
  }
  function place(e) {
    const rect=stage.current.getBoundingClientRect();point(e.clientX-rect.left,e.clientY-rect.top);
  }
  async function save() {
    setSaving(true);
    try {await onAnnotation({...draft,text:draft.text.trim(),updatedAt:new Date().toISOString()});setDraft(null);setMessage('Annotation saved to Markdown.');}
    catch(e){setMessage(e.message || 'Could not save. Your comment is still here.');}
    finally{setSaving(false);}
  }
  async function copy() {
    try{await navigator.clipboard.writeText(url);setMessage('Local URL copied.');}
    catch{setMessage(`Copy this local URL: ${url}`);}
  }
  return <section className={`layout-jig ${contained?'jig-contained':''}`} data-jig-theme={theme} aria-label={`${title} review jig`}>
    <div className="jig-stage-scroll"><div className="jig-stage" ref={stage} style={{width:viewport.width,height:viewport.height}}>
      {children}
      {annotations.map((a,i)=><button key={a.id} className="jig-pin" aria-label={`Annotation ${i+1}: ${a.text}`} style={{left:`${a.x/a.viewport.width*100}%`,top:`${a.y/a.viewport.height*100}%`}} onClick={()=>setDraft({...a})}>{i+1}</button>)}
      {draft && <span className="jig-pin jig-pin-draft" style={{left:`${draft.x/draft.viewport.width*100}%`,top:`${draft.y/draft.viewport.height*100}%`}}>•</span>}
      {placing && <button className="jig-place" aria-label="Place an annotation on the layout. Enter places it in the center." onClick={e=>e.detail===0?point(viewport.width/2,viewport.height/2):place(e)} />}
    </div></div>
    <div ref={dock} className="jig-dock" data-open={open} data-keyboard={keyboard} onMouseEnter={()=>{if(matchMedia('(hover: hover) and (pointer: fine)').matches){setKeyboard(false);setOpen(true);}}} onMouseLeave={()=>{if(!dock.current?.contains(document.activeElement))setOpen(false);}} onBlur={e=>{if(!e.currentTarget.contains(e.relatedTarget))setOpen(false);}}>
      <button ref={trigger} className="jig-clip" aria-label="Open layout tools" aria-expanded={open} aria-controls={`tools-${title.replace(/\W/g,'-')}`} onFocus={()=>{setKeyboard(true);setOpen(true);}} onClick={()=>setOpen(true)}><span className="jig-dot" aria-hidden="true" /></button>
      <div className="jig-panel" id={`tools-${title.replace(/\W/g,'-')}`} inert={!open} aria-hidden={!open}>
        <div className="jig-model"><span>Created with</span><strong title={model}>{model}</strong></div>
        <label className="jig-mode">Appearance<select aria-label="Layout color mode" value={theme} onChange={e=>onTheme(e.target.value)}><option value="light">Light</option><option value="dark">Dark</option></select></label>
        <div className="jig-divider"/>
        <button className="jig-option" onClick={()=>{setPlacing(true);setOpen(false);trigger.current?.blur();}}>Annotate <span>↗</span></button>
        <button className="jig-option" onClick={onDownload} disabled={!onDownload}>Download React <span>↓</span></button>
        <button className="jig-option" onClick={copy}>Copy URL <span>↗</span></button>
      </div>
    </div>
    {placing && <p className="jig-hint" role="status">Click the layout to place a comment · Esc to cancel</p>}
    {draft && <aside className="jig-comment" aria-label="Layout annotation">
      <div className="jig-comment-heading"><strong>{annotations.some(a=>a.id===draft.id)?'Edit annotation':'New annotation'}</strong><button aria-label="Close annotation" onClick={()=>setDraft(null)}>×</button></div>
      <p>{draft.x}, {draft.y} · {draft.viewport.width} × {draft.viewport.height}</p>
      <textarea autoFocus aria-label="What should change?" placeholder="What would you like to change here?" value={draft.text} maxLength={10000} onChange={e=>setDraft({...draft,text:e.target.value})}/>
      <button className="jig-save" disabled={saving || !draft.text.trim()} onClick={save}>{saving?'Saving…':'Save annotation'}</button>
    </aside>}
    {message && <div className="jig-notice" role="status">{message}<button aria-label="Dismiss notification" onClick={()=>setMessage('')}>×</button></div>}
  </section>;
}
