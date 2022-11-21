import React from "react";
import "./header.css";

import { Typography, AppBar, Toolbar } from "@mui/material";

const HeaderPage = () => {
  return (
    <AppBar position="relative" color="secondary">
      <Toolbar>
        <Typography variant="h6"> Digimon</Typography>
        <div className="menuHolder"></div>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderPage;
