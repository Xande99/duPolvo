/* @ds-bundle: {"format":3,"namespace":"DesignSystem_7a6364","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"Card","sourcePath":"components/cards/Card.jsx"},{"name":"PortfolioCard","sourcePath":"components/cards/PortfolioCard.jsx"},{"name":"ServiceCard","sourcePath":"components/cards/ServiceCard.jsx"},{"name":"TestimonialCard","sourcePath":"components/cards/TestimonialCard.jsx"},{"name":"StatCounter","sourcePath":"components/data/StatCounter.jsx"},{"name":"FaqItem","sourcePath":"components/feedback/FaqItem.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Badge","sourcePath":"components/indicators/Badge.jsx"},{"name":"Eyebrow","sourcePath":"components/indicators/Eyebrow.jsx"},{"name":"Tag","sourcePath":"components/indicators/Tag.jsx"},{"name":"Navbar","sourcePath":"components/navigation/Navbar.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"6fd65d3aaac0","components/cards/Card.jsx":"aa24fa858883","components/cards/PortfolioCard.jsx":"b3991f20aef5","components/cards/ServiceCard.jsx":"c450c598f791","components/cards/TestimonialCard.jsx":"e1921c39a1ef","components/data/StatCounter.jsx":"920d34c4b33b","components/feedback/FaqItem.jsx":"28c8f7c98ae1","components/forms/Input.jsx":"250112ef316c","components/indicators/Badge.jsx":"aba90ebb8ae8","components/indicators/Eyebrow.jsx":"16e761559b1e","components/indicators/Tag.jsx":"9bb3f1500dc3","components/navigation/Navbar.jsx":"7cbf0c5a6ccc","ui_kits/landing/app-bottom.jsx":"b4c260fa5f25","ui_kits/landing/app-top.jsx":"f5c215e83156"},"inlinedExternals":[],"unexposedExports":[{"name":"useCardsCSS","sourcePath":"components/cards/Card.jsx"}]} */

(() => {

const __ds_ns = (window.DesignSystem_7a6364 = window.DesignSystem_7a6364 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function useCSS() {
  React.useEffect(() => {
    if (document.getElementById("dp-btn-css")) return;
    const s = document.createElement("style");
    s.id = "dp-btn-css";
    s.textContent = CSS;
    document.head.appendChild(s);
  }, []);
}
function Button({
  children,
  variant = "primary",
  size = "md",
  onDark = false,
  block = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  as = "button",
  className = "",
  ...rest
}) {
  useCSS();
  const cls = ["dp-btn", `dp-btn--${variant}`, `dp-btn--${size}`, onDark ? "dp-btn--on-dark" : "", block ? "dp-btn--block" : "", className].filter(Boolean).join(" ");
  const Tag = as;
  const aria = as !== "button" && disabled ? {
    "aria-disabled": "true"
  } : {};
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    disabled: as === "button" ? disabled : undefined
  }, aria, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/cards/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function useCardsCSS() {
  React.useEffect(() => {
    if (document.getElementById("dp-cards-css")) return;
    const s = document.createElement("style");
    s.id = "dp-cards-css";
    s.textContent = CARDS_CSS;
    document.head.appendChild(s);
  }, []);
}
function Card({
  children,
  pad = true,
  hover = false,
  dark = false,
  className = "",
  ...rest
}) {
  useCardsCSS();
  const cls = ["dp-card", pad && "dp-card--pad", hover && "dp-card--hover", dark && "dp-card--dark", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { useCardsCSS, Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/Card.jsx", error: String((e && e.message) || e) }); }

// components/cards/ServiceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ServiceCard({
  icon,
  title,
  description,
  number,
  linkLabel = "Saber mais",
  href = "#",
  ...rest
}) {
  __ds_scope.useCardsCSS();
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    hover: true,
    className: "dp-svc"
  }, rest), number && /*#__PURE__*/React.createElement("span", {
    className: "dp-svc__num"
  }, number), /*#__PURE__*/React.createElement("span", {
    className: "dp-svc__icon"
  }, icon), /*#__PURE__*/React.createElement("h3", {
    className: "dp-svc__title"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "dp-svc__desc"
  }, description), linkLabel && /*#__PURE__*/React.createElement("a", {
    className: "dp-svc__link",
    href: href
  }, linkLabel, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "15",
    height: "15",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6"
  }))));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/TestimonialCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TestimonialCard({
  quote,
  name,
  role,
  avatar,
  rating = 5,
  ...rest
}) {
  __ds_scope.useCardsCSS();
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    className: "dp-tst"
  }, rest), rating > 0 && /*#__PURE__*/React.createElement("div", {
    className: "dp-tst__stars"
  }, "★".repeat(rating)), /*#__PURE__*/React.createElement("p", {
    className: "dp-tst__quote"
  }, quote, "\u201D"), /*#__PURE__*/React.createElement("div", {
    className: "dp-tst__foot"
  }, avatar ? /*#__PURE__*/React.createElement("img", {
    className: "dp-tst__avatar",
    src: avatar,
    alt: name
  }) : /*#__PURE__*/React.createElement("span", {
    className: "dp-tst__avatar"
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "dp-tst__name",
    style: {
      display: "block"
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    className: "dp-tst__role"
  }, role))));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// components/data/StatCounter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.dp-stat{ display:flex; flex-direction:column; gap:6px; }
.dp-stat__value{ font-family:var(--font-display); font-weight:var(--fw-extrabold);
  font-size:clamp(2.75rem,5vw,4rem); line-height:1; letter-spacing:var(--ls-tight); color:var(--text-strong); }
.dp-stat__value b{ color:var(--aqua-500); font-weight:inherit; }
.dp-stat__label{ font-family:var(--font-ui); font-size:var(--fs-body-sm); color:var(--text-muted); }
.dp-stat--on-dark .dp-stat__value{ color:var(--paper); }
.dp-stat--on-dark .dp-stat__value b{ color:var(--aqua-400); }
.dp-stat--on-dark .dp-stat__label{ color:var(--navy-200); }
`;
function useCSS() {
  React.useEffect(() => {
    if (document.getElementById("dp-stat-css")) return;
    const s = document.createElement("style");
    s.id = "dp-stat-css";
    s.textContent = CSS;
    document.head.appendChild(s);
  }, []);
}

/** Animated number counter that runs when scrolled into view. */
function StatCounter({
  value,
  prefix = "",
  suffix = "",
  label,
  decimals = 0,
  duration = 1600,
  onDark = false,
  ...rest
}) {
  useCSS();
  const ref = React.useRef(null);
  const [n, setN] = React.useState(value);
  const done = React.useRef(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setN(value);
      return;
    }
    // Only count up when a live animation clock is confirmed (rAF actually fires);
    // otherwise leave the final value in place so it never sticks at 0.
    let clockLive = false;
    requestAnimationFrame(() => {
      clockLive = true;
    });
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting && !done.current && clockLive) {
          done.current = true;
          setN(0);
          const t0 = performance.now();
          const tick = t => {
            const p = Math.min((t - t0) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(value * eased);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, {
      threshold: .4
    });
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);
  const display = decimals > 0 ? n.toFixed(decimals) : Math.round(n).toLocaleString("pt-BR");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "dp-stat" + (onDark ? " dp-stat--on-dark" : ""),
    ref: ref
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "dp-stat__value"
  }, prefix, display, /*#__PURE__*/React.createElement("b", null, suffix)), label && /*#__PURE__*/React.createElement("span", {
    className: "dp-stat__label"
  }, label));
}
Object.assign(__ds_scope, { StatCounter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatCounter.jsx", error: String((e && e.message) || e) }); }

// components/feedback/FaqItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function useCSS() {
  React.useEffect(() => {
    if (document.getElementById("dp-faq-css")) return;
    const s = document.createElement("style");
    s.id = "dp-faq-css";
    s.textContent = CSS;
    document.head.appendChild(s);
  }, []);
}
function FaqItem({
  question,
  answer,
  defaultOpen = false,
  ...rest
}) {
  useCSS();
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "dp-faq" + (open ? " dp-faq--open" : "")
  }, rest), /*#__PURE__*/React.createElement("button", {
    className: "dp-faq__head",
    "aria-expanded": open,
    onClick: () => setOpen(o => !o)
  }, /*#__PURE__*/React.createElement("span", {
    className: "dp-faq__q"
  }, question), /*#__PURE__*/React.createElement("span", {
    className: "dp-faq__icon"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14M5 12h14"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "dp-faq__body"
  }, /*#__PURE__*/React.createElement("p", {
    className: "dp-faq__a"
  }, answer)));
}
Object.assign(__ds_scope, { FaqItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/FaqItem.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function useCSS() {
  React.useEffect(() => {
    if (document.getElementById("dp-field-css")) return;
    const s = document.createElement("style");
    s.id = "dp-field-css";
    s.textContent = CSS;
    document.head.appendChild(s);
  }, []);
}
function Input({
  label,
  hint,
  required = false,
  error = false,
  onDark = false,
  multiline = false,
  className = "",
  id,
  ...rest
}) {
  useCSS();
  const fid = id || (label ? "f-" + label.toLowerCase().replace(/\s+/g, "-") : undefined);
  const wrap = ["dp-field", error && "dp-field--error", onDark && "dp-field--on-dark", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", {
    className: wrap
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "dp-field__label",
    htmlFor: fid
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "dp-field__req"
  }, " *")), multiline ? /*#__PURE__*/React.createElement("textarea", _extends({
    id: fid,
    className: "dp-textarea"
  }, rest)) : /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    className: "dp-input"
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    className: "dp-field__hint"
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/indicators/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function useCSS() {
  React.useEffect(() => {
    if (document.getElementById("dp-badge-css")) return;
    const s = document.createElement("style");
    s.id = "dp-badge-css";
    s.textContent = CSS;
    document.head.appendChild(s);
  }, []);
}
function Badge({
  children,
  variant = "accent",
  dot = false,
  className = "",
  ...rest
}) {
  useCSS();
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ["dp-badge", `dp-badge--${variant}`, className].filter(Boolean).join(" ")
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "dp-badge__dot"
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/indicators/Badge.jsx", error: String((e && e.message) || e) }); }

// components/cards/PortfolioCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PortfolioCard({
  image,
  title,
  category,
  description,
  metric,
  href = "#",
  ...rest
}) {
  __ds_scope.useCardsCSS();
  return /*#__PURE__*/React.createElement("a", _extends({
    className: "dp-card dp-card--hover dp-port",
    href: href
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "dp-port__media"
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title
  }), category && /*#__PURE__*/React.createElement("span", {
    className: "dp-port__cat"
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    variant: "solid"
  }, category)), metric && /*#__PURE__*/React.createElement("span", {
    className: "dp-port__metric"
  }, metric)), /*#__PURE__*/React.createElement("div", {
    className: "dp-port__body"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "dp-port__title"
  }, title), description && /*#__PURE__*/React.createElement("p", {
    className: "dp-port__desc"
  }, description)));
}
Object.assign(__ds_scope, { PortfolioCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/PortfolioCard.jsx", error: String((e && e.message) || e) }); }

// components/indicators/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function useCSS() {
  React.useEffect(() => {
    if (document.getElementById("dp-eyebrow-css")) return;
    const s = document.createElement("style");
    s.id = "dp-eyebrow-css";
    s.textContent = CSS;
    document.head.appendChild(s);
  }, []);
}
function Eyebrow({
  children,
  line = true,
  onDark = false,
  className = "",
  ...rest
}) {
  useCSS();
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ["dp-eyebrow", onDark && "dp-eyebrow--on-dark", className].filter(Boolean).join(" ")
  }, rest), line && /*#__PURE__*/React.createElement("span", {
    className: "dp-eyebrow__line"
  }), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/indicators/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/indicators/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function useCSS() {
  React.useEffect(() => {
    if (document.getElementById("dp-tag-css")) return;
    const s = document.createElement("style");
    s.id = "dp-tag-css";
    s.textContent = CSS;
    document.head.appendChild(s);
  }, []);
}
function Tag({
  children,
  active = false,
  interactive = false,
  onDark = false,
  className = "",
  ...rest
}) {
  useCSS();
  const cls = ["dp-tag", active && "dp-tag--active", interactive && "dp-tag--interactive", onDark && "dp-tag--on-dark", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/indicators/Tag.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Navbar.jsx
try { (() => {
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
function useCSS() {
  React.useEffect(() => {
    if (!document.getElementById("dp-nav-css")) {
      const s = document.createElement("style");
      s.id = "dp-nav-css";
      s.textContent = CSS;
      document.head.appendChild(s);
    }
  }, []);
}
function Navbar({
  brand = "duPolvo",
  logo,
  links = [{
    label: "Serviços",
    href: "#servicos"
  }, {
    label: "Cases",
    href: "#cases"
  }, {
    label: "Processo",
    href: "#processo"
  }, {
    label: "FAQ",
    href: "#faq"
  }],
  ctaLabel = "Solicitar orçamento",
  ctaHref = "#contato",
  scrolled: scrolledProp
}) {
  useCSS();
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    if (scrolledProp !== undefined) return;
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrolledProp]);
  const isScrolled = scrolledProp !== undefined ? scrolledProp : scrolled;
  return /*#__PURE__*/React.createElement("header", {
    className: "dp-nav" + (isScrolled ? " dp-nav--scrolled" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "dp-nav__inner"
  }, /*#__PURE__*/React.createElement("a", {
    className: "dp-nav__brand",
    href: "#top"
  }, logo ? /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: brand
  }) : /*#__PURE__*/React.createElement("span", null, "du", /*#__PURE__*/React.createElement("b", null, "Polvo"))), /*#__PURE__*/React.createElement("nav", {
    className: "dp-nav__links"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    className: "dp-nav__link",
    href: l.href
  }, l.label)), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    as: "a",
    href: ctaHref,
    variant: "accent",
    size: "sm",
    className: "dp-nav__cta"
  }, ctaLabel)), /*#__PURE__*/React.createElement("button", {
    className: "dp-nav__menu",
    "aria-label": "Menu"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "26",
    height: "26",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 7h16M4 12h16M4 17h16"
  })))));
}
Object.assign(__ds_scope, { Navbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Navbar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/app-bottom.jsx
try { (() => {
const {
  useState: useStateB,
  useEffect: useEffectB
} = React;
const Icons = window.duPolvoTop.I;
const Counter = window.duPolvoTop.Counter;

/* ----- CASES ------------------------------------------------------------- */
const CASES = [{
  img: "case-1.png",
  cat: "Tráfego Pago",
  t: "Loja XYZ",
  d: "E-commerce de moda",
  metric: "+312% ROAS",
  f: "trafego"
}, {
  img: "case-2.png",
  cat: "Design",
  t: "Studio Lume",
  d: "Rebrand completo",
  metric: "3x alcance",
  f: "design"
}, {
  img: "case-3.png",
  cat: "Programação",
  t: "Nova SaaS",
  d: "Plataforma web",
  metric: "−48% bounce",
  f: "dev"
}, {
  img: "case-4.png",
  cat: "Vídeo",
  t: "Prisma",
  d: "Série de Reels",
  metric: "1.2M views",
  f: "video"
}, {
  img: "case-5.png",
  cat: "Tráfego Pago",
  t: "Orbe Fit",
  d: "Captação de leads",
  metric: "R$ 0,38 / lead",
  f: "trafego"
}, {
  img: "case-6.png",
  cat: "Programação",
  t: "Flux",
  d: "Landing + CRM",
  metric: "+27% conversão",
  f: "dev"
}];
const FILTERS = [{
  k: "all",
  l: "Todos"
}, {
  k: "dev",
  l: "Programação"
}, {
  k: "design",
  l: "Design"
}, {
  k: "video",
  l: "Vídeo"
}, {
  k: "trafego",
  l: "Tráfego Pago"
}];
function Cases() {
  const [f, setF] = useStateB("all");
  const list = CASES.filter(c => f === "all" || c.f === f);
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "cases"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow__line"
  }), "Cases & resultados"), /*#__PURE__*/React.createElement("h2", null, "Trabalho que fala", /*#__PURE__*/React.createElement("br", null), "por n\xFAmeros"), /*#__PURE__*/React.createElement("p", null, "Uma amostra do que os tent\xE1culos j\xE1 fizeram. Resultado real, cliente real, sem print m\xE1gico.")), /*#__PURE__*/React.createElement("div", {
    className: "cases__filters reveal"
  }, FILTERS.map(x => /*#__PURE__*/React.createElement("button", {
    key: x.k,
    className: "chip" + (f === x.k ? " chip--active" : ""),
    onClick: () => setF(x.k)
  }, x.l))), /*#__PURE__*/React.createElement("div", {
    className: "grid-3"
  }, list.map((c, i) => /*#__PURE__*/React.createElement("a", {
    className: "case reveal d" + (i % 3 + 1),
    href: "#contato",
    key: c.t
  }, /*#__PURE__*/React.createElement("div", {
    className: "case__media"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/cases/" + c.img,
    alt: c.t
  }), /*#__PURE__*/React.createElement("span", {
    className: "case__cat"
  }, c.cat), /*#__PURE__*/React.createElement("span", {
    className: "case__metric"
  }, c.metric)), /*#__PURE__*/React.createElement("div", {
    className: "case__body"
  }, /*#__PURE__*/React.createElement("h3", null, c.t), /*#__PURE__*/React.createElement("p", null, c.d)))))));
}

/* ----- STATS ------------------------------------------------------------- */
function Stats() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section section--dark"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__glow hero__glow--1",
    style: {
      opacity: .5
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head sec-head--center reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow on-dark"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow__line"
  }), "duPolvo em n\xFAmeros"), /*#__PURE__*/React.createElement("h2", null, "Oito bra\xE7os, muito resultado")), /*#__PURE__*/React.createElement("div", {
    className: "stats"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat reveal d1"
  }, /*#__PURE__*/React.createElement(Counter, {
    value: 180,
    suffix: "+"
  }), /*#__PURE__*/React.createElement("div", {
    className: "stat__l"
  }, "Projetos entregues")), /*#__PURE__*/React.createElement("div", {
    className: "stat reveal d2"
  }, /*#__PURE__*/React.createElement(Counter, {
    value: 312,
    prefix: "+",
    suffix: "%"
  }), /*#__PURE__*/React.createElement("div", {
    className: "stat__l"
  }, "ROAS m\xE9dio em tr\xE1fego")), /*#__PURE__*/React.createElement("div", {
    className: "stat reveal d3"
  }, /*#__PURE__*/React.createElement(Counter, {
    value: 4.9,
    decimals: 1
  }), /*#__PURE__*/React.createElement("div", {
    className: "stat__l"
  }, "Nota dos clientes")), /*#__PURE__*/React.createElement("div", {
    className: "stat reveal d4"
  }, /*#__PURE__*/React.createElement(Counter, {
    value: 8,
    suffix: " anos"
  }), /*#__PURE__*/React.createElement("div", {
    className: "stat__l"
  }, "Espalhando tinta")))));
}

/* ----- PROCESS ----------------------------------------------------------- */
const STEPS = [{
  n: "01",
  t: "Mergulho",
  d: "A gente entende seu negócio, seu público e onde dói. Briefing de verdade, sem formulário genérico."
}, {
  n: "02",
  t: "Estratégia",
  d: "Montamos o plano: o que fazer, em qual canal e com qual meta. Tudo combinado antes de começar."
}, {
  n: "03",
  t: "Mão na massa",
  d: "Os tentáculos entram em ação — dev, design, vídeo e tráfego trabalhando em paralelo."
}, {
  n: "04",
  t: "Otimização",
  d: "No ar não é fim, é começo. A gente mede, ajusta e escala o que está dando certo."
}];
function Process() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section section--sunken",
    id: "processo"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow__line"
  }), "Como funciona"), /*#__PURE__*/React.createElement("h2", null, "Trabalhar com a gente", /*#__PURE__*/React.createElement("br", null), "\xE9 leve assim"), /*#__PURE__*/React.createElement("p", null, "Sem ru\xEDdo, sem sumi\xE7o, sem surpresa. Quatro etapas claras do oi ao resultado.")), /*#__PURE__*/React.createElement("div", {
    className: "steps"
  }, STEPS.map((s, i) => /*#__PURE__*/React.createElement("div", {
    className: "step reveal d" + (i + 1),
    key: s.n
  }, /*#__PURE__*/React.createElement("div", {
    className: "step__n"
  }, s.n), /*#__PURE__*/React.createElement("div", {
    className: "step__bar"
  }), /*#__PURE__*/React.createElement("h3", null, s.t), /*#__PURE__*/React.createElement("p", null, s.d))))));
}

/* ----- FAQ --------------------------------------------------------------- */
const FAQS = [{
  q: "Quanto custa um projeto?",
  a: "Cada projeto é orçado pelo escopo — não vendemos pacote de prateleira. Você recebe uma proposta clara, com tudo discriminado, antes de fechar qualquer coisa. Sem pegadinha."
}, {
  q: "Qual é o prazo de entrega?",
  a: "Depende do tamanho. Uma landing page sai em 1 a 2 semanas; um projeto completo de marca + site + tráfego costuma levar de 4 a 6 semanas. O cronograma é combinado no kickoff."
}, {
  q: "Como funciona o contrato?",
  a: "Contrato simples e direto: escopo fechado, prazo definido e pagamento parcelado. Para tráfego e social, trabalhamos com mensalidade — sem fidelidade obrigatória, você fica porque quer."
}, {
  q: "Vocês atendem fora da sua cidade?",
  a: "Sim! A duPolvo é 100% remota e atende o Brasil inteiro. Toda comunicação acontece por WhatsApp, e-mail e calls — do jeito que for melhor pra você."
}, {
  q: "Dá pra contratar só um serviço?",
  a: "Claro. Você pode contratar só tráfego, só design ou só dev. Mas é quando os tentáculos trabalham juntos que a mágica acontece — e a gente avisa quando faz sentido somar."
}];
function Faq() {
  const [open, setOpen] = useStateB(0);
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "faq"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head sec-head--center reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow__line"
  }), "D\xFAvidas frequentes"), /*#__PURE__*/React.createElement("h2", null, "O que todo mundo", /*#__PURE__*/React.createElement("br", null), "pergunta antes")), /*#__PURE__*/React.createElement("div", {
    className: "faq"
  }, FAQS.map((x, i) => /*#__PURE__*/React.createElement("div", {
    className: "faq__item reveal" + (open === i ? " open" : ""),
    key: i
  }, /*#__PURE__*/React.createElement("button", {
    className: "faq__head",
    "aria-expanded": open === i,
    onClick: () => setOpen(open === i ? -1 : i)
  }, /*#__PURE__*/React.createElement("span", {
    className: "faq__q"
  }, x.q), /*#__PURE__*/React.createElement("span", {
    className: "faq__ic"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14M5 12h14"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "faq__body"
  }, /*#__PURE__*/React.createElement("p", {
    className: "faq__a"
  }, x.a)))))));
}

/* ----- FINAL CTA --------------------------------------------------------- */
function FinalCta() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "contato"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cta reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cta__glow"
  }), /*#__PURE__*/React.createElement("img", {
    className: "cta__polvo",
    src: "../../assets/polvo.png",
    alt: ""
  }), /*#__PURE__*/React.createElement("h2", null, "Bora dar oito bra\xE7os pro seu marketing?"), /*#__PURE__*/React.createElement("p", null, "Conta o que voc\xEA precisa. A gente responde em at\xE9 24h \xFAteis com um caminho \u2014 sem compromisso e sem rob\xF4 do outro lado."), /*#__PURE__*/React.createElement("div", {
    className: "cta__btns"
  }, /*#__PURE__*/React.createElement("a", {
    className: "btn btn--wa btn--lg",
    href: "https://wa.me/5500000000000",
    target: "_blank",
    rel: "noopener"
  }, Icons.wa, " Falar no WhatsApp"), /*#__PURE__*/React.createElement("a", {
    className: "btn btn--outline btn--lg on-dark",
    href: "mailto:oi@dupolvo.com.br"
  }, "Mandar um e-mail")))));
}

/* ----- FOOTER ------------------------------------------------------------ */
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer__top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer__brand"
  }, /*#__PURE__*/React.createElement("a", {
    className: "brand",
    href: "#top"
  }, "du", /*#__PURE__*/React.createElement("span", {
    className: "p"
  }, "Polvo"), /*#__PURE__*/React.createElement("span", {
    className: "brand__dot"
  })), /*#__PURE__*/React.createElement("p", null, "Ag\xEAncia criativa e ousada. Programa\xE7\xE3o, design, v\xEDdeo e tr\xE1fego pago \u2014 todos os bra\xE7os do seu marketing num lugar s\xF3."), /*#__PURE__*/React.createElement("div", {
    className: "footer__social"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "Instagram"
  }, Icons.ig), /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "LinkedIn"
  }, Icons.ln), /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "YouTube"
  }, Icons.yt), /*#__PURE__*/React.createElement("a", {
    href: "https://wa.me/5500000000000",
    "aria-label": "WhatsApp"
  }, Icons.wa))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Servi\xE7os"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#servicos"
  }, "Programa\xE7\xE3o")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#servicos"
  }, "Design")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#servicos"
  }, "V\xEDdeo / Edi\xE7\xE3o")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#servicos"
  }, "Tr\xE1fego Pago")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Ag\xEAncia"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#sobre"
  }, "Sobre n\xF3s")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#cases"
  }, "Cases")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#processo"
  }, "Processo")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#faq"
  }, "FAQ")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Contato"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "https://wa.me/5500000000000"
  }, "(00) 00000-0000")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "mailto:oi@dupolvo.com.br"
  }, "oi@dupolvo.com.br")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#contato"
  }, "Solicitar or\xE7amento"))), /*#__PURE__*/React.createElement("a", {
    className: "btn btn--accent btn--sm",
    style: {
      marginTop: "var(--space-4)"
    },
    href: "https://wa.me/5500000000000"
  }, Icons.wa, " WhatsApp"))), /*#__PURE__*/React.createElement("div", {
    className: "footer__bottom"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 duPolvo \xB7 Ag\xEAncia Criativa. Todos os tent\xE1culos reservados."), /*#__PURE__*/React.createElement("span", null, "Feito com tinta e cafe\xEDna no Brasil"))));
}

/* ----- APP --------------------------------------------------------------- */
const {
  Nav,
  Hero,
  Services,
  Why,
  useReveal
} = window.duPolvoTop;
function App() {
  useReveal();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Services, null), /*#__PURE__*/React.createElement(Why, null), /*#__PURE__*/React.createElement(Cases, null), /*#__PURE__*/React.createElement(Stats, null), /*#__PURE__*/React.createElement(Process, null), /*#__PURE__*/React.createElement(Faq, null), /*#__PURE__*/React.createElement(FinalCta, null)), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/app-bottom.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/app-top.jsx
try { (() => {
const {
  useState,
  useEffect,
  useRef
} = React;

/* ----- Icons (consistent 2px line set) ----------------------------------- */
const I = {
  code: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16 18l6-6-6-6M8 6l-6 6 6 6"
  })),
  pen: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 19l7-7 3 3-7 7-3-3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 2l7.586 7.586"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "2"
  })),
  video: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M23 7l-7 5 7 5V7z"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "1",
    y: "5",
    width: "15",
    height: "14",
    rx: "2"
  })),
  trend: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M23 6l-9.5 9.5-5-5L1 18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 6h6v6"
  })),
  zap: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M13 2L3 14h9l-1 8 10-12h-9l1-8z"
  })),
  heart: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"
  })),
  shield: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 12l2 2 4-4"
  })),
  users: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "7",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M23 21v-2a4 4 0 0 0-3-3.87M16 3.13A4 4 0 0 1 16 11"
  })),
  arrow: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6"
  })),
  wa: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.87 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 2a10 10 0 0 0-8.5 15.3L2 22l4.8-1.5A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.07-1.11l-.29-.17-3 .94.95-2.92-.19-.3A8 8 0 1 1 12 20z"
  })),
  ig: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "20",
    rx: "5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17.5",
    cy: "6.5",
    r: "1.2",
    fill: "currentColor",
    stroke: "none"
  })),
  ln: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21H9z"
  })),
  yt: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M23 12s0-3.2-.4-4.7a2.5 2.5 0 0 0-1.76-1.77C19.34 5.1 12 5.1 12 5.1s-7.34 0-8.84.43A2.5 2.5 0 0 0 1.4 7.3C1 8.8 1 12 1 12s0 3.2.4 4.7a2.5 2.5 0 0 0 1.76 1.77c1.5.43 8.84.43 8.84.43s7.34 0 8.84-.43a2.5 2.5 0 0 0 1.76-1.77C23 15.2 23 12 23 12zM9.8 15.3V8.7l5.7 3.3-5.7 3.3z"
  }))
};

/* ----- scroll reveal ----------------------------------------------------- */
/* ----- live-clock detection: rAF only fires when the compositor clock runs */
let CLOCK_LIVE = false;
requestAnimationFrame(() => {
  CLOCK_LIVE = true;
});

/* ----- scroll reveal (enabled only when the anim clock is live) ----------- */
function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".reveal"));
    // Give rAF a moment; if it never fired, the environment freezes animations →
    // leave content fully visible (no hiding) so nothing can get stuck invisible.
    const start = setTimeout(() => {
      if (!CLOCK_LIVE) return;
      document.documentElement.classList.add("anim-ok");
      const reveal = () => {
        const h = window.innerHeight || 800;
        els.forEach(el => {
          const r = el.getBoundingClientRect();
          if (r.top < h * 0.9 && r.bottom > 0) el.classList.add("in");
        });
      };
      reveal();
      const onScroll = () => reveal();
      window.addEventListener("scroll", onScroll, {
        passive: true
      });
      const safety = setTimeout(() => els.forEach(el => el.classList.add("in")), 2500);
      useReveal._cleanup = () => {
        window.removeEventListener("scroll", onScroll);
        clearTimeout(safety);
      };
    }, 240);
    return () => {
      clearTimeout(start);
      if (useReveal._cleanup) useReveal._cleanup();
    };
  }, []);
}

/* ----- animated counter (shows final value if the clock is frozen) ------- */
function Counter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0
}) {
  const ref = useRef(null);
  const [n, setN] = useState(value);
  const done = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const run = () => {
      if (done.current || !CLOCK_LIVE) return;
      done.current = true;
      setN(0);
      const t0 = performance.now(),
        dur = 1700;
      const tick = t => {
        const p = Math.min((t - t0) / dur, 1);
        setN(value * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    let io;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(es => es.forEach(e => {
        if (e.isIntersecting) run();
      }), {
        threshold: .5
      });
      io.observe(el);
    }
    return () => {
      if (io) io.disconnect();
    };
  }, [value]);
  const disp = decimals > 0 ? n.toFixed(decimals) : Math.round(n).toLocaleString("pt-BR");
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    className: "stat__v"
  }, prefix, disp, /*#__PURE__*/React.createElement("b", null, suffix));
}

/* ----- NAV --------------------------------------------------------------- */
function Nav() {
  const [s, setS] = useState(false);
  useEffect(() => {
    const f = () => setS(window.scrollY > 24);
    f();
    window.addEventListener("scroll", f, {
      passive: true
    });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return /*#__PURE__*/React.createElement("header", {
    className: "nav" + (s ? " nav--scrolled" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav__in"
  }, /*#__PURE__*/React.createElement("a", {
    className: "brand",
    href: "#top"
  }, "du", /*#__PURE__*/React.createElement("span", {
    className: "p"
  }, "Polvo"), /*#__PURE__*/React.createElement("span", {
    className: "brand__dot"
  })), /*#__PURE__*/React.createElement("nav", {
    className: "nav__links"
  }, /*#__PURE__*/React.createElement("a", {
    className: "nav__link",
    href: "#servicos"
  }, "Servi\xE7os"), /*#__PURE__*/React.createElement("a", {
    className: "nav__link",
    href: "#cases"
  }, "Cases"), /*#__PURE__*/React.createElement("a", {
    className: "nav__link",
    href: "#processo"
  }, "Processo"), /*#__PURE__*/React.createElement("a", {
    className: "nav__link",
    href: "#faq"
  }, "FAQ"), /*#__PURE__*/React.createElement("a", {
    className: "btn btn--accent btn--sm",
    href: "#contato"
  }, "Solicitar or\xE7amento")), /*#__PURE__*/React.createElement("button", {
    className: "nav__burger",
    "aria-label": "Menu"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "26",
    height: "26",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 7h16M4 12h16M4 17h16"
  })))));
}

/* ----- HERO -------------------------------------------------------------- */
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    className: "hero",
    id: "top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__bg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__grid"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero__glow hero__glow--1"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero__glow hero__glow--2"
  })), /*#__PURE__*/React.createElement("div", {
    className: "hero__in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__copy"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow__line"
  }), "Ag\xEAncia criativa & ousada"), /*#__PURE__*/React.createElement("h1", {
    className: "hero__title reveal d1"
  }, "Sua marca tem muitos bra\xE7os.", /*#__PURE__*/React.createElement("br", null), "A gente cuida de ", /*#__PURE__*/React.createElement("em", null, "todos"), "."), /*#__PURE__*/React.createElement("p", {
    className: "hero__sub reveal d2"
  }, "Programa\xE7\xE3o, design, v\xEDdeo e tr\xE1fego pago sob o mesmo teto. Um time que abra\xE7a seu projeto inteiro \u2014 e puxa todos os tent\xE1culos pro mesmo lugar: voc\xEA vendendo mais."), /*#__PURE__*/React.createElement("div", {
    className: "hero__cta reveal d3"
  }, /*#__PURE__*/React.createElement("a", {
    className: "btn btn--accent btn--lg",
    href: "#contato"
  }, "Solicitar or\xE7amento ", I.arrow), /*#__PURE__*/React.createElement("a", {
    className: "btn btn--outline btn--lg on-dark",
    href: "#cases"
  }, "Ver cases")), /*#__PURE__*/React.createElement("div", {
    className: "hero__trust reveal d4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__avatars"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/avatars/a1.png",
    alt: ""
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/avatars/a2.png",
    alt: ""
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/avatars/a3.png",
    alt: ""
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "hero__stars"
  }, "\u2605\u2605\u2605\u2605\u2605"), /*#__PURE__*/React.createElement("br", null), "+180 projetos no ar \xB7 nota 4,9"))), /*#__PURE__*/React.createElement("div", {
    className: "hero__art reveal d2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__halo"
  }), /*#__PURE__*/React.createElement("img", {
    className: "hero__polvo",
    src: "../../assets/polvo.png",
    alt: "Mascote duPolvo, um polvo com oito bra\xE7os"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero__chip hero__chip--1"
  }, I.code, /*#__PURE__*/React.createElement("span", null, "Dev")), /*#__PURE__*/React.createElement("div", {
    className: "hero__chip hero__chip--2"
  }, /*#__PURE__*/React.createElement("b", null, "+312%"), /*#__PURE__*/React.createElement("span", null, "ROAS")), /*#__PURE__*/React.createElement("div", {
    className: "hero__chip hero__chip--3"
  }, I.video, /*#__PURE__*/React.createElement("span", null, "Edi\xE7\xE3o")))));
}

/* ----- SERVICES ---------------------------------------------------------- */
const SERVICES = [{
  n: "01",
  ic: I.code,
  t: "Programação",
  d: "Sites, landing pages e sistemas sob medida. Rápidos, escaláveis e feitos pra converter.",
  tags: ["Next.js", "WordPress", "Sistemas"]
}, {
  n: "02",
  ic: I.pen,
  t: "Design",
  d: "Identidade visual, social media e UI que param o scroll e ficam na memória.",
  tags: ["Branding", "UI/UX", "Social"]
}, {
  n: "03",
  ic: I.video,
  t: "Vídeo / Edição",
  d: "Reels, VSLs e motion que prendem do primeiro frame ao CTA final.",
  tags: ["Reels", "Motion", "VSL"]
}, {
  n: "04",
  ic: I.trend,
  t: "Tráfego Pago",
  d: "Campanhas que dão retorno de verdade. Cada real investido com lupa em cima.",
  tags: ["Meta Ads", "Google", "Funis"]
}];
function Services() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "servicos"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow__line"
  }), "O que fazemos"), /*#__PURE__*/React.createElement("h2", null, "Quatro tent\xE1culos,", /*#__PURE__*/React.createElement("br", null), "uma s\xF3 estrat\xE9gia"), /*#__PURE__*/React.createElement("p", null, "Cada especialidade puxa na mesma dire\xE7\xE3o. Voc\xEA n\xE3o precisa de cinco fornecedores \u2014 precisa de uma ag\xEAncia que conversa entre si.")), /*#__PURE__*/React.createElement("div", {
    className: "grid-4"
  }, SERVICES.map((s, i) => /*#__PURE__*/React.createElement("article", {
    className: "svc reveal d" + (i + 1),
    key: s.n
  }, /*#__PURE__*/React.createElement("span", {
    className: "svc__num"
  }, s.n), /*#__PURE__*/React.createElement("span", {
    className: "svc__icon"
  }, s.ic), /*#__PURE__*/React.createElement("h3", null, s.t), /*#__PURE__*/React.createElement("p", null, s.d), /*#__PURE__*/React.createElement("div", {
    className: "svc__tags"
  }, s.tags.map(t => /*#__PURE__*/React.createElement("span", {
    className: "tag-mini",
    key: t
  }, t))))))));
}

/* ----- WHY --------------------------------------------------------------- */
const FEATS = [{
  ic: I.zap,
  t: "Tudo num lugar só",
  d: "Dev, design, vídeo e tráfego sem ruído entre fornecedores. Um briefing, um time, um resultado."
}, {
  ic: I.heart,
  t: "A gente se importa",
  d: "Seu projeto não é mais um na fila. Atendimento humano, direto e sem enrolação."
}, {
  ic: I.shield,
  t: "Sem letrinha miúda",
  d: "Escopo claro, prazo combinado e proposta transparente. Você sempre sabe o que está pagando."
}, {
  ic: I.users,
  t: "Foco em resultado",
  d: "Bonito é o mínimo. A gente mira em métrica que importa: lead, venda e retorno."
}];
function Why() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section section--sunken",
    id: "sobre"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "why"
  }, /*#__PURE__*/React.createElement("div", {
    className: "why__art reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "glow"
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/polvo.png",
    alt: "Mascote duPolvo"
  }), /*#__PURE__*/React.createElement("div", {
    className: "why__badge"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "8"), /*#__PURE__*/React.createElement("span", null, "tent\xE1culos", /*#__PURE__*/React.createElement("br", null), "sempre ativos")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "4,9"), /*#__PURE__*/React.createElement("span", null, "nota m\xE9dia", /*#__PURE__*/React.createElement("br", null), "dos clientes")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "sec-head reveal",
    style: {
      marginBottom: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow__line"
  }), "Por que a duPolvo"), /*#__PURE__*/React.createElement("h2", null, "\xC1geis como um polvo.", /*#__PURE__*/React.createElement("br", null), "Grudados no seu resultado.")), /*#__PURE__*/React.createElement("div", {
    className: "feats"
  }, FEATS.map((f, i) => /*#__PURE__*/React.createElement("div", {
    className: "feat reveal d" + (i + 1),
    key: f.t
  }, /*#__PURE__*/React.createElement("span", {
    className: "feat__ic"
  }, f.ic), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, f.t), /*#__PURE__*/React.createElement("p", null, f.d)))))))));
}
window.duPolvoTop = {
  Nav,
  Hero,
  Services,
  Why,
  Counter,
  useReveal,
  I
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/app-top.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.PortfolioCard = __ds_scope.PortfolioCard;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

__ds_ns.StatCounter = __ds_scope.StatCounter;

__ds_ns.FaqItem = __ds_scope.FaqItem;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Navbar = __ds_scope.Navbar;

})();
