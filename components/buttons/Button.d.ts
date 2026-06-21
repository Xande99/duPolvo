import * as React from "react";

/**
 * Pill-shaped action button — the primary interactive primitive of duPolvo.
 *
 * @startingPoint section="Buttons" subtitle="Primary, accent, outline & ghost — all states" viewport="700x180"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. `accent` = aqua glow CTA, `primary` = navy, `outline`/`ghost` = quiet. */
  variant?: "primary" | "accent" | "outline" | "ghost";
  /** Height/padding preset. */
  size?: "sm" | "md" | "lg";
  /** Tune outline/ghost colors for placement on a dark navy surface. */
  onDark?: boolean;
  /** Full-width. */
  block?: boolean;
  disabled?: boolean;
  /** Element/component to render as (e.g. "a" for links). */
  as?: any;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  children?: React.ReactNode;
}

export function Button(props: ButtonProps): JSX.Element;
