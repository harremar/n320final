import React from "react";
import "./hero.css"; //getting the styles
import BoopButton from "../sound/playSound"; //getting the music button

const HeroSection = () => {
  //returning the hero section
  return (
    // this is the hero image
    <div className="heroContainer">
      {/* this is the words found in the hero image */}
      <div className="heroWords"> 
        <h3>Welcome to the World of</h3>
        <h1>Digimon</h1>
        {/* Getting the music button */}
        <BoopButton /> 
      </div>
    </div>
  );
};

// Exporting function
export default HeroSection;
