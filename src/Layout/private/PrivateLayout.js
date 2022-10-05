import { Navigate, Outlet, useLocation, useOutlet } from "react-router-dom";
import Announcement from "../../components/Announcement/Announcemnet";
import { Footer } from "../../components/footer/Footer";
import { Navbar } from "../../components/navbar/Navbar";
//import { useAuth } from '../../Context/AuthProvider';
import { useAuth } from '../../Context/AuthProvider';
import Router from "../../router/Router";
import { routes } from "../../router/RoutesAll";

import {
  LayoutDivider,
  LayoutContainer,
  LayoutBodyContainer,
  LayoutBodyDivider,
  LayoutFooterDivider,
} from "./styles/AppLayoutStyles";
//import ScrollToTopWithRouter from '../../router/ScrollToTopWithRouter';

const PrivateLayout = ({ children }) => {
  const outlet = useOutlet();
  /* const { token } = useAuth();
   const location = useLocation();
   if (!token) {
     return <Navigate to="/login" replace state={{ from: location }} />;
   }
   /*
   const getAppRoutes = () => {
     return routes.filter((route) => route.layout === '/private');
   }
 
   console.log(token)*/
  //let auth = { token: false };
  //console.log(outlet.props.children.props.routeContext.matches[0]?.route.children );
  /*
    const { user } = useAuth();
    if (!user) {
      // user is not authenticated
      return <Navigate to="/login" />;
    }
  */
  return (
    <LayoutContainer>
      <Announcement />
      <Navbar />
      <Outlet />
      <Footer />
    </LayoutContainer>
  );
};

export default PrivateLayout;
