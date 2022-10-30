import { Global } from "@emotion/react";
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";

import { useState } from "react";

import { router } from "./router/MainRouters";

import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  // console.log(Layouts)

  /*
    const [user, setUser] = useState(null);
  
    const handleLogin = () =>
      setUser({
        id: '1',
        name: 'robin',
        permissions: ['analyze'],
        roles: ['admin'],
      });
  
    const handleLogout = () => setUser(null);
  */
  return (

    <>
      <Global
        styles={`
          body {
            margin: 0;
          }
        `}
      />

      <RouterProvider router={router} />
    </>

  );
}

export default App;
