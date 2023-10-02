import type { PropsWithChildren } from "react";
import { classNames } from "utils/classNames";
import type { TypographyProps } from "./base";
import { TypographyBase } from "./base";

export function Typography3({
  className,
  children,
  ...typographyProps
}: PropsWithChildren<TypographyProps>) {
  return (
    <TypographyBase
      as="h3"
      className={classNames("text-[20px]/[30px] tracking-[-0.43px]", className)}
      {...typographyProps}
    >
      {children}
    </TypographyBase>
  );
}
