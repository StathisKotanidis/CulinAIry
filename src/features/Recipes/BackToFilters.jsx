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
      className="flex items-center justify-center gap-2 pt-8 text-xl text-eggWhite hover:cursor-pointer hover:underline"
    >
      <FaLongArrowAltLeft />
      <span>Back</span>
    </button>
  );
}

export default BackToFilters;
