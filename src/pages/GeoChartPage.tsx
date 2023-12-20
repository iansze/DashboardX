import { Box } from "@mui/material";
import Header from "../components/Header";
import GeoChart from "../components/GeoChart";

const GeoChartPage = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <GeoChart />
      </Box>
    </Box>
  );
};

export default GeoChartPage;
