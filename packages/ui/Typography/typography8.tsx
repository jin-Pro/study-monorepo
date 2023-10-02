import type { PropsWithChildren } from "react";
import { classNames } from "utils/classNames";
import type { TypographyProps } from "./base";
import { TypographyBase } from "./base";

export function Typography8({
  children,
  className,
  ...typographyProps
}: PropsWithChildren<TypographyProps>) {
  return (
    <TypographyBase
      as="h6"
      className={classNames("text-[12px]/[18px]", className)}
      {...typographyProps}
    >
      {children}
    </TypographyBase>
  );
}
