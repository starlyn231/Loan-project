

import { Outlet } from 'react-router-dom';
import Announcement from '../../components/Announcement/Announcemnet';
import { Footer } from '../../components/footer/Footer';
import { Navbar } from '../../components/navbar/Navbar';
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

      <Announcement />

      <Navbar />
      <Outlet />
      <Footer />

      {/*    <Router routes={getAppRoutes()} />
*/}

    </LayoutContainer>

  );
}

export default PrivateLayout;