import { useFilters } from "../context/FiltersProvider";

function IntolerancesFilter() {
  const { toggles, onHandleToggle } = useFilters();
  return (
    <div className="flex flex-col">
      <button
        onClick={() => onHandleToggle("intolerances")}
        className="filters-button"
      >
        <span className="filters-tags">Intolerances</span>
        {toggles.intolerances ? (
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
      {!toggles.intolerances && (
        <div className="all-checkboxes-container">
          <div className="checkbox-container">
            <input type="checkbox" id="dairy" name="dairy"></input>
            <label htmlFor="dairy">Dairy</label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="egg" name="egg"></input>
            <label htmlFor="egg">Egg</label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="gluten" name="gluten"></input>
            <label htmlFor="gluten">Gluten</label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="grain" name="grain"></input>
            <label htmlFor="grain">Grain</label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="peanut" name="peanut"></input>
            <label htmlFor="peanut">Peanut</label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="seafood" name="seafood"></input>
            <label htmlFor="seafood">Seafood</label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="sesame" name="sesame"></input>
            <label htmlFor="sesame">Sesame</label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="paleo" name="paleo"></input>
            <label htmlFor="paleo">Paleo</label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="shellfish" name="shellfish"></input>
            <label htmlFor="shellfish">Shellfish</label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="soy" name="soy"></input>
            <label htmlFor="soy">Soy</label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="sulfite" name="sulfite"></input>
            <label htmlFor="sulfite">Sulfite</label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="tree-nut" name="tree-nut"></input>
            <label htmlFor="tree-nut">Tree Nut</label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="wheat" name="wheat"></input>
            <label htmlFor="wheat">Wheat</label>
          </div>
        </div>
      )}
    </div>
  );
}

export default IntolerancesFilter;
