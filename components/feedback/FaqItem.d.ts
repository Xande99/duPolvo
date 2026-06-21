import * as React from "react";

/** Single expandable FAQ row with a rotating plus/cross icon. */
export interface FaqItemProps {
  question: string;
  answer: React.ReactNode;
  defaultOpen?: boolean;
}
export function FaqItem(props: FaqItemProps): JSX.Element;
