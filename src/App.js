import "./App.css";
import React from "react";
// import Items from "./items";
import Inventory from "./bagLab/inventory";
import { CustomCursor } from "./CustomCursor/cursor";
import HeaderPage from "./header/header";
import FooterPage from "./bagLab/footer";
import Comments from "./comments/Comments";
import HeroSection from "./hero/hero";
import ColorAnimation from "./hero/slideshow";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CustomCursor />
        <HeaderPage />
        <ColorAnimation />
        <HeroSection />
        <ColorAnimation />
        <Inventory />

        <Comments currentUserId="1" />
        <br />
        <FooterPage />
      </div>
    );
  }
}

export default App;
