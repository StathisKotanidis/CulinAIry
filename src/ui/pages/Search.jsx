import Filters from "../../features/Filters";

function Search() {
  return (
    <div className="flex flex-col bg-eggplant">
      <div className="p-2">
        <Filters />
      </div>
      <div className="">
        <span>All my recipes will be there </span>
      </div>
    </div>
  );
}

export default Search;
