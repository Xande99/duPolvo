import * as React from "react";

/** Compact uppercase status/label chip. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "accent" | "navy" | "solid" | "success" | "warning" | "outline" | "on-dark";
  /** Show a leading status dot. */
  dot?: boolean;
  children?: React.ReactNode;
}
export function Badge(props: BadgeProps): JSX.Element;
