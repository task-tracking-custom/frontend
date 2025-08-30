import { ComponentProps, ComponentType, JSX } from "react";

export type PropsByAs<
  El extends keyof JSX.IntrinsicElements,
  As
> = As extends ComponentType<infer Props>
  ? Props
  : As extends El
  ? ComponentProps<As>
  : never;
