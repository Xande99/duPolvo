import React from "react";

const CARDS_CSS = `
.dp-card{
  position:relative; background:var(--surface-card); border:var(--bw-hairline) solid var(--border-subtle);
  border-radius:var(--radius-card); box-shadow:var(--shadow-sm);
  transition:transform var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out), border-color var(--dur) var(--ease-out);
}
.dp-card--pad{ padding:var(--space-8); }
.dp-card--hover:hover{ transform:translateY(-6px); box-shadow:var(--shadow-hover); border-color:var(--aqua-300); }
.dp-card--dark{ background:var(--surface-dark-2); border-color:var(--border-dark); box-shadow:none; color:var(--text-on-dark); }

/* Service card */
.dp-svc{ display:flex; flex-direction:column; gap:var(--space-4); }
.dp-svc__icon{
  width:60px; height:60px; border-radius:var(--radius-md); display:grid; place-items:center;
  background:var(--aqua-100); color:var(--navy-600);
  transition:var(--transition);
}
.dp-svc__icon svg{ width:28px; height:28px; }
.dp-card--hover:hover .dp-svc__icon{ background:var(--aqua-500); color:var(--navy-900); transform:rotate(-6deg) scale(1.05); }
.dp-svc__title{ font-family:var(--font-display); font-weight:var(--fw-bold); font-size:var(--fs-h3); color:var(--text-strong); letter-spacing:var(--ls-snug); }
.dp-svc__desc{ font-size:var(--fs-body-sm); color:var(--text-muted); line-height:var(--lh-body); }
.dp-svc__link{ margin-top:auto; display:inline-flex; align-items:center; gap:7px; font-family:var(--font-ui);
  font-weight:var(--fw-bold); font-size:var(--fs-caption); color:var(--navy-600); letter-spacing:var(--ls-snug); }
.dp-card--hover:hover .dp-svc__link{ color:var(--aqua-700); }
.dp-svc__num{ position:absolute; top:var(--space-6); right:var(--space-6); font-family:var(--font-display);
  font-weight:var(--fw-extrabold); font-size:var(--fs-h3); color:var(--navy-100); }

/* Portfolio card */
.dp-port{ overflow:hidden; padding:0; cursor:pointer; }
.dp-port__media{ position:relative; aspect-ratio:4/3; overflow:hidden; background:var(--navy-100); }
.dp-port__media img{ width:100%; height:100%; object-fit:cover; transition:transform 500ms var(--ease-out); }
.dp-port:hover .dp-port__media img{ transform:scale(1.06); }
.dp-port__cat{ position:absolute; top:14px; left:14px; }
.dp-port__metric{ position:absolute; bottom:14px; right:14px; background:var(--navy-900); color:var(--aqua-400);
  font-family:var(--font-display); font-weight:var(--fw-extrabold); font-size:var(--fs-body-sm);
  padding:6px 12px; border-radius:var(--radius-pill); }
.dp-port__body{ padding:var(--space-6); display:flex; flex-direction:column; gap:6px; }
.dp-port__title{ font-family:var(--font-display); font-weight:var(--fw-bold); font-size:var(--fs-h3); color:var(--text-strong); letter-spacing:var(--ls-snug); }
.dp-port__desc{ font-size:var(--fs-body-sm); color:var(--text-muted); }

/* Testimonial card */
.dp-tst{ display:flex; flex-direction:column; gap:var(--space-6); height:100%; }
.dp-tst__quote{ font-family:var(--font-display); font-weight:var(--fw-semibold); font-size:var(--fs-body-lg);
  line-height:var(--lh-snug); color:var(--text-strong); letter-spacing:var(--ls-snug); }
.dp-tst__quote::before{ content:"“"; color:var(--aqua-500); }
.dp-tst__foot{ margin-top:auto; display:flex; align-items:center; gap:13px; }
.dp-tst__avatar{ width:46px; height:46px; border-radius:50%; object-fit:cover; background:var(--navy-100); flex:none; }
.dp-tst__name{ font-family:var(--font-ui); font-weight:var(--fw-bold); font-size:var(--fs-body-sm); color:var(--text-strong); }
.dp-tst__role{ font-size:var(--fs-caption); color:var(--text-muted); }
.dp-tst__stars{ color:var(--aqua-500); font-size:var(--fs-body-sm); letter-spacing:2px; }
`;
export function useCardsCSS(){
  React.useEffect(()=>{
    if(document.getElementById("dp-cards-css")) return;
    const s=document.createElement("style"); s.id="dp-cards-css"; s.textContent=CARDS_CSS;
    document.head.appendChild(s);
  },[]);
}

export function Card({ children, pad=true, hover=false, dark=false, className="", ...rest }){
  useCardsCSS();
  const cls=["dp-card",pad&&"dp-card--pad",hover&&"dp-card--hover",dark&&"dp-card--dark",className]
    .filter(Boolean).join(" ");
  return <div className={cls} {...rest}>{children}</div>;
}
