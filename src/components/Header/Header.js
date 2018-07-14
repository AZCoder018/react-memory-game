import React from "react";
import "./Header.css";

//Create Bootstrap navbar and jumbotron
const Header = props => (
  
  <div className="main-container">
    <nav className="navbar sticky-top justify-content-end">
      <h5 className="text">Current game score: {props.currentScore} | Top score: {props.topScore}</h5>
    </nav>
    
    <div className="jumbotron">
      <h1 className="title">Clicky Memory Game!</h1>
      <p className="lead">Click on a cartoon image to earn points, but don't click on an image more than once!</p>
    </div>
  </div>
);

export default Header;