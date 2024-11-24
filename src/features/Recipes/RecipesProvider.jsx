import { createContext, useContext, useEffect, useState } from "react";
import { useFilters } from "../Filters/FiltersProvider";
import { useNavigate } from "react-router-dom";

const RecipesContext = createContext();

function RecipesProvider({ children }) {
  const { baseURL, handleOffset, apiKey } = useFilters();
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [showFilters, setShowFilters] = useState(true);
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
      console.log(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const getInstructions = async (recipeID) => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://api.spoonacular.com/recipes/${recipeID}}/analyzedInstructions?apiKey=${apiKey}`,
      );
      if (!res) throw new Error(" Couldn't fetch recipe instructions");
      const data = await res.json();
      console.log(data);
      navigate(`/recipe-instructions/${recipeID}`);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
    console.log(apiKey); // to check if the apiKey is correct and if the function is called
    console.log(recipeID); // working fine too
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
