import type { PropsWithChildren } from "react";
import { classNames } from "utils/classNames";
import type { TypographyProps } from "./base";
import { TypographyBase } from "./base";

export function Typography4({
  className,
  children,
  ...typographyProps
}: PropsWithChildren<TypographyProps>) {
  return (
    <TypographyBase
      as="h4"
      className={classNames("text-[18px]/[24px] tracking-[-0.4px]", className)}
      {...typographyProps}
    >
      {children}
    </TypographyBase>
  );
}
