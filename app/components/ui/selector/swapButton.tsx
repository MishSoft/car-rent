import { FaExchangeAlt } from "react-icons/fa";


export default function SwapButton() {
  return (
    <button className="group bg-(--logo-color) shadow-2xl shadow-blue-(--logo-color) p-4.5 cursor-pointer rounded-[10px]">
      <FaExchangeAlt size={24} className="rotate-270 duration-400 group-hover:rotate-90 text-(--card-white-color)"/>
    </button>
  )
}
