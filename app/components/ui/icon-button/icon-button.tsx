import { forwardRef } from "react";
import { IconButtonProps } from "./icon-button.types";
import { badgeStyle, button } from "./icon-button.style";

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, badge, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={button(className)}
        {...props}
      >
        {icon}

        {
          badge && (
            <span className={badgeStyle}>
              {badge}
            </span>
          )
        }
      </button>
    );
  }
);

IconButton.displayName = "IconButton";

export default IconButton;
