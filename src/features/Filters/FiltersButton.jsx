function FiltersButton() {
  return (
    <div className="flex items-center justify-center">
      <button className="mt-4 flex cursor-pointer items-center gap-2 rounded-full bg-eggWhite px-4 py-2 font-bold text-eggplant">
        <span>Search</span>
        <box-icon color="#2F2A35" name="search-alt-2" rotate="90"></box-icon>
      </button>
    </div>
  );
}

export default FiltersButton;
