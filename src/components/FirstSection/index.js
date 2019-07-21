import React from "react";
import { animated, useSpring } from "react-spring";
import TypeEffect from "../TypeEffect";
import './index.scss'

const FirstSection = () => {

     const mainTitleAnimation = useSpring({
    from: { opacity: 1 },
    to: { opacity: 0 },
    delay: "7500",
    config: { duration: 1000 }
  });
  const buttonAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: "9500",
    config: { duration: 2000 }
  });

  const messagesAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: "8500",
    config: { duration: 2000 }
  });
  return (
    <div className="first-section-main">
      <div className="animated-text-container">
        <animated.h1 style={mainTitleAnimation}>
          <TypeEffect text={"We Create Chemistry, Together"} />
        </animated.h1>
      </div>
      <div className="main-message-container">
        <div>
          <animated.p style={messagesAnimation} className="main-title">
            Design your molecules
          </animated.p>
          <animated.p style={messagesAnimation} className="second-title">
            using 2D and 3D
          </animated.p>
          <animated.p style={messagesAnimation} className="sub-title">
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
          <animated.p style={messagesAnimation} className="left-description">
            a more efficient way to get access and build your moleculeslibrary{" "}
          </animated.p>
        </div>
        <div className="second-message right">
          <animated.p style={messagesAnimation} className="right-description">
            At ChemAlive, our goal is to allow the full and automatic
            calculation of accurate and reliable data for molecular properties
            and synthetic reactions available to all chemists from basic 2D
            chemical syntax.
          </animated.p>
        </div>
      </div>
      <div className="main-section-bottom">new section</div>
    </div>
  );
};

export default FirstSection;
