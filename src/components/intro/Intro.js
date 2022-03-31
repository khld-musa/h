import React from "react";
import "./Intro.css";

const Intro = () => {
  return (
    <div id="intro" className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My Name Is ...</h2>
          <h1 className="i-name">Khalid Musa</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <p className="i-title-item">Web Developer, UI/UX Developer & Mobile Developer</p>
            </div>
          </div>
          <p className="i-description">
              I develop services for custmers in all sizes, specializing in creating stylish, modern websites.
          </p>
        </div>
      </div>
      <div className="i-right">
          {/* <img src="https://purepng.com/public/uploads/large/purepng.com-man-face-herofaceshumansfrontalhuman-identityman-1421526885661w7dlt.png" alt="" className="i-img" /> */}
      </div>
    </div>
  );
};

export default Intro;
