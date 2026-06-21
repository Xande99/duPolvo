Fixed-position navbar; transparent over the hero, blurred navy glass once scrolled past 24px.

```jsx
<Navbar links={[{label:"Serviços",href:"#servicos"}]} ctaLabel="Solicitar orçamento" />
```

Pass `logo` for an image wordmark, or it renders the "duPolvo" text mark. `scrolled` can be forced (e.g. for the design-system card preview).
