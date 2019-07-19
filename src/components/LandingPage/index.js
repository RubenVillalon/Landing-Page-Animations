import React from "react";
import Particles from "react-particles-js";
import { useSpring, animated } from "react-spring";
import "./index.scss";
import "../Constants.scss";
import TypeEffect from "../TypeEffect";

import SecondSection from "../SecondSection";
import particlesConfig from '../ParticlesConf'

const LandingPage = () => {
 
  const CanvasAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1, background: "#19154A" },
    config: { duration: 1500 }
  });
  const h1Animation = useSpring({
    from: { marginBottom: 400, opacity: 1 },
    to: { marginBottom: 100, opacity: 0 },
    delay: "7500",
    config: { duration: 1000 }
  });
  const buttonAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: "9500",
    config: { duration: 2000 }
  });

  const TextAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: "8500",
    config: { duration: 2000 }
  });

  return (
    <animated.div className="particles-main-container" style={CanvasAnimation}>
      <Particles params={particlesConfig} />
      <div className="internal-container-top">
        <animated.h1 style={h1Animation}>
          <TypeEffect text={"We Create Chemistry, Together"} />
        </animated.h1>
      </div>
      <div className="main-message-container">
        <div>
          <animated.p style={TextAnimation} className="main-title">
            Design your molecules
          </animated.p>
          <animated.p style={TextAnimation} className="second-title">
            using 2D and 3D
          </animated.p>
          <animated.p style={TextAnimation} className="sub-title">
            Start your own project and enhance your workflow
          </animated.p>
        </div>
        <div className="buttons-container">
          <animated.button className="demo-button" style={buttonAnimation}>
            Demo
          </animated.button>
          <animated.button
            className="learn-more-button"
            style={buttonAnimation}
          >
            Learn More
          </animated.button>
        </div>
      </div>
      <div className="secondary-message">
        <div className="left">
          <animated.p style={TextAnimation} className="left-description">
            a more efficient way to get access and build your moleculeslibrary{" "}
          </animated.p>
        </div>
        <div className="second-message right">
          <animated.p style={TextAnimation} className="right-description">
            At ChemAlive, our goal is to allow the full and automatic
            calculation of accurate and reliable data for molecular properties
            and synthetic reactions available to all chemists from basic 2D
            chemical syntax.
          </animated.p>
        </div>
      </div>
      <SecondSection/>
    </animated.div>
  );
};
export default LandingPage;
