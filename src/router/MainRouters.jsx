import { Navigate } from 'react-router-dom';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";
import { routes } from './RoutesAll';

export const router = createBrowserRouter(routes);