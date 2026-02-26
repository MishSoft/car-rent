import { CiSearch } from "react-icons/ci";
import { VscSettings } from "react-icons/vsc";
import { iconColor, inputContainer, inputStyle, inputWrapper, settingButton } from "./input.style";

export default function Input() {
  return (
    <div className={inputContainer}>
      <div className={inputWrapper}>
        <CiSearch size={25} className={iconColor} />

        <input
          type="text"
          className={inputStyle}
          placeholder="Search something here"
          aria-label="search"
        />
      </div>

      <button className={settingButton}>
        <VscSettings size={25} className={iconColor} />
      </button>
    </div>
  );
}
