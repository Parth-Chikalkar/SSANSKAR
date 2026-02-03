import React from "react";
import { motion } from "framer-motion";

function PlatformCard({ title, subtitle, img, isActive }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className={`
        relative flex-shrink-0 w-[85vw] md:w-[520px]  md:h-[390px] md:pb-10 rounded-2xl
        border backdrop-blur-md transition-[opacity,box-shadow,background-color] duration-500
        flex flex-col overflow-hidden group
        ${
          isActive
            ? "bg-white/10 border-emerald-500/30 shadow-[0_0_30px_-10px_rgba(52,211,153,0.3)] opacity-100"
            : "bg-white/5 border-white/10 opacity-60 hover:opacity-100"
        }
      `}
    >
      {/* Header */}
      <div className="p-6 flex items-center justify-between z-10 relative">
        <h3 className="text-xl text-white font-medium tracking-wide">
          {title}{" "}
          <span className="font-bold text-emerald-400">{subtitle}</span>
        </h3>

        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </div>
      </div>

      {/* IMAGE FRAME (FIXED) */}
      <div className="flex-1 px-7 pb-6">
        <div className="
          w-full h-full
          bg-white/5
          rounded-xl
          flex items-center justify-center
          p-6
          relative
          overflow-hidden
        ">
          <img
            src={img}
            alt={`${subtitle} preview`}
            className="
              max-h-full
              max-w-full
              object-contain
              transition-transform duration-500
              group-hover:scale-105
            "
          />

          {/* Subtle overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
        </div>
      </div>
    </motion.div>
  );
}

export default PlatformCard;
