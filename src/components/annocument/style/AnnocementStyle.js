import { styled } from "@mui/system";

export const ContainerSection = styled("section")({
  background: "#f6f9fc",
  padding: "50px 0",
});


export const RowContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  maxWidth: " 90%",
  margin: "auto",
});


export const ContainerImg = styled("div")({

  "@media only screen and  (max-width:680px)": {},
});

export const Image = styled("img")({
  width: '100%', height: '100%',
});

