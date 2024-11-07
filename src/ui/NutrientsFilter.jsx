import { useFilters } from "../context/FiltersProvider";

function NutrientsFilter() {
  const { toggles, onHandleToggle } = useFilters();
  return (
    <div className="flex flex-col">
      <button
        onClick={() => onHandleToggle("nutrients")}
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
          <div className="nutrients-container">
            <label htmlFor="protein" className="nutrients-label">
              Protein
            </label>
            <input
              className="nutrients-input"
              type="number"
              id="protein"
              name="protein"
              min="10"
              max="100"
            ></input>
          </div>
          <div className="nutrients-container">
            <label htmlFor="carbs" className="nutrients-label">
              Carbs
            </label>
            <input
              className="nutrients-input"
              type="number"
              id="carbs"
              name="carbs"
              min="10"
              max="100"
            ></input>
          </div>
          <div className="nutrients-container">
            <label htmlFor="cholesterol" className="nutrients-label">
              Cholesterol
            </label>
            <input
              className="nutrients-input"
              type="number"
              id="cholesterol"
              name="cholesterol"
              min="0"
              max="100"
            ></input>
          </div>
          <div className="nutrients-container">
            <label htmlFor="fat" className="nutrients-label">
              Fat
            </label>
            <input
              type="number"
              className="nutrients-input"
              id="fat"
              name="fat"
              min="1"
              max="100"
            ></input>
          </div>
          <div className="nutrients-container">
            <label htmlFor="calcium" className="nutrients-label">
              Calcium
            </label>
            <input
              className="nutrients-input"
              type="mumber"
              id="calcium"
              name="calcium"
              min="0"
              max="100"
            ></input>
          </div>
          <div className="nutrients-container">
            <label htmlFor="fiber" className="nutrients-label">
              Fiber
            </label>
            <input
              className="nutrients-input"
              type="number"
              id="fiber"
              name="fiber"
              min="0"
              max="100"
            ></input>
          </div>
          <div className="nutrients-container">
            <label htmlFor="iron" className="nutrients-label">
              Iron
            </label>
            <input
              className="nutrients-input"
              type="number"
              id="iron"
              name="iron"
              min="0"
              max="100"
            ></input>
          </div>
          <div className="nutrients-container">
            <label htmlFor="zinc" className="nutrients-label">
              Zinc
            </label>
            <input
              className="nutrients-input"
              type="number"
              id="zinc"
              name="zinc"
              min="0"
              max="100"
            ></input>
          </div>
          <div className="nutrients-container">
            <label htmlFor="sugar" className="nutrients-label">
              Sugar
            </label>
            <input
              className="nutrients-input"
              type="number"
              id="sugar"
              name="sugar"
              min="0"
              max="100"
            ></input>
          </div>
          <div className="nutrients-container">
            <label htmlFor="sodium" className="nutrients-label">
              Sodium
            </label>
            <input
              className="nutrients-input"
              type="number"
              id="sodium"
              name="sodium"
              min="0"
              max="100"
            ></input>
          </div>
          <div className="nutrients-container">
            <label htmlFor="potassium" className="nutrients-label">
              Potassium
            </label>
            <input
              className="nutrients-input"
              type="number"
              id="potassium"
              name="potassium"
              min="0"
              max="100"
            ></input>
          </div>
          <div className="nutrients-container">
            <label htmlFor="phosphorus" className="nutrients-label">
              Phosphorus
            </label>
            <input
              className="nutrients-input"
              type="number"
              id="phosphorus"
              name="phosphorus"
              min="0"
              max="100"
            ></input>
          </div>
          <div className="nutrients-container">
            <label htmlFor="magnesium" className="nutrients-label">
              Magnesium
            </label>
            <input
              className="nutrients-input"
              type="number"
              id="magnesium"
              name="magnesium"
              min="0"
              max="100"
            ></input>
          </div>
          <div className="nutrients-container">
            <label htmlFor="vitaminA" className="nutrients-label">
              Vitamin A
            </label>
            <input
              className="nutrients-input"
              type="number"
              id="vitaminA"
              name="vitaminA"
              min="0"
              max="100"
            ></input>
          </div>
          <div className="nutrients-container">
            <label htmlFor="vitaminB" className="nutrients-label">
              Vitamin B
            </label>
            <input
              className="nutrients-input"
              type="number"
              id="vitaminB"
              name="vitaminB"
              min="0"
              max="100"
            ></input>
          </div>
          <div className="nutrients-container">
            <label htmlFor="vitaminC" className="nutrients-label">
              Vitamin C
            </label>
            <input
              className="nutrients-input"
              type="number"
              id="vitaminC"
              name="vitaminC"
              min="0"
              max="100"
            ></input>
          </div>
          <span className="pt-8 text-center italic text-eggWhite">
            ** amount of grams per serving **
          </span>
        </div>
      )}
    </div>
  );
}

export default NutrientsFilter;
