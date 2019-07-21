import React from "react";
import Particles from "react-particles-js";
import { animated, useSpring } from "react-spring";
import "./index.scss";
import "../Constants.scss";

import SecondSection from "../SecondSection";
import ThirdSection from "../ThirdSection";
import particlesConfig from "../ParticlesConf";
import FirstSection from "../FirstSection";

const LandingPage = () => {
  const CanvasAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1, background: "#19154A" },
    config: { duration: 1500 }
  });
 

  return (
    <animated.div className="particles-main-container" style={CanvasAnimation}>
      <p id="main-section" style={{ position: "absolute" }} />
      <Particles params={particlesConfig} />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </animated.div>
  );
};
export default LandingPage;
