import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./ui/pages/Homepage";
import Search from "./ui/pages/Search";
import "boxicons";
import { FiltersProvider } from "./features/Filters/FiltersProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/search",
    element: (
      <FiltersProvider>
        <Search />
      </FiltersProvider>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
