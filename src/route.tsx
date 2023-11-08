import ErrorPage from "./error-page";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from './pages/Dashboard/main'
import ReactDjango from './pages/React_Django/main'

const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
      errorElement: <ErrorPage />
    },
    {
        path: "/django_rest",
        element: <ReactDjango />,
        errorElement: <ErrorPage />,
    },
  
  ]);

export default router;