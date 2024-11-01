import Homepage from "./ui/Homepage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
