import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

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

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const card = {
  hidden: { opacity: 0, y: 60, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

function H_Section_06() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="relative w-full bg-[#050D0B] py-20 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0E2C23]/60 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center text-3xl md:text-5xl font-semibold text-white font-['Anek_Telugu']"
        >
          Meet Our <span className="text-green-400">Advisers</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="mt-4 text-center text-white/60 max-w-xl mx-auto"
        >
          Hey, meet our advisers! They're the brains behind our company's
          success. Couldn't have done it without them.
        </motion.p>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {advisers.map((item, i) => (
            <motion.div
              key={i}
              variants={card}
              whileHover={{
                rotateY: 8,
                rotateX: -6,
                y: -12,
              }}
              whileTap={{
                scale: 0.97, // ✅ mobile interaction
              }}
              transition={{ type: "spring", stiffness: 120 }}
              className="
                group
                relative
                rounded-2xl
                bg-[#143024]
                p-6
                perspective-[1000px]
                shadow-[0_0_0_rgba(0,0,0,0)]
                hover:border
                hover:backdrop-blur-2xl
                hover:shadow-2xl
                
                hover:border-green-400
              "
            >
              {/* Image */}
              <motion.div
                initial={{ scale: 1.05 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative h-80 overflow-hidden rounded-xl"
              >
                <motion.img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-contain"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>

              {/* Name Plate */}
              <div
                className="
                  absolute
                  left-6
                  right-6
                  bottom-6
                  bg-white/80
                  rounded-xl
                  text-center
                  py-2
                "
              >
                <h4 className="font-semibold text-[#0E2C23]">
                  {item.name}
                </h4>
                <p className="text-sm text-[#0E2C23]/70">
                  {item.role}
                </p>
              </div>

              {/* Idle floating (desktop only feel, harmless on mobile) */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 3 + i * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 pointer-events-none"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default H_Section_06;
