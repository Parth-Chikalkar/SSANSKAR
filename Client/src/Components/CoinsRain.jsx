import React from "react";
import { motion } from "framer-motion";
import coin from "../assets/coin.jpg"; // or a single coin png

const coins = Array.from({ length: 18 });

function CoinsRain() {
  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {coins.map((_, i) => {
        const delay = Math.random() * 0.8;
        const left = Math.random() * 100;
        const size = Math.random() * 30 + 25;
        const duration = Math.random() * 1.5 + 1.8;

        return (
          <motion.img
            key={i}
            src={coin}
            alt="coin"
            initial={{
              y: -100,
              x: `${left}vw`,
              rotate: 0,
              opacity: 0,
            }}
            animate={{
              y: "110vh",
              rotate: 360,
              opacity: 1,
            }}
            transition={{
              duration,
              delay,
              ease: "easeIn",
            }}
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
            }}
          />
        );
      })}
    </div>
  );
}

export default CoinsRain;
