import { useFilters } from "../context/FiltersProvider";

function DietFilter() {
  const { toggles, onHandleToggle } = useFilters();
  console.log(`Current toggles.diet value is: ${toggles.diet}`);
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
            <input type="checkbox" id="gluten-free" name="gluten-free"></input>
            <label htmlFor="gluten-free">Gluten Free</label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="ketogenic" name="ketogenic"></input>
            <label htmlFor="ketogenic">Ketogenic</label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="vegetarian" name="vegetarian"></input>
            <label htmlFor="vegetarian">Vegetarian</label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="lacto-veg" name="lacto-veg"></input>
            <label htmlFor="lacto-veg">Lacto-Vegetarian</label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="ovo-veg" name="ovo-veg"></input>
            <label htmlFor="ovo-veg">Ovo-Vegetarian</label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="vegan" name="vegan"></input>
            <label htmlFor="vegan">Vegan</label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="pescetarian" name="pescetarian"></input>
            <label htmlFor="pescetarian">Pescetarian</label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="paleo" name="paleo"></input>
            <label htmlFor="paleo">Paleo</label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="primal" name="primal"></input>
            <label htmlFor="primal">Primal</label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="low-fodmap" name="low-fodmap"></input>
            <label htmlFor="low-fodmap">Low FODMAP</label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="whole-30" name="whole-30"></input>
            <label htmlFor="whole-30">Whole30</label>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default DietFilter;
