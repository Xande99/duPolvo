import React from "react";

const CSS = `
.dp-field{ display:flex; flex-direction:column; gap:7px; }
.dp-field__label{ font-family:var(--font-ui); font-weight:var(--fw-semibold); font-size:var(--fs-label);
  color:var(--text-strong); letter-spacing:var(--ls-snug); }
.dp-field__req{ color:var(--aqua-700); }
.dp-input, .dp-textarea{
  width:100%; font-family:var(--font-text); font-size:var(--fs-body); color:var(--text-strong);
  background:var(--white); border:var(--bw-regular) solid var(--border-default);
  border-radius:var(--radius-sm); padding:13px 16px; transition:var(--transition);
  box-shadow:var(--shadow-inset);
}
.dp-input{ height:52px; }
.dp-textarea{ min-height:128px; resize:vertical; line-height:var(--lh-body); }
.dp-input::placeholder,.dp-textarea::placeholder{ color:var(--text-faint); }
.dp-input:hover,.dp-textarea:hover{ border-color:var(--border-strong); }
.dp-input:focus,.dp-textarea:focus{
  outline:none; border-color:var(--aqua-500);
  box-shadow:0 0 0 4px rgba(33,227,195,.18);
}
.dp-input:disabled,.dp-textarea:disabled{ background:var(--navy-50); color:var(--text-faint); cursor:not-allowed; }
.dp-field--error .dp-input,.dp-field--error .dp-textarea{ border-color:var(--danger); }
.dp-field--error .dp-input:focus,.dp-field--error .dp-textarea:focus{ box-shadow:0 0 0 4px rgba(229,72,77,.16); }
.dp-field__hint{ font-size:var(--fs-caption); color:var(--text-muted); }
.dp-field--error .dp-field__hint{ color:var(--danger); }
/* On dark */
.dp-field--on-dark .dp-field__label{ color:var(--paper); }
.dp-field--on-dark .dp-input,.dp-field--on-dark .dp-textarea{
  background:rgba(255,255,255,.04); border-color:var(--border-dark); color:var(--paper); box-shadow:none;
}
.dp-field--on-dark .dp-input::placeholder,.dp-field--on-dark .dp-textarea::placeholder{ color:var(--navy-300); }
.dp-field--on-dark .dp-field__hint{ color:var(--navy-200); }
`;
function useCSS(){
  React.useEffect(()=>{
    if(document.getElementById("dp-field-css")) return;
    const s=document.createElement("style"); s.id="dp-field-css"; s.textContent=CSS;
    document.head.appendChild(s);
  },[]);
}

export function Input({ label, hint, required=false, error=false, onDark=false, multiline=false, className="", id, ...rest }){
  useCSS();
  const fid = id || (label ? "f-"+label.toLowerCase().replace(/\s+/g,"-") : undefined);
  const wrap=["dp-field",error&&"dp-field--error",onDark&&"dp-field--on-dark",className].filter(Boolean).join(" ");
  return (
    <div className={wrap}>
      {label && <label className="dp-field__label" htmlFor={fid}>{label}{required && <span className="dp-field__req"> *</span>}</label>}
      {multiline
        ? <textarea id={fid} className="dp-textarea" {...rest} />
        : <input id={fid} className="dp-input" {...rest} />}
      {hint && <span className="dp-field__hint">{hint}</span>}
    </div>
  );
}
