import React from 'react';
import { Outlet } from 'react-router-dom';
import Announcement from '../../components/Announcement/Announcemnet';
import { Footer } from '../../components/footer/Footer';
import { Navbar } from '../../components/navbar/Navbar';
import routes from '../../router/MainRouters';
//import Router from '../../router/Router';

const RootLayout = () => {

  /* const getPublicRoutes = () => {return routes.filter((route) => route.layout === '/public'); }
  console.log(getPublicRoutes())*/

  return (
    <>
      <Announcement />

      <Navbar />
      <Outlet />
      <Footer />
    </>);
}

export default RootLayout;