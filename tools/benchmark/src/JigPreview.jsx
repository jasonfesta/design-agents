import React, { useEffect, useState } from 'react';
import { MeshGradient } from '@paper-design/shaders-react';
import { Jig, downloadFile } from '../../../resources/jigs/layout-jig/Jig.jsx';

export default function JigPreview() {
  const [viewport,setViewport]=useState({width:innerWidth,height:innerHeight});
  const [theme,setTheme]=useState('light'),[annotations,setAnnotations]=useState([]),[token,setToken]=useState('');
  const [reduced,setReduced]=useState(matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [visible,setVisible]=useState(!document.hidden);
  useEffect(()=>{
    document.title='Layout jig · Jason';
    const resize=()=>setViewport({width:innerWidth,height:innerHeight});window.addEventListener('resize',resize);
    const motion=matchMedia('(prefers-reduced-motion: reduce)');const change=()=>setReduced(motion.matches);motion.addEventListener('change',change);
    const visibility=()=>setVisible(!document.hidden);document.addEventListener('visibilitychange',visibility);
    fetch('/api/config').then(r=>r.json()).then(d=>setToken(d.csrf));
    fetch('/api/jig-notes/preview').then(r=>r.json()).then(d=>setAnnotations(d.annotations || []));
    return()=>{window.removeEventListener('resize',resize);motion.removeEventListener('change',change);document.removeEventListener('visibilitychange',visibility);};
  },[]);
  async function annotate(comment) {
    const res=await fetch('/api/jig-notes/preview',{method:'POST',headers:{'Content-Type':'application/json','x-benchmark-token':token},body:JSON.stringify({comment,title:'Paper Mesh Gradient test',url:location.href})});
    const data=await res.json();if(!res.ok)throw new Error(data.error || 'Could not save annotation.');setAnnotations(data.annotations);
  }
  const colors=theme==='light'?['#f5f1e8','#ded9f1','#d5e9e4','#e7aa8e']:['#192428','#393356','#335c5a','#8e6356'];
  const source=`import React from 'react';\nimport { MeshGradient } from '@paper-design/shaders-react';\n\n// Install @paper-design/shaders-react@0.0.81. Review jig intentionally excluded.\nexport default function Layout() {\n  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;\n  return <MeshGradient style={{position:'fixed',inset:0}} colors={${JSON.stringify(colors)}} distortion={0.65} swirl={0.18} grainOverlay={0.025} speed={reduced ? 0 : 0.35} />;\n}\n`;
  return <div className="jig-fullscreen">
    <Jig title="Shader test" model="Hand-built test · Paper shader" viewport={viewport} theme={theme} onTheme={setTheme} url={location.href} annotations={annotations} onAnnotation={annotate} onDownload={()=>downloadFile('layout.jsx',source,'text/javascript')}>
      <div className="shader-test" style={{background:theme==='light'?'linear-gradient(135deg,#eee7df,#d9dded,#d4e4db)':'#273239'}}>
        <MeshGradient style={{width:'100%',height:'100%'}} colors={colors} distortion={0.65} swirl={0.18} grainOverlay={0.025} speed={reduced || !visible ? 0 : 0.35} maxPixelCount={1600000}/>
      </div>
    </Jig>
  </div>;
}
