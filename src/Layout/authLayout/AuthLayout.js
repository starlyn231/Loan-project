

import { Outlet } from 'react-router-dom';

import { routes } from '../../router/RoutesAll';
import { ImgLayoutLeft } from './components/ImgLayoutLeft';

import { LayoutAuthContainer, LayoutContainer, RightPanelContainer } from './styles/AuthLayoutStyle';

const AuthLayout = ({ children }) => {
  /* const getAppRoutes = () => {  return routes.filter((route) => route.layout === '/private'); }*/
  return (
    <LayoutAuthContainer>

      <ImgLayoutLeft />

      <RightPanelContainer>

        <Outlet />

      </RightPanelContainer>

    </LayoutAuthContainer>




  );
}

export default AuthLayout;