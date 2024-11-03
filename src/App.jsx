import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./ui/pages/Homepage";
import Search from "./ui/pages/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/search",
    element: <Search />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
