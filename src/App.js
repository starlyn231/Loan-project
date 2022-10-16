
import { Global } from '@emotion/react'
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";


import { useState } from 'react';

import { router } from './router/MainRouters';
import { Provider } from 'react-redux';
import store from './Redux/store';


function App() {
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
    <Provider store={store}>
      <Global
        styles={`
          body {
            margin: 0;
          }
        `}
      />

      <RouterProvider router={router} />


    </Provider>
  );
}

export default App;
