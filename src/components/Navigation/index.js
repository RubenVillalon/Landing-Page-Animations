import React, { useState} from "react";
import "./index.scss";
import { useSpring, animated, config } from "react-spring";


const Navigation = () => {
  const [ toggle, setToggle] = useState(false);

  const animation = useSpring({
    vector: [0, 10, 30],
    display: 'block',
    paddingLeft: 20,
    background: 'linear-gradient(to right, #009fff, #ec2f4b)',
    transform: 'translate3d(0px,0,0) scale(1) rotateX(0deg)',
    boxShadow: '0px 10px 20px 0px rgba(0,0,0,0.4)',
    borderBottom: '10px solid #2D3747',
    shape: 'M20,20 L20,380 L380,380 L380,20 L20,20 Z',
    textShadow: '0px 5px 15px rgba(255,255,255,0.5)'
  })

  const NavBarAnimationItems = useSpring({
    fontSize: toggle ? "30px": "15px"
  })

  const InitialNavBar = useSpring({
    to: { opacity: 1 },
    config: { duration: 3000 }
  });
  const number = useSpring({ number: 1000, from: { number: 0 } });
  
  return (
    <animated.div style={InitialNavBar} className="navigation-main-container">
      <animated.p>{number.number}</animated.p>
      <animated.p onClick={() => setToggle(!toggle)} style={NavBarAnimationItems}>Home</animated.p>
      <animated.p>About</animated.p>
      <animated.p>Gallery</animated.p>
      <animated.p>Contact</animated.p>
    </animated.div>
  );
};

export default Navigation;
