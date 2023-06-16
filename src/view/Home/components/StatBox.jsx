import { Box, Typography, useTheme,  Card,
  CardContent, } from "@mui/material";

import ProgressCircle from "./ProgressCircle";
import { tokens } from "../../../themes/theme";

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme();
const colors = tokens;

  return (
    
    

<Card
      variant="outlined"
      sx={{
        pb: 0,
      }}
    >
      <CardContent
        sx={{
          pb: "0 !important",
        }}
      >
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography
            variant="h4"
            fontWeight="bold"
    
       sx={{ color: colors.grey[100] }}
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <ProgressCircle progress={progress} />
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h5" sx={{ color: colors.greenAccent[500] }} >
          {subtitle}ccczzz
        </Typography>
        <Typography
          variant="h5"
          fontStyle="italic"
       sx={{ color: colors.greenAccent[600] }}
        >
          {increase}
        </Typography>
      </Box>
      </CardContent>
    </Card>
  );
};

export default StatBox;
