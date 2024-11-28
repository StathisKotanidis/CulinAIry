import { useRecipes } from "../Recipes/RecipesProvider";
import { useFilters } from "./FiltersProvider";

function SearchRecipesButton() {
  const { filters } = useFilters();
  const { triggerFetch, handleShowFilters } = useRecipes();

  const handleSearch = () => {
    handleShowFilters();
    triggerFetch();
  };

  {
    return filters.ingredient ? (
      <div className="flex w-full items-center justify-center pt-8">
        <button
          onClick={handleSearch}
          className="mt-4 flex w-2/6 cursor-pointer items-center justify-center gap-2 rounded-full bg-eggWhite py-2 font-bold text-eggplant hover:scale-110 sm:py-3 md:py-4 lg:w-3/4 lg:py-3"
        >
          <span className="sm:text-lg md:text-xl">Search</span>
          <box-icon color="#2F2A35" name="search-alt-2" rotate="90"></box-icon>
        </button>
      </div>
    ) : null;
  }
}

export default SearchRecipesButton;
