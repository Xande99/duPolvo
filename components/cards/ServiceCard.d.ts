import * as React from "react";

/**
 * Service offering card — icon, title, short description, optional index number.
 * @startingPoint section="Cards" subtitle="Service offering with icon + hover lift" viewport="360x320"
 */
export interface ServiceCardProps {
  /** Icon node (e.g. a 28px SVG / Lucide icon). */
  icon?: React.ReactNode;
  title: string;
  description: string;
  /** Optional large index, e.g. "01". */
  number?: string;
  linkLabel?: string;
  href?: string;
}
export function ServiceCard(props: ServiceCardProps): JSX.Element;
