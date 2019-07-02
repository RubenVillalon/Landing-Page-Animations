import React from "react";
import { useSpring, animated } from "react-spring";
import Navigation from "../Navigation";
import TypeEffect from '../TypeEffect'

import "./index.scss";
import ParticlesCanvas from "../ParticlesCanvas";

const App = () => {
  return (
    <div className='app-main-container'>
      <Navigation />
      <ParticlesCanvas/>
    </div>
  );
};

export default App;
