import { useFilters } from "./FiltersProvider";

function Nutrients() {
  const { toggles, handleToggles, handleNutrients } = useFilters();
  return (
    <div className="flex flex-col">
      <button
        onClick={() => handleToggles("nutrients")}
        className="filters-button"
      >
        <span className="filters-tags">Nutrients</span>
        {!toggles.nutrients ? (
          <div>
            <box-icon
              name="chevron-down"
              type="solid"
              size="1.8rem"
              color="#F8E8CC"
            ></box-icon>
          </div>
        ) : (
          <div>
            <box-icon
              name="chevron-up"
              type="solid"
              size="1.8rem"
              color="#F8E8CC"
            ></box-icon>
          </div>
        )}
      </button>
      {toggles.nutrients && (
        <div className="flex flex-col gap-4">
          <span className="pb-4 italic text-center text-eggWhite">
            ** amount of grams per serving **
          </span>
          <div className="nutrients-container">
            <label htmlFor="protein" className="nutrients-label">
              Protein (minimum)
            </label>
            <input
              className="nutrients-input"
              type="number"
              id="protein"
              name="protein"
              min="10"
              max="100"
              onChange={(e) => handleNutrients("protein", e)}
            ></input>
          </div>
          <div className="nutrients-container">
            <label htmlFor="carbs" className="nutrients-label">
              Carbs (maximum)
            </label>
            <input
              className="nutrients-input"
              type="number"
              id="carbs"
              name="carbs"
              min="10"
              max="100"
              onChange={(e) => handleNutrients("carbs", e)}
            ></input>
          </div>
          <div className="nutrients-container">
            <label htmlFor="cholesterol" className="nutrients-label">
              Cholesterol(maximum)
            </label>
            <input
              className="nutrients-input"
              type="number"
              id="cholesterol"
              name="cholesterol"
              min="0"
              max="100"
              onChange={(e) => handleNutrients("cholesterol", e)}
            ></input>
          </div>
          <div className="nutrients-container">
            <label htmlFor="fat" className="nutrients-label">
              Fat(maximum)
            </label>
            <input
              type="number"
              className="nutrients-input"
              id="fat"
              name="fat"
              min="1"
              max="100"
              onChange={(e) => handleNutrients("fat", e)}
            ></input>
          </div>
          <div className="nutrients-container">
            <label htmlFor="calcium" className="nutrients-label">
              Calcium(minimum)
            </label>
            <input
              className="nutrients-input"
              type="mumber"
              id="calcium"
              name="calcium"
              min="0"
              max="100"
              onChange={(e) => handleNutrients("calcium", e)}
            ></input>
          </div>
          <div className="nutrients-container">
            <label htmlFor="fiber" className="nutrients-label">
              Fiber(minimum)
            </label>
            <input
              className="nutrients-input"
              type="number"
              id="fiber"
              name="fiber"
              min="0"
              max="100"
              onChange={(e) => handleNutrients("fiber", e)}
            ></input>
          </div>
          <div className="nutrients-container">
            <label htmlFor="iron" className="nutrients-label">
              Iron(minimum)
            </label>
            <input
              className="nutrients-input"
              type="number"
              id="iron"
              name="iron"
              min="0"
              max="100"
              onChange={(e) => handleNutrients("iron", e)}
            ></input>
          </div>
          <div className="nutrients-container">
            <label htmlFor="zinc" className="nutrients-label">
              Zinc(minimum)
            </label>
            <input
              className="nutrients-input"
              type="number"
              id="zinc"
              name="zinc"
              min="0"
              max="100"
              onChange={(e) => handleNutrients("zinc", e)}
            ></input>
          </div>
          <div className="nutrients-container">
            <label htmlFor="sugar" className="nutrients-label">
              Sugar(maximum)
            </label>
            <input
              className="nutrients-input"
              type="number"
              id="sugar"
              name="sugar"
              min="0"
              max="100"
              onChange={(e) => handleNutrients("sugar", e)}
            ></input>
          </div>
          <div className="nutrients-container">
            <label htmlFor="sodium" className="nutrients-label">
              Sodium (maximum)
            </label>
            <input
              className="nutrients-input"
              type="number"
              id="sodium"
              name="sodium"
              min="0"
              max="100"
              onChange={(e) => handleNutrients("sodium", e)}
            ></input>
          </div>
          <div className="nutrients-container">
            <label htmlFor="potassium" className="nutrients-label">
              Potassium (minimum)
            </label>
            <input
              className="nutrients-input"
              type="number"
              id="potassium"
              name="potassium"
              min="0"
              max="100"
              onChange={(e) => handleNutrients("potassium", e)}
            ></input>
          </div>
          <div className="nutrients-container">
            <label htmlFor="phosphorus" className="nutrients-label">
              Phosphorus (minimum)
            </label>
            <input
              className="nutrients-input"
              type="number"
              id="phosphorus"
              name="phosphorus"
              min="0"
              max="100"
              onChange={(e) => handleNutrients("phosphorus", e)}
            ></input>
          </div>
          <div className="nutrients-container">
            <label htmlFor="magnesium" className="nutrients-label">
              Magnesium (minimum)
            </label>
            <input
              className="nutrients-input"
              type="number"
              id="magnesium"
              name="magnesium"
              min="0"
              max="100"
              onChange={(e) => handleNutrients("magnesium", e)}
            ></input>
          </div>
          <div className="nutrients-container">
            <label htmlFor="vitaminA" className="nutrients-label">
              Vitamin A (minimum)
            </label>
            <input
              className="nutrients-input"
              type="number"
              id="vitaminA"
              name="vitaminA"
              min="0"
              max="100"
              onChange={(e) => handleNutrients("vitaminA", e)}
            ></input>
          </div>
          <div className="nutrients-container">
            <label htmlFor="vitaminB" className="nutrients-label">
              Vitamin B (minimum)
            </label>
            <input
              className="nutrients-input"
              type="number"
              id="vitaminB"
              name="vitaminB"
              min="0"
              max="100"
              onChange={(e) => handleNutrients("vitaminB", e)}
            ></input>
          </div>
          <div className="nutrients-container">
            <label htmlFor="vitaminC" className="nutrients-label">
              Vitamin C (minimum)
            </label>
            <input
              className="nutrients-input"
              type="number"
              id="vitaminC"
              name="vitaminC"
              min="0"
              max="100"
              onChange={(e) => handleNutrients("vitaminC", e)}
            ></input>
          </div>
        </div>
      )}
    </div>
  );
}

export default Nutrients;
