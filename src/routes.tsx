import { createBrowserRouter } from "react-router";
import Home from "./pages/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
