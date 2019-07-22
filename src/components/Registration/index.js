import React from "react";
import logo2 from "../../Assets/Logo2.png";
import "./index.scss";

const Registration = () => {
  return (
    <div className="registration-main-container">

      <div className="left-conatiner">
        
        
        <p>ConstruQt - Molecular design tool for high throughput quantum</p>
        
      </div>

      <div className="right-container">
      <img className="logo-icon" src={logo2} alt="logo-chemalive" />
      <p>Registration</p>
        <div className="registration-form-container">
        
          <div className="input-item">
            <input type="text" id="name" required="required" />
            <label>Name</label>
            <div className="bar" />
          </div>
          <div className="input-item">
            <input type="text" id="name" required="required" />
            <label>Last Name</label>
            <div className="bar" />
          </div>
          <div className="input-item">
            <input type="text" id="name" required="required" />
            <label>Email</label>
            <div className="bar" />
          </div>
          <div className="input-item">
            <input type="text" id="name" required="required" />
            <label>Password</label>
            <div className="bar" />
          </div>
          <div className="input-item">
            <input type="text" id="name" required="required" />
            <label>Confirm Password</label>
            <div className="bar" />
          </div>
          
        </div>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default Registration;
