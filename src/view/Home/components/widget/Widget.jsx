import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { Box } from "@mui/material";
import { ContainerWidget, ContentPercentage, RowLeft, RowRight, Title } from "./stylesWidget/WidgetStyles";
import PriceChangeOutlinedIcon from '@mui/icons-material/PriceChangeOutlined';

const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "prestamo":
      data = {
        title: "PRESTAMOS",
        isMoney: false,
        link: "Ver Todos ",
        icon: (
          <PriceChangeOutlinedIcon
            className="icon"
            style={{
              display: 'flex',
              alignItems: 'center',

             // color: "crimson",
              //backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "payments":
      data = {
        title: "PAGOS",
        isMoney: false,
        link: "Ver Todos",
        icon: (
          <AttachMoneyOutlinedIcon
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
    case "mora":
      data = {
        title: "MORA",
        isMoney: true,
        link: "Ver Todos",
        icon: (
          <AccountBalanceWalletOutlinedIcon
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

      }}>
        <ContentPercentage color={'positive'} className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </ContentPercentage>
  <span style={{ alignSelf:'flex-end'}}>
  {data.icon}
  </span>
      </RowRight>

    </ContainerWidget >
  );
};

export default Widget;