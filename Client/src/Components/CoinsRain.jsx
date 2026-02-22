import React from "react";
import { motion } from "framer-motion";

const SsanskarLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050a06] text-white">
      
      <div className="relative w-64 h-40 flex items-end justify-center gap-2 mb-12">
        
        
        {[0.4, 0.7, 0.5, 0.9, 0.6, 1.0, 0.8].map((heightMultiplier, i) => (
          <motion.div
            key={i}
            className="w-3 bg-gradient-to-t from-green-600 to-green-400 rounded-t-full shadow-[0_0_15px_rgba(74,222,128,0.3)]"
            initial={{ height: 10 }}
            animate={{ 
              height: [`${20 * heightMultiplier}%`, `${100 * heightMultiplier}%`, `${40 * heightMultiplier}%`] 
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.15,
              ease: "easeInOut",
            }}
          />
        ))}

        <svg
          className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,90 Q15,80 30,85 T60,40 T100,10" 
            fill="transparent"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        
      
        </svg>
      </div>

     
      <div className="text-center px-6">
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-green-400 font-['Anek_Telugu'] text-xl md:text-2xl font-bold tracking-tight mb-2"
        >
          SSANSKAR TRADING ACADEMY
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="text-gray-400 font-light italic text-sm md:text-base max-w-xs mx-auto"
        >
          "Mastering the pulse of the Indian Markets, one trade at a time."
        </motion.p>
      </div>

      
    </div>
  );
};

export default SsanskarLoader;