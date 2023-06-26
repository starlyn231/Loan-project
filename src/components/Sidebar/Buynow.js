import React from "react";

import sidebarBuynow from "../../assets/image/backgrounds/sidebar-buynow.png";
import { Box, Button, Typography } from "@mui/material";

const Buynow = () => {
  //const customizer = useSelector((state)=> state.CustomizerReducer);

  return (
    <Box pb={5} mt={5} sx={{ position: 'absolute', bottom: 0 }}>
      <Box
        p={2}
        sx={{
          backgroundColor: (theme) => theme.palette.primary.light,
          borderRadius: "10px",
        }}
        style={{ position: "relative" }}
      >
        <img
          src={sidebarBuynow}
          alt={sidebarBuynow}
          style={{
            position: "absolute",
            right: "-10px",
            top: "-18px",
          }}
        />
        <Box pb={1} pt={2} sx={{ width: "100%" }}>
          <Typography
            variant="h5"
            mb={2}
            sx={{
              color: (theme) => theme.palette.secondary.main,
              zIndex: "9",
              position: "relative",
              fontWeight:' bold'
            }}
          >
          Gestion prestamos
          </Typography>
          <Button
            color="success"
            href="https://www.wrappixel.com/templates/flexy-react-admin-template/"
            fullWidth
            disableElevation
            variant="contained"
          >
            Ir a la pagina web principal
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Buynow;
