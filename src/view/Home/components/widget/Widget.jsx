import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { Box } from "@mui/material";
import { ContainerWidget, ContentPercentage, RowLeft, RowRight, Title } from "./stylesWidget/WidgetStyles";

const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              display: 'flex',
              alignItems: 'center',

              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              display: 'flex',
              alignItems: 'center',

              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green"
            }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              display: 'flex',
              alignItems: 'center',

              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (

    < ContainerWidget >
      <RowLeft >
        <Title className="title">{data.title}</Title>
        <span className="counter" style={{ fontSize: '12px', fontWeight: 300, }}>
          {data.isMoney && "$"} {amount}
        </span>
        <span style={{ width: ' max-content', fontSize: '12px', borderBttom: '1px solid gray' }} className="link">{data.link}</span>
      </RowLeft>
      <RowRight style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}>
        <ContentPercentage color={'positive'} className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </ContentPercentage>
        {data.icon}
      </RowRight>

    </ContainerWidget >
  );
};

export default Widget;