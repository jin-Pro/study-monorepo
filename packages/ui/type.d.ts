declare module "tailwind-config/postcss.config";

interface ContainerProps {
  width?: number | `${number}px` | `${number}%` | `${number}vw`;
  height?: number | `${number}px` | `${number}%` | `${number}vh`;
  borderRadius?: number | `${number}px` | `${number}%`;
  backgroundColor?: string;
  className?: string;
}
