import { FaLongArrowAltLeft } from "react-icons/fa";
import { useFilters } from "../Filters/FiltersProvider";

function BackToFilters() {
  const { handleClearUrl } = useFilters();

  const handleRecipes = () => {
    handleClearUrl();
  };

  return (
    <button
      onClick={handleRecipes}
      className="flex items-center justify-center gap-2 pt-8 text-xl text-eggWhite hover:cursor-pointer hover:underline"
    >
      <FaLongArrowAltLeft />
      <span>Back</span>
    </button>
  );
}

export default BackToFilters;
