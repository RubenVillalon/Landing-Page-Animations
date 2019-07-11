import React from "react";
import Particles from "react-particles-js";
import {useSpring, animated} from "react-spring";
import './index.scss'
import TypeEffect from '../TypeEffect'
import '../Constants.scss'

const ParticlesCanvas = () => {

        const particlesConfig = {
            "particles": {
                "number": {
                    "value": 400,
                    "density": {
                        "enable": false,
                        "value_area": 1202.559045649142
                    }
                },
                "color": {
                    "value": "#b12424"
                },
                "shape": {
                    "type": "circle",
                    "polygon": {
                        "nb_sides": 3
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.713518367085157,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 10,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 14.617389821424226,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 45,
                    "color": "#ffffff",
                    "opacity": 0.1122388442605866,
                    "width": 0.9620472365193136
                },
                "move": {
                    "enable": true,
                    "speed": 2.5,
                    "direction": "top-right",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 5932.624625202434,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": false,
                        "mode": "bubble"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 73.08694910712113,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 146.17389821424226,
                        "size": 10,
                        "duration": 5.116086437498479,
                        "opacity": 0.7877148959323055,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 138.0531260912288,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        };

        const CanvasAnimation = useSpring({
            from: {opacity: 0},
            to: {opacity: 1, background: "#19154A"},
            config: {duration: 2000}
        });
        const h1Animation = useSpring({
            from: {marginBottom: 400},
            delay: '9000',
            config: {duration: 3000}
        });
        const buttonAnimation = useSpring({
            from: {opacity: 0},
            to: {opacity: 1},
            delay: '1000',
            config: {duration: 2000}
        });

        return (
            <animated.div className='particles-main-container' style={CanvasAnimation}>
                <Particles params={particlesConfig}/>
                <div className='internal-container-top'>
                    <animated.h1 style={h1Animation}>
                        <TypeEffect text={"We Create Chemistry, Together"}/>
                    </animated.h1>
                </div>
                <div className='internal-container-bottom'>
                    <div>
                        <p className="main-title">Design your molecules</p>
                        <p className="second-title">using 2D and 3D</p>
                        <p className="sub-title" >Start your own project and enhance your workflow</p>
                    </div>
                    <div className='buttons-container'>
                        <animated.button className='demo-button' style={buttonAnimation}>Demo</animated.button>
                        <animated.button className='learn-more-button' style={buttonAnimation}>Learn More</animated.button>
                    </div>
                </div>
            </animated.div>
        );
    }
;

export default ParticlesCanvas;
