import { ComponentProps, ComponentType, ElementType, JSX } from "react";

export type PropsByAs<
  Element extends keyof JSX.IntrinsicElements,
  As
> = As extends ComponentType<infer Props>
  ? Props & { as?: As }
  : As extends keyof JSX.IntrinsicElements
  ? ComponentProps<As> & { as?: As }
  : ComponentProps<Element> & { as?: As };

export type PolymorphicProps<T extends ElementType = "div", P = object> = {
  as?: T;
  className?: string;
  children?: React.ReactNode;
} & P &
  Omit<ComponentProps<T>, "as" | "className" | "children" | keyof P>;
