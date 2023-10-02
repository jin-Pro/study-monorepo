import type { PropsWithChildren } from "react";
import { classNames } from "utils/classNames";
import type { TypographyProps } from "./base";
import { TypographyBase } from "./base";

export function Typography7({
  children,
  className,
  ...typographyProps
}: PropsWithChildren<TypographyProps>) {
  return (
    <TypographyBase
      as="h6"
      className={classNames("text-[13px]/[19.5px]", className)}
      {...typographyProps}
    >
      {children}
    </TypographyBase>
  );
}
