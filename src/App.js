import { Global } from "@emotion/react";
import { useMemo } from "react";
import { useState } from "react";
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import { router } from "./router/MainRouters";
import { useSelector } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import { ThemeProvider } from "@mui/material";
import { themeSettings } from './themes/theme';
import { createTheme } from "@mui/material/styles";
const queryClient = new QueryClient()

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);
  //const user = useSelector((state) => state.user.currentUser);
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

    <QueryClientProvider client={queryClient}>
      <Global
        styles={`
          body {
            margin: 0;
          }
        `}
      />      <ThemeProvider theme={theme}>

    

      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
      </ThemeProvider>
    </QueryClientProvider>

  );
}

export default App;
