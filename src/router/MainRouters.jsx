import { Navigate } from 'react-router-dom';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";
import { routes } from './RoutesAll';
import { useRoutes } from "react-router-dom";

export const router = createBrowserRouter(routes);