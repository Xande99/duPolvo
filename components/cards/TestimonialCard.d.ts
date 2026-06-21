import * as React from "react";

/** Client testimonial card — star rating, quote, author with avatar. */
export interface TestimonialCardProps {
  quote: string;
  name: string;
  role?: string;
  /** Avatar image URL; a placeholder shows if omitted. */
  avatar?: string;
  /** 0–5 stars. */
  rating?: number;
}
export function TestimonialCard(props: TestimonialCardProps): JSX.Element;
