import React from "react";
import "./slideshow.css"; //importing styles

//these are the colors for the animation
const colors = [
  "purple",
  "#1188FF",
  "#11CC99",
  "#FFBB22",
  "#FF1C88",
  "#33DDFF",
  "#FF7700",
  "#DD99FF",
];

//creating the export function for the animation
export default function ColorAnimation() {
  const [bg, setbg] = React.useState(0); //bg color
  const timeoutRef = React.useRef(null); //creating a time lapse

  //creating timeout function
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current); //clearing timeout
    }
  }

  //changing the bg color
  React.useEffect(() => {
    resetTimeout(); //resetting timout
    //getting color. looking at array position. if at end of array go to first position else add position by 1 every 2 seconds
    timeoutRef.current = setTimeout(
      () => setbg((prevbg) => (prevbg === colors.length - 1 ? 0 : prevbg + 1)),
      2000
    );

    return () => {
      resetTimeout(); //returning timeout
    };
  }, [bg]);

  //returning the color changer
  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-bg * 100}%, 0, 0)` }} //slide over to see next color
      >
        {/* getting all of the colors */}
        {colors.map((backgroundColor, bg) => (
          <div className="slide" key={bg} style={{ backgroundColor }}></div>
        ))}
      </div>
    </div>
  );
}
