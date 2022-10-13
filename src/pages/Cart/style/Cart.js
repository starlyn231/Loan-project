import { NoEncryption } from "@mui/icons-material";
import { TextField, Button } from "@mui/material";
import { styled } from "@mui/system";
export const boxShadowConfig = "0 4px 8px 0 rgba(0,0,0,0.2)";
export const Container = styled("div")({

});

export const Wrapper = styled("div")({
  padding: "20px",
  //display: 'flex',
  /*
  '@media (min-width:320px)': {
    padding: "10px",
  },
  '@media (min-width:768px)': {
    display: 'flex'
  },
  '@media (min-width:1200px)': {
    display: 'flex'
  },*/
  "@media only screen and  (max-width:380px)": {

  },
});
export const Title = styled("h1")({
  // fontsize: '24px',
  textAlign: "center",
  fontWeight: 300,
});

export const Top = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "20px",
});

export const TopButton = styled("div")((props) => ({
  fontWeight: 600,
  cursor: "pointer",
  padding: "10px",
  border: props.type === "filled" && 'none',
  backgroundColor: props.type === "filled" ? "black" : "transparent",
  color: props.type === "filled" && "white",
}));

export const TopTexts = styled("div")({
  "@media only screen and  (max-width:380px)": {
    display: "none",
  },
});

export const TopText = styled("span")({
  textDecoration: "underline",
  cursor: "pointer",
  margin: "0px 10px",
});
export const Bottom = styled("span")({
  display: "flex",
  justifyContent: "space-between",

  "@media only screen and  (max-width:380px)": {
    flexDirection: "column",
  },
});

export const Info = styled("div")({
  flex: 3,
});

export const Product = styled("div")({
  display: "flex",
  justifyContent: "space-between",

  "@media only screen and  (max-width:380px)": {
    flexDirection: "column",
  },
});

export const ProductDetail = styled("div")({
  display: "flex",
  flex: 2,
});

export const Image = styled("img")({
  width: "200px",
});
export const Details = styled("div")({
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
});

export const ProductId = styled("span")({});


export const ProductName = styled("span")({});
export const ProductColor = styled("span")((props) => ({
  width: " 20px",
  height: "20px",
  borderRadius: "50%",
  backgroundColor: props.color,
}));

export const ProductSize = styled("span")({});

export const PriceDetail = styled("div")({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: " center",
});

export const ProductAmountContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  marginBottom: "20px",
});

export const ProductAmount = styled("div")({
  fontSize: "24px",
  margin: "5px",
  "@media only screen and  (max-width:380px)": {
    margin: "5px 15px",
  },
});

export const ProductPrice = styled("div")({
  fontSize: "30px",
  fontWeight: " 200",
  "@media only screen and  (max-width:380px)": {
    margin: "20px",
  },
});

export const Hr = styled("hr")({
  backgroundColor: "#eee",
  border: "none",
  height: " 1px",
});

export const Summary = styled("div")({
  flex: 1,
  //border: " 0.5px solid lightgray",
  borderRadius: " 15px",
  padding: "20px",
  height: "40vh",

  border: ' 1px solid rgba(157,157,157,.35)',
  '&:hover,&:focus': {
    boxShadow: boxShadowConfig,
    cursor: 'pointer'
  },
});

export const SummaryTitle = styled("h1")({
  fontWeight: 200,
});

export const SummaryItem = styled("div")((props) => ({
  margin: "30px 0px",
  display: "flex",
  justifyContent: "space-between",
  fontWeight: props.type === "total" && "500",
  fontSize: props.type === "total" && "24px",
}));

export const SummaryItemText = styled("span")({});

export const SummaryItemPrice = styled("span")({});

export const ButtonCart = styled(Button)({
  width: "100%",
  padding: "10px",
  backgroundColor: "black",
  color: "white",
  fontWeight: 600,
});
