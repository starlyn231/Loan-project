import { Cart } from "../pages/Cart/Cart";
import Contact from "../pages/contact/Contact";
import { Home } from "../pages/Home/Home";
import { Register } from "../pages/Register/Register";

import { ProductList } from "../pages/ProductList/ProductList";
import { Product } from "../pages/product/Product";

import { Login } from "../pages/Login/Login";
import ErrorPage from "./ErrorPage";
import PrivateLayout from "../Layout/private/PrivateLayout";
import AuthLayout from "../Layout/authLayout/AuthLayout";
import RootLayout from "../Layout/public/PublicLayout";
/* other imports */

export const routes = [
  {

    element: <RootLayout />,
    errorElement: <ErrorPage />,
    // loader: rootLoader,
    children: [
      {
        path: "/",
        element: <Home />,

        layout: "/public",
        loginRequired: false,
      },

      {
        path: "/contacts/:contactId",
        element: <Contact />,
        layout: "/public",
        loginRequired: false,
      }]
  },
  {
    path: "/",
    element: <PrivateLayout />,

    //loader: rootLoader,
    children: [

      {
        path: "/products/:category",
        element: <ProductList />,
        layout: "/private",
        loginRequired: false,
      },
      {
        path: "/product/:id",
        element: <Product />,
        layout: "/private",
        loginRequired: false,
      },
      {
        path: "/cart",
        element: <Cart />,
        layout: "/private",
        loginRequired: false,
      },
    ]


  },
  {

    path: "/",
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    // loader: rootLoader,
    children: [


      {
        path: "/register",
        element: <Register />,
        layout: "/AuthLayout ",
        loginRequired: false,
      },
      {
        path: "/login",
        element: <Login />,
        layout: "/AuthLayout ",
        loginRequired: false,
      },
    ]
  }

];



