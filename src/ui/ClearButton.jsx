import { AiOutlineClear } from "react-icons/ai";
import { useRecipes } from "../features/Recipes/RecipesProvider";
import { useFilters } from "../features/Filters/FiltersProvider";

function ClearButton() {
  const { setRecipes, setHasSearched } = useRecipes();
  const { handleClearUrl, inputRef } = useFilters();

  const handleClearButton = () => {
    handleClearUrl();
    setRecipes([]);
    setHasSearched(false);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={handleClearButton}
        className="flex items-center justify-center w-3/4 gap-2 py-3 mt-6 text-xl font-bold transition duration-300 ease-in-out rounded-full bg-eggWhite text-eggplant hover:scale-110"
      >
        Clear <AiOutlineClear />
      </button>
    </div>
  );
}

export default ClearButton;
