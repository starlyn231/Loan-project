import { styled } from "@mui/system";
import { Link } from "react-router-dom";

export const Container = styled(Link)({
  display: "flex",
  flex: 1,
  margin: " 3px",
  height: "100%",
  position: "relative",
  width: "100%",
  justifyContent: "center",
  "@media only screen and  (max-width:380px)": {},
});

export const Image = styled("img")({
  width: "100%",

  height: "100%",
  objectFit: "cover",
  "@media only screen and  (max-width:380px)": {
    height: "20vh",
  },
});

export const Info = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  position: "absolute",
  width: "100%",
  top: "60%",
  left: " 50%",
  transform: "translate(-50%, -50%)",
  "@media only screen and  (max-width:380px)": {},
});

export const Title = styled("h1")({
  color: "white",

  "@media (min-width:320px)": {
    display: "none",
  },
  "@media (min-width:768px)": {
    display: "none",
  },
  "@media (min-width:1200px)": {
    display: "flex",
    marginBottom: "20px",
  },
});

export const Button = styled("button")({
  border: "none",
  padding: "10px",
  backgroundColor: "white",
  color: "gray",
  cursor: "pointer",
  fontWeight: 600,
});
