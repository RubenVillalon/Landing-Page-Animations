import React from "react";
import Navigation from "../Navigation";

import "./index.scss";

import Footer from "../Footer";
import LandingPage from "../LandingPage";

const Home = () => {
  return (
    <div className='app-main-container'>
      <Navigation />
        <LandingPage/>
      <Footer/>
    </div>
  );
};

export default Home;

