import { ComponentProps, ComponentType, JSX } from "react";

export type PropsByAs<
  Element extends keyof JSX.IntrinsicElements,
  As
> = As extends ComponentType<infer Props>
  ? Props
  : As extends Element
  ? ComponentProps<As>
  : {};
