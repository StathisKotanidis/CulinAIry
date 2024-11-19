import { useFilters } from "./FiltersProvider";

function FiltersButton() {
  const { getRecipes } = useFilters();
  return (
    <div className="flex items-center justify-center">
      <button
        onClick={getRecipes}
        className="flex items-center gap-2 px-4 py-2 mt-4 font-bold rounded-full cursor-pointer bg-eggWhite text-eggplant hover:scale-110"
      >
        <span>Search</span>
        <box-icon color="#2F2A35" name="search-alt-2" rotate="90"></box-icon>
      </button>
    </div>
  );
}

export default FiltersButton;
