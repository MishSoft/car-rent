import clsx from "clsx";

export const promoCardLeftSide =
  "flex flex-col items-start gap-4 w-full text-(--card-white-color)";
export const promoCardTitle = "text-[32px] font-semibold max-w-68";
export const promoCardDescription = "text-[16px] max-w-71";
const basePromoCard =
  "flex flex-col justify-between items-start overflow-hidden h-90 w-full p-6 rounded-[10px] bg-center bg-cover bg-no-repeat";
export const getPromoCardStyles = (variant: "primary" | "secondary") =>
  clsx(basePromoCard, {
    "bg-(--card-background)": variant === "primary",
    "bg-(--logo-color)": variant === "secondary",
  });

export const promoCardBtn = (variant: "primary" | "secondary") =>
  clsx(
    "px-5 py-2.5  cursor-pointer inline-fit rounded-sm",
    variant === "primary" ? "bg-(--logo-color)" : "bg-(--card-background) ",
  );

export const imageContainer =
  "relative w-full mx-auto max-w-[406px] aspect-[35/9] ";
export const imageStyle = "object-contain w-full h-full ";


