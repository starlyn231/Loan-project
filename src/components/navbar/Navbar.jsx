import { Badge } from "@mui/material";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';


import { Center, Container, Input, Language, Left, Logo, MenuItem, Right, SearchContainer, StyledTextInput, Wrapper } from "./style/StyleNavbar";



export const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <StyledTextInput hiddenBorder />
            <SearchIcon style={{ color: "gray", fontSize: 18 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>LAMA.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <AddShoppingCartOutlinedIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};
