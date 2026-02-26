import clsx from "clsx";

export const button = (className?: string) => clsx(
  `relative cursor-pointer inline-flex items-center justify-center rounded-full p-2 transition-colors ${className}`,
);


export const badgeStyle = "absolute w-2.75 h-2.75  rounded-full top-0 right-0 bg-(--badge-bg)"
