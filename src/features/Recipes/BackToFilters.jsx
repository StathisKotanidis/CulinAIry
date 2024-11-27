import { FaLongArrowAltLeft } from "react-icons/fa";
import { useFilters } from "../Filters/FiltersProvider";
import { useRecipes } from "./RecipesProvider";

function BackToFilters() {
  const { handleClearUrl } = useFilters();
  const { handleShowFilters } = useRecipes();

  const handleRecipes = () => {
    handleClearUrl();
    handleShowFilters();
  };

  return (
    <button
      onClick={handleRecipes}
      className="flex items-center justify-center gap-2 pt-8 text-eggWhite hover:cursor-pointer hover:underline"
    >
      <FaLongArrowAltLeft className="text-xl sm:text-2xl" />
      <span className="text-xl sm:text-2xl">Back</span>
    </button>
  );
}

export default BackToFilters;
