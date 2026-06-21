import React from "react";

const CSS = `
.dp-eyebrow{
  display:inline-flex; align-items:center; gap:9px;
  font-family:var(--font-ui); font-weight:var(--fw-bold); font-size:var(--fs-overline);
  letter-spacing:var(--ls-overline); text-transform:uppercase;
  color:var(--text-accent);
}
.dp-eyebrow--on-dark{ color:var(--aqua-400); }
.dp-eyebrow__line{ width:26px; height:2px; border-radius:2px; background:currentColor; opacity:.85; }
`;
function useCSS(){
  React.useEffect(()=>{
    if(document.getElementById("dp-eyebrow-css")) return;
    const s=document.createElement("style"); s.id="dp-eyebrow-css"; s.textContent=CSS;
    document.head.appendChild(s);
  },[]);
}

export function Eyebrow({ children, line=true, onDark=false, className="", ...rest }){
  useCSS();
  return (
    <span className={["dp-eyebrow",onDark&&"dp-eyebrow--on-dark",className].filter(Boolean).join(" ")} {...rest}>
      {line && <span className="dp-eyebrow__line" />}
      {children}
    </span>
  );
}
