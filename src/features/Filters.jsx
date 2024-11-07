import { useFilters } from "../context/FiltersProvider";
import CaloriesFilter from "../ui/CaloriesFilter";
import CuisineFilter from "../ui/CuisineFilter";
import DietFilter from "../ui/DietFilter";
import FiltersButton from "../ui/FiltersButton";
import FiltersToggler from "../ui/FiltersToggler";
import Ingredient from "../ui/Ingredient";
import IntolerancesFilter from "../ui/IntolerancesFilter";
import NutrientsFilter from "../ui/NutrientsFilter";

function Filters() {
  const { toggles } = useFilters();
  console.log(`Current toggles.filters value is : ${toggles.filters}`);
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
