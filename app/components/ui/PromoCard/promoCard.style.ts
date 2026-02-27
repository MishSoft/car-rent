import clsx from "clsx";

export const promoCardLeftSide =
  "text-(--card-white-color) items-start w-full flex flex-col gap-4";
export const promoCardTitle = "text-[32px] font-semibold max-w-68";
export const promoCardDescription = "text-[16px] max-w-71";
const basePromoCard =
  "flex flex-col items-center overflow-hidden justify-between h-90 w-full p-6 rounded-[10px] bg-center bg-cover bg-no-repeat";

export const getPromoCardStyles = (variant: "primary" | "secondary") =>
  clsx(basePromoCard, {
    "bg-(--card-background)": variant === "primary",
    "bg-(--logo-color)": variant === "secondary",
  });

export const promoCardBtn = (variant: "primary" | "secondary") =>
  clsx(
    "px-5 py-2.5  cursor-pointer inline-fit rounded-sm",
    variant === "primary" ? "bg-(--logo-color)" : "bg-(--card-background)",
  );

export const imageContainer =
  "relative w-full h-32 -mt-4 flex justify-center max-w-[406px] aspect-306/116";
export const imageStyle = (variant: "primary" | "secondary") => clsx("object-contain",
  variant === "secondary" ? "scale-x-[-1]" : ""
);


