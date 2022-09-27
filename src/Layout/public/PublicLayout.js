import React from 'react';

import routes from '../../router/MainRouters';
import Router from '../../router/Router';
import ScrollToTopWithRouter from '../../router/ScrollToTopWithRouter';
const PublicLayout = () => {

  const getPublicRoutes = () => {
    return routes.filter((route) => route.layout === '/public');

  }
  console.log(getPublicRoutes())
  return (
    <ScrollToTopWithRouter>
      <Router routes={getPublicRoutes()} />
    </ScrollToTopWithRouter>);
}

export default PublicLayout;