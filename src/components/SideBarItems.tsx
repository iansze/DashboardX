import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { Typography } from "@mui/material";
import SideBarItem from "./SideBarItem";
import { Dispatch, SetStateAction } from "react";

type SideBarItemsProps = {
  colors: Record<string, Record<string, string>>;
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
};

const SideBarItems = ({ colors, selected, setSelected }: SideBarItemsProps) => {
  return (
    <>
      <SideBarItem
        title="Dashboard"
        to="/"
        icon={<HomeOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      />

      <Typography variant="h6" color={colors.grey[300]} sx={{ m: "15px 0 5px 15px" }}>
        Data
      </Typography>
      <SideBarItem
        title="Manage Team"
        to="/manage-team"
        icon={<PeopleOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      />
      <SideBarItem
        title="Contacts Information"
        to="/contacts"
        icon={<ContactsOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      />
      <SideBarItem
        title="Invoices Balances"
        to="/invoices"
        icon={<ReceiptOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      />

      <Typography variant="h6" color={colors.grey[300]} sx={{ m: "15px 0 5px 10px" }}>
        Pages
      </Typography>
      <SideBarItem
        title="Profile Form"
        to="/form"
        icon={<PersonOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      />
      <SideBarItem
        title="Calendar"
        to="/calendar"
        icon={<CalendarTodayOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      />
      <SideBarItem
        title="FAQ Page"
        to="/faq"
        icon={<HelpOutlineOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      />

      <Typography variant="h6" color={colors.grey[300]} sx={{ m: "15px 0 5px 10px" }}>
        Charts
      </Typography>
      <SideBarItem
        title="Bar Chart"
        to="/barChart"
        icon={<BarChartOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      />
      <SideBarItem
        title="Pie Chart"
        to="/pieChart"
        icon={<PieChartOutlineOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      />
      <SideBarItem
        title="Line Chart"
        to="/lineChart"
        icon={<TimelineOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      />
      <SideBarItem
        title="Geography Chart"
        to="/geoChart"
        icon={<MapOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      />
    </>
  );
};

export default SideBarItems;
