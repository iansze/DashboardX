import Header from "../components/Header";
import { Box } from "@mui/system";

const DashBoardPage = () => {
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Header title="DashBoard" subtitle="Welcome to dashboard" />
    </Box>
  );
};

export default DashBoardPage;
