import "./App.css";
import React, { useState } from "react";
// import Items from "./items";
import Inventory from "./bagLab/inventory";
import { CustomCursor } from "./CustomCursor/cursor";

// import { slide as Menu } from "react-burger-menu";

// import {
//   Typography,
//   AppBar,
//   Card,
//   CardActions,
//   CardContent,
//   CardMedia,
//   CssBaseline,
//   Grid,
//   Toolbar,
//   Container,
//   Button,
// } from "@mui/material";
import HeaderPage from "./header/header";
import FooterPage from "./bagLab/footer";
import Comments from "./comments/Comments";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CustomCursor />
        <HeaderPage />

        <Inventory />

        <Comments currentUserId="1" />
        <br />
        <FooterPage />
      </div>
    );
  }
}

export default App;
