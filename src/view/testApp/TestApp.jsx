import React, { useEffect, useState } from "react";
//mport DatePicker from '../../components/DatePicker/DatePicker'
import { Container, MediumHeightDivider } from "../../themes/Styles";
//import LocalizationProvider from '@mui/lab/LocalizationProvider';
//import AdapterDateFns from '@mui/lab/AdapterDateFns';
import EventSeatIcon from "@mui/icons-material/EventSeat";
import { Box, Popper } from "@mui/material";
import { styled } from '@mui/system';
import { Button, TimePicker } from 'antd';
import { useQuery } from "react-query";
import { getCustomers } from "../../callApi/Customer";
import { MultiStepForm } from "./MultiStepForm";
import { mySections, myTools, test } from "./TestContanst";

import DraftsIcon from '@mui/icons-material/Drafts';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import SendIcon from '@mui/icons-material/Send';
import StarBorder from '@mui/icons-material/StarBorder';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';


export const TestApp = () => {
  const { data: listCustomers, isLoading, isError } = useQuery(
    ["listCustomers"],
    () => getCustomers()
  );
  const [sections, setSections] = useState([]);
  //Using prevState with React, basic and complex
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const loadSections = async () => {
      return await mySections();
    };
    loadSections().then((res) => {
      setSections(res);
    });
    const loadToolsIntoSections = async () => {
      return await myTools();
    };

    loadToolsIntoSections().then((response) => {
      setSections((prev) => {
        return prev.map((section) => {
          return {
            ...section,
            tools: response.filter((tool) => {
              return tool.section_id === section.id;
            }),
          };
        });
      });
    });
  }, []);


  console.log(sections)

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
/*
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;
*/
  const [value, setValue] = useState("2014-08-18T21:11:54");
  const [selectedSeats, setSelectedSeats] = useState([]);

  console.log(selectedSeats);

  const price = 30;
  const totalprice = price * selectedSeats.length;
  const addSeatCallback = ({ row, number, id }, addCb) => {
    const newTooltip = `tooltip for id-${id} added by callback`;
    addCb(row, number, id, newTooltip);
  };

  console.log(totalprice)

  const removeSeatCallback = ({ row, number, id }, removeCb) => {
    setSelectedSeats((list) => list.filter((item) => item !== number));
    removeCb(row, number);
  };

  const renderedSeats = test.map((item) => (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        marginRight: "30px",
        flexWrap: "wrap",
      }}
    >
      {item.map((subItem) => (
        <EventSeatIcon
          onClick={() =>
            subItem.ocupado
              ? {}
              : setSelectedSeats((prev) => [...prev, subItem.id])
          }
          sx={{
            color: subItem.ocupado ? "gray" : "black",
            margin: "10px",
            cursor: subItem.ocupado ? "default" : "pointer",
            backgroundColor: selectedSeats?.includes(subItem.id)
              ? "yellow"
              : null,
          }}
        />
      ))}
    </div>
  ));

  const ButtonAntTest = styled(Button)(props => ({
    backgroundColor: 'red',
    color: 'yellow',

    '@media (min-width:768px)': {
      width: '150px',

    },
    '@media (min-width:1200px)': {
      width: '270px'
    },

  }))



  const handleClickEvent= () => {
    setOpen(!open);
  };

  return (
    <Container>



<List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Sent mail" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItemButton>
      <ListItemButton onClick={handleClickEvent}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open}  >
      
     
      
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>


{ /*
      <div>
     
        <Popper id={id} open={open} anchorEl={anchorEl}>
          <Box sx={{ border: 1, p: 1, bgcolor: 'black' }}>
            The content of the Popper.
          </Box>
        </Popper>
      </div>
      <MediumHeightDivider />

 */}


      <div style={{
        display: 'block', width: 700, padding: 30
      }}>
        <h4>ReactJS Ant-Design TimePicker Component</h4>
        <>
          <TimePicker onChange={(time) => console.log(time)} />,
        </>
      </div>

      <ButtonAntTest>Ant Button</ButtonAntTest>


      <div style={{ display: "flex", flexDirection: "row" }}>
        {renderedSeats}
      </div>
      {/*

      {selectedSeats.length !== 0 ? (
        <>
          <div className="seat-price">
            <div className="seat-select">
              <h1 className="seats-select">SEAT:{selectedSeats.toString()}</h1>
            </div>
            <div className="totalprice">
              <h1 className="price">
                price:{"$"}
                {totalprice}
              </h1>
            </div>
          </div>
          <button
            className="continue"

          >
            continue
          </button>
        </>
      ) : null}



      <p>*-------------</p>


      <SeatBooking />

     <MapWithDirections />  */}


      <MultiStepForm />

    </Container>







  );
};
