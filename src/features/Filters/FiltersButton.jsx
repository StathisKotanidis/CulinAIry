import { useFilters } from "./FiltersProvider";

function FiltersButton() {
  const { ingredientInput, getRecipes, handleShowFilters, showFilters } =
    useFilters();

  // const handleSearch = async () => {
  //   await getRecipes;
  //   handleClearUrl;
  // };

  const handleSearch = async () => {
    handleShowFilters();
    await getRecipes();
    // handleClearUrl;
  };

  {
    return ingredientInput ? (
      <div className="flex items-center justify-center">
        <button
          onClick={handleSearch}
          className="mt-4 flex cursor-pointer items-center gap-2 rounded-full bg-eggWhite px-4 py-2 font-bold text-eggplant hover:scale-110"
        >
          <span>Search</span>
          <box-icon color="#2F2A35" name="search-alt-2" rotate="90"></box-icon>
        </button>
      </div>
    ) : null;
  }
}

export default FiltersButton;
