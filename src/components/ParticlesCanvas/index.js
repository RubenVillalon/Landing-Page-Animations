import React from "react";
import Particles from "react-particles-js";
import { useSpring, animated } from "react-spring";
import './index.scss'
import TypeEffect from '../TypeEffect'

const ParticlesCanvas = () => {
  const particlesConfig = {
    particles: {
      number: {
        value: 130
      },
      shape: {
        type: "circle"
      },
      size: {
        value: 10,
        random: true
      },
      line_linked: {
        enable: true
      },
      move: {
        enable: true,
        speed: 3,
        direction: "bottom",
        straight: false
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true
        }
      },
      modes: {
        push: {
          particles_nb: 12
        }
      }
    }
  };

  const CanvasAnimation = useSpring({
    from : { opacity: 0, background: "rgb(83, 71, 71)"},
    to: { opacity: 1, background: "black" },
    config: { duration: 10000 }

  })

  return (
    <animated.div className='particles-main-container' style={CanvasAnimation}>
      <h1>
        <TypeEffect text={"We Can Create Things, Together"}/>
      </h1>
      <Particles params={particlesConfig}>
      </Particles>
    </animated.div>
  );
};

export default ParticlesCanvas;
