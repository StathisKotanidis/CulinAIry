import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FiltersProvider } from "./features/Filters/FiltersProvider";
import { RecipesProvider } from "./features/Recipes/RecipesProvider";
import { lazy, Suspense } from "react";
import PageNotFound from "./ui/pages/PageNotFound";
import Loader from "../src/ui/Loader";
import "boxicons";

// Lazy load components
const Homepage = lazy(() => import("./ui/pages/Homepage"));
const Search = lazy(() => import("./ui/pages/Search"));
const RecipeInstructions = lazy(() => import("./ui/pages/RecipeInstructions"));
const ChatWithChef = lazy(() => import("./ui/pages/ChatWithChef"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <Homepage />
      </Suspense>
    ),
  },
  {
    path: "/search",
    element: (
      <Suspense fallback={<Loader />}>
        <FiltersProvider>
          <RecipesProvider>
            <Search />
          </RecipesProvider>
        </FiltersProvider>
      </Suspense>
    ),
  },
  {
    path: "/recipe-instructions/:recipeID",
    element: (
      <Suspense fallback={<Loader />}>
        <FiltersProvider>
          <RecipesProvider>
            <RecipeInstructions />
          </RecipesProvider>
        </FiltersProvider>
      </Suspense>
    ),
  },
  {
    path: "/chat-with-chef",
    element: (
      <Suspense fallback={<Loader />}>
        <FiltersProvider>
          <RecipesProvider>
            <ChatWithChef />
          </RecipesProvider>
        </FiltersProvider>
      </Suspense>
    ),
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<Loader />}>
        <PageNotFound />
      </Suspense>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
