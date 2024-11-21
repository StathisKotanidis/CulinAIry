import { useFilters } from "../../features/Filters/FiltersProvider";
import Filters from "../../features/Filters/Filters";
import Recipes from "../../features/Recipes/Recipes";

function Search() {
  const { showFilters } = useFilters();
  return (
    <div className="flex flex-col bg-eggplant">
      <div className="p-2">{showFilters ? <Filters /> : <Recipes />}</div>
    </div>
  );
}

export default Search;
