import React, { Component } from "react";
import pic2 from "../Pics/picture6.jpg";
import "./Last.css";

class Last extends Component {
  render() {
    return (
      <div>
        <div className="mask2">
          <img className="pic2" src={pic2} alt="pic2" />
        </div>
        <div className="content2">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default Last;
