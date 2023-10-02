import type { PropsWithChildren } from "react";
import { classNames } from "utils/classNames";
import { TypographyBase } from "./base";
import type { TypographyProps } from "./base";

export function Typography6({
  className,
  children,
  ...typographyProps
}: PropsWithChildren<TypographyProps>) {
  return (
    <TypographyBase
      as="h6"
      className={classNames("text-[14px]/[22px] tracking-[-0.3px]", className)}
      {...typographyProps}
    >
      {children}
    </TypographyBase>
  );
}
