export const classNames = (
  ...strings: (undefined | boolean | string)[]
): string => {
  return strings.filter((str) => !!str).join(" ");
};
