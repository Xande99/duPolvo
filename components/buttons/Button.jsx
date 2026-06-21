import React from "react";

/* Inject component CSS once (hover/active states can't be inline). */
const CSS = `
.dp-btn{
  --_bg:var(--action-primary); --_fg:var(--action-primary-text);
  --_bd:transparent; --_bgh:var(--action-primary-hover); --_bga:var(--action-primary-active);
  display:inline-flex; align-items:center; justify-content:center; gap:10px;
  font-family:var(--font-ui); font-weight:var(--fw-bold); letter-spacing:var(--ls-snug);
  border:var(--bw-regular) solid var(--_bd); border-radius:var(--radius-pill);
  background:var(--_bg); color:var(--_fg); cursor:pointer;
  transition:transform var(--dur-fast) var(--ease-out), background var(--dur) var(--ease-out),
             box-shadow var(--dur) var(--ease-out), border-color var(--dur) var(--ease-out), color var(--dur) var(--ease-out);
  white-space:nowrap; text-decoration:none; user-select:none;
}
.dp-btn--md{ height:48px; padding:0 26px; font-size:var(--fs-label); }
.dp-btn--lg{ height:56px; padding:0 34px; font-size:var(--fs-body); }
.dp-btn--sm{ height:38px; padding:0 18px; font-size:var(--fs-caption); }
.dp-btn:hover{ background:var(--_bgh); transform:translateY(-2px); }
.dp-btn:active{ background:var(--_bga); transform:translateY(0); }
.dp-btn:disabled,.dp-btn[aria-disabled="true"]{
  opacity:.45; cursor:not-allowed; transform:none; box-shadow:none; pointer-events:none;
}
.dp-btn--primary{ box-shadow:var(--shadow-sm); }
.dp-btn--primary:hover{ box-shadow:var(--shadow-md); }
.dp-btn--accent{
  --_bg:var(--action-accent); --_fg:var(--action-accent-text);
  --_bgh:var(--action-accent-hover); --_bga:var(--action-accent-active);
  box-shadow:var(--shadow-accent);
}
.dp-btn--accent:hover{ box-shadow:0 22px 50px rgba(33,227,195,.4); }
.dp-btn--outline{
  --_bg:transparent; --_fg:var(--text-strong); --_bd:var(--border-strong);
  --_bgh:transparent; --_bga:var(--navy-50);
}
.dp-btn--outline:hover{ --_bd:var(--navy-600); color:var(--navy-600); }
.dp-btn--ghost{
  --_bg:transparent; --_fg:var(--text-strong); --_bd:transparent;
  --_bgh:var(--navy-50); --_bga:var(--navy-100);
}
.dp-btn--on-dark.dp-btn--outline{ --_fg:var(--paper); --_bd:rgba(255,255,255,.28); --_bga:rgba(255,255,255,.08); }
.dp-btn--on-dark.dp-btn--outline:hover{ --_bd:var(--aqua-500); color:var(--aqua-500); }
.dp-btn--on-dark.dp-btn--ghost{ --_fg:var(--paper); --_bgh:rgba(255,255,255,.08); --_bga:rgba(255,255,255,.14); }
.dp-btn--block{ width:100%; }
`;
function useCSS(){
  React.useEffect(()=>{
    if(document.getElementById("dp-btn-css")) return;
    const s=document.createElement("style"); s.id="dp-btn-css"; s.textContent=CSS;
    document.head.appendChild(s);
  },[]);
}

export function Button({
  children, variant="primary", size="md", onDark=false, block=false,
  disabled=false, iconLeft=null, iconRight=null, as="button", className="", ...rest
}){
  useCSS();
  const cls=[
    "dp-btn", `dp-btn--${variant}`, `dp-btn--${size}`,
    onDark?"dp-btn--on-dark":"", block?"dp-btn--block":"", className
  ].filter(Boolean).join(" ");
  const Tag = as;
  const aria = (as!=="button" && disabled) ? { "aria-disabled":"true" } : {};
  return (
    <Tag className={cls} disabled={as==="button"?disabled:undefined} {...aria} {...rest}>
      {iconLeft}{children}{iconRight}
    </Tag>
  );
}
