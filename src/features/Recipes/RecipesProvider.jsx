import { createContext, useContext, useEffect, useState } from "react";
import { useFilters } from "../Filters/FiltersProvider";

const RecipesContext = createContext();

function RecipesProvider({ children }) {
  const { baseURL, handleOffset } = useFilters();
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [showFilters, setShowFilters] = useState(true);
  const [error, setError] = useState(null);

  //a function that hides the filters once i fetch the data
  function handleShowFilters() {
    setShowFilters(() => !showFilters);
  }

  const getRecipes = async function getData(append = false) {
    try {
      setLoading(true);
      const res = await fetch(baseURL);
      if (!res.ok) throw new Error("Failed fetching the data");
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

  const getInstructions = async () => {
    try {
      setLoading(true);
      const res = fetch(
        "https://api.spoonacular.com/recipes/{id}/analyzedInstructions",
      );
      if (!res) throw new Error(" Couldn't fetch recipe instructions");
      const data = (await res).json();
      console.log(data);
    } catch (error) {
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
