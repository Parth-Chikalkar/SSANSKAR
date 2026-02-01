import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Live Market Training",
    desc: "Participate in live market sessions with guidance.",
  },
  {
    id: 2,
    title: "Foundation (From Scratch)",
    desc: "Learn market fundamentals, no prior knowledge needed.",
  },
  {
    id: 3,
    title: "Practice",
    desc: "Apply concepts through practice, continuous learning.",
  },
  {
    id: 4,
    title: "Market Basics",
    desc: "Understand charts, price action, and market behavior.",
  },
  {
    id: 5,
    title: "Lifetime Learning Support",
    desc: "Ongoing doubt-clearing, community support, and guidance.",
  },
  {
    id: 6,
    title: "Strategy Building",
    desc: "Build skills in strategy planning and risk control.",
  },
];

const H_Section_04 = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.4 });
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev === steps.length ? 1 : prev + 1));
    }, 1800);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen bg-[#050D0B] py-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#040E0B] via-[#040E0B]  to-[#092019]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}

         <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-6xl font-semibold font-['Anek_Telugu'] text-white"
                >
                 <h2 className="text-center pb-20 font-['Anek_Telugu'] text-3xl md:text-5xl font-semibold text-white">
          From Beginner To Confident Trader{" "}
          <span className="text-green-400">Learning Roadmap</span>
        </h2>
                </motion.h2>
       

        {/* Timeline */}
        <div className="relative b mt-60">
          {/* Base line */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-white/10" />

          {/* Animated progress */}
          <motion.div
            className="absolute top-1/2 left-0 h-px bg-green-400"
            animate={{
              width: isInView
                ? `${(activeStep / steps.length) * 100}%`
                : "0%",
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />

          {/* Steps */}
          <div className="grid  grid-cols-6 gap-6 relative">
            {steps.map((step, index) => {
              const isActive = activeStep === step.id;
              const isTop = index % 2 === 0;

              return (
                <div
                  key={step.id}
                  className="relative flex flex-col items-center"
                >
                  {/* Info Card */}
                  <motion.div
                    animate={{
                      
                      opacity: isActive ? 1 : 0.6,
                      boxShadow: isActive
                        ? "0 0 40px rgba(74,222,128,0.25)"
                        : "none",
                      borderColor: isActive
                        ? "rgba(74,222,128,0.9)"
                        : "rgba(255,255,255,0.08)",
                    }}
                    transition={{ duration: 0.6 }}
                    className={`
                      absolute
                      ${isTop ? "-top-40" : "top-20"}
                      w-66 p-5 h-30 rounded-xl text-center
                      bg-[#1C2A26] border
                    `}
                  >
                    <h4 className="text-white font-['Anek_Telugu'] font-semibold text-[19px]">
                      {step.title}
                    </h4>
                    <p className="mt-2 text-sm text-white/60">
                      {step.desc}
                    </p>
                  </motion.div>

                  {/* Connector Line */}
                  <motion.div
                    animate={{
                      backgroundColor: isActive
                        ? "rgba(74,222,128,0.9)"
                        : "rgba(255,255,255,0.15)",
                      boxShadow: isActive
                        ? "0 0 18px rgba(74,222,128,0.9)"
                        : "none",
                    }}
                    transition={{ duration: 0.6 }}
                    className={`
                      absolute
                      w-px
                      ${isTop ? "top-[-40px] h-18" : "h-20"}
                    `}
                  />

                  {/* Step Number */}
                  <motion.div
                    animate={{
                      scale: isActive ? [1, 1.4, 1] : 1,
                      boxShadow: isActive
                        ? "0 0 20px rgba(74,222,128,0.9)"
                        : "none",
                    }}
                    transition={{ duration: 0.8 }}
                    className="
                      z-10 w-9 h-9 rounded-full
                      flex items-center justify-center
                      bg-[#1C2A26]
                      border border-green-400
                      text-green-400 text-sm font-semibold
                    "
                  >
                    {step.id}
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default H_Section_04;
