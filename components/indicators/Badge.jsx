import React from "react";

const CSS = `
.dp-badge{
  display:inline-flex; align-items:center; gap:6px;
  font-family:var(--font-ui); font-weight:var(--fw-bold); font-size:var(--fs-overline);
  letter-spacing:var(--ls-wide); text-transform:uppercase;
  padding:5px 11px; border-radius:var(--radius-pill); line-height:1;
  border:var(--bw-hairline) solid transparent;
}
.dp-badge--accent{ background:var(--aqua-100); color:var(--aqua-700); }
.dp-badge--navy{ background:var(--navy-50); color:var(--navy-600); }
.dp-badge--solid{ background:var(--aqua-500); color:var(--navy-900); }
.dp-badge--success{ background:var(--success-bg); color:var(--success); }
.dp-badge--warning{ background:var(--warning-bg); color:#A66A12; }
.dp-badge--outline{ background:transparent; color:var(--text-body); border-color:var(--border-default); }
.dp-badge--on-dark{ background:rgba(33,227,195,.14); color:var(--aqua-400); }
.dp-badge__dot{ width:6px; height:6px; border-radius:50%; background:currentColor; }
`;
function useCSS(){
  React.useEffect(()=>{
    if(document.getElementById("dp-badge-css")) return;
    const s=document.createElement("style"); s.id="dp-badge-css"; s.textContent=CSS;
    document.head.appendChild(s);
  },[]);
}

export function Badge({ children, variant="accent", dot=false, className="", ...rest }){
  useCSS();
  return (
    <span className={["dp-badge",`dp-badge--${variant}`,className].filter(Boolean).join(" ")} {...rest}>
      {dot && <span className="dp-badge__dot" />}
      {children}
    </span>
  );
}
