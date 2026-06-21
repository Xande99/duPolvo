import React from "react";
import { Button } from "../buttons/Button.jsx";

const CSS = `
.dp-nav{ position:fixed; top:0; left:0; right:0; z-index:100; transition:var(--transition); }
.dp-nav__inner{
  max-width:var(--container-wide); margin-inline:auto; height:var(--header-h);
  padding-inline:var(--gutter); display:flex; align-items:center; gap:var(--space-8);
}
.dp-nav__brand{ display:flex; align-items:center; gap:10px; font-family:var(--font-display);
  font-weight:var(--fw-extrabold); font-size:1.4rem; letter-spacing:var(--ls-tight); color:var(--paper); }
.dp-nav__brand b{ color:var(--aqua-500); }
.dp-nav__brand img{ height:34px; width:auto; }
.dp-nav__links{ display:flex; align-items:center; gap:var(--space-6); margin-left:auto; }
.dp-nav__link{ font-family:var(--font-ui); font-weight:var(--fw-semibold); font-size:var(--fs-label);
  color:var(--navy-100); letter-spacing:var(--ls-snug); transition:var(--transition); }
.dp-nav__link:hover{ color:var(--aqua-400); }
.dp-nav__cta{ margin-left:var(--space-2); }
/* scrolled state: blurred glass */
.dp-nav--scrolled .dp-nav__inner{
  height:64px; background:rgba(15,26,48,.72); backdrop-filter:blur(18px) saturate(140%);
  -webkit-backdrop-filter:blur(18px) saturate(140%);
  border-bottom:1px solid rgba(255,255,255,.08); margin-top:0;
}
.dp-nav--scrolled.dp-nav{ padding-top:0; }
.dp-nav__menu{ display:none; background:none; border:none; cursor:pointer; color:var(--paper); margin-left:auto; }
@media (max-width:768px){
  .dp-nav__links{ display:none; }
  .dp-nav__menu{ display:grid; place-items:center; }
}
`;
function useCSS(){
  React.useEffect(()=>{
    if(!document.getElementById("dp-nav-css")){
      const s=document.createElement("style"); s.id="dp-nav-css"; s.textContent=CSS;
      document.head.appendChild(s);
    }
  },[]);
}

export function Navbar({
  brand="duPolvo", logo, links=[
    {label:"Serviços",href:"#servicos"},{label:"Cases",href:"#cases"},
    {label:"Processo",href:"#processo"},{label:"FAQ",href:"#faq"}
  ], ctaLabel="Solicitar orçamento", ctaHref="#contato", scrolled:scrolledProp
}){
  useCSS();
  const [scrolled,setScrolled]=React.useState(false);
  React.useEffect(()=>{
    if(scrolledProp!==undefined) return;
    const onScroll=()=>setScrolled(window.scrollY>24);
    onScroll(); window.addEventListener("scroll",onScroll,{passive:true});
    return ()=>window.removeEventListener("scroll",onScroll);
  },[scrolledProp]);
  const isScrolled = scrolledProp!==undefined ? scrolledProp : scrolled;
  return (
    <header className={"dp-nav"+(isScrolled?" dp-nav--scrolled":"")}>
      <div className="dp-nav__inner">
        <a className="dp-nav__brand" href="#top">
          {logo ? <img src={logo} alt={brand} /> : <span>du<b>Polvo</b></span>}
        </a>
        <nav className="dp-nav__links">
          {links.map(l=><a key={l.label} className="dp-nav__link" href={l.href}>{l.label}</a>)}
          <Button as="a" href={ctaHref} variant="accent" size="sm" className="dp-nav__cta">{ctaLabel}</Button>
        </nav>
        <button className="dp-nav__menu" aria-label="Menu">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
        </button>
      </div>
    </header>
  );
}
