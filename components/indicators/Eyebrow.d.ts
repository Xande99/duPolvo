import * as React from "react";

/** Overline kicker that sits above section headings, with a leading accent line. */
export interface EyebrowProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Show the leading accent line. */
  line?: boolean;
  onDark?: boolean;
  children?: React.ReactNode;
}
export function Eyebrow(props: EyebrowProps): JSX.Element;
