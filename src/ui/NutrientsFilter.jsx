import { useState } from "react";

function NutrientsFilter() {
  const [toggle, setToggle] = useState(true);

  function handleToggle() {
    toggle === true ? setToggle(false) : setToggle(true);
  }
  return (
    <div className="flex flex-col">
      <button onClick={handleToggle} className="filters-button">
        <span>Nutrients</span>
        {toggle ? (
          <box-icon name="chevron-down"></box-icon>
        ) : (
          <box-icon name="chevron-up"></box-icon>
        )}
      </button>
      {!toggle && (
        <div className="flex flex-col">
          <div>
            <label for="protein">Protein</label>
            <input
              type="number"
              id="protein"
              name="protein"
              min="10"
              max="100"
            ></input>
          </div>
          <div>
            <label for="carbs">Carbs</label>
            <input
              type="number"
              id="carbs"
              name="carbs"
              min="10"
              max="100"
            ></input>
          </div>
          <div>
            <label for="cholesterol">Cholesterol</label>
            <input
              type="number"
              id="cholesterol"
              name="cholesterol"
              min="0"
              max="100"
            ></input>
          </div>
          <div>
            <label for="fat">Fat</label>
            <input type="number" id="fat" name="fat" min="1" max="100"></input>
          </div>
          <div>
            <label for="calcium">Calcium</label>
            <input
              type="mumber"
              id="calcium"
              name="calcium"
              min="0"
              max="100"
            ></input>
          </div>
          <div>
            <label for="fiber">Fiber</label>
            <input
              type="number"
              id="fiber"
              name="fiber"
              min="0"
              max="100"
            ></input>
          </div>
          <div>
            <label for="iron">Iron</label>
            <input
              type="number"
              id="iron"
              name="iron"
              min="0"
              max="100"
            ></input>
          </div>
          <div>
            <label for="zinc">Zinc</label>
            <input
              type="number"
              id="zinc"
              name="zinc"
              min="0"
              max="100"
            ></input>
          </div>
          <div>
            <label for="sugar">Sugar</label>
            <input
              type="number"
              id="sugar"
              name="sugar"
              min="0"
              max="100"
            ></input>
          </div>
          <div>
            <label for="sodium">Sodium</label>
            <input
              type="number"
              id="sodium"
              name="sodium"
              min="0"
              max="100"
            ></input>
          </div>
          <div>
            <label for="potassium">Potassium</label>
            <input
              type="number"
              id="potassium"
              name="potassium"
              min="0"
              max="100"
            ></input>
          </div>
          <div>
            <label for="phosphorus">Phosphorus</label>
            <input
              type="number"
              id="phosphorus"
              name="phosphorus"
              min="0"
              max="100"
            ></input>
          </div>
          <div>
            <label for="magnesium">Magnesium</label>
            <input
              type="number"
              id="magnesium"
              name="magnesium"
              min="0"
              max="100"
            ></input>
          </div>
          <div>
            <label for="vitaminA">Vitamin A</label>
            <input
              type="number"
              id="vitaminA"
              name="vitaminA"
              min="0"
              max="100"
            ></input>
          </div>
          <div>
            <label for="vitaminB">Vitamin B</label>
            <input
              type="number"
              id="vitaminB"
              name="vitaminB"
              min="0"
              max="100"
            ></input>
          </div>
          <div>
            <label for="vitaminC">Vitamin C</label>
            <input
              type="number"
              id="vitaminC"
              name="vitaminC"
              min="0"
              max="100"
            ></input>
          </div>
          <span>** the amount of grams per serving **</span>
        </div>
      )}
    </div>
  );
}

export default NutrientsFilter;
