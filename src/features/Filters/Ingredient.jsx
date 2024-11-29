import { useFilters } from "./FiltersProvider";

function Ingredient() {
  const { handleFilters, inputRef } = useFilters();
  return (
    <div className="flex justify-center w-full items-align">
      <input
        ref={inputRef}
        className="w-1/2 px-2 py-2 rounded-full lg:placeholder:text-md bg-eggWhite text-eggplant placeholder:text-sm placeholder:font-semibold placeholder:italic sm:w-1/2 sm:px-4 sm:py-3 md:w-1/2 md:py-3 lg:w-full"
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
