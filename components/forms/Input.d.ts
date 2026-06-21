import * as React from "react";

/** Labeled text field (set `multiline` for a textarea). Supports light & dark surfaces. */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  /** Helper or error message under the field. */
  hint?: string;
  required?: boolean;
  /** Error styling (red border + red hint). */
  error?: boolean;
  /** Style for placement on a dark navy surface. */
  onDark?: boolean;
  /** Render a textarea instead of an input. */
  multiline?: boolean;
}
export function Input(props: InputProps): JSX.Element;
