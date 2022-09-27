
import { Global } from '@emotion/react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Router from './router/Router';
//import Layouts from './router/Layouts';

import { Page1 } from './pages/Page1';

import { Page2 } from './pages/Page2';
import { Page3 } from './pages/Page3';
import { useState } from 'react';



import { MainRoute } from './routerLayout/MainRoute';


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
    <div>
      <Global
        styles={`
          body {
            margin: 0;
          }
        `}
      />
      <BrowserRouter>
        <MainRoute />

      </BrowserRouter>

    </div>
  );
}

export default App;
