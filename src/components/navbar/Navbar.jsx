import { Badge } from "@mui/material";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";

import {
  Center,
  Container,
  Input,
  Language,
  Left,
  Logo,
  MenuItem,
  Right,
  SearchContainer,
  StyledTextInput,
  Wrapper,
} from "./style/StyleNavbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import UserLoggedMenu from "../UserLoggedMenu/UserLoggedMenu";
import COLORS from "../styleGeneric/Colors";
import { useSelector } from "react-redux";
//import { useAuth } from "../../Context/AuthProvider";

export const Navbar = () => {
  const { isFetching, error, currentUser } = useSelector((state) => state.user);
  const [viewUser, setViewUser] = useState(true);
  const navigation = useNavigate();
  //console.log(token)
  const goRoute = (route) => {
    navigation(route);
  };

  const quantity = useSelector((state) => state.cart.quantity);
  console.log(currentUser);
  return (
    <Container>
      <Wrapper>
        <Left>
          <h1>LAMA</h1>
        </Left>

        <Right>
          <MenuItem onClick={() => goRoute("/")}>Home</MenuItem>

          {!currentUser ? (
            <>
              <MenuItem onClick={() => goRoute("/register")}>REGISTER</MenuItem>
              <MenuItem
                onClick={() => {
                  setViewUser(true);
                  //      onLogin();
                  goRoute("/login");
                }}
              >
                SIGN IN
              </MenuItem>
            </>
          ) : (
            <>
              <MenuItem>
                <Badge badgeContent={quantity} color='primary'>
                  <AddShoppingCartOutlinedIcon
                    sx={{ cursor: "pointer", color: COLORS.black }}
                    onClick={() => goRoute("/cart")}
                  />
                </Badge>
              </MenuItem>

              <MenuItem>
                <UserLoggedMenu />
              </MenuItem>
            </>
          )}
        </Right>
      </Wrapper>
    </Container>
  );
};
