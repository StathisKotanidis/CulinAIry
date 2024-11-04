import CaloriesFilter from "../CaloriesFilter";
import CuisineFilter from "../CuisineFilter";
import DietFilter from "../DietFilter";
import IntolerancesFilter from "../IntolerancesFilter";
import NutrientsFilter from "../NutrientsFilter";

function Search() {
  return (
    <div className="grid grid-cols-4 bg-eggplant">
      <div className="col-span-4 border border-yellow-300"></div>
      <div className="col-span-1 border border-orange-600">
        <DietFilter />
        <CuisineFilter />
        <IntolerancesFilter />
        <NutrientsFilter />
        <CaloriesFilter />
      </div>
      <div className="col-span-3 border border-stone-400"></div>
    </div>
  );
}

export default Search;
