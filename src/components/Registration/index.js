import React from "react";
import logo_icon from "./Assets/Logo_Icon.png";
import "./index.scss";
import GoogleLogin, { GoogleLogout } from "react-google-login";

const Registration = () => {
  return (
    <div>
      <img className="logo-icon" src={logo_icon} alt="logo-chemalive" />
      <p>Registration</p>

      <GoogleLogin/>
      <GoogleLogout/>

      <div className="registration-form-container">
        <div className="group">
          <input type="text" id="name" required="required" />
          <label htmlFor="name">Name</label>
          <div className="bar" />
        </div>
        <div className="group">
          <input type="text" id="name" required="required" />
          <label htmlFor="name">Last Name</label>
          <div className="bar" />
        </div>
        <div className="group">
          <input type="text" id="name" required="required" />
          <label htmlFor="name">Email</label>
          <div className="bar" />
        </div>
        <div className="group">
          <input type="text" id="name" required="required" />
          <label htmlFor="name">Password</label>
          <div className="bar" />
        </div>
      </div>
    </div>
  );
};

export default Registration;
