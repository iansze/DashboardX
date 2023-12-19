import { Typography, useTheme } from "@mui/material";
import { MenuItem } from "react-pro-sidebar";
import { colorDesign } from "./Theme";
import { Link } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";

type SideBarItemProps = {
  title: string;
  to: string;
  icon?: JSX.Element;
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
};

const SideBarItem = ({ title, to, icon, selected, setSelected }: SideBarItemProps) => {
  const theme = useTheme();
  const colors = colorDesign(theme.palette.mode);

  return (
    <MenuItem
      component={<Link to={to} />}
      active={selected === title}
      rootStyles={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

export default SideBarItem;
