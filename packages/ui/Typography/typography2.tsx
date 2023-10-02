import type { PropsWithChildren } from "react";
import { classNames } from "utils/classNames";
import type { TypographyProps } from "./base";
import { TypographyBase } from "./base";

export function Typography2({
  className,
  children,
  ...typographyProps
}: PropsWithChildren<TypographyProps>) {
  return (
    <TypographyBase
      as="h2"
      className={classNames("text-[24px]/[36px] tracking-[-0.43px]", className)}
      {...typographyProps}
    >
      {children}
    </TypographyBase>
  );
}
