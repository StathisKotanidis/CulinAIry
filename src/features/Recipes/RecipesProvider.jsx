import { createContext, useContext, useState } from "react";
import { useFilters } from "../Filters/FiltersProvider";

const RecipesContext = createContext();

function RecipesProvider({ children }) {
  const { baseURL } = useFilters();
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);

  function random() {
    console.log("hello");
  }

  const getRecipes = async function getData() {
    try {
      setLoading(true);
      const res = await fetch(baseURL);
      if (!res.ok) throw new Error("Failed fetching the data");
      const data = await res.json();
      // dispatch({ type: "ADD_RECIPES", payload: data.results });
      setRecipes(data.results);
      console.log(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <RecipesContext.Provider value={{ loading, getRecipes, recipes }}>
      {children}
    </RecipesContext.Provider>
  );
}

function useRecipes() {
  const context = useContext(RecipesContext);
  return context;
}

export { RecipesProvider, useRecipes };
