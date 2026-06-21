import * as React from "react";

/**
 * Number that animates from 0 to `value` when scrolled into view.
 * @startingPoint section="Data" subtitle="Animated metric counter" viewport="320x160"
 */
export interface StatCounterProps {
  value: number;
  /** e.g. "+" or "R$". */
  prefix?: string;
  /** Highlighted suffix, e.g. "%", "M", "x". Rendered in accent color. */
  suffix?: string;
  label?: string;
  decimals?: number;
  /** Count-up duration in ms. */
  duration?: number;
  onDark?: boolean;
}
export function StatCounter(props: StatCounterProps): JSX.Element;
