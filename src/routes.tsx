import { createBrowserRouter } from "react-router";
import Home from "./pages/HomePage";
import CompanyReviewPage from "./pages/CompanyReviewPage";
import FormReview from "./components/company_review/FormReview";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/company-review",
    element: <CompanyReviewPage />,
  },
  {
    path: "/form-review",
    element: <FormReview />,
  },
]);
