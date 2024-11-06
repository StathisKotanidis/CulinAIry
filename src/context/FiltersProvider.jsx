import { useContext, createContext, useReducer } from "react";

//1. Created  a custom context
const FiltersContext = createContext();

const initialState = {
  toggle: false,
  currentFilter: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_FILTER":
      if (action.payload !== state.currentFilter || state.toggle) {
        return { ...state, toggle: true, currentFilter: action.payload };
      } else if (!state.toggle || action.payload === state.currentFilter) {
        return { ...state, toggle: false, currentFilter: "" };
      }

    default:
      return state;
  }
}

function FiltersProvider({ children }) {
  const [{ toggle, currentFilter }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  // a function that handles the toggle functionality of each filter
  function handleToggle(filterName) {
    dispatch({ type: "TOGGLE_FILTER", payload: filterName });
  }

  // 2. How  i return  my context
  return (
    <FiltersContext.Provider
      value={{
        toggle,
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
