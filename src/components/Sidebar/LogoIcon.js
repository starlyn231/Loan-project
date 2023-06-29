import { styled } from "@mui/system";


export const LogoIcon = styled("img")({
  display: "flex",
  flexDirection: "column",
  width: "85%",
  alignItems: "center",
  alignSelf: "center",
  justifyContent: "center",

  "@media (min-width:320px)": {
    width: "150px",
  },
  "@media (min-width:768px)": {
    width: "170px",
  },
  "@media (min-width:1200px)": {
    width: "100px",
  },

  margin: "auto",
});
