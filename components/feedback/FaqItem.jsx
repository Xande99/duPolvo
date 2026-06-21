import React from "react";

const CSS = `
.dp-faq{ border-bottom:var(--bw-hairline) solid var(--border-default); }
.dp-faq__head{ width:100%; display:flex; align-items:center; gap:var(--space-4); text-align:left;
  background:none; border:none; cursor:pointer; padding:var(--space-6) 0; }
.dp-faq__q{ font-family:var(--font-display); font-weight:var(--fw-bold); font-size:var(--fs-h3);
  color:var(--text-strong); letter-spacing:var(--ls-snug); flex:1; transition:var(--transition); }
.dp-faq__head:hover .dp-faq__q{ color:var(--navy-600); }
.dp-faq__icon{ flex:none; width:38px; height:38px; border-radius:50%; display:grid; place-items:center;
  background:var(--navy-50); color:var(--navy-600); transition:var(--transition); }
.dp-faq--open .dp-faq__icon{ background:var(--aqua-500); color:var(--navy-900); transform:rotate(45deg); }
.dp-faq__body{ overflow:hidden; max-height:0; transition:max-height var(--dur-slow) var(--ease-out); }
.dp-faq--open .dp-faq__body{ max-height:340px; }
.dp-faq__a{ font-size:var(--fs-body); color:var(--text-muted); line-height:var(--lh-relaxed);
  padding-bottom:var(--space-6); max-width:62ch; }
`;
function useCSS(){
  React.useEffect(()=>{
    if(document.getElementById("dp-faq-css")) return;
    const s=document.createElement("style"); s.id="dp-faq-css"; s.textContent=CSS;
    document.head.appendChild(s);
  },[]);
}

export function FaqItem({ question, answer, defaultOpen=false, ...rest }){
  useCSS();
  const [open,setOpen]=React.useState(defaultOpen);
  return (
    <div className={"dp-faq"+(open?" dp-faq--open":"")} {...rest}>
      <button className="dp-faq__head" aria-expanded={open} onClick={()=>setOpen(o=>!o)}>
        <span className="dp-faq__q">{question}</span>
        <span className="dp-faq__icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>
        </span>
      </button>
      <div className="dp-faq__body"><p className="dp-faq__a">{answer}</p></div>
    </div>
  );
}
