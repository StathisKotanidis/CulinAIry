import { useState } from "react";

function IntolerancesFilter() {
  const [toggle, setToggle] = useState(true);

  function handleToggle() {
    toggle === true ? setToggle(false) : setToggle(true);
  }
  return (
    <div className="flex flex-col">
      <button onClick={handleToggle} className="filters-button">
        <span>Intolerances</span>
        {toggle ? (
          <box-icon name="chevron-down"></box-icon>
        ) : (
          <box-icon name="chevron-up"></box-icon>
        )}
      </button>
      {!toggle && (
        <div className="flex flex-col">
          <div>
            <input type="checkbox" id="dairy" name="dairy"></input>
            <label for="dairy">Dairy</label>
          </div>
          <div>
            <input type="checkbox" id="egg" name="egg"></input>
            <label for="egg">Egg</label>
          </div>
          <div>
            <input type="checkbox" id="gluten" name="gluten"></input>
            <label for="gluten">Gluten</label>
          </div>
          <div>
            <input type="checkbox" id="grain" name="grain"></input>
            <label for="grain">Grain</label>
          </div>
          <div>
            <input type="checkbox" id="peanut" name="peanut"></input>
            <label for="peanut">Peanut</label>
          </div>
          <div>
            <input type="checkbox" id="seafood" name="seafood"></input>
            <label for="seafood">Seafood</label>
          </div>
          <div>
            <input type="checkbox" id="sesame" name="sesame"></input>
            <label for="sesame">Sesame</label>
          </div>
          <div>
            <input type="checkbox" id="paleo" name="paleo"></input>
            <label for="paleo">Paleo</label>
          </div>
          <div>
            <input type="checkbox" id="shellfish" name="shellfish"></input>
            <label for="shellfish">Shellfish</label>
          </div>
          <div>
            <input type="checkbox" id="soy" name="soy"></input>
            <label for="soy">Soy</label>
          </div>
          <div>
            <input type="checkbox" id="sulfite" name="sulfite"></input>
            <label for="sulfite">Sulfite</label>
          </div>
          <div>
            <input type="checkbox" id="tree-nut" name="tree-nut"></input>
            <label for="tree-nut">Tree Nut</label>
          </div>
          <div>
            <input type="checkbox" id="wheat" name="wheat"></input>
            <label for="wheat">Wheat</label>
          </div>
        </div>
      )}
    </div>
  );
}

export default IntolerancesFilter;
