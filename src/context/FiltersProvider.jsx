import { useContext, createContext, useReducer } from "react";

//1. Created  a custom context
const FiltersContext = createContext();

const initialState = {
  toggles: {
    filters: false,
    cuisine: false,
    intolerances: false,
    diet: false,
    nutrients: false,
    calories: false,
  },
  currentFilter: "",
  dietInput: "",
  cuisineInput: "",
  intoleranceInput: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_FILTERS":
      const filterName = action.payload;
      return {
        ...state,
        toggles: {
          ...state.toggles,
          [filterName]: !state.toggles[filterName],
        },
      };
    case "DIET_INPUT":
      return { ...state, dietInput: action.payload };
    case "CUISINE_INPUT":
      return { ...state, cuisineInput: action.payload };
    case "CUISINE_INPUT":
      return { ...state, cuisineInput: action.payload };

    default:
      return state;
  }
}

function FiltersProvider({ children }) {
  const [{ toggles, dietInput, cuisineInput, intoleranceInput }, dispatch] =
    useReducer(reducer, initialState);

  // a function that handles the toggle functionality of each filter
  function handleToggle(filterName) {
    dispatch({ type: "TOGGLE_FILTERS", payload: filterName });
  }

  // a function that handles the  diet input (can only be one input)
  function handleDietInput(e) {
    const selectedDiet = e.target.value;
    dispatch({
      type: "DIET_INPUT",
      payload: dietInput === selectedDiet ? "" : selectedDiet,
    });
  }

  // a function that handles the cuisine input (can be only one input)
  function handleCuisineInput(e) {
    const selectedCuisine = e.target.value;
    dispatch({
      type: "CUISINE_INPUT",
      payload: cuisineInput === selectedCuisine ? "" : selectedCuisine,
    });
  }

  // a function that handles the intolerance input (can be only one input)
  function handleIntoleranceInputs(e) {
    const selectedIntolerances = [];
    dispatch({
      type: "INTOLERANCE_INPUTS",
      payload:
        intoleranceInput === selectedIntolerance ? "" : selectedIntolerance,
    });
  }

  // 2.This is where i return my provider
  return (
    <FiltersContext.Provider
      value={{
        toggles,
        onHandleToggle: handleToggle,
        dietInput,
        handleDietInput,
        cuisineInput,
        handleCuisineInput,
        intoleranceInput,
        handleIntoleranceInput,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}

//3. Created a custom hook
function useFilters() {
  const context = useContext(FiltersContext);
  return context;
}

export { FiltersProvider, useFilters };
