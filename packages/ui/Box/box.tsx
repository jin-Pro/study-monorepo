import type { PropsWithChildren } from "react";

type BoxProps = PropsWithChildren<
  {
    as?: "div" | "ul";
  } & ContainerProps
>;

export function Box({
  as: Component = "div",
  children,
  width,
  height,
  borderRadius,
  backgroundColor,
  className,
}: BoxProps) {
  return (
    <Component
      className={className}
      style={{ width, height, borderRadius, backgroundColor }}
    >
      {children}
    </Component>
  );
}
