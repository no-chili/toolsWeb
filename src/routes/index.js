import { Navigate } from "react-router-dom";
import ApiFetch from "../pages/ApiFetch";
import HtmlFetch from "../pages/HtmlFetch";
import MdFetch from "../pages/MdFetch";
const routes = [
  {
    path: "/htmlfetch",
    element: <HtmlFetch />,
  },
  {
    path: "/apifetch",
    element: <ApiFetch />,
  },
  {
    path: "/mdfetch",
    element: <MdFetch />,
  },
  {
    path: "/",
    element: <Navigate to="/htmlfetch" />,
  },
];
export default routes;
