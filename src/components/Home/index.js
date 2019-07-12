import React from "react";
import Navigation from "../Navigation";

import "./index.scss";
import ParticlesCanvas from "../ParticlesCanvas";
import Footer from "../Footer";

const Home = () => {
  return (
    <div className='app-main-container'>
      <Navigation />
      <ParticlesCanvas/>
      <Footer/>
    </div>
  );
};

export default Home;
