import React from "react";
import { Card, useCardsCSS } from "./Card.jsx";

export function ServiceCard({ icon, title, description, number, linkLabel="Saber mais", href="#", ...rest }){
  useCardsCSS();
  return (
    <Card hover className="dp-svc" {...rest}>
      {number && <span className="dp-svc__num">{number}</span>}
      <span className="dp-svc__icon">{icon}</span>
      <h3 className="dp-svc__title">{title}</h3>
      <p className="dp-svc__desc">{description}</p>
      {linkLabel && (
        <a className="dp-svc__link" href={href}>
          {linkLabel}
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </a>
      )}
    </Card>
  );
}
