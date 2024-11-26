import { createContext, useContext, useEffect, useState } from "react";
import { useFilters } from "../Filters/FiltersProvider";
import { useNavigate } from "react-router-dom";

const RecipesContext = createContext();

function RecipesProvider({ children }) {
  const { baseURL, handleOffset, apiKey } = useFilters();
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [showFilters, setShowFilters] = useState(true);
  const [instructions, setInstructions] = useState([]);
  const [similarRecipes, setSimilarRecipes] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  //a function that hides the filters once i fetch the data
  function handleShowFilters() {
    setShowFilters(() => !showFilters);
  }

  const getRecipes = async (append = false) => {
    try {
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

  useEffect(() => {
    if (baseURL) {
      getRecipes(true); // Automatically fetch when baseURL updates
    }
  }, [baseURL]);

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
      }}
    >
      {children}
    </RecipesContext.Provider>
  );
}

function useRecipes() {
  const context = useContext(RecipesContext);
  // console.log("Current instructions in context:", instructions);
  return context;
}

export { RecipesProvider, useRecipes };
