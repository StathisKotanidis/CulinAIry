import { useRecipes } from "../Recipes/RecipesProvider";
import { useFilters } from "./FiltersProvider";

function SearchRecipesButton() {
  const { filters } = useFilters();
  const { triggerFetch, handleShowFilters, setHasSearched } = useRecipes();

  const handleSearchButton = () => {
    handleShowFilters();
    triggerFetch();
    setHasSearched(true);
  };

  {
    return filters.ingredient ? (
      <div className="flex items-center justify-center w-full pt-8">
        <button
          onClick={handleSearchButton}
          className="flex items-center justify-center w-2/6 gap-2 py-2 mt-4 font-bold transition duration-300 ease-in-out rounded-full cursor-pointer bg-eggWhite text-eggplant hover:scale-110 sm:py-3 md:py-4 lg:w-3/4 lg:py-3"
        >
          <span className="sm:text-lg md:text-xl">Search</span>
          <box-icon color="#2F2A35" name="search-alt-2" rotate="90"></box-icon>
        </button>
      </div>
    ) : null;
  }
}

export default SearchRecipesButton;
