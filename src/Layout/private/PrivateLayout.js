import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation, useOutlet } from "react-router-dom";
import { Footer } from "../../components/footer/Footer";
import Slider from "../../components/Slider/Slider";
import { useAuth } from '../../Context/AuthProvider';

import { routes } from "../../router/RoutesAll";
import { SubHeaderLayout } from "../public/components/subHeader/SubHeaderLayout";

import {
  LayoutDivider,
  LayoutContainer,
  LayoutBodyContainer,
  LayoutBodyDivider,
  LayoutFooterDivider,
} from "./styles/AppLayoutStyles";

const PrivateLayout = ({ children }) => {

  //const { isFetching, error, currentUser } = useSelector((state) => state.user);
  const currentUser = false;
  if (!currentUser) {
    return <Navigate to="/login" />;

    return children;
  }

  return (
    <LayoutContainer>
      <Slider />

      <Outlet />
      <Footer />
    </LayoutContainer>
  );
};

export default PrivateLayout;
