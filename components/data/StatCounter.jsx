import React from "react";

const CSS = `
.dp-stat{ display:flex; flex-direction:column; gap:6px; }
.dp-stat__value{ font-family:var(--font-display); font-weight:var(--fw-extrabold);
  font-size:clamp(2.75rem,5vw,4rem); line-height:1; letter-spacing:var(--ls-tight); color:var(--text-strong); }
.dp-stat__value b{ color:var(--aqua-500); font-weight:inherit; }
.dp-stat__label{ font-family:var(--font-ui); font-size:var(--fs-body-sm); color:var(--text-muted); }
.dp-stat--on-dark .dp-stat__value{ color:var(--paper); }
.dp-stat--on-dark .dp-stat__value b{ color:var(--aqua-400); }
.dp-stat--on-dark .dp-stat__label{ color:var(--navy-200); }
`;
function useCSS(){
  React.useEffect(()=>{
    if(document.getElementById("dp-stat-css")) return;
    const s=document.createElement("style"); s.id="dp-stat-css"; s.textContent=CSS;
    document.head.appendChild(s);
  },[]);
}

/** Animated number counter that runs when scrolled into view. */
export function StatCounter({ value, prefix="", suffix="", label, decimals=0, duration=1600, onDark=false, ...rest }){
  useCSS();
  const ref=React.useRef(null);
  const [n,setN]=React.useState(value);
  const done=React.useRef(false);
  React.useEffect(()=>{
    const el=ref.current; if(!el) return;
    const reduce=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if(reduce){ setN(value); return; }
    // Only count up when a live animation clock is confirmed (rAF actually fires);
    // otherwise leave the final value in place so it never sticks at 0.
    let clockLive=false;
    requestAnimationFrame(()=>{ clockLive=true; });
    const io=new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting && !done.current && clockLive){
          done.current=true;
          setN(0);
          const t0=performance.now();
          const tick=(t)=>{
            const p=Math.min((t-t0)/duration,1);
            const eased=1-Math.pow(1-p,3);
            setN(value*eased);
            if(p<1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    },{threshold:.4});
    io.observe(el);
    return ()=>io.disconnect();
  },[value,duration]);
  const display = decimals>0 ? n.toFixed(decimals) : Math.round(n).toLocaleString("pt-BR");
  return (
    <div className={"dp-stat"+(onDark?" dp-stat--on-dark":"")} ref={ref} {...rest}>
      <span className="dp-stat__value">{prefix}{display}<b>{suffix}</b></span>
      {label && <span className="dp-stat__label">{label}</span>}
    </div>
  );
}
