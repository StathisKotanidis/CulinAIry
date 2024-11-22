import { useRecipes } from "../Recipes/RecipesProvider";
import { useFilters } from "./FiltersProvider";

function SearchRecipesButton() {
  const { filters } = useFilters();
  const { getRecipes, handleShowFilters } = useRecipes();

  const handleSearch = async () => {
    handleShowFilters();
    await getRecipes();
  };

  {
    return filters.ingredient ? (
      <div className="flex items-center justify-center">
        <button
          onClick={handleSearch}
          className="flex items-center gap-2 px-4 py-2 mt-4 font-bold rounded-full cursor-pointer bg-eggWhite text-eggplant hover:scale-110"
        >
          <span>Search</span>
          <box-icon color="#2F2A35" name="search-alt-2" rotate="90"></box-icon>
        </button>
      </div>
    ) : null;
  }
}

export default SearchRecipesButton;
