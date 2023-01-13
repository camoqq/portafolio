import React from "react";
import "./Proj.css";
import pic1 from "../Pics/p1.png";
import pic3 from "../Pics/p3.jpeg";
import pic4 from "../Pics/p4.png";
import pic2 from "../Pics/p2.jpeg";

const Proj = () => {
  return (
    <div className="firstContainer">
      <h1>Projects</h1>
      <div className="project-container">
        <div className="project-card">
          <img src={pic3} alt="pics" />
          <div>
            <h2>Weather</h2>
            <p className="details">
              Allows you to search current weather by city name
            </p>
          </div>
          <div className="navs">
            <a href="https://github.com/camoqq/weather">view code</a>
            <a href="https://camoqq.github.io/weather/">view live</a>
          </div>
        </div>

        <div className="project-card">
          <img src={pic4} alt="pics" />
          <div>
            <h2>Tic Tac Toe</h2>
            <p className="details">place 3 marks in a row to win</p>
          </div>
          <div className="navs">
            <a href="https://github.com/camoqq/tictactoe">view code</a>
            <a href="https://camoqq.github.io/tictactoe/">view live</a>
          </div>
        </div>

        <div className="project-card">
          <img src={pic2} alt="pics" />
          <div>
            <h2>Shopping Cart</h2>
            <p className="details">Shopping cart using context API</p>
          </div>
          <div className="navs">
            <a href="https://github.com/camoqq/shopping_cart">view code</a>
            <a href="https://camoqq.github.io/shopping_cart/">view live</a>
          </div>
        </div>

        <div className="project-card">
          <img src={pic1} alt="pics" />
          <div>
            <h2>Agenda List</h2>
            <p>Todo list to help you stay organized</p>
          </div>
          <div className="navs">
            <a href="https://github.com/camoqq/list">view code</a>
            <a href="https://camoqq.github.io/list/">view live</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proj;
