import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import "./Header.scss";
import { FaMoon } from "react-icons/fa6";
import { BsSuitHeartFill } from "react-icons/bs";
import { ImSpades } from "react-icons/im";
import { FaRegSnowflake } from "react-icons/fa";
import { motion, useAnimation } from 'framer-motion';

const Header = () => {
  const controlsC = useAnimation();
  const controlsMoon = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controlsC.start({ opacity: 1 }); // Start with C
      await controlsMoon.start({ opacity: 0 }); // Hide Moon

      await controlsC.start({ opacity: 0, transition: { delay: 1, duration:0.2} }); // Wait 2 seconds, hide C
      await controlsMoon.start({ opacity: 1 }); // Show Moon

      await controlsMoon.start({ opacity: 0, transition: { delay:2, duration:1 } }); // Wait 2 seconds, hide Moon
    };

    sequence();

    const interval = setInterval(() => {
      sequence();
    }, 4000); // Total cycle duration

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [controlsC, controlsMoon]);

  return (
    <>
      <Navbar />
      <h1 className="gothic-a1-black">WE<br/>
        <motion.span
           className="moon"
          animate={controlsMoon}
        >
          <FaMoon  className="moon"  />
        </motion.span>
        <motion.span
          animate={controlsC}
        >
          C
        </motion.span>
        REATE<br/> ME
        
        <motion.span  className="heart"
        animate={controlsMoon}
        >
           <BsSuitHeartFill className="heart" size={108}/>
        </motion.span>
        <motion.span 
        animate={controlsC}
        >M</motion.span>
        
        OR
        <motion.span
        className="spade"
        animate={controlsMoon}
        ><ImSpades className="spade"  /></motion.span>
        <motion.span
         animate={controlsC}
        >A</motion.span>
        BLE<br/> E
        <motion.span
        className="cool"
         animate={controlsMoon}
        >
          <FaRegSnowflake className="cool"  />
        </motion.span>
        <motion.span 
        animate={controlsC}
        >X</motion.span>
        PERIENCE<br/> FOR BRANDS
      </h1>
    </>
  );
};

export default Header;
