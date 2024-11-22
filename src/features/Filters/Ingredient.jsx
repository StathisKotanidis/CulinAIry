import { useFilters } from "./FiltersProvider";

function Ingredient() {
  const { handleFilters } = useFilters();
  return (
    <div className="flex justify-center items-align">
      <input
        className="px-4 py-2 text-center rounded-full bg-eggWhite text-eggplant placeholder:text-sm placeholder:italic"
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