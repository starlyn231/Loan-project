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
//import { useAuth } from "../../Context/AuthProvider";

export const Navbar = () => {
  //const { token, onLogin } = useAuth();
  const [viewUser, setViewUser] = useState(true);
  const navigation = useNavigate();
  //console.log(token)
  const goRoute = (route) => {
    navigation(route);
  };

  return (
    <Container>
      <Wrapper>
        <Left>


          <h1>LAMA</h1>
        </Left>

        <Right>
          <MenuItem onClick={() => goRoute("/")}>Home</MenuItem>

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
          {viewUser ? (<>
            <MenuItem>
              <Badge badgeContent={4} color='primary'>
                <AddShoppingCartOutlinedIcon
                  sx={{ cursor: 'pointer', color: COLORS.black, }} onClick={() => goRoute("/cart")} />
              </Badge>
            </MenuItem>

            <MenuItem>
              <UserLoggedMenu />
            </MenuItem> </>
          ) : null}

        </Right>
      </Wrapper>
    </Container>
  );
};
