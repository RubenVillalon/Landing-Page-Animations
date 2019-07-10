import React from "react";
import Navigation from "../Navigation";

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
