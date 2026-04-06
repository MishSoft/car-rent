import { FaImage } from "react-icons/fa6";

export default function PromoCardLoading() {
  return (
    <div
      className="flex items-center justify-between">
      <div className=" w-full h-[360px] flex items-center justify-center bg-(--card-white-color) rounded-xl">
        <FaImage className="text-(--loading-color) animate-pulse" size={50} />
      </div>
    </div>
  )
}
