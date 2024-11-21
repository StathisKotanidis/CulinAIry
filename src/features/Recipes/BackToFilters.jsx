import { FaLongArrowAltLeft } from "react-icons/fa";

function BackToFilters() {
  return (
    <div className="flex items-center justify-center gap-2 pt-8 text-xl text-eggWhite hover:cursor-pointer">
      <FaLongArrowAltLeft />
      <span>Back</span>
    </div>
  );
}

export default BackToFilters;
