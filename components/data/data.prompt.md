Scroll-triggered animated counter for the stats section.

```jsx
<StatCounter value={312} prefix="+" suffix="%" label="ROAS médio" onDark />
<StatCounter value={4.9} decimals={1} label="Nota dos clientes" />
```

Counts up once when it enters the viewport (respects reduced-motion). `suffix` is rendered in the aqua accent. Use `onDark` on navy sections.
