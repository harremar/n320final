//https://www.geeksforgeeks.org/how-to-create-a-scroll-to-bottom-button-in-reactjs/
//got some of the code from this site

import React from "react";
import { Button } from "@mui/material";
import "../header/header.css"; //importing styles

//creating the scroll function
const ScrollButton = () => {
  //wanting to scroll to the bottom of the page
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth", //smooth transistion to the bottom of the page
    });
  };

  //returning the comment button
  return (
    <Button className="cart" color="secondary" onClick={scrollToBottom}>
      Comment
    </Button>
  );
};

//exporting function
export default ScrollButton;
