import React from "react";
import "./index.scss";
import { useSpring } from "react-spring";
import logo from "./assets/logo.png";
import { withRouter } from "react-router";
import { connect } from "react-redux";


const Navigation = props => {
  const InitialNavBar = useSpring({
    to: { opacity: 1 },
    config: { duration: 3000 },
    delay: { duration: 2000 }
  });

  return (
    <div style={InitialNavBar} className="navigation-container">
      <div className="left">
        <a href='#home'><img className="logo" src={logo} alt="logo"></img></a>
      </div>
      <div className="right">
        <p
          onClick={() => props.history.push("/company")}
          className="navigation-items"
        >
          Company
        </p>
        <a className="navigation-items" href='#second-section'>Second Section</a>
        <a className="navigation-items" href='#third-section'>Third Section</a>
        <p className="navigation-items">Features</p>
        <p className="navigation-items">Contact</p>
        <button
          onClick={() => props.history.push("/registration")}
          className="register-button"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default withRouter(connect()(Navigation));
