import { useState, Fragment } from "react";
import {
  Container,
  MenuButton,
  DrawerMenuContainer,
  Image,
  LineContainer,
  AddShoppingCartIcon
} from "./styles/HeaderStyles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoggedInMenu from "../LoggedInMenu/LoggedInMenu";
import LogoSecondaryWhite from '../../assets/image/tveo-logo-type-01.svg'
import AddShoppingCart from '../../assets/icon/ShoppingCart.svg'
import { Badge, Box } from "@mui/material";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import COLORS from "../../themes/Colors";
import DrawerMenu from "../DrawerMenu/DrawerMenu";

function Header(props) {
  const matchesWidth = useMediaQuery("(min-width:768px)");
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const { quantity } = useSelector((state) => state.cart);

  // const { authenticated, profileImg } = useSelector((state) => state.authReducer);
  const authenticated = false;
  const goToRoute = (route) => {
    navigation(route);
  };

  return (
    <Fragment>
      {matchesWidth ? //big devices header
        <Container>
          <LineContainer>
            <div style={{ display: 'flex' }}>
              <Image onClick={() => goToRoute("/")} src={LogoSecondaryWhite} />
            </div>
            <div style={{ display: 'flex' }}>
              <MenuButton onClick={() => props.servicesRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })}>
                Calendario
              </MenuButton>
              <div style={{ width: "1rem" }} />
              <MenuButton onClick={() => goToRoute("/app/generalQueries")}>
                Boletos
              </MenuButton>
              <div style={{ width: "1rem" }} />
              <MenuButton onClick={() => goToRoute("/contact")}>
                Contactos
              </MenuButton>
              <div style={{ width: "1rem" }} />
              {!authenticated ?
                <Fragment>
                  <MenuButton
                    variant='outlined'
                    color='inherit'
                    onClick={() => goToRoute("/StartLoginView")}
                  >
                    Iniciar sesión
                  </MenuButton>
                  <div style={{ width: "1rem" }} />
                  {/*   <MenuButton
                    variant='outlined'
                    color='inherit'
                    onClick={() => goToRoute("/app/register")}
                  >
                    Registrar
                  </MenuButton> */}
                </Fragment>
                :
                <Fragment>



                  <Badge badgeContent={quantity} onClick={() => goToRoute("/cart")} color='primary'>
                    <AddShoppingCartIcon src={AddShoppingCart}


                    />
                  </Badge>
                  <div style={{ width: "1.5rem" }} />
                  <LoggedInMenu />
                </Fragment>
              }
            </div>

          </LineContainer>
        </Container>
        :
        <Container >
          <LineContainer >
            <Image onClick={() => goToRoute("/")} src={LogoSecondaryWhite} />
            <DrawerMenu />
          </LineContainer>
        </Container>
      }
    </Fragment >
  );
}

export default Header;
