import React from "react";
import { motion } from "framer-motion";

import a1 from "../../assets/Advisers/a1.png";
import a2 from "../../assets/Advisers/a2.png";
import a3 from "../../assets/Advisers/a3.png";
import a4 from "../../assets/Advisers/a4.png";
import a5 from "../../assets/Advisers/a5.png";
import a6 from "../../assets/Advisers/a6.png";
import a7 from "../../assets/Advisers/a7.png";

const advisers = [
  { name: "Aarya Ghalsasi", role: "Sanskar Faculty", img: a1 },
  { name: "Nikhil Singri", role: "Sanskar Faculty", img: a2 },
  { name: "Mamta Galicha", role: "Sanskar Faculty", img: a3 },
  { name: "Harshwardhan Kamble", role: "Sanskar Faculty", img: a4 },
  { name: "Aniket Dhabhade", role: "Sanskar Faculty", img: a5 },
  { name: "Rudraksh Vendure", role: "Sanskar Faculty", img: a6 },
];

const sectionAnim = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const gridAnim = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

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

      {/* ===== PROFILE SECTION ===== */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-2xl mt-8 bg-white/5 p-10 flex flex-col md:flex-row items-center gap-10 md:gap-30">

          {/* LEFT SIDE - MAIN PROFILE */}
          <motion.div
            variants={cardAnim}
            whileHover={{ y: -10, rotateY: 6, rotateX: -4 }}
            transition={{ type: "spring", stiffness: 140 }}
            className="relative rounded-2xl bg-[#143024] p-6 border border-transparent w-full hover:border-green-400 hover:shadow-xl"
          >
            <div className="relative h-80 overflow-hidden rounded-xl">
              <motion.img
                src={a7}
                alt="Chaitanya Agarwal"
                className="w-full h-full object-contain"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
            </div>

            <div className="absolute left-6 right-6 bottom-6 bg-white/80 rounded-xl text-center py-2">
              <h4 className="font-semibold text-[#0E2C23]">
                Chaitanya Agarwal
              </h4>
              <p className="text-sm text-[#0E2C23]/70">
                SEBI REG RESEARCH ANALYST
              </p>
            </div>

            {/* Floating effect */}
            <motion.div
              className="absolute inset-0 pointer-events-none hidden md:block"
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* RIGHT SIDE - TEXT */}
          <div className="text-gray-200 text-xl  font-['Anek_Telugu'] leading-relaxed max-w-2xl text-center md:text-left">
            <p>
              <span className="font-semibold text-white">
                Chaitanya Agarwal is a SEBI registered
              </span>{" "}
              Research Analyst and the founder of Sanskar Trading Academy,
              committed to providing structured and research driven trading
              education. With strong expertise in financial markets,
              technical analysis, and risk management, he focuses on guiding
              traders through disciplined and informed decision making rather
              than speculation. Through his academy, he aims to simplify
              market complexities and empower individuals to build confidence,
              consistency, and long term success in trading.
            </p>
          </div>
        </div>
      </div>

      {/* ===== ADVISERS GRID ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mt-20">
        
        <motion.h2
          className="text-center text-3xl md:text-5xl font-semibold text-white font-['Anek_Telugu']"
        >
          Meet Our <span className="text-green-400">Advisers</span>
        </motion.h2>

        <motion.p className="mt-4 text-center text-white/60 max-w-3xl mx-auto">
          Our advisers bring deep market expertise and strategic insight to the academy.
          Their experience and guidance ensure that our students receive structured,
          high-quality trading education.
        </motion.p>

        <motion.div
          variants={gridAnim}
          initial="hidden"
          animate="visible"
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {advisers.map((item, i) => (
            <motion.div
              key={i}
              variants={cardAnim}
              whileHover={{ y: -10, rotateY: 6, rotateX: -4 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 140 }}
              className="relative rounded-2xl bg-[#143024] p-6 border border-transparent hover:border-green-400 hover:shadow-xl"
            >
              <div className="relative h-80 overflow-hidden rounded-xl">
                <motion.img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-contain"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              <div className="absolute left-6 right-6 bottom-6 bg-white/80 rounded-xl text-center py-2">
                <h4 className="font-semibold text-[#0E2C23]">
                  {item.name}
                </h4>
                <p className="text-sm text-[#0E2C23]/70">
                  {item.role}
                </p>
              </div>

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