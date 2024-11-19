import { useContext, createContext, useReducer, useEffect } from "react";

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
      return {
        ...state,
        dietInput: action.payload,
      };
    case "INGREDIENT_INPUT":
      return {
        ...state,
        ingredientInput: action.payload,
      };

    case "CUISINE_INPUT":
      return {
        ...state,
        cuisineInput: action.payload,
      };
    case "INTOLERANCE_INPUTS":
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
    case "CALORIES_INPUT":
      return { ...state, caloriesInput: action.payload };
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
    default:
      return state;
  }
}

function FiltersProvider({ children }) {
  const [
    {
      toggles,
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
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  //a function that handles the Ingredient Input
  function handleIngredientInput(e) {
    dispatch({ type: "INGREDIENT_INPUT", payload: e.target.value });
    console.log(ingredientInput);
  }

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

  // a function that handles the intolerance inputs (can be multiple)
  function handleIntoleranceInputs(e) {
    const selectedIntolerance = e.target.value;
    dispatch({
      type: "INTOLERANCE_INPUTS",
      payload: selectedIntolerance,
    });
  }

  // a function that handles the calories input
  function handleCaloriesInput(e) {
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

  /*Here i will have a useEffect that will handle tha API call 


  




  based on my final url */

  // 2.This is where i return my provider
  return (
    <FiltersContext.Provider
      value={{
        toggles,
        onHandleToggle: handleToggle,
        handleIngredientInput,
        dietInput,
        handleDietInput,
        cuisineInput,
        handleCuisineInput,
        intoleranceInputs,
        handleIntoleranceInputs,
        handleCaloriesInput,
        handleNutrientsInputs,
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
