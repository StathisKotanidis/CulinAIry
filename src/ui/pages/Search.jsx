import { FiltersProvider } from "../../features/Filters/FiltersProvider";
import Filters from "../../features/Filters/Filters";
import Recipe from "../../features/Recipes/Recipe";

function Search() {
  return (
    <div className="flex flex-col bg-eggplant">
      <div className="p-2">
        <FiltersProvider>
          <Filters />
          <Recipe />
        </FiltersProvider>
      </div>
    </div>
  );
}

export default Search;
