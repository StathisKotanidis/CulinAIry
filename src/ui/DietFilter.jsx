import { useState } from "react";

function DietFilter() {
  const [toggle, setToggle] = useState(true);

  function handleToggle() {
    toggle === true ? setToggle(false) : setToggle(true);
  }

  return (
    <div className="flex flex-col">
      <button onClick={handleToggle} className="filters-button">
        <span className="filters-tags">Diet</span>
        {toggle ? (
          <box-icon name="chevron-down"></box-icon>
        ) : (
          <box-icon name="chevron-up"></box-icon>
        )}
      </button>
      {!toggle && (
        <div className="flex flex-col">
          <div>
            <input type="checkbox" id="gluten-free" name="gluten-free"></input>
            <label for="gluten-free">Gluten Free</label>
          </div>
          <div>
            <input type="checkbox" id="ketogenic" name="ketogenic"></input>
            <label for="ketogenic">Ketogenic</label>
          </div>
          <div>
            <input type="checkbox" id="vegetarian" name="vegetarian"></input>
            <label for="vegetarian">Vegetarian</label>
          </div>
          <div>
            <input type="checkbox" id="lacto-veg" name="lacto-veg"></input>
            <label for="lacto-veg">Lacto-Vegetarian</label>
          </div>
          <div>
            <input type="checkbox" id="ovo-veg" name="ovo-veg"></input>
            <label for="ovo-veg">Ovo-Vegetarian</label>
          </div>
          <div>
            <input type="checkbox" id="vegan" name="vegan"></input>
            <label for="vegan">Vegan</label>
          </div>
          <div>
            <input type="checkbox" id="pescetarian" name="pescetarian"></input>
            <label for="pescetarian">Pescetarian</label>
          </div>
          <div>
            <input type="checkbox" id="paleo" name="paleo"></input>
            <label for="paleo">Paleo</label>
          </div>
          <div>
            <input type="checkbox" id="primal" name="primal"></input>
            <label for="primal">Primal</label>
          </div>
          <div>
            <input type="checkbox" id="low-fodmap" name="low-fodmap"></input>
            <label for="low-fodmap">Low FODMAP</label>
          </div>
          <div>
            <input type="checkbox" id="whole-30" name="whole-30"></input>
            <label for="whole-30">Whole30</label>
          </div>
        </div>
      )}
    </div>
  );
}

export default DietFilter;

/* 1.Need to use Redux/Context API to have a single handleToggle
 function for all my filters to reduce repeated code */

/* 2.Need to create a common class for alll these checkboxes */
