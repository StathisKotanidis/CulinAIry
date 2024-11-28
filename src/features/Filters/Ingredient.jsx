import { useFilters } from "./FiltersProvider";

function Ingredient() {
  const { handleFilters } = useFilters();
  return (
    <div className="items-align flex w-full justify-center">
      <input
        className="lg:placeholder:text-md w-1/2 rounded-full bg-eggWhite px-2 py-2 text-eggplant placeholder:text-sm placeholder:font-semibold placeholder:italic sm:w-1/2 sm:px-4 sm:py-3 md:w-1/2 md:py-3 lg:w-full"
        placeholder="type your main ingredient"
        type="text"
        name="ingredient"
        id="ingredient"
        onChange={(e) => handleFilters("ingredient", e)}
      ></input>
      <label htmlFor="ingredient" className="hidden"></label>
    </div>
  );
}

export default Ingredient;
