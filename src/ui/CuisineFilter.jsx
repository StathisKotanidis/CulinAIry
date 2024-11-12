import { useFilters } from "../context/FiltersProvider";

function CuisineFilter() {
  const { toggles, onHandleToggle, cuisineInput, handleCuisineInput } =
    useFilters();

  return (
    <div className="flex flex-col">
      <button
        onClick={() => onHandleToggle("cuisine")}
        className="filters-button"
      >
        <span className="filters-tags">Cuisine</span>
        {!toggles.cuisine ? (
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

      {toggles.cuisine && (
        <div className="all-checkboxes-container">
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="african"
              name="african"
              value="African"
              onChange={handleCuisineInput}
              disabled={cuisineInput && cuisineInput !== "African"}
            ></input>
            <label htmlFor="african">African</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="asian"
              name="asian"
              value="Asian"
              onChange={handleCuisineInput}
              disabled={cuisineInput && cuisineInput !== "Asian"}
            ></input>
            <label htmlFor="asian">Asian</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="american"
              name="american"
              value="American"
              onChange={handleCuisineInput}
              disabled={cuisineInput && cuisineInput !== "American"}
            ></input>
            <label htmlFor="american">American</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="british"
              name="british"
              value="British"
              onChange={handleCuisineInput}
              disabled={cuisineInput && cuisineInput !== "British"}
            ></input>
            <label htmlFor="british">British</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="cajun"
              name="cajun"
              value="Cajun"
              onChange={handleCuisineInput}
              disabled={cuisineInput && cuisineInput !== "Cajun"}
            ></input>
            <label htmlFor="cajun">Cajun</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="caribbean"
              name="caribbean"
              value="Caribbean"
              onChange={handleCuisineInput}
              disabled={cuisineInput && cuisineInput !== "Caribbean"}
            ></input>
            <label htmlFor="caribbean">Caribbean</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="chinese"
              name="chinese"
              value="Chinese"
              onChange={handleCuisineInput}
              disabled={cuisineInput && cuisineInput !== "Chinese"}
            ></input>
            <label htmlFor="chinese">Chinese</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="eastern-eu"
              name="eastern-eur"
              value="Eastern Europe"
              onChange={handleCuisineInput}
              disabled={cuisineInput && cuisineInput !== "Eastern Europe"}
            ></input>
            <label htmlFor="eastern-eu">Eastern European</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="european"
              name="european"
              value="European"
              onChange={handleCuisineInput}
              disabled={cuisineInput && cuisineInput !== "European"}
            ></input>
            <label htmlFor="european">European</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="french"
              name="french"
              value="French"
              onChange={handleCuisineInput}
              disabled={cuisineInput && cuisineInput !== "French"}
            ></input>
            <label htmlFor="french">French</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="german"
              name="german"
              value="German"
              onChange={handleCuisineInput}
              disabled={cuisineInput && cuisineInput !== "German"}
            ></input>
            <label htmlFor="german">German</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="greek"
              name="greek"
              value="Greek"
              onChange={handleCuisineInput}
              disabled={cuisineInput && cuisineInput !== "Greek"}
            ></input>
            <label htmlFor="greek">Greek</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="indian"
              name="indian"
              value="Indian"
              onChange={handleCuisineInput}
              disabled={cuisineInput && cuisineInput !== "Indian"}
            ></input>
            <label htmlFor="indian">Indian</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="irish"
              name="irish"
              value="Irish"
              onChange={handleCuisineInput}
              disabled={cuisineInput && cuisineInput !== "Irish"}
            ></input>
            <label htmlFor="irish">Irish</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="italian"
              name="italian"
              value="Italian"
              onChange={handleCuisineInput}
              disabled={cuisineInput && cuisineInput !== "Italian"}
            ></input>
            <label htmlFor="italian">Italian</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="japanese"
              name="japanese"
              value="Japanese"
              onChange={handleCuisineInput}
              disabled={cuisineInput && cuisineInput !== "Japanese"}
            ></input>
            <label htmlFor="japanese">Japanese</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="jewish"
              name="jewish"
              value="Jewish"
              onChange={handleCuisineInput}
              disabled={cuisineInput && cuisineInput !== "Jewish"}
            ></input>
            <label htmlFor="jewish">Jewish</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="korean"
              name="korean"
              value="Korean"
              onChange={handleCuisineInput}
              disabled={cuisineInput && cuisineInput !== "Korean"}
            ></input>
            <label htmlFor="korean">Korean</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="latin"
              name="latin"
              value="Latin American"
              onChange={handleCuisineInput}
              disabled={cuisineInput && cuisineInput !== "Latin American"}
            ></input>
            <label htmlFor="latin">Latin American</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="medit"
              name="medit"
              value="Mediterranean"
              onChange={handleCuisineInput}
              disabled={cuisineInput && cuisineInput !== "Mediterranean"}
            ></input>
            <label htmlFor="mediterranean">Mediterranean</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="mexican"
              name="mexican"
              value="Mexican"
              onChange={handleCuisineInput}
              disabled={cuisineInput && cuisineInput !== "Mexican"}
            ></input>
            <label htmlFor="mexican">Mexican</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="middle-east"
              name="middle-east"
              value="Middle Eastern"
              onChange={handleCuisineInput}
              disabled={cuisineInput && cuisineInput !== "Middle Eastern"}
            ></input>
            <label htmlFor="middle-east">Middle Eastern</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="nordic"
              name="nordic"
              value="Nordic"
              onChange={handleCuisineInput}
              disabled={cuisineInput && cuisineInput !== "Nordic"}
            ></input>
            <label htmlFor="nordic">Nordic</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="spanish"
              name="spanish"
              value="Spanish"
              onChange={handleCuisineInput}
              disabled={cuisineInput && cuisineInput !== "Spanish"}
            ></input>
            <label htmlFor="spanish">Spanish</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="thai"
              name="thai"
              value="Thai"
              onChange={handleCuisineInput}
              disabled={cuisineInput && cuisineInput !== "Thai"}
            ></input>
            <label htmlFor="thai">Thai</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="vietnamese"
              name="vietnamese"
              value="Vietnamese"
              onChange={handleCuisineInput}
              disabled={cuisineInput && cuisineInput !== "Vietnamese"}
            ></input>
            <label htmlFor="vietnamese">Vietnamese</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="southern"
              name="southern"
              value="Southern"
              onChange={handleCuisineInput}
              disabled={cuisineInput && cuisineInput !== "Southern"}
            ></input>
            <label htmlFor="southern">Southern</label>
          </div>
        </div>
      )}
    </div>
  );
}

export default CuisineFilter;
