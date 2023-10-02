import type { PropsWithChildren } from "react";
import { classNames } from "utils/classNames";
import { TypographyBase } from "./base";
import type { TypographyProps } from "./base";

export function Typography5({
  className,
  children,
  ...typographyProps
}: PropsWithChildren<TypographyProps>) {
  return (
    <TypographyBase
      as="h5"
      className={classNames("text-[16px]/[24px] tracking-[-0.35px]", className)}
      {...typographyProps}
    >
      {children}
    </TypographyBase>
  );
}
