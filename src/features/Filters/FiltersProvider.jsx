import {
  useContext,
  createContext,
  useReducer,
  useEffect,
  useState,
} from "react";

//1. Created  a custom context
const FiltersContext = createContext();

const initialState = {
  apiKey: "a239be2908d144789f4a888587b3dc45",
  baseURL: "",
  toggles: {
    filters: false,
    cuisine: false,
    intolerances: false,
    diet: false,
    nutrients: false,
    calories: false,
  },
  showFilters: true,
  recipes: [],
  ingredientInput: "",
  currentFilter: "",
  dietInput: "",
  cuisineInput: "",
  intoleranceInputs: [],
  caloriesInput: "",
  proteinInput: "",
  carbsInput: "",
  cholesterolInput: "",
  fatInput: "",
  calciumInput: "",
  fiberInput: "",
  ironInput: "",
  zincInput: "",
  sugarInput: "",
  sodiumInput: "",
  potassiumInput: "",
  phosphorusInput: "",
  magnesiumInput: "",
  vitaminAInput: "",
  vitaminBInput: "",
  vitaminCInput: "",
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
        dietInput: state.dietInput === selectedDiet ? "" : selectedDiet,
      };
    case "CUISINE_INPUT":
      const selectedCuisine = action.payload;
      return {
        ...state,
        cuisineInput:
          state.cuisineInput === selectedCuisine ? "" : selectedCuisine,
      };
    case "CALORIES_INPUT":
      return { ...state, caloriesInput: action.payload };
    case "INGREDIENT_INPUT":
      return { ...state, ingredientInput: action.payload };
    case "INTOLERANCE_INPUT":
      const selectedIntolerance = action.payload;
      let intolerancesArray;

      if (state.intoleranceInputs.includes(selectedIntolerance)) {
        // If intolerance is already selected, remove it (uncheck)
        intolerancesArray = state.intoleranceInputs.filter(
          (intolerance) => intolerance !== selectedIntolerance,
        );
      } else {
        // Otherwise, add the new intolerance (check)
        intolerancesArray = [...state.intoleranceInputs, selectedIntolerance];
      }

      return { ...state, intoleranceInputs: intolerancesArray };

    case "NUTRIENTS_INPUTS":
      const { nutrientName, selectedNutrient } = action.payload;
      return {
        ...state,
        [`${nutrientName}Input`]: selectedNutrient, // Dynamic key for nutrient input
      };
    case "UPDATE_BASE_URL":
      return {
        ...state,
        baseURL: action.payload,
      };
    case "CLEAR_URL":
      return initialState;
    case "SHOW_FILTERS":
      return { ...state, showFilters: action.payload };
    case "ADD_RECIPES":
      return { ...state, recipes: [...state.recipes, ...action.payload] };
    default:
      return state;
  }
}

function FiltersProvider({ children }) {
  const [
    {
      toggles,
      showFilters,
      ingredientInput,
      dietInput,
      cuisineInput,
      intoleranceInputs,
      caloriesInput,
      baseURL,
      apiKey,
      proteinInput,
      carbsInput,
      cholesterolInput,
      fatInput,
      calciumInput,
      fiberInput,
      ironInput,
      zincInput,
      sugarInput,
      potassiumInput,
      sodiumInput,
      phosphorusInput,
      magnesiumInput,
      vitaminAInput,
      vitaminBInput,
      vitaminCInput,
      recipes,
    },
    dispatch,
  ] = useReducer(reducer, initialState);
  // const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(false);

  //a function that hides the filters
  function handleShowFilters() {
    dispatch({ type: "SHOW_FILTERS", payload: false });
  }

  // a function that handles the toggle functionality of each filter
  function handleToggle(filterName) {
    dispatch({ type: "TOGGLE_FILTERS", payload: filterName });
  }

  function handleFilters(filtername, e) {
    if (filtername === "ingredient")
      dispatch({ type: "INGREDIENT_INPUT", payload: e.target.value });
    if (filtername === "diet")
      dispatch({ type: "DIET_INPUT", payload: e.target.value });
    if (filtername === "cuisine")
      dispatch({ type: "CUISINE_INPUT", payload: e.target.value });
    if (filtername === "intolerance")
      dispatch({ type: "INTOLERANCE_INPUT", payload: e.target.value });
    if (filtername === "calories")
      dispatch({ type: "CALORIES_INPUT", payload: e.target.value });
  }

  //a function that handles the nutrients inputs
  function handleNutrientsInputs(nutrientName, e) {
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

  useEffect(() => {
    // Dynamically build the baseURL based on which filters the user selected
    const buildURL = () => {
      let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=5`;
      if (ingredientInput) url += `&query=${ingredientInput}`;
      if (dietInput) url += `&diet=${dietInput}`;
      if (cuisineInput) url += `&cuisine=${cuisineInput}`;
      if (intoleranceInputs.length >= 1)
        url += `&intolerances=${intoleranceInputs.join()}`;
      if (caloriesInput) url += `&maxCalories=${caloriesInput}`;
      if (proteinInput) url += `&minProtein=${proteinInput}`;
      if (carbsInput) url += `&maxCarbs=${carbsInput}`;
      if (cholesterolInput) url += `&maxCholesterol=${cholesterolInput}`;
      if (fatInput) url += `&maxFat=${fatInput}`;
      if (calciumInput) url += `&minCalcium=${calciumInput}`;
      if (fiberInput) url += `&minFiber=${fiberInput}`;
      if (ironInput) url += `&minIron=${ironInput}`;
      if (zincInput) url += `&minZinc=${zincInput}`;
      if (sugarInput) url += `&maxSugar=${sugarInput}`;
      if (potassiumInput) url += `&minPotassium=${potassiumInput}`;
      if (sodiumInput) url += `&maxSodium=${sodiumInput}`;
      if (phosphorusInput) url += `&minPhosphorus=${phosphorusInput}`;
      if (magnesiumInput) url += `&minMagnesium=${magnesiumInput}`;
      if (vitaminAInput) url += `&minVitaminA=${vitaminAInput}`;
      if (vitaminBInput) url += `&minVitaminB=${vitaminBInput}`;
      if (vitaminCInput) url += `&minVitaminC=${vitaminCInput}`;

      return url;
    };

    // Generate the new baseURL and update state if it has changed
    const newURL = buildURL();
    if (newURL !== baseURL) {
      dispatch({ type: "UPDATE_BASE_URL", payload: newURL });
    }
  }, [
    dietInput,
    ingredientInput,
    cuisineInput,
    intoleranceInputs,
    caloriesInput,
    proteinInput,
    carbsInput,
    cholesterolInput,
    fatInput,
    calciumInput,
    fiberInput,
    ironInput,
    zincInput,
    sugarInput,
    potassiumInput,
    sodiumInput,
    phosphorusInput,
    magnesiumInput,
    vitaminAInput,
    vitaminBInput,
    vitaminCInput,
    apiKey,
  ]);

  /*Here i make the api call based on my final baseURL  */
  const getRecipes = async function getData() {
    try {
      setLoading(true);
      const res = await fetch(baseURL);
      if (!res.ok) throw new Error("Failed fetching the data");
      const data = await res.json();
      dispatch({ type: "ADD_RECIPES", payload: data.results });
      console.log(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // 2.This is where i return my provider
  return (
    <FiltersContext.Provider
      value={{
        toggles,
        onHandleToggle: handleToggle,
        handleFilters,
        handleShowFilters,
        showFilters,
        dietInput,
        cuisineInput,
        intoleranceInputs,
        handleNutrientsInputs,
        ingredientInput,
        getRecipes,
        handleClearUrl,
        loading,
        recipes,
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
