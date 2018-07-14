import React from "react";
import "./Header.css";

//Create Bootstrap navbar and jumbotron
const Header = props => (
  
  <div className="main-container">
    <nav className="navbar sticky-top navbar-light bg-light justify-content-end">
      <h5 className="text">Current game score: {props.currentScore} | Top score: {props.topScore}</h5>
    </nav>
    
    <div className="jumbotron">
      <h1 className="title">Memory Card Game</h1>
      <p className="lead">Click a card, but only click it once!</p>
    </div>
  </div>
);

export default Header;