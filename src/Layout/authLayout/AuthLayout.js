

import { Navigate, Outlet } from 'react-router-dom';

import { routes } from '../../router/RoutesAll';
import { ImgLayoutLeft } from './components/ImgLayoutLeft';

import { LayoutAuthContainer, LayoutContainer, RightPanelContainer } from './styles/AuthLayoutStyle';

const AuthLayout = ({ children }) => {
  /* const currentUser = true;
  if (currentUser) {
    return <Navigate to="/" />;

    return children;
  }

*/
  return (
    <>

   

        <Outlet />



    </>




  );
}

export default AuthLayout;