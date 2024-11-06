import { useFilters } from "../context/FiltersProvider";

function IntolerancesFilter() {
  const { toggle, onHandleToggle } = useFilters();
  return (
    <div className="flex flex-col">
      <button
        onCLick={onHandleToggle("intolerances")}
        className="filters-button"
      >
        <span className="filters-tags">Intolerances</span>
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
        <div className="all-checkboxes-container">
          <div className="checkbox-container">
            <input type="checkbox" id="dairy" name="dairy"></input>
            <label for="dairy">Dairy</label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="egg" name="egg"></input>
            <label for="egg">Egg</label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="gluten" name="gluten"></input>
            <label for="gluten">Gluten</label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="grain" name="grain"></input>
            <label for="grain">Grain</label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="peanut" name="peanut"></input>
            <label for="peanut">Peanut</label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="seafood" name="seafood"></input>
            <label for="seafood">Seafood</label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="sesame" name="sesame"></input>
            <label for="sesame">Sesame</label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="paleo" name="paleo"></input>
            <label for="paleo">Paleo</label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="shellfish" name="shellfish"></input>
            <label for="shellfish">Shellfish</label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="soy" name="soy"></input>
            <label for="soy">Soy</label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="sulfite" name="sulfite"></input>
            <label for="sulfite">Sulfite</label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="tree-nut" name="tree-nut"></input>
            <label for="tree-nut">Tree Nut</label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="wheat" name="wheat"></input>
            <label for="wheat">Wheat</label>
          </div>
        </div>
      )}
    </div>
  );
}

export default IntolerancesFilter;
