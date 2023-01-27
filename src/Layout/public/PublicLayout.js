
import { Outlet } from 'react-router-dom';
import { Footer } from '../../components/footer/Footer';
import Slider from '../../components/Slider/Slider';
import routes from '../../router/MainRouters';
import { Container } from './styles/PublicLayoutStyles';

const RootLayout = () => {



  return (
    <Container>

      <Slider />

      <Outlet />
      <Footer />
    </Container>);
}

export default RootLayout;