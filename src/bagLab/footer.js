import React from "react";
import "./footer.css"; //importing styles

//creating a footerpage
const FooterPage = () => {
  //returning the footer
  return (
    <div className="footer">
      <div className="footerTop">
        <div className="footerContent">
          <h1>Digimon</h1>
          <p>
            {" "}
            Thank you for visiting my first React data application! Tell me how
            you feel and check out my other web applications!{" "}
          </p>
        </div>
        <div className="footerLinks">
          <div className="Row">
            <h2>Other Projects</h2>
            <a href="https://harremar.pages.iu.edu/flowerio/index.html">
              flowerio
            </a>
            <br />
            <a href="https://harremar.github.io/snakesAndLadders/">
              Snakes & Ladders
            </a>
          </div>
          <div className="Row">
            <h2>Find Me on Social</h2>
            <a href="https://www.instagram.com/marielle_harrell/">Instagram</a>
            <br />
            <a href="https://www.linkedin.com/in/marielle-harrell-371953230/">
              LinkedIn
            </a>
            <br />
            <a href="https://github.com/harremar">GitHub</a>
            <br />
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <p>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <span>Marielle Harrell</span>
        </p>
      </div>
    </div>
  );
};

// exporting the footerpage
export default FooterPage;
