import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { colorDesign } from "./Theme";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SideBarItems from "./SideBarItems";

const SideBar = () => {
  const theme = useTheme();
  const colors = colorDesign(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box>
      <Sidebar collapsed={isCollapsed}>
        <Menu
          menuItemStyles={{
            button: {
              "&:hover": {
                color: "#868dfb !important",
                backgroundColor: "transparent !important",
              },
            },
          }}
        >
          {/*Name and burger*/}

          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            rootStyles={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
                sx={{
                  "&:hover": {
                    color: "#868dfb !important",
                  },
                }}
              >
                <Typography variant="h5" color={colors.grey[100]}>
                  ADMINIS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/*Items*/}
          <Box paddingLeft={isCollapsed ? undefined : "5%"}>
            <SideBarItems
              setSelected={setSelected}
              selected={selected}
              colors={colors}
            ></SideBarItems>
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SideBar;
