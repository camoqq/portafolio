import React from "react";
import "./Page1.css";
import picture7 from "../Pics/picture7.jpg";
import { Link } from "react-router-dom";

const Page1 = () => {
  return (
    <div>
      <div className="mask">
        <img className="pic7" src={picture7} alt="" />
      </div>
      <div className="content">
        <h3>Hi, I'm a Camilo a</h3>
        <h1>Front End Developer</h1>

        <div className="buttons">
          <Link to="/project" className="btn btnn">
            projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page1;
