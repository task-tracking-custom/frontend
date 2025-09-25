import { ComponentProps, ComponentType, JSX } from "react";

export type PropsByAs<
  Element extends keyof JSX.IntrinsicElements,
  As
> = As extends ComponentType<infer Props>
  ? Props & { as?: As }
  : As extends keyof JSX.IntrinsicElements
  ? ComponentProps<As> & { as?: As }
  : ComponentProps<Element> & { as?: As };
