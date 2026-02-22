import React from "react";
import { motion } from "framer-motion";
import services from "../Data/Services"


const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

function ServicesCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((item, i) => (
        <motion.div
          key={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          transition={{ duration: 0.1, ease: "easeOut" }}
          whileHover={{
            scale : 1,
            y: -10,
            boxShadow: "0 0 50px rgba(74,222,128,0.28)",
            borderColor: "rgba(74,222,128,0.9)",
          }}
          whileTap={{ scale: 0.96 ,
            borderColor: "rgba(74,222,128,0.9)", }} 
          className="
            group
            relative
            rounded-2xl
            px-8
            py-6
            text-center
            bg-[#1C2A26]
            border border-white/5
            transition-all duration-300
          "
        >
          {/* Image */}
          <img
            src={item.media}
            alt={item.title}
            className="h-[140px] mx-auto mb-6 object-contain"
          />

          {/* Title */}
          <h3 className="text-[23px] tracking-wide leading-tight font-['Anek_Telugu'] font-semibold text-white">
            {item.title}
          </h3>

          {/* Description */}
          <p className="mt-4 text-sm font-light text-white/60 leading-relaxed">
            {item.desc}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

export default ServicesCards;
