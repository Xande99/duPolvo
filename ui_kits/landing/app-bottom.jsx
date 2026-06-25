const { useState:useStateB, useEffect:useEffectB } = React;
const Icons = window.duPolvoTop.I;
const Counter = window.duPolvoTop.Counter;

/* ----- CASES ------------------------------------------------------------- */
const CASES=[
  {img:"case-1.png", cat:"Tráfego Pago", t:"Loja XYZ", d:"E-commerce de moda", metric:"+312% ROAS", f:"trafego"},
  {img:"case-2.png", cat:"Design", t:"Studio Lume", d:"Rebrand completo", metric:"3x alcance", f:"design"},
  {img:"case-3.png", cat:"Programação", t:"Nova SaaS", d:"Plataforma web", metric:"−48% bounce", f:"dev"},
  {img:"case-4.png", cat:"Vídeo", t:"Prisma", d:"Série de Reels", metric:"1.2M views", f:"video"},
  {img:"case-5.png", cat:"Tráfego Pago", t:"Orbe Fit", d:"Captação de leads", metric:"R$ 0,38 / lead", f:"trafego"},
  {img:"case-6.png", cat:"Programação", t:"Flux", d:"Landing + CRM", metric:"+27% conversão", f:"dev"},
];
const FILTERS=[{k:"all",l:"Todos"},{k:"dev",l:"Programação"},{k:"design",l:"Design"},{k:"video",l:"Vídeo"},{k:"trafego",l:"Tráfego Pago"}];
function Cases(){
  const [f,setF]=useStateB("all");
  const list=CASES.filter(c=>f==="all"||c.f===f);
  return (
    <section className="section" id="cases">
      <div className="container">
        <div className="sec-head reveal">
          <span className="eyebrow"><span className="eyebrow__line"></span>Cases &amp; resultados</span>
          <h2>Trabalho que fala<br/>por números</h2>
          <p>Uma amostra do que os tentáculos já fizeram. Resultado real, cliente real, sem print mágico.</p>
        </div>
        <div className="cases__filters reveal">
          {FILTERS.map(x=>(
            <button key={x.k} className={"chip"+(f===x.k?" chip--active":"")} onClick={()=>setF(x.k)}>{x.l}</button>
          ))}
        </div>
        <div className="grid-3" role="region" aria-live="polite" aria-label="Resultados filtrados">
          {list.map((c,i)=>(
            <a className="case" href="#contato" key={c.t}>
              <div className="case__media">
                <img src={"../../assets/cases/"+c.img} alt={c.t} width="800" height="600" loading="lazy"/>
                <span className="case__cat">{c.cat}</span>
                <span className="case__metric">{c.metric}</span>
              </div>
              <div className="case__body"><h3>{c.t}</h3><p>{c.d}</p></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----- STATS ------------------------------------------------------------- */
function Stats(){
  return (
    <section className="section section--dark">
      <div className="hero__glow hero__glow--1" style={{opacity:.5}}></div>
      <div className="container">
        <div className="sec-head sec-head--center reveal">
          <span className="eyebrow on-dark"><span className="eyebrow__line"></span>duPolvo em números</span>
          <h2>Oito braços, muito resultado</h2>
        </div>
        <div className="stats">
          <div className="stat reveal d1"><Counter value={180} suffix="+"/><div className="stat__l">Projetos entregues</div></div>
          <div className="stat reveal d2"><Counter value={312} prefix="+" suffix="%"/><div className="stat__l">ROAS médio em tráfego</div></div>
          <div className="stat reveal d3"><Counter value={4.9} decimals={1}/><div className="stat__l">Nota dos clientes</div></div>
          <div className="stat reveal d4"><Counter value={8} suffix=" anos"/><div className="stat__l">Espalhando tinta</div></div>
        </div>
      </div>
    </section>
  );
}

/* ----- PROCESS ----------------------------------------------------------- */
const STEPS=[
  {n:"01", t:"Mergulho", d:"A gente entende seu negócio, seu público e onde dói. Briefing de verdade, sem formulário genérico."},
  {n:"02", t:"Estratégia", d:"Montamos o plano: o que fazer, em qual canal e com qual meta. Tudo combinado antes de começar."},
  {n:"03", t:"Mão na massa", d:"Os tentáculos entram em ação — dev, design, vídeo e tráfego trabalhando em paralelo."},
  {n:"04", t:"Otimização", d:"No ar não é fim, é começo. A gente mede, ajusta e escala o que está dando certo."},
];
function Process(){
  return (
    <section className="section section--sunken" id="processo">
      <div className="container">
        <div className="sec-head reveal">
          <span className="eyebrow"><span className="eyebrow__line"></span>Como funciona</span>
          <h2>Trabalhar com a gente<br/>é leve assim</h2>
          <p>Sem ruído, sem sumiço, sem surpresa. Quatro etapas claras do oi ao resultado.</p>
        </div>
        <div className="steps">
          {STEPS.map((s,i)=>(
            <div className={"step reveal d"+(i+1)} key={s.n}>
              <div className="step__n">{s.n}</div>
              <div className="step__bar"></div>
              <h3>{s.t}</h3><p>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----- FAQ --------------------------------------------------------------- */
const FAQS=[
  {q:"Quanto custa um projeto?", a:"Cada projeto é orçado pelo escopo — não vendemos pacote de prateleira. Você recebe uma proposta clara, com tudo discriminado, antes de fechar qualquer coisa. Sem pegadinha."},
  {q:"Qual é o prazo de entrega?", a:"Depende do tamanho. Uma landing page sai em 1 a 2 semanas; um projeto completo de marca + site + tráfego costuma levar de 4 a 6 semanas. O cronograma é combinado no kickoff."},
  {q:"Como funciona o contrato?", a:"Contrato simples e direto: escopo fechado, prazo definido e pagamento parcelado. Para tráfego e social, trabalhamos com mensalidade — sem fidelidade obrigatória, você fica porque quer."},
  {q:"Vocês atendem fora da sua cidade?", a:"Sim! A duPolvo é 100% remota e atende o Brasil inteiro. Toda comunicação acontece por WhatsApp, e-mail e calls — do jeito que for melhor pra você."},
  {q:"Dá pra contratar só um serviço?", a:"Claro. Você pode contratar só tráfego, só design ou só dev. Mas é quando os tentáculos trabalham juntos que a mágica acontece — e a gente avisa quando faz sentido somar."},
];
function Faq(){
  const [open,setOpen]=useStateB(0);
  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="sec-head sec-head--center reveal">
          <span className="eyebrow"><span className="eyebrow__line"></span>Dúvidas frequentes</span>
          <h2>O que todo mundo<br/>pergunta antes</h2>
        </div>
        <div className="faq">
          {FAQS.map((x,i)=>(
            <div className={"faq__item"+(open===i?" open":"")} key={i}>
              <button className="faq__head" aria-expanded={open===i} onClick={()=>setOpen(open===i?-1:i)}>
                <h3 className="faq__q">{x.q}</h3>
                <span className="faq__ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></span>
              </button>
              <div className="faq__body"><p className="faq__a">{x.a}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----- FINAL CTA --------------------------------------------------------- */
function FinalCta(){
  return (
    <section className="section" id="contato">
      <div className="container">
        <div className="cta reveal">
          <div className="cta__glow"></div>
          <h2>Bora dar oito braços pro seu marketing?</h2>
          <p>Conta o que você precisa. A gente responde em até 24h úteis com um caminho — sem compromisso e sem robô do outro lado.</p>
          <div className="cta__btns">
            <a className="btn btn--wa btn--lg" href="https://wa.me/5500000000000" target="_blank" rel="noopener">{Icons.wa} Falar no WhatsApp</a>
            <a className="btn btn--outline btn--lg on-dark" href="mailto:oi@dupolvo.com.br">Mandar um e-mail</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----- FOOTER ------------------------------------------------------------ */
function Footer(){
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a className="brand" href="#top"><span>du<span className="p">Polvo</span></span><span className="brand__dot"></span></a>
            <p>Agência criativa e ousada. Programação, design, vídeo e tráfego pago — todos os braços do seu marketing num lugar só.</p>
            <div className="footer__social">
              <a href="#" aria-label="Instagram">{Icons.ig}</a>
              <a href="#" aria-label="LinkedIn">{Icons.ln}</a>
              <a href="#" aria-label="YouTube">{Icons.yt}</a>
              <a href="https://wa.me/5500000000000" aria-label="WhatsApp">{Icons.wa}</a>
            </div>
          </div>
          <div>
            <h4>Serviços</h4>
            <ul><li><a href="#servicos">Programação</a></li><li><a href="#servicos">Design</a></li><li><a href="#servicos">Vídeo / Edição</a></li><li><a href="#servicos">Tráfego Pago</a></li></ul>
          </div>
          <div>
            <h4>Agência</h4>
            <ul><li><a href="#sobre">Sobre nós</a></li><li><a href="#cases">Cases</a></li><li><a href="#processo">Processo</a></li><li><a href="#faq">FAQ</a></li></ul>
          </div>
          <div>
            <h4>Contato</h4>
            <ul>
              <li><a href="https://wa.me/5500000000000">(00) 00000-0000</a></li>
              <li><a href="mailto:oi@dupolvo.com.br">oi@dupolvo.com.br</a></li>
              <li><a href="#contato">Solicitar orçamento</a></li>
            </ul>
            <a className="btn btn--accent btn--sm" style={{marginTop:"var(--space-4)"}} href="https://wa.me/5500000000000">{Icons.wa} WhatsApp</a>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© 2026 duPolvo · Agência Criativa. Todos os tentáculos reservados.</span>
          <span>Feito com tinta e cafeína no Brasil</span>
        </div>
      </div>
    </footer>
  );
}

/* ----- APP --------------------------------------------------------------- */
const { Nav, Hero, Services, Why, useReveal, QuoteModal } = window.duPolvoTop;
function App(){
  useReveal();
  const [modalOpen, setModalOpen] = useStateB(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <React.Fragment>
      <Nav onOpenModal={openModal}/>
      <main>
        <Hero onOpenModal={openModal}/>
        <Services/>
        <Why/>
        <Cases/>
        <Stats/>
        <Process/>
        <Faq/>
        <FinalCta/>
      </main>
      <Footer/>
      <QuoteModal open={modalOpen} onClose={closeModal}/>
    </React.Fragment>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
