
import { Navigate } from "react-router-dom";
import AuthLayout from "../Layout/authLayout/AuthLayout";
import RootLayout from "../Layout/public/PublicLayout";
import { Home } from "../view/Home/Home";
import { Login } from "../view/auth/Login";
import { Register } from "../view/auth/register";
import { RegisterEvents } from "../view/auth/registerEvents";
import { StartLoginView } from "../view/auth/startLoginView/StartLoginView";
import { Calendar } from "../view/calendar/Calendar";
import { Contact } from "../view/contact/Contact";

import { Information } from "../view/information/Information";
import { TestApp } from "../view/testApp/TestApp";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ErrorFallback";
import { CustomerPage } from "../view/customer/CustomerPage";
import LoanPage from "../view/Loan/LoanPage";
import ConfigurationPage from "../view/Configurations/ConfigurationPage";


export const routes = [
  {
    element: <RootLayout />,

    children: [
      {
        path: "/home",
        element: <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Home />
        </ErrorBoundary>,
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
        element: <ErrorBoundary FallbackComponent={ErrorFallback}>
          <CustomerPage />,
        </ErrorBoundary>,
        layout: "/public",
        loginRequired: false,
      },
      {
        path: "/loanView",
        element: <ErrorBoundary FallbackComponent={ErrorFallback}>
          <LoanPage />,
        </ErrorBoundary>,
        layout: "/public",
        loginRequired: false,
      },
      {
        path: "/configuration",
        element: <ErrorBoundary FallbackComponent={ErrorFallback}>
          <ConfigurationPage />,
        </ErrorBoundary>,
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


      { path: "*", element: <Navigate to='/home' /> },

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
        path: "/",
        element: <Login />,
        layout: "/AuthLayout ",
        loginRequired: false,
      },
      { path: "*", element: <Navigate to='/' /> },
    ],
  },
];
