import Filters from "../../features/Filters/Filters";
import Recipes from "../../features/Recipes/Recipes";
import { useRecipes } from "../../features/Recipes/RecipesProvider";

function Search() {
  // const { showFilters } = useFilters();
  const { showFilters } = useRecipes();
  return (
    <div className="flex flex-col bg-eggplant">
      <div className="p-2">{showFilters ? <Filters /> : <Recipes />}</div>
    </div>
  );
}

export default Search;
