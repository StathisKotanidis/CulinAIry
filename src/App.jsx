import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FiltersProvider } from "./features/Filters/FiltersProvider";
import { RecipesProvider } from "./features/Recipes/RecipesProvider";
import Homepage from "./ui/pages/Homepage";
import Search from "./ui/pages/Search";
import RecipeInstructions from "./features/Recipes/RecipeInstructions";
import "boxicons";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/search",
    element: (
      <FiltersProvider>
        <RecipesProvider>
          <Search />
        </RecipesProvider>
      </FiltersProvider>
    ),
  },
  {
    path: "/recipe-instructions/:recipeId",
    element: (
      <FiltersProvider>
        <RecipesProvider>
          <RecipeInstructions />
        </RecipesProvider>
      </FiltersProvider>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
