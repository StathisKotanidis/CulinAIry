import { FiltersProvider } from "../../features/Filters/FiltersProvider";
import Filters from "../../features/Filters/Filters";
import Recipes from "../../features/Recipes/Recipes";

function Search() {
  return (
    <div className="flex flex-col bg-eggplant">
      <div className="p-2">
        <FiltersProvider>
          <Filters />
          <Recipes />
        </FiltersProvider>
      </div>
    </div>
  );
}

export default Search;
