import { useFilters } from "./FiltersProvider";
import CaloriesFilter from "./CaloriesFilter";
import CuisineFilter from "./CuisineFilter";
import DietFilter from "./DietFilter";
import FiltersButton from "./FiltersButton";
import FiltersToggler from "./FiltersToggler";
import Ingredient from "../../ui/Ingredient";
import IntolerancesFilter from "./IntolerancesFilter";
import NutrientsFilter from "./NutrientsFilter";

function Filters() {
  const { toggles } = useFilters();

  return (
    <div className="flex flex-col gap-2">
      <Ingredient />
      <FiltersToggler />
      {toggles.filters ? (
        <>
          <DietFilter />
          <CuisineFilter />
          <NutrientsFilter />
          <CaloriesFilter />
          <IntolerancesFilter />
        </>
      ) : null}
      <FiltersButton />
    </div>
  );
}

export default Filters;
