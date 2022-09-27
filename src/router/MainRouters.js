

import { Home } from "../components/Home/Home";
import { Navigate } from 'react-router-dom';
const routes = [
  //PUT ALL loginRequired:false OBJECTS ROUTES on TOP of array
  {
    path: "/",
    element: Home,
    exact: true,
    layout: "/public",
    loginRequired: false,
  },

  {
    path: "*",
    layout: "/public",
    element: () => <Navigate to="/public" replace />,
  },

  {
    path: "*",
    layout: "/private",
    element: () => <Navigate to="/private" replace />
  },
];

export default routes;