import { useFilters } from "./FiltersProvider";

function Cuisine() {
  const { toggles, handleToggles, filters, handleFilters } = useFilters();

  return (
    <div className="flex flex-col">
      <button
        onClick={() => handleToggles("cuisine")}
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
              onChange={(e) => handleFilters("cuisine", e)}
              disabled={filters.cuisine && filters.cuisine !== "African"}
            ></input>
            <label htmlFor="african">African</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="asian"
              name="asian"
              value="Asian"
              onChange={(e) => handleFilters("cuisine", e)}
              disabled={filters.cuisine && filters.cuisine !== "Asian"}
            ></input>
            <label htmlFor="asian">Asian</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="american"
              name="american"
              value="American"
              onChange={(e) => handleFilters("cuisine", e)}
              disabled={filters.cuisine && filters.cuisine !== "American"}
            ></input>
            <label htmlFor="american">American</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="british"
              name="british"
              value="British"
              onChange={(e) => handleFilters("cuisine", e)}
              disabled={filters.cuisine && filters.cuisine !== "British"}
            ></input>
            <label htmlFor="british">British</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="cajun"
              name="cajun"
              value="Cajun"
              onChange={(e) => handleFilters("cuisine", e)}
              disabled={filters.cuisine && filters.cuisine !== "Cajun"}
            ></input>
            <label htmlFor="cajun">Cajun</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="caribbean"
              name="caribbean"
              value="Caribbean"
              onChange={(e) => handleFilters("cuisine", e)}
              disabled={filters.cuisine && filters.cuisine !== "Caribbean"}
            ></input>
            <label htmlFor="caribbean">Caribbean</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="chinese"
              name="chinese"
              value="Chinese"
              onChange={(e) => handleFilters("cuisine", e)}
              disabled={filters.cuisine && filters.cuisine !== "Chinese"}
            ></input>
            <label htmlFor="chinese">Chinese</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="eastern-eu"
              name="eastern-eur"
              value="Eastern Europe"
              onChange={(e) => handleFilters("cuisine", e)}
              disabled={filters.cuisine && filters.cuisine !== "Eastern Europe"}
            ></input>
            <label htmlFor="eastern-eu">Eastern European</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="european"
              name="european"
              value="European"
              onChange={(e) => handleFilters("cuisine", e)}
              disabled={filters.cuisine && filters.cuisine !== "European"}
            ></input>
            <label htmlFor="european">European</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="french"
              name="french"
              value="French"
              onChange={(e) => handleFilters("cuisine", e)}
              disabled={filters.cuisine && filters.cuisine !== "French"}
            ></input>
            <label htmlFor="french">French</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="german"
              name="german"
              value="German"
              onChange={(e) => handleFilters("cuisine", e)}
              disabled={filters.cuisine && filters.cuisine !== "German"}
            ></input>
            <label htmlFor="german">German</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="greek"
              name="greek"
              value="Greek"
              onChange={(e) => handleFilters("cuisine", e)}
              disabled={filters.cuisine && filters.cuisine !== "Greek"}
            ></input>
            <label htmlFor="greek">Greek</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="indian"
              name="indian"
              value="Indian"
              onChange={(e) => handleFilters("cuisine", e)}
              disabled={filters.cuisine && filters.cuisine !== "Indian"}
            ></input>
            <label htmlFor="indian">Indian</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="irish"
              name="irish"
              value="Irish"
              onChange={(e) => handleFilters("cuisine", e)}
              disabled={filters.cuisine && filters.cuisine !== "Irish"}
            ></input>
            <label htmlFor="irish">Irish</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="italian"
              name="italian"
              value="Italian"
              onChange={(e) => handleFilters("cuisine", e)}
              disabled={filters.cuisine && filters.cuisine !== "Italian"}
            ></input>
            <label htmlFor="italian">Italian</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="japanese"
              name="japanese"
              value="Japanese"
              onChange={(e) => handleFilters("cuisine", e)}
              disabled={filters.cuisine && filters.cuisine !== "Japanese"}
            ></input>
            <label htmlFor="japanese">Japanese</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="jewish"
              name="jewish"
              value="Jewish"
              onChange={(e) => handleFilters("cuisine", e)}
              disabled={filters.cuisine && filters.cuisine !== "Jewish"}
            ></input>
            <label htmlFor="jewish">Jewish</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="korean"
              name="korean"
              value="Korean"
              onChange={(e) => handleFilters("cuisine", e)}
              disabled={filters.cuisine && filters.cuisine !== "Korean"}
            ></input>
            <label htmlFor="korean">Korean</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="latin"
              name="latin"
              value="Latin American"
              onChange={(e) => handleFilters("cuisine", e)}
              disabled={filters.cuisine && filters.cuisine !== "Latin American"}
            ></input>
            <label htmlFor="latin">Latin American</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="medit"
              name="medit"
              value="Mediterranean"
              onChange={(e) => handleFilters("cuisine", e)}
              disabled={filters.cuisine && filters.cuisine !== "Mediterranean"}
            ></input>
            <label htmlFor="mediterranean">Mediterranean</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="mexican"
              name="mexican"
              value="Mexican"
              onChange={(e) => handleFilters("cuisine", e)}
              disabled={filters.cuisine && filters.cuisine !== "Mexican"}
            ></input>
            <label htmlFor="mexican">Mexican</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="middle-east"
              name="middle-east"
              value="Middle Eastern"
              onChange={(e) => handleFilters("cuisine", e)}
              disabled={filters.cuisine && filters.cuisine !== "Middle Eastern"}
            ></input>
            <label htmlFor="middle-east">Middle Eastern</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="nordic"
              name="nordic"
              value="Nordic"
              onChange={(e) => handleFilters("cuisine", e)}
              disabled={filters.cuisine && filters.cuisine !== "Nordic"}
            ></input>
            <label htmlFor="nordic">Nordic</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="spanish"
              name="spanish"
              value="Spanish"
              onChange={(e) => handleFilters("cuisine", e)}
              disabled={filters.cuisine && filters.cuisine !== "Spanish"}
            ></input>
            <label htmlFor="spanish">Spanish</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="thai"
              name="thai"
              value="Thai"
              onChange={(e) => handleFilters("cuisine", e)}
              disabled={filters.cuisine && filters.cuisine !== "Thai"}
            ></input>
            <label htmlFor="thai">Thai</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="vietnamese"
              name="vietnamese"
              value="Vietnamese"
              onChange={(e) => handleFilters("cuisine", e)}
              disabled={filters.cuisine && filters.cuisine !== "Vietnamese"}
            ></input>
            <label htmlFor="vietnamese">Vietnamese</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="southern"
              name="southern"
              value="Southern"
              onChange={(e) => handleFilters("cuisine", e)}
              disabled={filters.cuisine && filters.cuisine !== "Southern"}
            ></input>
            <label htmlFor="southern">Southern</label>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cuisine;
