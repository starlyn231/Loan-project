
import { Navigate, Outlet } from 'react-router-dom';
import { Footer } from '../../components/footer/Footer';
import Slider from '../../components/Slider/Slider';
import routes from '../../router/MainRouters';
import { Container, PageWrapper } from './styles/PublicLayoutStyles';
import Header from '../../components/Header/Header';
import { useEffect, useState } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useSelector } from 'react-redux';

const RootLayout = ({ children }) => {

  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false)
  const matchesWidth = useMediaQuery("(min-width:768px)");
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  
  const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
  const currentUseree = user && JSON.parse(user).currentUser;

 const { isFetching, error, currentUser } = useSelector((state) => state.user);
  if (!currentUser?.success) {
    return <Navigate to="/" />;

    return children;
  }
  
  return (
    <Container>
      <Header
        sx={{

          paddingLeft: isSidebarOpen && lgUp ? "265px" : "",
          backgroundColor: "#ffffff",
        }}
        toggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
        toggleMobileSidebar={() => setMobileSidebarOpen(true)}
      />
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        isMobileSidebarOpen={isMobileSidebarOpen}
        onSidebarClose={() => setMobileSidebarOpen(false)}
      />


      <PageWrapper>
        <Container
          maxWidth={false}
          sx={{
            // bgcolor:
            //paddingTop: "20px",
            paddingLeft: isSidebarOpen && lgUp ? "280px!important" : "",
          }}
        >
          <Box sx={{ minHeight: "calc(100vh - 170px)" }}>
            <Outlet />
          </Box>
          <Footer />
        </Container>
      </PageWrapper>

    </Container>);
}

export default RootLayout;