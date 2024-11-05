import { useState } from "react";
function CaloriesFilter() {
  const [toggle, setToggle] = useState(true);

  function handleToggle() {
    toggle === true ? setToggle(false) : setToggle(true);
  }

  return (
    <div className="flex flex-col">
      <button onClick={handleToggle} className="filters-button">
        <span className="filters-tags">Calories</span>
        {toggle ? (
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
      {!toggle && (
        <div className="flex flex-col">
          <div classname="flex">
            <label for="calories">Calories</label>
            <input type="number" id="calories" name="calories"></input>
          </div>
        </div>
      )}
    </div>
  );
}

export default CaloriesFilter;
