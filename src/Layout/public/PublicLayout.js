
import { Outlet } from 'react-router-dom';
import { Footer } from '../../components/footer/Footer';
import Slider from '../../components/Slider/Slider';
import routes from '../../router/MainRouters';
import { Container, PageWrapper } from './styles/PublicLayoutStyles';
import Header from '../../components/Header/Header';
import { useState } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import Sidebar from '../../components/Sidebar/Sidebar';

const RootLayout = () => {

  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false)
  const matchesWidth = useMediaQuery("(min-width:768px)");
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));
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