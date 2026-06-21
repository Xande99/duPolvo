import * as React from "react";

/** Portfolio / case-study card — cover image, category badge, result metric. */
export interface PortfolioCardProps {
  image: string;
  title: string;
  /** Category badge text, e.g. "Tráfego Pago". */
  category?: string;
  description?: string;
  /** Headline result, e.g. "+312% ROAS". */
  metric?: string;
  href?: string;
}
export function PortfolioCard(props: PortfolioCardProps): JSX.Element;
