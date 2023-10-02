import { classNames } from "utils";
import type { PropsWithChildren } from "react";
import CONST from "../const";

export type FlexProps = PropsWithChildren<
  {
    as?: "div" | "ul";
    col?: boolean;
    items?: keyof typeof CONST.STYLE.ITEMS;
    justify?: keyof typeof CONST.STYLE.JUSTIFY;
  } & ContainerProps
>;

export function Flex({
  as: Component = "div",
  col,
  items,
  width,
  height,
  justify,
  children,
  className,
  borderRadius,
  backgroundColor,
}: FlexProps) {
  return (
    <Component
      className={classNames(
        "flex",
        className,
        col && "flex-col",
        items && CONST.STYLE.ITEMS[items],
        justify && CONST.STYLE.JUSTIFY[justify]
      )}
      style={{ width, height, borderRadius, backgroundColor }}
    >
      {children}
    </Component>
  );
}
