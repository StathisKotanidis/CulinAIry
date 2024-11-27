import { useContext, createContext, useReducer, useEffect } from "react";

//1. Created  a custom context
const FiltersContext = createContext();

const initialState = {
  apiKey: import.meta.env.VITE_SPOONACULAR_API_KEY,
  baseURL: "",
  showFilters: true,
  currentFilter: "",
  offset: 0,
  toggles: {
    filters: false,
    cuisine: false,
    intolerances: false,
    diet: false,
    nutrients: false,
    calories: false,
  },
  filters: {
    diet: "",
    cuisine: "",
    ingredient: "",
    calories: "",
    intolerances: [],
  },
  nutrients: {
    protein: "",
    carbs: "",
    cholesterol: "",
    fat: "",
    calcium: "",
    fiber: "",
    iron: "",
    zinc: "",
    sugar: "",
    sodium: "",
    potassium: "",
    phosphorus: "",
    magnesium: "",
    vitaminA: "",
    vitaminB: "",
    vitaminC: "",
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_FILTERS":
      const filterName = action.payload;
      if (filterName === "filters") {
        // Toggle the `filters` menu independently
        return {
          ...state,
          toggles: {
            ...state.toggles,
            filters: !state.toggles.filters,
          },
        };
      }

      // For individual filters, toggle only the selected filter and close others
      return {
        ...state,
        toggles: {
          ...state.toggles,
          filters: state.toggles.filters, // Keep the main `filters` menu as is
          cuisine: filterName === "cuisine" ? !state.toggles.cuisine : false,
          intolerances:
            filterName === "intolerances" ? !state.toggles.intolerances : false,
          diet: filterName === "diet" ? !state.toggles.diet : false,
          nutrients:
            filterName === "nutrients" ? !state.toggles.nutrients : false,
          calories: filterName === "calories" ? !state.toggles.calories : false,
        },
      };

    case "DIET_INPUT":
      const selectedDiet = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          diet: state.filters.diet === selectedDiet ? "" : selectedDiet,
        },
      };
    case "CUISINE_INPUT":
      const selectedCuisine = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          cuisine:
            state.filters.cuisine === selectedCuisine ? "" : selectedCuisine,
        },
      };
    case "INGREDIENT_INPUT":
      return {
        ...state,
        filters: { ...state.filters, ingredient: action.payload },
      };
    case "CALORIES_INPUT":
      return {
        ...state,
        filters: { ...state.filters, calories: action.payload },
      };

    case "INTOLERANCES_INPUTS":
      const selectedIntolerance = action.payload;
      let intolerancesArray;

      if (state.filters.intolerances.includes(selectedIntolerance)) {
        intolerancesArray = state.filters.intolerances.filter(
          (intolerance) => intolerance !== selectedIntolerance,
        );
      } else {
        intolerancesArray = [
          ...state.filters.intolerances,
          selectedIntolerance,
        ];
      }

      return {
        ...state,
        filters: {
          ...state.filters,
          intolerances: intolerancesArray,
        },
      };

    case "NUTRIENTS_INPUTS":
      const { nutrientName, selectedNutrient } = action.payload;
      return {
        ...state,
        nutrients: {
          ...state.nutrients,
          [nutrientName]: selectedNutrient,
        },
      };
    case "UPDATE_BASE_URL":
      return {
        ...state,
        baseURL: action.payload,
      };
    case "CLEAR_URL":
      return initialState;
    case "INCREMENT_OFFSET":
      return { ...state, offset: state.offset + 5 };
    default:
      return state;
  }
}

function FiltersProvider({ children }) {
  const [{ apiKey, baseURL, toggles, offset, filters, nutrients }, dispatch] =
    useReducer(reducer, initialState);

  // a function that handles the toggle functionality of each filter
  function handleToggles(filterName) {
    dispatch({ type: "TOGGLE_FILTERS", payload: filterName });
  }

  // a function that handles all the filters inputs (nutrients treated separately)
  function handleFilters(filterName, e) {
    if (filterName === "ingredient")
      dispatch({ type: "INGREDIENT_INPUT", payload: e.target.value });
    if (filterName === "diet")
      dispatch({ type: "DIET_INPUT", payload: e.target.value });
    if (filterName === "cuisine")
      dispatch({ type: "CUISINE_INPUT", payload: e.target.value });
    if (filterName === "intolerance")
      dispatch({ type: "INTOLERANCES_INPUTS", payload: e.target.value });
    if (filterName === "calories")
      dispatch({ type: "CALORIES_INPUT", payload: e.target.value });
  }

  //a function that handles the nutrients inputs
  function handleNutrients(nutrientName, e) {
    const selectedNutrient = e.target.value;
    dispatch({
      type: "NUTRIENTS_INPUTS",
      payload: { selectedNutrient, nutrientName },
    });
  }

  // a function that resets the state
  function handleClearUrl() {
    dispatch({ type: "CLEAR_URL" });
  }

  //a function that increments offset
  function handleOffset() {
    dispatch({ type: "INCREMENT_OFFSET" });
  }

  useEffect(() => {
    // Dynamically build the baseURL based on which filters the user selected
    const buildURL = () => {
      let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=5&offset=${offset}`;
      if (filters.ingredient) url += `&query=${filters.ingredient}`;
      if (filters.diet) url += `&diet=${filters.diet}`;
      if (filters.cuisine) url += `&cuisine=${filters.cuisine}`;
      if (filters.intolerances.length >= 1)
        url += `&intolerances=${filters.intolerances.join()}`;
      if (filters.calories) url += `&maxCalories=${filters.calories}`;
      if (nutrients.protein) url += `&minProtein=${nutrients.protein}`;
      if (nutrients.carbs) url += `&maxCarbs=${nutrients.carbs}`;
      if (nutrients.cholesterol)
        url += `&maxCholesterol=${nutrients.cholesterol}`;
      if (nutrients.fat) url += `&maxFat=${nutrients.fat}`;
      if (nutrients.calcium) url += `&minCalcium=${nutrients.calcium}`;
      if (nutrients.fiber) url += `&minFiber=${nutrients.fiber}`;
      if (nutrients.iron) url += `&minIron=${nutrients.iron}`;
      if (nutrients.zinc) url += `&minZinc=${nutrients.zinc}`;
      if (nutrients.sugar) url += `&maxSugar=${nutrients.sugar}`;
      if (nutrients.potassium) url += `&minPotassium=${nutrients.potassium}`;
      if (nutrients.sodium) url += `&maxSodium=${nutrients.sodium}`;
      if (nutrients.phosphorus) url += `&minPhosphorus=${nutrients.phosphorus}`;
      if (nutrients.magnesium) url += `&minMagnesium=${nutrients.magnesium}`;
      if (nutrients.vitaminA) url += `&minVitaminA=${nutrients.vitaminA}`;
      if (nutrients.vitaminB) url += `&minVitaminB=${nutrients.vitaminB}`;
      if (nutrients.vitaminC) url += `&minVitaminC=${nutrients.vitaminC}`;

      return url;
    };

    // Generate the new baseURL and update state if it has changed
    const newURL = buildURL();
    if (newURL !== baseURL) {
      dispatch({ type: "UPDATE_BASE_URL", payload: newURL });
    }
  }, [apiKey, filters, nutrients, offset]);

  // 2.This is where i return my provider
  return (
    <FiltersContext.Provider
      value={{
        toggles,
        handleToggles,
        filters,
        handleFilters,
        handleNutrients,
        baseURL,
        handleClearUrl,
        handleOffset,
        apiKey,
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

//2nd key
//48191e372dfb4e96aa47ecdd3f6cd630

//main key
//a239be2908d144789f4a888587b3dc45

//3rd key
//b04358bacd8e493ab0934a19d3c78907
