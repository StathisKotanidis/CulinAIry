import { useState } from "react";

function CuisineFilter() {
  const [toggle, setToggle] = useState(true);

  function handleToggle() {
    toggle === true ? setToggle(false) : setToggle(true);
  }

  return (
    <div className="flex flex-col">
      <button onClick={handleToggle}>Cuisine ⬇ </button>

      {!toggle && (
        <div className="flex flex-col">
          <div>
            <input type="checkbox" id="african" name="african"></input>
            <label for="african">African</label>
          </div>
          <div>
            <input type="checkbox" id="asian" name="asian"></input>
            <label for="asian">Asian</label>
          </div>
          <div>
            <input type="checkbox" id="american" name="american"></input>
            <label for="american">American</label>
          </div>
          <div>
            <input type="checkbox" id="british" name="british"></input>
            <label for="british">British</label>
          </div>
          <div>
            <input type="checkbox" id="cajun" name="cajun"></input>
            <label for="cajun">Cajun</label>
          </div>
          <div>
            <input type="checkbox" id="caribbean" name="caribbean"></input>
            <label for="caribbean">Caribbean</label>
          </div>
          <div>
            <input type="checkbox" id="chinese" name="chinese"></input>
            <label for="chinese">Chinese</label>
          </div>
          <div>
            <input type="checkbox" id="eastern-eu" name="eastern-eur"></input>
            <label for="eastern-eu">Eastern European</label>
          </div>
          <div>
            <input type="checkbox" id="european" name="european"></input>
            <label for="european">European</label>
          </div>
          <div>
            <input type="checkbox" id="french" name="french"></input>
            <label for="french">French</label>
          </div>
          <div>
            <input type="checkbox" id="german" name="german"></input>
            <label for="german">German</label>
          </div>
          <div>
            <input type="checkbox" id="greek" name="greek"></input>
            <label for="greek">Greek</label>
          </div>
          <div>
            <input type="checkbox" id="indian" name="indian"></input>
            <label for="indian">Indian</label>
          </div>
          <div>
            <input type="checkbox" id="irish" name="irish"></input>
            <label for="irish">Irish</label>
          </div>
          <div>
            <input type="checkbox" id="italian" name="italian"></input>
            <label for="italian">Italian</label>
          </div>
          <div>
            <input type="checkbox" id="japanese" name="japanese"></input>
            <label for="japanese">Japanese</label>
          </div>
          <div>
            <input type="checkbox" id="jewish" name="jewish"></input>
            <label for="jewish">Jewish</label>
          </div>
          <div>
            <input type="checkbox" id="korean" name="korean"></input>
            <label for="korean">Korean</label>
          </div>
          <div>
            <input type="checkbox" id="latin" name="latin"></input>
            <label for="latin">Latin American</label>
          </div>
          <div>
            <input type="checkbox" id="medit" name="medit"></input>
            <label for="mediterranean">Mediterranean</label>
          </div>
          <div>
            <input type="checkbox" id="mexican" name="mexican"></input>
            <label for="mexican">Mexican</label>
          </div>
          <div>
            <input type="checkbox" id="middle-east" name="middle-east"></input>
            <label for="middle-east">Middle Eastern</label>
          </div>
          <div>
            <input type="checkbox" id="nordic" name="nordic"></input>
            <label for="nordic">Nordic</label>
          </div>
          <div>
            <input type="checkbox" id="spanish" name="spanish"></input>
            <label for="spanish">Spanish</label>
          </div>
          <div>
            <input type="checkbox" id="thai" name="thai"></input>
            <label for="thai">Thai</label>
          </div>
          <div>
            <input type="checkbox" id="vietnamese" name="vietnamese"></input>
            <label for="vietnamese">Vietnamese</label>
          </div>
          <div>
            <input type="checkbox" id="southern" name="southern"></input>
            <label for="southern">Southern</label>
          </div>
        </div>
      )}
    </div>
  );
}

export default CuisineFilter;
