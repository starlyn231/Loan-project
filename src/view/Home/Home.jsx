
import { tokens } from "../../themes/theme";

//MUI IMPORT
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { Box, Button, Grid, IconButton, Typography, useTheme } from "@mui/material";




import Chart from "./components/Chart";
import Header from "./components/Header";
import Widget from "./components/widget/Widget";

import Barchart from "./components/Barchart";
import { OverviewLatestProducts } from "./components/OverviewsLoans";
import PiechartComponent from "./components/PiechartComponent";
import OverviewTraffic from "./components/overview-traffic";

import { subDays, subHours } from 'date-fns';
import { productsLoans } from "./HomeMock";
import CustomContentOfTooltip from "./components/CustomContentOfTooltip";
const now = new Date();
export const Home = () => {
  const theme = useTheme();
  const colors = tokens;
  console.log(colors)
  return (
    <Box m="10px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Estadisticas Generales" subtitle="El préstamo que te mereces" />
        <Box>
          <Button
            variant="contained"
            sx={{
              // backgroundColor:   theme.palette.primary.main,
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
              minHeight: '42px', borderRadius: ' 47px'
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* ROW 1 */}

      <Grid
        alignItems='flex-start'
        justifyContent='center'
        container
        direction='row'
        x
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={12} sm={4} md={3}>

          <Widget type="prestamo" />
        </Grid>

        <Grid item xs={12} sm={4} md={3} display="flex"
          alignItems="center"
          justifyContent="center">
          <Widget type="balance" />
        </Grid>

        <Grid item xs={12} sm={4} md={3} display="flex"
          alignItems="center"
          justifyContent="center">
          <Widget type="payments" />
        </Grid>

        <Grid item xs={12} sm={4} md={3} display="flex"
          alignItems="center"
          justifyContent="center">
          <Widget type="mora" />
        </Grid>

        {/* ROW 2 */}

        <Grid item xs={12} sm={4} md={4}>

         
          <Box  >
            <CustomContentOfTooltip chartSeries={[63, 15, 22]}
              labels={['Desktop', 'Tablet', 'Phone']}
              sx={{ height: '100%' }} />
          </Box>

        </Grid>
        <Grid item xs={12} sm={4} md={4}>


          <Box  >
            <OverviewTraffic chartSeries={[63, 15, 22]}
              labels={['Desktop', 'Tablet', 'Phone']}
              sx={{ height: '100%' }} />
          </Box>

        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <    OverviewLatestProducts
            products={productsLoans}
            sx={{ height: '100%' }}

          />
        </Grid>



        {/* ROW 3 */}





        <Grid item xs={12} sm={4} md={6}   >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Prestamos
          </Typography>
          <Box height="200px" >
            <Barchart />
          </Box>
        </Grid>

        <Grid item xs={12} sm={4} md={6}   >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Geography Based Trafficcc
          </Typography>
          <Box height="200px">
            <Chart />
          </Box>
        </Grid>
      </Grid>


    </Box>
  );
};


