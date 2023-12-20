import BarChart from "../components/BarChart";
import Header from "../components/Header";
import { Box } from "@mui/system";

const DashBoardPage = () => {
  return (
    <Box>
      <Header title="DashBoard" subtitle="Welcome to dashboard" />
      <Box height="250px" mt="-20px">
        <BarChart />
      </Box>
    </Box>
  );
};

export default DashBoardPage;
