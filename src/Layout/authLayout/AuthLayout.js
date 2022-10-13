

import { Outlet } from 'react-router-dom';
import Announcement from '../../components/Announcement/Announcemnet';
import { Navbar } from '../../components/navbar/Navbar';
import Router from '../../router/Router';
import { routes } from '../../router/RoutesAll';
import { LayoutContainer } from './styles/AuthLayoutStyle';

const AuthLayout = ({ children }) => {
  /* const getAppRoutes = () => {  return routes.filter((route) => route.layout === '/private'); }*/
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>

  );
}

export default AuthLayout;