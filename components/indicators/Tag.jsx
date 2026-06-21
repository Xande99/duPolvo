import React from "react";

const CSS = `
.dp-tag{
  display:inline-flex; align-items:center; gap:7px;
  font-family:var(--font-ui); font-weight:var(--fw-semibold); font-size:var(--fs-caption);
  letter-spacing:var(--ls-snug);
  padding:7px 14px; border-radius:var(--radius-pill); line-height:1;
  background:var(--white); color:var(--text-body);
  border:var(--bw-regular) solid var(--border-default);
  transition:var(--transition);
}
.dp-tag--interactive{ cursor:pointer; }
.dp-tag--interactive:hover{ border-color:var(--aqua-500); color:var(--navy-700); }
.dp-tag--active{ background:var(--navy-600); color:var(--paper); border-color:var(--navy-600); }
.dp-tag--on-dark{ background:rgba(255,255,255,.05); color:var(--navy-100); border-color:var(--border-dark); }
.dp-tag--on-dark.dp-tag--active{ background:var(--aqua-500); color:var(--navy-900); border-color:var(--aqua-500); }
`;
function useCSS(){
  React.useEffect(()=>{
    if(document.getElementById("dp-tag-css")) return;
    const s=document.createElement("style"); s.id="dp-tag-css"; s.textContent=CSS;
    document.head.appendChild(s);
  },[]);
}

export function Tag({ children, active=false, interactive=false, onDark=false, className="", ...rest }){
  useCSS();
  const cls=["dp-tag",active&&"dp-tag--active",interactive&&"dp-tag--interactive",
    onDark&&"dp-tag--on-dark",className].filter(Boolean).join(" ");
  return <span className={cls} {...rest}>{children}</span>;
}
