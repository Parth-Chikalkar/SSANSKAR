import React from "react";
import { motion } from "framer-motion";
import ServicesCards from "../../Components/ServiceCards";

function H_Section_03() {
  return (
    <section className="relative w-full bg-[#00150F] md:pb-10 py-5  ">
      
      {/* Background glow */}
     

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto px-6 md:pt-10 text-center"
      >
        
        {/* Heading */}
        <motion.h2
          className="
            md:text-4xl
            text-[36px]
            md:text-5xl
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
          className="mt-2 text-white/60 max-w-xl mx-auto text-[19px] md:text-base"
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
