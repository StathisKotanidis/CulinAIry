import { useFilters } from "./FiltersProvider";
import Calories from "./Calories";
import Cuisine from "./Cuisine";
import Diet from "./Diet";
import FiltersToggler from "./FiltersToggler";
import Ingredient from "./Ingredient";
import Intolerances from "./Intolerances";
import Nutrients from "./Nutrients";
import SearchRecipesButton from "./SearchRecipesButton";
import AskChef from "../Chat/AskChef";

function Filters() {
  const { toggles } = useFilters();

  return (
    <div className="flex flex-col gap-2">
      <Ingredient />
      <FiltersToggler />
      {toggles.filters ? (
        <>
          <Diet />
          <Cuisine />
          <Nutrients />
          <Calories />
          <Intolerances />
        </>
      ) : null}
      <AskChef />
      <SearchRecipesButton />
    </div>
  );
}

export default Filters;
