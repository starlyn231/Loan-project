
import routes from '../../router/MainRouters';
import Router from '../../router/Router';

import {
  LayoutDivider,
  LayoutContainer,
  LayoutBodyContainer,
  LayoutBodyDivider,
  LayoutFooterDivider
} from './styles/AppLayoutStyles';
import ScrollToTopWithRouter from '../../router/ScrollToTopWithRouter';

const AppLayout = ({ children }) => {

  const getAppRoutes = () => {
    return routes.filter((route) => route.layout === '/private');
  }

  return (
    <LayoutContainer>

      <LayoutBodyDivider />
      <LayoutBodyContainer>
        <ScrollToTopWithRouter>
          <Router routes={getAppRoutes()} />
        </ScrollToTopWithRouter>
      </LayoutBodyContainer>
      <LayoutFooterDivider />


    </LayoutContainer>

  );
}

export default AppLayout;