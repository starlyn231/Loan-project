
import { tokens } from "../../themes/theme";

//MUI IMPORT
import { Box, Button, Grid, IconButton, Typography, useTheme } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";




import StatBox from "./components/StatBox";
import ProgressCircle from "./components/ProgressCircle";
import { mockTransactions } from "./mockData";
import Widget from "./components/widget/Widget";
import Header from "./components/Header";
import Chart from "./components/Chart";

import TinyBarChart from "./components/TinyBarChart";
//import LineChart from "./components/LineChart";


export const Home = () => {
  const theme = useTheme();
  const colors = tokens;
  console.log(colors)
  return (
    <Box m="10px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
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

          <Widget type="user" />
        </Grid>

        <Grid item xs={12} sm={4} md={3} display="flex"
          alignItems="center"
          justifyContent="center">
          <Widget type="balance" />
        </Grid>

        <Grid item xs={12} sm={4} md={3} display="flex"
          alignItems="center"
          justifyContent="center">
          <Widget type="order" />
        </Grid>

        <Grid item xs={12} sm={4} md={3} display="flex"
          alignItems="center"
          justifyContent="center">
          <Widget type="earning" />
        </Grid>

      {/* ROW 2 */}
      
        <Grid item xs={12} sm={4} md={8}>

          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                $59,342.32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" >
            <Chart />
          </Box>

        </Grid>
        <Grid item xs={12} sm={4} md={4}>

<Box
  mt="25px"
  p="0 30px"
  display="flex "
  justifyContent="space-between"
  alignItems="center"
>
  <Box>
    <Typography
      variant="h5"
      fontWeight="600"
      color={colors.grey[100]}
    >
      Revenue Generated 2
    </Typography>
    <Typography
      variant="h3"
      fontWeight="bold"
      color={colors.greenAccent[500]}
    >
      $59,342.32
    </Typography>
  </Box>
  <Box>
    <IconButton>
      <DownloadOutlinedIcon
        sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
      />
    </IconButton>
  </Box>
</Box>
<Box height="250px" >
  <Chart />
</Box>

</Grid>
   
      {/* ROW 3 */}

   
    
        
    
          <Grid item xs={12} sm={4} md={6}    backgroundColor={colors.primary[400]}>
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Geography Based Traffic
          </Typography>
          <Box height="200px" >
            <Chart />
          </Box>
        </Grid>

        <Grid item xs={12} sm={4} md={6}    backgroundColor={colors.primary[400]}>
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


