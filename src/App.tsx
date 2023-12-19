import { ColorModeContext } from "../src/context/ColorModeContext";
import { useMode } from "../src/hooks/useMode";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "../src/components/SideBar";
import TopNavbar from "./components/TopNavBar";
import "./sass/index.css";
import DashBoardPage from "./pages/DashBoardPage";
import TeamPage from "./pages/TeamPage";
import ContactPage from "./pages/ContactPage";
import InvoicesPage from "./pages/InvoicesPage";
import ProfileFormPage from "./pages/ProfileFormPage";
import CalendarPage from "./pages/CalendarPage";

import BarChartPage from "./pages/BarChartPage";
import PieChartPage from "./pages/PieChartPage";

const App = () => {
  const { theme, colorMode } = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="home_container">
          <Sidebar />
          <main className="content">
            <TopNavbar />
            <Routes>
              <Route path="/" element={<DashBoardPage />} />
              <Route path="/manage-team" element={<TeamPage />} />
              <Route path="/contacts" element={<ContactPage />} />
              <Route path="/invoices" element={<InvoicesPage />} />
              <Route path="/form" element={<ProfileFormPage />} />
              <Route path="/calendar" element={<CalendarPage />} />
              <Route path="/BarChart" element={<BarChartPage />} />
              <Route path="/PieChart" element={<PieChartPage />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
