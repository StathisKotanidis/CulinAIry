import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./ui/pages/Homepage";
import Search from "./ui/pages/Search";
import "boxicons";
import { FiltersProvider } from "./features/Filters/FiltersProvider";
import { RecipesProvider } from "./features/Recipes/RecipesProvider";

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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
