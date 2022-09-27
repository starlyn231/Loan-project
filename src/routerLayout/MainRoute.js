import React from 'react'
import { BrowserRouter, Route, Routes, useRoutes } from "react-router-dom";

import { MyDesk } from '../pages/Desk/MyDesk';
import { Home } from '../pages/Home/Home';

import { Login } from '../pages/Login/Login';


import { ProtectedRoute, ProtetedRoute } from './ProtetedRoute';
export const MainRoute = () => {
  const isLogged = true;
  const isVerified = true;
  /*
    const routes = useRoutes([
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/login",
        element: <LoginPage />
      }
    ]);
    return routes;
  } */
  return (

    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />
      <Route path="/mydesk" element={<ProtectedRoute />} />

    </Routes>


  )
}
