import React from "react";
import { motion } from "framer-motion";

import a1 from "../../assets/Advisers/a1.png";
import a2 from "../../assets/Advisers/a2.png";
import a3 from "../../assets/Advisers/a3.png";
import a4 from "../../assets/Advisers/a4.png";
import a5 from "../../assets/Advisers/a5.png";
import a6 from "../../assets/Advisers/a6.png";

const advisers = [
  { name: "Aaliyah Williams", role: "Trade Master", img: a1 },
  { name: "Nikhil Singri", role: "Trade Master", img: a2 },
  { name: "Aaliyah Williams", role: "Trade Master", img: a3 },
  { name: "Aaliyah Williams", role: "Trade Master", img: a4 },
  { name: "Aaliyah Williams", role: "Trade Master", img: a5 },
  { name: "Aaliyah Williams", role: "Trade Master", img: a6 },
];

/* Section entrance */
const sectionAnim = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* Grid stagger */
const gridAnim = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

/* Card entrance */
const cardAnim = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function H_Section_06() {
  return (
    <motion.section
      variants={sectionAnim}
      initial="hidden"
      animate="visible"
      className="relative w-full bg-[#050D0B] py-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0E2C23]/60 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-center text-3xl md:text-5xl font-semibold text-white font-['Anek_Telugu']"
        >
          Meet Our <span className="text-green-400">Advisers</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-4 text-center  text-white/60 max-w-3xl mx-auto"
        >
          Our advisers bring deep market expertise and strategic insight to the academy. 
Their experience and guidance ensure that our students receive structured, 
high-quality trading education.
        </motion.p>

        {/* Grid */}
        <motion.div
          variants={gridAnim}
          initial="hidden"
          animate="visible"
          className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {advisers.map((item, i) => (
            <motion.div
              key={i}
              variants={cardAnim}
              whileHover={{
                y: -10,
                rotateY: 6,
                rotateX: -4,
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 140 }}
              className="
                group
                relative
                rounded-2xl
                bg-[#143024]
                p-6
                md:perspective-[1000px]
                border border-transparent
                hover:border-green-400
                hover:shadow-xl
              "
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden rounded-xl">
                <motion.img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-contain"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              {/* Name Plate */}
              <div className="absolute left-6 right-6 bottom-6 bg-white/80 rounded-xl text-center py-2">
                <h4 className="font-semibold text-[#0E2C23]">
                  {item.name}
                </h4>
                <p className="text-sm text-[#0E2C23]/70">
                  {item.role}
                </p>
              </div>

              {/* Subtle floating (desktop only) */}
              <motion.div
                className="absolute inset-0 pointer-events-none hidden md:block"
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 3 + i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default H_Section_06;
