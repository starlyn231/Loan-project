import {
  Route,
  createBrowserRouter,

} from "react-router-dom";
import { routes } from './RoutesAll';
//import { useRoutes } from "react-router-dom";
console.log(routes)
export const router = createBrowserRouter(routes);