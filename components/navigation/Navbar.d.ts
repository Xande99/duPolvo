import * as React from "react";

/**
 * Fixed top navigation that turns to blurred navy glass on scroll.
 * @startingPoint section="Navigation" subtitle="Fixed navbar with scroll blur" viewport="1200x80"
 */
export interface NavLink { label: string; href: string; }
export interface NavbarProps {
  brand?: string;
  /** Logo image URL; falls back to the "duPolvo" wordmark. */
  logo?: string;
  links?: NavLink[];
  ctaLabel?: string;
  ctaHref?: string;
  /** Force the scrolled (glass) state — leave undefined to auto-track scroll. */
  scrolled?: boolean;
}
export function Navbar(props: NavbarProps): JSX.Element;
