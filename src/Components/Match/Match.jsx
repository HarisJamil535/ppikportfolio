import React, { useRef } from "react";
import "./Match.scss";
import { motion, useScroll, useTransform } from 'framer-motion';

const Match = () => {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  
  // Adjust the range to start moving when the card is closer to view
  const y = useTransform(scrollY, [0, 600], [150, 0]);

  return (
    <div>
      <h2 className="gothic-a1-black">WE'RE MATCH IF</h2>
      <div className="cards">
        <div className="card1">
          <h3 className="card-heading">YOU'RE SEEKING THE IMPACT OF EVERY PIXEL</h3>
          <p className="card-para">
            I infuse websites with visually appealing metaphors: they hold the
            viewer's attention without losing effectiveness and make them want
            to get to know the brand better.
          </p>
        </div>
        {/* Card 2 */}
        <motion.div
          className="card2"
          ref={ref}
          style={{ y }}
        >
          <h3 className="card-heading">YOU'RE SEEKING THE IMPACT OF EVERY PIXEL</h3>
          <p className="card-para">
            I infuse websites with visually appealing metaphors: they hold the
            viewer's attention without losing effectiveness and make them want
            to get to know the brand better.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Match;
