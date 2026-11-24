/* Módulo independiente: adapta los datos compartidos sin modificarlos.
   Las tasas agregadas son cocientes de sumas, nunca promedios de tasas. */
(function(root){
  const total=(rows,key)=>rows.reduce((s,r)=>s+r[key],0);
  const divide=(moves,h)=>Number.isFinite(moves)&&Number.isFinite(h)&&moves>=0&&h>0?moves/h:null;
  function fromCalls(calls){return calls.flatMap(s=>s.cranes.map(c=>{const delays=c.delays.map((d,i)=>({...d,eventId:`${s.id}-${c.id}-${i+1}`})),all=delays.reduce((h,d)=>h+d.hours,0),external=delays.filter(d=>d.type==='externa'||d.type==='non-terminal').reduce((h,d)=>h+d.hours,0);return {callId:s.id,vessel:s.name,crane:c.id,shift:c.shift,moves:c.moves,gross:c.net+all,external,all,events:delays}}))}
  function validate(r){return [r.moves,r.gross,r.external,r.all].every(Number.isFinite)&&r.moves>=0&&r.gross>0&&r.external>=0&&r.all>=r.external&&r.gross>r.all&&new Set(r.events.map(d=>d.eventId)).size===r.events.length}
  function aggregate(rows){if(!rows.length||rows.some(r=>!validate(r)))return {moves:0,gross:0,external:0,all:0,gmph:null,gcr:null,ncr:null,valid:false};const moves=total(rows,'moves'),gross=total(rows,'gross'),external=total(rows,'external'),all=total(rows,'all');return {moves,gross,external,all,gmph:divide(moves,gross),gcr:divide(moves,gross-external),ncr:divide(moves,gross-all),valid:true}}
  function groups(rows,key){return [...new Set(rows.map(r=>r[key]))].map(name=>({name,...aggregate(rows.filter(r=>r[key]===name))}))}
  function filter(rows,{vessel='all',shift='all',crane='all'}={}){return rows.filter(r=>(vessel==='all'||r.callId===vessel)&&(shift==='all'||r.shift===shift)&&(crane==='all'||r.crane===crane))}
  function analyze(rows,indicator,goal){const a=aggregate(rows),byCrane=groups(rows,'crane'),byShift=groups(rows,'shift'),byVessel=groups(rows,'vessel'),rank=groups=>groups.filter(g=>Number.isFinite(g[indicator])).sort((x,y)=>x[indicator]-y[indicator]);return {aggregate:a,byCrane,byShift,byVessel,worst:rank(byCrane)[0],best:rank(byCrane).at(-1),worstShift:rank(byShift)[0],bestShift:rank(byShift).at(-1),worstVessel:rank(byVessel)[0],compliance:Number.isFinite(a[indicator])&&goal>0?a[indicator]/goal*100:null}}
  root.CranePerformance={fromCalls,validate,aggregate,groups,filter,analyze,divide};
  if(typeof module!=='undefined')module.exports=root.CranePerformance;
})(typeof window==='undefined'?globalThis:window);
