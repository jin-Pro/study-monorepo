import type { PropsWithChildren } from "react";
import { classNames } from "utils";
import CONST from "../const";

export interface TypographyProps {
  weight?: keyof typeof CONST.STYLE.FONT_WEIGHT;
  color?: keyof typeof CONST.STYLE.FONT_COLOR;
  clamp?: keyof typeof CONST.STYLE.LINE_CLAMP;
  className?: string;
}

export function TypographyBase({
  as: Component,
  className,
  children,
  weight,
  color,
  clamp,
}: PropsWithChildren<
  TypographyProps & {
    as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  }
>) {
  return (
    <Component
      className={classNames(
        className,
        color && CONST.STYLE.FONT_COLOR[color],
        weight && CONST.STYLE.FONT_WEIGHT[weight],
        clamp && CONST.STYLE.LINE_CLAMP[clamp]
      )}
    >
      {children}
    </Component>
  );
}
