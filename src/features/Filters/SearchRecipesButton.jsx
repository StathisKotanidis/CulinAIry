import { useRecipes } from "../Recipes/RecipesProvider";
import { useFilters } from "./FiltersProvider";

function SearchRecipesButton() {
  const { filters } = useFilters();
  const { triggerFetch, handleShowFilters } = useRecipes();

  const handleSearch = () => {
    handleShowFilters(); // Hide filters
    triggerFetch(); // Trigger fetching
  };

  {
    return filters.ingredient ? (
      <div className="flex items-center justify-center pt-8">
        <button
          onClick={handleSearch}
          className="mt-4 flex cursor-pointer items-center gap-2 rounded-full bg-eggWhite px-4 py-2 font-bold text-eggplant hover:scale-110 sm:px-6 sm:py-3 md:px-9 md:py-4"
        >
          <span className="sm:text-lg md:text-xl">Search</span>
          <box-icon color="#2F2A35" name="search-alt-2" rotate="90"></box-icon>
        </button>
      </div>
    ) : null;
  }
}

export default SearchRecipesButton;
