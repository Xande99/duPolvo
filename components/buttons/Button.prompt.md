Pill button for all calls-to-action; use `variant="accent"` for the single hero CTA, `primary` for standard actions, `outline`/`ghost` for secondary.

```jsx
<Button variant="accent" size="lg" iconRight={<ArrowIcon/>}>Solicitar orçamento</Button>
<Button variant="primary">Ver cases</Button>
<Button variant="outline" onDark>Saber mais</Button>
```

Variants: `primary` (navy), `accent` (aqua glow CTA), `outline`, `ghost`. Sizes: `sm` `md` `lg`. Set `onDark` on outline/ghost over navy sections. Renders as `<a>` via `as="a"`.
