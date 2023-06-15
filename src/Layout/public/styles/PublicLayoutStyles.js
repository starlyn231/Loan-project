import { styled } from '@mui/system';
import { TopbarHeight } from '../../../themes/theme';
export const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  minHeight: "100vh",
  overflow: "hidden",
  "@media (min-width:768px)": {
    paddingTop:'40px'
  },
  "@media (min-width:1200px)": {
 paddingTop:'45px'
  },
  "&:hover": {
 
  },

});


export const PageWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  overflow: "hidden",

  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.up("lg")]: {
 //   paddingTop: TopbarHeight,
  },
  [theme.breakpoints.down("lg")]: {
   // paddingTop: "64px",
  },
}));