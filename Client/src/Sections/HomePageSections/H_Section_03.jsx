import React from "react";
import { motion } from "framer-motion";
import ServicesCards from "../../Components/ServiceCards";

function H_Section_03() {
  return (
    <section className="relative w-full bg-[#050D0B] py-24 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0E2C23]/60 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-6xl font-semibold font-['Anek_Telugu'] text-white"
        >
          <span className="text-green-400">Services</span> We Offer
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-4 text-white/60 max-w-xl mx-auto text-sm md:text-base"
        >
          Where Serious Trading Education Begins
        </motion.p>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="mt-16"
        >
          <ServicesCards />
        </motion.div>
      </div>
    </section>
  );
}

export default H_Section_03;
