import { styled } from '@mui/system';


import { Button, Drawer, List, ListItem } from "@mui/material";
import FONTS_FAMILY from '../../../themes/FontsFamily';
import COLORS from '../../../themes/Colors';


export const Container = styled("div")(props => ({
  zIndex: 11,
  position: "absolute",
  display: "flex",
  flexDirection: "row",
  alignSelf: "flex-end",
  right: 0,
  top: '3vw'
}));

export const MenuButton = styled(Button)(props => ({
  fontSize: "15px",
  fontFamily: FONTS_FAMILY.regular.body,
  color: COLORS.white,
}));

export const DrawerList = styled(List)({
  flex: 1,
  width: "200px",
  alignSelf: "center",
});

export const StyledDrawer = styled(Drawer)(props => ({
  '.MuiPaper-root': {
    backgroundColor: COLORS.primary,
  }
}));

export const DrawerListItemContainer = styled(ListItem)(props => ({
  flex: 1,
  color: COLORS.white,
  "&:hover": {
    color: COLORS.white,
    backgroundColor: COLORS.primary,
  },
}));
export const DrawerListItemButton = styled(Button)({
  width: "100%",
});

export const ProfileImage = styled('img')({
  alignSelf: 'center',
  width: '100px',
  height: '100px',
  borderRadius: '100%',
  marginTop: '5px',
  backgroundColor: COLORS.white
});