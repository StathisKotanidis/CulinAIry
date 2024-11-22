import { useFilters } from "./FiltersProvider";

function FiltersToggler() {
  const { handleToggles } = useFilters();
  return (
    <div>
      <button
        onClick={() => handleToggles("filters")}
        className="flex items-center justify-center w-full pt-6 pb-3 text-lg transition duration-300 ease-in-out text-eggWhite hover:scale-110 hover:cursor-pointer"
      >
        <box-icon color="#F8E8CC" name="filter"></box-icon>
        <span>Filters</span>
      </button>
    </div>
  );
}

export default FiltersToggler;
