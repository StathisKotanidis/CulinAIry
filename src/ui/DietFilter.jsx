import { useFilters } from "../context/FiltersProvider";

function DietFilter() {
  const { toggles, onHandleToggle, dietInput, handleDietInput } = useFilters();
  return (
    <div className="flex flex-col">
      <button onClick={() => onHandleToggle("diet")} className="filters-button">
        <span className="filters-tags">Diet</span>
        {!toggles.diet ? (
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
      {toggles.diet ? (
        <div className="all-checkboxes-container">
          <div className="checkbox-container">
            <input
              type="checkbox"
              value="Gluten Free"
              id="gluten-free"
              name="gluten-free"
              onChange={handleDietInput}
              disabled={dietInput && dietInput !== "Gluten Free"}
            ></input>
            <label htmlFor="gluten-free">Gluten Free</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              value="Ketogenic"
              id="ketogenic"
              name="ketogenic"
              onChange={handleDietInput}
              disabled={dietInput && dietInput !== "Ketogenic"}
            ></input>
            <label htmlFor="ketogenic">Ketogenic</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              value="Vegetarian"
              id="vegetarian"
              name="vegetarian"
              onChange={handleDietInput}
              disabled={dietInput && dietInput !== "Vegetarian"}
            ></input>
            <label htmlFor="vegetarian">Vegetarian</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              value="Lacto-Vegetarian"
              id="lacto-vegetarian"
              name="lacto-vegetarian"
              onChange={handleDietInput}
              disabled={dietInput && dietInput !== "Lacto-Vegetarian"}
            ></input>
            <label htmlFor="lacto-vegetarian">Lacto-Vegetarian</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              value="Ovo-Vegetarian"
              id="ovo-vegetarian"
              name="ovo-vegetarian"
              onChange={handleDietInput}
              disabled={dietInput && dietInput !== "Ovo-Vegetarian"}
            ></input>
            <label htmlFor="ovo-vegetarian">Ovo-Vegetarian</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              value="Vegan"
              id="vegan"
              name="vegan"
              onChange={handleDietInput}
              disabled={dietInput && dietInput !== "Vegan"}
            ></input>
            <label htmlFor="vegan">Vegan</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              value="Pescetarian"
              id="pescetarian"
              name="pescetarian"
              onChange={handleDietInput}
              disabled={dietInput && dietInput !== "Pescetarian"}
            ></input>
            <label htmlFor="pescetarian">Pescetarian</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              value="Paleo"
              id="paleo"
              name="paleo"
              onChange={handleDietInput}
              disabled={dietInput && dietInput !== "Paleo"}
            ></input>
            <label htmlFor="paleo">Paleo</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              value="Primal"
              id="primal"
              name="primal"
              onChange={handleDietInput}
              disabled={dietInput && dietInput !== "Primal"}
            ></input>
            <label htmlFor="primal">Primal</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              value="Low FODMAP"
              id="low-fodmap"
              name="low-fodmap"
              onChange={handleDietInput}
              disabled={dietInput && dietInput !== "Low FODMAP"}
            ></input>
            <label htmlFor="low-fodmap">Low FODMAP</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              value="Whole30"
              id="whole-30"
              name="whole-30"
              onChange={handleDietInput}
              disabled={dietInput && dietInput !== "Whole30"}
            ></input>
            <label htmlFor="whole-30">Whole30</label>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default DietFilter;
