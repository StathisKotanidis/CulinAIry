import { FiltersProvider, useFilters } from "../context/FiltersProvider";
import CaloriesFilter from "../ui/CaloriesFilter";
import CuisineFilter from "../ui/CuisineFilter";
import DietFilter from "../ui/DietFilter";
import FiltersButton from "../ui/FiltersButton";
import FiltersToggler from "../ui/FiltersToggler";
import Ingredient from "../ui/Ingredient";
import IntolerancesFilter from "../ui/IntolerancesFilter";
import NutrientsFilter from "../ui/NutrientsFilter";

function Filters() {
  const { showFilters } = useFilters();
  console.log(`Current showFilters value is : ${showFilters}`);
  return (
    <div className="flex flex-col gap-2">
      <Ingredient />
      <FiltersToggler />
      {!showFilters && (
        <>
          <DietFilter />
          <CuisineFilter />
          <NutrientsFilter />
          <CaloriesFilter />
          <IntolerancesFilter />
        </>
      )}
      <FiltersButton />
    </div>
  );
}

export default Filters;
