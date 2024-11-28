import { createContext, useContext, useEffect, useState } from "react";
import { useFilters } from "../Filters/FiltersProvider";
import { useNavigate } from "react-router-dom";

const RecipesContext = createContext();

function RecipesProvider({ children }) {
  const { baseURL, apiKey } = useFilters();
  const [shouldFetch, setShouldFetch] = useState(false);
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [showFilters, setShowFilters] = useState(true);
  const [instructions, setInstructions] = useState([]);
  const [similarRecipes, setSimilarRecipes] = useState([]);
  const [error, setError] = useState(null);
  const [recipesCallCount, setRecipesCallCount] = useState(0);
  const [visibleRecipes, setVisibleRecipes] = useState(6);
  const navigate = useNavigate();

  // Toggle filter visibility
  const handleShowFilters = () => {
    setShowFilters(() => !showFilters);
  };

  // Trigger a new fetch operation
  const triggerFetch = () => {
    setShouldFetch(true);
  };

  // Fetch recipes from the API
  const getRecipes = async (append = false) => {
    try {
      setRecipesCallCount((prevCount) => prevCount + 1);
      console.log(`Recipes API called ${recipesCallCount + 1} times`);
      console.log("Fetching data from:", baseURL);
      setLoading(true);
      const res = await fetch(baseURL);
      if (!res.ok) throw new Error("Failed fetching the recipes");
      const data = await res.json();
      console.log(data);
      setRecipes(data.results);
    } catch (error) {
      console.error("Error fetching recipes:", error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch similar recipes based on another recipe
  const getSimilarRecipes = async (recipeID) => {
    try {
      console.log("Fetching similar recipes for:", recipeID);
      const res = await fetch(
        `https://api.spoonacular.com/recipes/${recipeID}/similar?apiKey=${apiKey}`,
      );
      if (!res.ok) throw new Error("Couldn't fetch similar recipes");

      const data = await res.json();
      setSimilarRecipes(data);
      console.log("Similar Recipes:", data);
    } catch (error) {
      console.error("Error fetching similar recipes:", error.message);
      setError(error.message);
    }
  };

  // Fetch instructions for a specific recipe
  const getInstructions = async (recipeID) => {
    try {
      console.log("Fetching instructions for recipe:", recipeID);
      setLoading(true);
      const res = await fetch(
        `https://api.spoonacular.com/recipes/${recipeID}/analyzedInstructions?apiKey=${apiKey}`,
      );
      if (!res.ok) throw new Error("Couldn't fetch recipe instructions");

      const data = await res.json();
      setInstructions(data[0]?.steps || []);
      console.log("Instructions:", data[0]?.steps || []);
      // getSimilarRecipes(recipeID);
      navigate(`/recipe-instructions/${recipeID}`);
    } catch (error) {
      console.error("Error fetching instructions:", error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch recipes when `shouldFetch` is triggered WORKING
  useEffect(() => {
    if (shouldFetch) {
      console.log("Triggering fetch with current baseURL:", baseURL);
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
        getInstructions,
        instructions,
        similarRecipes,
        getSimilarRecipes,
        triggerFetch,
        visibleRecipes,
      }}
    >
      {children}
    </RecipesContext.Provider>
  );
}

function useRecipes() {
  const context = useContext(RecipesContext);
  if (!context) {
    throw new Error("useRecipes must be used within a RecipesProvider");
  }
  return context;
}

export { RecipesProvider, useRecipes };
