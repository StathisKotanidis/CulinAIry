import { useFilters } from "../context/FiltersProvider";

function FiltersToggler() {
  const { onHandleFiltersToggle } = useFilters();
  return (
    <div>
      <button
        onClick={onHandleFiltersToggle}
        className="flex items-center justify-center pb-3 pt-6 text-lg text-eggWhite transition duration-300 ease-in-out hover:scale-110 hover:cursor-pointer"
      >
        <box-icon color="#F8E8CC" name="filter"></box-icon>
        <span>Filters</span>
      </button>
    </div>
  );
}

export default FiltersToggler;
