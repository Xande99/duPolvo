import React from "react";
import { Card, useCardsCSS } from "./Card.jsx";

export function TestimonialCard({ quote, name, role, avatar, rating=5, ...rest }){
  useCardsCSS();
  return (
    <Card className="dp-tst" {...rest}>
      {rating>0 && <div className="dp-tst__stars">{"★".repeat(rating)}</div>}
      <p className="dp-tst__quote">{quote}”</p>
      <div className="dp-tst__foot">
        {avatar
          ? <img className="dp-tst__avatar" src={avatar} alt={name} />
          : <span className="dp-tst__avatar" />}
        <span>
          <span className="dp-tst__name" style={{display:"block"}}>{name}</span>
          <span className="dp-tst__role">{role}</span>
        </span>
      </div>
    </Card>
  );
}
