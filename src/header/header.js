import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./header.css";

import { Typography, AppBar, Toolbar } from "@mui/material";

const HeaderPage = () => {
  return (
    <AppBar position="relative" color="secondary">
      <Toolbar>
        <Typography variant="h6"> Digimon</Typography>
        <div className="menuHolder"></div>
        {/* <Menu></Menu> */}
      </Toolbar>
    </AppBar>
  );
};

export default HeaderPage;
