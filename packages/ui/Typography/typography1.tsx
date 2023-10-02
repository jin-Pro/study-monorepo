import type { PropsWithChildren } from "react";
import { classNames } from "utils/classNames";
import type { TypographyProps } from "./base";
import { TypographyBase } from "./base";

export function Typography1({
  className,
  children,
  ...typographyProps
}: PropsWithChildren<TypographyProps>) {
  return (
    <TypographyBase
      as="h1"
      className={classNames("text-[54px]/[82px] tracking-[-0.5px]", className)}
      {...typographyProps}
    >
      {children}
    </TypographyBase>
  );
}
