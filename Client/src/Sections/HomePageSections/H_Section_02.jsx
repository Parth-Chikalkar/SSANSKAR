import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import illustration from "../../assets/Section_02.png";
import illustration2 from "../../assets/Section_02_bg.png";

const H_Section_02 = () => {
  const skillsRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: skillsRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["20%", "100%"]);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-[#050D0B] via-[#050D0B] to-[#0A1F19] pt-20  overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h2
            variants={fadeUp}
            className="font-['Anek_Telugu'] text-[42px] md:text-[48px] font-semibold leading-tight text-white"
          >
            The Vision Behind{" "}
            <motion.span
              className="text-green-400 inline-block"
              animate={{
                textShadow: [
                  "0 0 0 rgba(74,222,128,0)",
                  "0 0 18px rgba(74,222,128,0.8)",
                  "0 0 0 rgba(74,222,128,0)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              SSANSKAR
            </motion.span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="mt-6 font-['Montserrat_Alternates'] text-white/70 text-[20px] leading-relaxed"
          >
            SSANSKAR Trading Academy is a trusted and distinguished institute in stock market education. With 1,000+ successful  students, we focus on building skilled, confident, and disciplined traders  through practical, real market learning. To empower students with the right knowledge, confidence,
and disciplined approach to succeed in the stock market.
          </motion.p>
        </motion.div>

        {/* Content Grid */}
        <div className="mt-16 grid md:grid-cols-2 gap-16 items-start">

          {/* Skills */}
          <div ref={skillsRef} className="relative pl-10">
            <div className="absolute left-0 top-0 h-full w-[2px] bg-white/10 rounded-full" />
            <motion.div
              style={{ height: lineHeight }}
              className="absolute left-0 top-0 w-[2px] bg-green-400 rounded-full shadow-[0_0_12px_rgba(74,222,128,0.8)]"
            />

            <h3 className="font-['Anek_Telugu'] text-[50px] font-semibold text-white">
              <span className="text-green-400">Skills</span> We Focus On
            </h3>

            <ul className="mt-8 space-y-6 font-['Montserrat_Alternates'] text-white/80 text-[20px]">
              <li>Stock Market Structure & System Understanding</li>
              <li>Investment & Swing Trading Strategies</li>
              <li>Pure Price Action Chart Reading</li>
              <li>Futures & Options Knowledge</li>
              <li>Risk Management & Position Sizing</li>
              <li>Trading Psychology & Discipline</li>
              <li>Market Analysis & Trade Planning</li>
            </ul>
          </div>

          {/* Illustration */}
          <div className="relative flex justify-center">
            <div className="
  absolute
  w-[160px]
  h-[520px]
  rotate-[-130deg]
  rounded-[186.5px]
  bg-white/10
  shadow-[0_0_40px_rgba(255,255,255,0.08)]
  top-8
  opacity-60
  pointer-events-none
" />

<div className="
  absolute
  w-[220px]
  h-[590px]
  rotate-[-130deg]
  rounded-[186.5px]
  bg-white/5
  shadow-[0_0_40px_rgba(255,255,255,0.05)]
  opacity-50
  pointer-events-none
" />



            <motion.img
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              src={illustration}
              className="w-[300px] md:w-[364px] relative z-10"
            />

            <motion.img
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              src={illustration2}
              className="absolute w-[600px] md:w-[764px] right-[-40px] top-20 -z-10"
            />

            <div className="absolute top-25 -z-20 w-[300px] h-[300px] bg-green-400/40 rounded-full blur-[120px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default H_Section_02;
