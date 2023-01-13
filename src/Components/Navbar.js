import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY > 50) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header headerScroll" : "header"}>
      <Link to="/" className="p">
        <h1>Portfolio</h1>
      </Link>
      <ul className={click ? "bar active" : "bar"}>
        <li>
          <Link to="/project">Projects</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="icons" onClick={handleClick}>
        {click ? (
          <FaTimes size={30} style={{ cursor: "pointer" }} />
        ) : (
          <FaBars size={30} style={{ cursor: "pointer" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
