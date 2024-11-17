import * as React from 'react';
import Box from '@mui/material/Box';
import Header from "./Header.jsx";
import SideBar from "./SideBar.jsx";
import {Outlet} from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";

export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Header open={open} handleDrawerToggle={handleDrawerToggle}/>
      <SideBar open={open} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar/>
        <Outlet/>
      </Box>
    </Box>
  );
}
