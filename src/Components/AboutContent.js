import "./AboutContent.css";
import React from "react";
import pic6 from "../Pics/picture2.jpg";
import pic7 from "../Pics/picture3.jpg";

const AboutContent = () => {
  return (
    <div className="parent">
      <div className="left-con">
        <h2>About Me </h2>
        <p className="de">
          I am a positive, enthusiastic and competent Web Developer who has
          built up a diverse range of skills, qualities and attributes that
          guarantee I will perform highly in this role
        </p>

        <h2>Skills</h2>
        <ul>
          <li>React</li>
          <li>Javascript</li>
          <li>Html</li>
          <li>Css</li>
          <li>NodeJs</li>
        </ul>
      </div>
      <div className="right-con">
        <img className="p1" src={pic6} alt="6" />
        <img className="p2" src={pic7} alt="7" />
      </div>
    </div>
  );
};

export default AboutContent;
