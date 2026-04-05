import clsx from "clsx";

export const selectorForm =
  "px-4 z-0 py-5 md:px-12 md:py-6 w-full gap-4 flex flex-col rounded-[10px] bg-(--card-white-color)";
export const selecotrTitleContainer = "flex items-center gap-2";

export const selectorTitle = "text-[16px] font-semibold";
export const selectorPickerContainer =
  "grid grid-cols-3 gap-5 items-center w-full";
export const selectorPickerItemContainer =
  "flex items-center border-l border-gray-200 pl-2 md:pl-4 gap-1 min-w-0";
export const selectorPickerItemInner = "flex flex-col gap-1 w-full";
export const selecotorPicerItemTitle = "text-[12px] md:text-[16px] font-bold";
export const selectorPickerItemInnerContainer = "flex flex-col gap-1 min-w-0";

// Loading
export const selectorLoading =
  "xl:max-w-[582px] w-full bg-white rounded-xl flex flex-col gap-5 p-[24px]";

export const selectorLoadingPickerItemContainer =
  "flex items-center justify-between w-full";
export const selectorLoadingPickerItemInner = "flex flex-col gap-2";
export const selectorLoadingPickerItemInnerTitle = (className?: string) =>
  clsx(
    className,
    "w-[80px] md:w-[116px] h-[16px] animate-pulse  rounded-full",
    className,
  );
