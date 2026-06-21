import * as React from "react";

/** Base surface container for content blocks. */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Apply standard internal padding. */
  pad?: boolean;
  /** Lift + accent border on hover. */
  hover?: boolean;
  /** Dark navy variant for use on light pages or vice-versa. */
  dark?: boolean;
  children?: React.ReactNode;
}
export function Card(props: CardProps): JSX.Element;
