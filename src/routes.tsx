import { createBrowserRouter } from "react-router";
import Home from "./pages/HomePage";
import CompanyReviewPage from "./pages/CompanyReviewPage";
import { AdminDashboardPage } from "./pages/AdminDashboardPage";
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
    path: "/admin-dashboard",
    element: <AdminDashboardPage/>,
   },
  { 
    path: "/form-review",
    element: <FormReview />,
  },
]);
