import { useFilters } from "./FiltersProvider";

function Ingredient() {
  const { handleFilters } = useFilters();
  return (
    <div className="items-align flex justify-center">
      <input
        className="rounded-full bg-eggWhite px-4 py-2 text-eggplant placeholder:text-sm placeholder:font-semibold placeholder:italic sm:w-1/2 sm:px-6 sm:py-4 sm:placeholder:text-lg lg:w-full lg:placeholder:text-sm"
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
