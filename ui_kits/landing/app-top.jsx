const { useState, useEffect, useRef } = React;

/* ----- Icons (consistent 2px line set) ----------------------------------- */
const I = {
  code:  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg>,
  pen:   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>,
  video: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>,
  trend: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 6l-9.5 9.5-5-5L1 18"/><path d="M17 6h6v6"/></svg>,
  zap:   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
  heart: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>,
  shield:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>,
  users: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13A4 4 0 0 1 16 11"/></svg>,
  arrow: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>,
  wa:    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.87 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z"/><path d="M12 2a10 10 0 0 0-8.5 15.3L2 22l4.8-1.5A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.07-1.11l-.29-.17-3 .94.95-2.92-.19-.3A8 8 0 1 1 12 20z"/></svg>,
  ig:    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/></svg>,
  ln:    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21H9z"/></svg>,
  yt:    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 12s0-3.2-.4-4.7a2.5 2.5 0 0 0-1.76-1.77C19.34 5.1 12 5.1 12 5.1s-7.34 0-8.84.43A2.5 2.5 0 0 0 1.4 7.3C1 8.8 1 12 1 12s0 3.2.4 4.7a2.5 2.5 0 0 0 1.76 1.77c1.5.43 8.84.43 8.84.43s7.34 0 8.84-.43a2.5 2.5 0 0 0 1.76-1.77C23 15.2 23 12 23 12zM9.8 15.3V8.7l5.7 3.3-5.7 3.3z"/></svg>,
};

/* ----- scroll reveal ----------------------------------------------------- */
/* ----- live-clock detection: rAF only fires when the compositor clock runs */
let CLOCK_LIVE=false;
requestAnimationFrame(()=>{ CLOCK_LIVE=true; });

/* ----- scroll reveal (enabled only when the anim clock is live) ----------- */
function useReveal(){
  useEffect(()=>{
    const els=Array.from(document.querySelectorAll(".reveal"));
    // Give rAF a moment; if it never fired, the environment freezes animations →
    // leave content fully visible (no hiding) so nothing can get stuck invisible.
    const start=setTimeout(()=>{
      if(!CLOCK_LIVE) return;
      document.documentElement.classList.add("anim-ok");
      const reveal=()=>{ const h=window.innerHeight||800;
        els.forEach(el=>{ const r=el.getBoundingClientRect(); if(r.top < h*0.9 && r.bottom>0) el.classList.add("in"); }); };
      reveal();
      const onScroll=()=>reveal();
      window.addEventListener("scroll",onScroll,{passive:true});
      const safety=setTimeout(()=>els.forEach(el=>el.classList.add("in")), 2500);
      useReveal._cleanup=()=>{ window.removeEventListener("scroll",onScroll); clearTimeout(safety); };
    },240);
    return ()=>{ clearTimeout(start); if(useReveal._cleanup) useReveal._cleanup(); };
  },[]);
}

/* ----- animated counter (shows final value if the clock is frozen) ------- */
function Counter({value, prefix="", suffix="", decimals=0}){
  const ref=useRef(null); const [n,setN]=useState(value); const done=useRef(false);
  useEffect(()=>{
    const el=ref.current;
    if(window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const run=()=>{
      if(done.current || !CLOCK_LIVE) return; done.current=true;
      setN(0);
      const t0=performance.now(), dur=1700;
      const tick=(t)=>{ const p=Math.min((t-t0)/dur,1); setN(value*(1-Math.pow(1-p,3))); if(p<1) requestAnimationFrame(tick); };
      requestAnimationFrame(tick);
    };
    let io;
    if("IntersectionObserver" in window){
      io=new IntersectionObserver((es)=>es.forEach(e=>{ if(e.isIntersecting) run(); }),{threshold:.5});
      io.observe(el);
    }
    return ()=>{ if(io) io.disconnect(); };
  },[value]);
  const disp = decimals>0 ? n.toFixed(decimals) : Math.round(n).toLocaleString("pt-BR");
  return <span ref={ref} className="stat__v">{prefix}{disp}<b>{suffix}</b></span>;
}

/* ----- NAV --------------------------------------------------------------- */
function Nav(){
  const [s,setS]=useState(false);
  useEffect(()=>{ const f=()=>setS(window.scrollY>24); f(); window.addEventListener("scroll",f,{passive:true}); return ()=>window.removeEventListener("scroll",f); },[]);
  return (
    <header className={"nav"+(s?" nav--scrolled":"")}>
      <div className="nav__in">
        <a className="brand" href="#top"><span>du<span className="p">Polvo</span></span><span className="brand__dot"></span></a>
        <nav className="nav__links">
          <a className="nav__link" href="#servicos">Serviços</a>
          <a className="nav__link" href="#cases">Cases</a>
          <a className="nav__link" href="#processo">Processo</a>
          <a className="nav__link" href="#faq">FAQ</a>
          <a className="btn btn--accent btn--sm" href="#contato">Solicitar orçamento</a>
        </nav>
        <button className="nav__burger" aria-label="Menu"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>
      </div>
    </header>
  );
}

/* ----- HERO -------------------------------------------------------------- */
function Hero(){
  return (
    <section className="hero" id="top">
      <div className="hero__bg">
        <div className="hero__grid"></div>
        <div className="hero__glow hero__glow--1"></div>
        <div className="hero__glow hero__glow--2"></div>
      </div>
      <div className="hero__in">
        <div className="hero__copy">
          <span className="eyebrow reveal"><span className="eyebrow__line"></span>Agência criativa &amp; ousada</span>
          <h1 className="hero__title reveal d1">Sua marca tem muitos braços.<br/>A gente cuida de <em>todos</em>.</h1>
          <p className="hero__sub reveal d2">Programação, design, vídeo e tráfego pago sob o mesmo teto. Um time que abraça seu projeto inteiro — e puxa todos os tentáculos pro mesmo lugar: você vendendo mais.</p>
          <div className="hero__cta reveal d3">
            <a className="btn btn--accent btn--lg" href="#contato">Solicitar orçamento {I.arrow}</a>
            <a className="btn btn--outline btn--lg on-dark" href="#cases">Ver cases</a>
          </div>
          <div className="hero__trust reveal d4">
            <div className="hero__avatars">
              <img src="../../assets/avatars/a1.png" alt="" width="36" height="36"/><img src="../../assets/avatars/a2.png" alt="" width="36" height="36"/><img src="../../assets/avatars/a3.png" alt="" width="36" height="36"/>
            </div>
            <div><span className="hero__stars">★★★★★</span><br/>+180 projetos no ar · nota 4,9</div>
          </div>
        </div>
        <div className="hero__art reveal d2">
          <div className="hero__halo"></div>
          <img className="hero__polvo" src="../../assets/polvo.png" alt="Mascote duPolvo, um polvo com oito braços" width="480" height="480"/>
          <div className="hero__chip hero__chip--1">{I.code}<span>Dev</span></div>
          <div className="hero__chip hero__chip--2"><b>+312%</b><span>ROAS</span></div>
          <div className="hero__chip hero__chip--3">{I.video}<span>Edição</span></div>
        </div>
      </div>
    </section>
  );
}

/* ----- SERVICES ---------------------------------------------------------- */
const SERVICES=[
  {n:"01", ic:I.code, t:"Programação", d:"Sites, landing pages e sistemas sob medida. Rápidos, escaláveis e feitos pra converter.", tags:["Next.js","WordPress","Sistemas"]},
  {n:"02", ic:I.pen, t:"Design", d:"Identidade visual, social media e UI que param o scroll e ficam na memória.", tags:["Branding","UI/UX","Social"]},
  {n:"03", ic:I.video, t:"Vídeo / Edição", d:"Reels, VSLs e motion que prendem do primeiro frame ao CTA final.", tags:["Reels","Motion","VSL"]},
  {n:"04", ic:I.trend, t:"Tráfego Pago", d:"Campanhas que dão retorno de verdade. Cada real investido com lupa em cima.", tags:["Meta Ads","Google","Funis"]},
];
function Services(){
  return (
    <section className="section" id="servicos">
      <div className="container">
        <div className="sec-head reveal">
          <span className="eyebrow"><span className="eyebrow__line"></span>O que fazemos</span>
          <h2>Quatro tentáculos,<br/>uma só estratégia</h2>
          <p>Cada especialidade puxa na mesma direção. Você não precisa de cinco fornecedores — precisa de uma agência que conversa entre si.</p>
        </div>
        <div className="grid-4">
          {SERVICES.map((s,i)=>(
            <article className={"svc reveal d"+(i+1)} key={s.n}>
              <span className="svc__num">{s.n}</span>
              <span className="svc__icon">{s.ic}</span>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
              <div className="svc__tags">{s.tags.map(t=><span className="tag-mini" key={t}>{t}</span>)}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----- WHY --------------------------------------------------------------- */
const FEATS=[
  {ic:I.zap, t:"Tudo num lugar só", d:"Dev, design, vídeo e tráfego sem ruído entre fornecedores. Um briefing, um time, um resultado."},
  {ic:I.heart, t:"A gente se importa", d:"Seu projeto não é mais um na fila. Atendimento humano, direto e sem enrolação."},
  {ic:I.shield, t:"Sem letrinha miúda", d:"Escopo claro, prazo combinado e proposta transparente. Você sempre sabe o que está pagando."},
  {ic:I.users, t:"Foco em resultado", d:"Bonito é o mínimo. A gente mira em métrica que importa: lead, venda e retorno."},
];
function Why(){
  return (
    <section className="section section--sunken" id="sobre">
      <div className="container">
        <div className="why">
          <div className="why__art reveal">
            <div className="glow"></div>
            <img src="../../assets/polvo.png" alt="Mascote duPolvo" width="400" height="400" loading="lazy"/>
            <div className="why__badge">
              <div><b>8</b><span>tentáculos<br/>sempre ativos</span></div>
              <div><b>4,9</b><span>nota média<br/>dos clientes</span></div>
            </div>
          </div>
          <div>
            <div className="sec-head reveal" style={{marginBottom:"var(--space-8)"}}>
              <span className="eyebrow"><span className="eyebrow__line"></span>Por que a duPolvo</span>
              <h2>Ágeis como um polvo.<br/>Grudados no seu resultado.</h2>
            </div>
            <div className="feats">
              {FEATS.map((f,i)=>(
                <div className={"feat reveal d"+(i+1)} key={f.t}>
                  <span className="feat__ic">{f.ic}</span>
                  <div><h3>{f.t}</h3><p>{f.d}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.duPolvoTop = { Nav, Hero, Services, Why, Counter, useReveal, I };
