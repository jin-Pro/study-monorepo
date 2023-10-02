import type { PropsWithChildren } from "react";

type GapProps = PropsWithChildren<{
  marginLeft?: number | `${string}px`;
  marginRight?: number | `${string}px`;
  marginTop?: number | `${string}px`;
  marginBottom?: number | `${string}px`;
}>;

export function Gap({
  children,
  marginLeft,
  marginRight,
  marginTop,
  marginBottom,
}: GapProps) {
  return (
    <div style={{ marginLeft, marginRight, marginTop, marginBottom }}>
      {children}
    </div>
  );
}
