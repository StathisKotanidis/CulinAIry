import CaloriesFilter from "../ui/CaloriesFilter";
import CuisineFilter from "../ui/CuisineFilter";
import DietFilter from "../ui/DietFilter";
import Ingredient from "../ui/Ingredient";
import IntolerancesFilter from "../ui/IntolerancesFilter";
import NutrientsFilter from "../ui/NutrientsFilter";

function Filters() {
  return (
    <div className="flex flex-col gap-2">
      <Ingredient />
      <span className="flex items-center justify-center pt-9 text-lg text-eggWhite">
        Additional Filters
      </span>
      <DietFilter />
      <CuisineFilter />
      <NutrientsFilter />
      <CaloriesFilter />
      <IntolerancesFilter />
    </div>
  );
}

export default Filters;
