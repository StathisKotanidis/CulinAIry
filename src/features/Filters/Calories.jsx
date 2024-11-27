import { useFilters } from "./FiltersProvider";

function Calories() {
  const { toggles, handleToggles, handleFilters } = useFilters();
  return (
    <div className="flex flex-col">
      <button
        onClick={() => handleToggles("calories")}
        className="filters-button"
      >
        <span className="filters-tags">Calories</span>
        {!toggles.calories ? (
          <box-icon
            name="chevron-down"
            type="solid"
            size="1.8rem"
            color="#F8E8CC"
          ></box-icon>
        ) : (
          <box-icon
            name="chevron-up"
            type="solid"
            size="1.8rem"
            color="#F8E8CC"
          ></box-icon>
        )}
      </button>
      {toggles.calories && (
        <div className="flex flex-col">
          <div className="flex justify-between py-4">
            <label className="text-lg text-eggWhite" htmlFor="calories">
              Max Amount
            </label>
            <input
              className="w-16 bg-eggWhite text-eggplant"
              type="number"
              id="calories"
              name="calories"
              onChange={(e) => handleFilters("calories", e)}
            ></input>
          </div>
        </div>
      )}
    </div>
  );
}

export default Calories;
