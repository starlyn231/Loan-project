

import { Outlet } from 'react-router-dom';
import Router from '../../router/Router';
import { routes } from '../../router/RoutesAll';
import { LayoutContainer } from './styles/AuthLayoutStyle';


//import ScrollToTopWithRouter from '../../router/ScrollToTopWithRouter';

const AuthLayout = ({ children }) => {
  /*
    const getAppRoutes = () => {
      return routes.filter((route) => route.layout === '/private');
  
  
  
  
  
    }*/

  console.log(routes)
  return (
    <LayoutContainer>
      tetefhjhghjkhkjgjh

      <Outlet />

      {/* <Router routes={getAppRoutes()} />
   */}

    </LayoutContainer>

  );
}

export default AuthLayout;