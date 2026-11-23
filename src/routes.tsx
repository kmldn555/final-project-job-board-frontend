import { createBrowserRouter } from "react-router";
import Home from "./pages/HomePage";
import CompanyReviewPage from "./pages/CompanyReviewPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/company-review",
    element: <CompanyReviewPage />,
  },
]);
