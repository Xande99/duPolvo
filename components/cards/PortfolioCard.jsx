import React from "react";
import { useCardsCSS } from "./Card.jsx";
import { Badge } from "../indicators/Badge.jsx";

export function PortfolioCard({ image, title, category, description, metric, href="#", ...rest }){
  useCardsCSS();
  return (
    <a className="dp-card dp-card--hover dp-port" href={href} {...rest}>
      <div className="dp-port__media">
        <img src={image} alt={title} />
        {category && <span className="dp-port__cat"><Badge variant="solid">{category}</Badge></span>}
        {metric && <span className="dp-port__metric">{metric}</span>}
      </div>
      <div className="dp-port__body">
        <h3 className="dp-port__title">{title}</h3>
        {description && <p className="dp-port__desc">{description}</p>}
      </div>
    </a>
  );
}
