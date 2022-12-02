import React from "react";
import "./header.css"; //getting the styling
import { Button } from "@mui/material";
import ScrollButton from "../Scroll/scroll"; //getting the scroll for the comment button
import { Toolbar } from "@mui/material";

//creating the header
const HeaderPage = () => {
  //returning the header
  return (
    <header position="relative" className="digimonHeaderContainer">
      <div className="purpleBar"></div>
      <Toolbar className="whiteBar">
        {/* logo */}
        <div className="digimonLogo"></div>
        {/* search bar */}
        <div className="searchContainer">
          <input
            className="search"
            placeholder="search for characters..."
          ></input>
          <button className="searchButton">GO</button>
        </div>
        {/* login and comment buttons */}
        <div className="loginCart">
          <Button className="login" color="secondary">
            Login
          </Button>
          {/* this is the comment button that does the scroll to bottom of page */}
          <ScrollButton /> 
        </div>
      </Toolbar>
    </header>
  );
};

export default HeaderPage;
