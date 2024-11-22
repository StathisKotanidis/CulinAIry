import { useFilters } from "./FiltersProvider";

function IntolerancesFilter() {
  const { toggles, onHandleToggle, handleFilters } = useFilters();

  return (
    <div className="flex flex-col">
      <button
        onClick={() => onHandleToggle("intolerances")}
        className="filters-button"
      >
        <span className="filters-tags">Intolerances</span>
        {!toggles.intolerances ? (
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
      {toggles.intolerances && (
        <div className="all-checkboxes-container">
          <div className="checkbox-container">
            <input
              type="checkbox"
              value="Dairy"
              id="dairy"
              name="dairy"
              onChange={(e) => handleFilters("intolerance", e)}
            ></input>
            <label htmlFor="dairy">Dairy</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              value="Egg"
              id="egg"
              name="egg"
              onChange={(e) => handleFilters("intolerance", e)}
            ></input>
            <label htmlFor="egg">Egg</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              value="Gluten"
              id="gluten"
              name="gluten"
              onChange={(e) => handleFilters("intolerance", e)}
            ></input>
            <label htmlFor="gluten">Gluten</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              value="Grain"
              id="grain"
              name="grain"
              onChange={(e) => handleFilters("intolerance", e)}
            ></input>
            <label htmlFor="grain">Grain</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              value="Peanut"
              id="peanut"
              name="peanut"
              onChange={(e) => handleFilters("intolerance", e)}
            ></input>
            <label htmlFor="peanut">Peanut</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              value="Seafood"
              id="seafood"
              name="seafood"
              onChange={(e) => handleFilters("intolerance", e)}
            ></input>
            <label htmlFor="seafood">Seafood</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              value="Sesame"
              id="sesame"
              name="sesame"
              onChange={(e) => handleFilters("intolerance", e)}
            ></input>
            <label htmlFor="sesame">Sesame</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              value="Paleo"
              id="paleo"
              name="paleo"
              onChange={(e) => handleFilters("intolerance", e)}
            ></input>
            <label htmlFor="paleo">Paleo</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              value="Shellfish"
              id="shellfish"
              name="shellfish"
              onChange={(e) => handleFilters("intolerance", e)}
            ></input>
            <label htmlFor="shellfish">Shellfish</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              value="Soy"
              id="soy"
              name="soy"
              onChange={(e) => handleFilters("intolerance", e)}
            ></input>
            <label htmlFor="soy">Soy</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              value="Sulfite"
              id="sulfite"
              name="sulfite"
              onChange={(e) => handleFilters("intolerance", e)}
            ></input>
            <label htmlFor="sulfite">Sulfite</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              value="Tree Nut"
              id="tree-nut"
              name="tree-nut"
              onChange={(e) => handleFilters("intolerance", e)}
            ></input>
            <label htmlFor="tree-nut">Tree Nut</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              value="Wheat"
              id="wheat"
              name="wheat"
              onChange={(e) => handleFilters("intolerance", e)}
            ></input>
            <label htmlFor="wheat">Wheat</label>
          </div>
        </div>
      )}
    </div>
  );
}

export default IntolerancesFilter;
