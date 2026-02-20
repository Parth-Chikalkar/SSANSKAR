import React from "react";
import { motion } from "framer-motion";
import ServicesCards from "../../Components/ServiceCards";

function H_Section_03() {
  return (
    <section className="relative w-full bg-[#050D0B] py-10 md:py-0 md:pb-24 ">
      
      {/* Background glow */}
      <div className="absolute  inset-0 bg-gradient-to-b from-[#0E2C23]/60 to-transparent pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto px-6 pt-10 text-center"
      >
        
        {/* Heading */}
        <motion.h2
          className="
            text-4xl
            md:text-6xl
            font-semibold
            font-['Anek_Telugu']
            text-white
          "
        >
          <span className="text-green-400 ">
            Services
          </span>{" "}
          We Offer
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          transition={{ delay: 0.15 }}
          className="mt-4 text-white/60 max-w-xl mx-auto text-sm md:text-base"
        >
          Empowering Traders Through Structured Professional Education
        </motion.p>

        {/* Cards */}
        <motion.div
          
          className="mt-14 md:mt-16"
        >
          <ServicesCards />
        </motion.div>

      </motion.div>
    </section>
  );
}

export default H_Section_03;
