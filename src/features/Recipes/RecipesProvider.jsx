import { createContext, useContext, useEffect, useState } from "react";
import { useFilters } from "../Filters/FiltersProvider";
import { useNavigate } from "react-router-dom";

const RecipesContext = createContext();

function RecipesProvider({ children }) {
  const { baseURL, handleOffset, apiKey } = useFilters();
  const [shouldFetch, setShouldFetch] = useState(false);
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [showFilters, setShowFilters] = useState(true);
  const [instructions, setInstructions] = useState([]);
  const [similarRecipes, setSimilarRecipes] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [recipesCallCount, setRecipesCallCount] = useState(0);
  const [similarRecipesCallCount, setSimilarRecipesCallCount] = useState(0);
  const [instructionsCallCount, setInstructionsCallCount] = useState(0);

  //a function that hides the filters once i fetch the data
  const handleShowFilters = () => {
    setShowFilters(() => !showFilters);
  };

  const triggerFetch = () => {
    setShouldFetch(true);
  };

  const getRecipes = async (append = false) => {
    try {
      setRecipesCallCount((prevCount) => prevCount + 1); // Increment counter
      console.log(`Recipes API called ${recipesCallCount + 1} times`);
      console.log("Fetching data from: ", baseURL);
      setLoading(true);
      const res = await fetch(baseURL);
      if (!res.ok) throw new Error("Failed fetching the recipes");
      const data = await res.json();

      if (append) {
        setRecipes((prevRecipes) => [...prevRecipes, ...data.results]);
      } else {
        setRecipes(data.results);
      }
      // console.log(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // // a function the fetches simila recipes based on another recipe
  const getSimilarRecipes = async (recipeID) => {
    try {
      setSimilarRecipesCallCount((prevCount) => prevCount + 1); // Increment counter
      console.log(
        `Similar Recipes API called ${similarRecipesCallCount + 1} times`,
      );
      const res = await fetch(
        `https://api.spoonacular.com/recipes/${recipeID}/similar?apiKey=${apiKey}`,
      );
      if (!res) throw new Error("Couldn't fetch similar recipes");
      const data = await res.json();
      console.log(data);
      setSimilarRecipes(data);
    } catch (error) {
      setError(error.message);
    }
  };

  // a function the fetches the instructions of a recipe based on it's id
  const getInstructions = async (recipeID) => {
    try {
      setInstructionsCallCount((prevCount) => prevCount + 1); // Increment counter
      console.log(`Instructions API called ${instructionsCallCount + 1} times`);
      setLoading(true);
      const res = await fetch(
        `https://api.spoonacular.com/recipes/${recipeID}/analyzedInstructions?apiKey=${apiKey}`,
      );
      if (!res) throw new Error(" Couldn't fetch recipe instructions");
      const data = await res.json();
      // console.log("Instructions inside getInstructions: ", data[0].steps);
      setInstructions(data[0].steps);
      getSimilarRecipes(recipeID);
      navigate(`/recipe-instructions/${recipeID}`);
    } catch (error) {
      console.error("Error fetching recipe instructions:", error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  //Thank you for ruining my sanity, you wil be remembered
  // useEffect(() => {
  //   if (baseURL) {
  //     getRecipes(true);
  //   }
  // }, [baseURL]);

  /* Me: Thank you for changing my life 
  shouldFetch: I literally just make the fetch only when you click the Search
   Button and NOT EVERY F*****ING TIME you type a single letter making you
   run out of API tokens with one call you IDIOT :) 
   Go create your 5th email now  and grab another Key 
   so you can continue testing things */

  useEffect(() => {
    if (shouldFetch) {
      getRecipes();
      setShouldFetch(false);
    }
  }, [shouldFetch]);

  return (
    <RecipesContext.Provider
      value={{
        loading,
        getRecipes,
        error,
        recipes,
        handleShowFilters,
        showFilters,
        handleOffset,
        getInstructions,
        instructions,
        similarRecipes,
        getSimilarRecipes,
        triggerFetch,
      }}
    >
      {children}
    </RecipesContext.Provider>
  );
}

function useRecipes() {
  const context = useContext(RecipesContext);
  return context;
}

export { RecipesProvider, useRecipes };
