import Filters from "../../features/Filters/Filters";
import Recipes from "../../features/Recipes/Recipes";
import { useRecipes } from "../../features/Recipes/RecipesProvider";

function Search() {
  const { showFilters } = useRecipes();
  return (
    <div className="flex min-h-screen flex-col overflow-y-auto bg-eggplant py-2">
      <div className="p-2">{showFilters ? <Filters /> : <Recipes />}</div>
    </div>
  );
}

export default Search;
