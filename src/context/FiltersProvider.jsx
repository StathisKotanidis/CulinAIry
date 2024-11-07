import { useContext, createContext, useReducer } from "react";

//1. Created  a custom context
const FiltersContext = createContext();

const initialState = {
  showFilters: false,
  toggles: {
    cuisine: false,
    intolerances: false,
    diet: false,
    nutrients: false,
    calories: false,
  },
  currentFilter: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_SPECIFIC_FILTER":
      const filterName = action.payload;
      return {
        ...state,
        toggles: {
          ...state.toggles,
          [filterName]: !state.toggles[filterName],
        },
      };
    case "TOGGLE_FILTERS":
      return { ...state, showFilters: action.payload };
    default:
      return state;
  }
}

function FiltersProvider({ children }) {
  const [{ toggles, showFilters }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  //a function that handles the toggle functionality of filters
  function handleFiltersToggle() {
    dispatch({ type: "TOGGLE_FILTERS", payload: !showFilters });
    console.log(`Showfilters after click is : ${showFilters}`);
  }

  // a function that handles the toggle functionality of each filter
  function handleToggle(filterName) {
    dispatch({ type: "TOGGLE_SPECIFIC_FILTER", payload: filterName });
  }

  // 2. How  i return  my context
  return (
    <FiltersContext.Provider
      value={{
        showFilters,
        onHandleFiltersToggle: handleFiltersToggle,
        toggles,
        onHandleToggle: handleToggle,
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
