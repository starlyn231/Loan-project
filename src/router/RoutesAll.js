
import ErrorPage from "./ErrorPage";
import PrivateLayout from "../Layout/private/PrivateLayout";
import AuthLayout from "../Layout/authLayout/AuthLayout";
import RootLayout from "../Layout/public/PublicLayout";
import { Home } from "../view/Home/Home";
import { Register } from "../view/auth/register";
import { Login } from "../view/auth/Login";
import { StartLoginView } from "../view/auth/startLoginView/StartLoginView";
import { Navigate } from "react-router-dom";
import { RegisterEvents } from "../view/auth/registerEvents";
import { TestApp } from "../view/testApp/TestApp";


import { Contact } from "../view/contact/Contact";

import { Calendar } from "../view/calendar/Calendar";
import { Information } from "../view/information/Information";
import CustomerPage from "../view/customer/CustomerPage";

export const routes = [
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        layout: "/public",
        loginRequired: false,
      },

      {
        path: "/testapp",
        element: <TestApp />,
        layout: "/public",
        loginRequired: false,
      },
      {
        path: "/customerView",
        element: <CustomerPage />,
        layout: "/public",
        loginRequired: false,
      },
      
      {
        path: "/calendar",
        element: <Calendar />,

        loginRequired: false,
      },
      {
        path: "/information",
        element: <Information />,

        loginRequired: false,
      },

      { path: "*", element: <Navigate to='/' /> },
    ],
  },
 
  {
    path: "/",
    element: <AuthLayout />,

    // loader: rootLoader,
    children: [
      {
        path: "/StartLoginView",
        element: <StartLoginView />,
        layout: "/AuthLayout ",
        loginRequired: false,
      },

      {
        path: "/contact",
        element: <Contact />,

        loginRequired: false,
      },
      {
        path: "/register",
        element: <Register />,
        layout: "/AuthLayout ",
        loginRequired: false,
      },

      {
        path: "/RegisterEvents",
        element: <RegisterEvents />,
        layout: "/AuthLayout ",
        loginRequired: false,
      },

      {
        path: "/login",
        element: <Login />,
        layout: "/AuthLayout ",
        loginRequired: false,
      },
      { path: "*", element: <Navigate to='/' /> },
    ],
  },
];
