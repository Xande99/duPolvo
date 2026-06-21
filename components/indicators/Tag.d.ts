import * as React from "react";

/** Filter/category chip — bordered pill, optionally selectable. */
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  active?: boolean;
  interactive?: boolean;
  onDark?: boolean;
  children?: React.ReactNode;
}
export function Tag(props: TagProps): JSX.Element;
