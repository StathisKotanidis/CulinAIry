import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FiltersProvider } from "./features/Filters/FiltersProvider";
import { RecipesProvider } from "./features/Recipes/RecipesProvider";
import Homepage from "./ui/pages/Homepage";
import Search from "./ui/pages/Search";
import RecipeInstructions from "./features/Recipes/RecipeInstructions";
import ChatWithChef from "./ui/pages/ChatWithChef";
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
    path: "/recipe-instructions/:recipeID",
    element: (
      <FiltersProvider>
        <RecipesProvider>
          <RecipeInstructions />
        </RecipesProvider>
      </FiltersProvider>
    ),
  },
  {
    path: "/chat-with-chef",
    element: <ChatWithChef />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
