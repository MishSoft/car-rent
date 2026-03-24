import clsx from "clsx";

export const container = (className?: string) =>
  clsx(className, "px-10 py-[32px] md:px-15 ");

export default function Layout({ children }: any) { return children; }
