import { useFilters } from "./FiltersProvider";
import { FaFilter } from "react-icons/fa6";

function FiltersToggler() {
  const { handleToggles } = useFilters();
  return (
    <button
      onClick={() => handleToggles("filters")}
      className="flex w-full items-center justify-center gap-2 pb-3 pt-8 text-lg text-eggWhite transition duration-300 ease-in-out hover:scale-110 hover:cursor-pointer sm:text-2xl"
    >
      <FaFilter />
      <span>Filters</span>
    </button>
  );
}

export default FiltersToggler;
