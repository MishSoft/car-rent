import clsx from "clsx";

export const footerContainer = "bg-(--card-white-color)";
export const footerWrapper = "flex md:justify-between  py-5 border-b border-gray-300 items-start gap-12 flex-col md:flex-row";
export const footerText = "flex flex-col gap-4";
export const footerLogo = "text-[32px] text-(--logo-color) uppercase font-semibold";
export const footerDescription = "max-w-73 text-[16px] text-(--card-gray-color)";
export const footerBottom = "pt-9 flex  md:flex-row flex-col-reverse gap-5  md:items-center justify-between";
export const footerBottomText = "text-[16px] font-semibold";
export const footerBottomLinks = "flex items-center justify-between gap-15";


// Loading
export const loading = (className?: string) =>
  clsx(
    `${className} animate-pulse w-32 h-[16px] rounded-full`,
  );
export const loadingWrapper = "flex flex-wrap items-center gap-[64px]";
export const loadingItem = "flex flex-col items-center gap-5";
export const loadingItemLinks = "flex flex-col items-center gap-2";
