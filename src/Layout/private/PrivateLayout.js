

import { Outlet } from 'react-router-dom';
import Router from '../../router/Router';
import { routes } from '../../router/RoutesAll';

import {
  LayoutDivider,
  LayoutContainer,
  LayoutBodyContainer,
  LayoutBodyDivider,
  LayoutFooterDivider
} from './styles/AppLayoutStyles';
//import ScrollToTopWithRouter from '../../router/ScrollToTopWithRouter';

const PrivateLayout = ({ children }) => {

  const getAppRoutes = () => {
    return routes.filter((route) => route.layout === '/private');





  }

  console.log(routes)
  return (
    <LayoutContainer>


      <Outlet />

      {/*    <Router routes={getAppRoutes()} />
*/}

    </LayoutContainer>

  );
}

export default PrivateLayout;