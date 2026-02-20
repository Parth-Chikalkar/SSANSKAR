import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import PlatformCard from "../../Components/PlatformCard";
import yt from "../../assets/Platforms/youtube.png";
import jd from "../../assets/Platforms/justdial.png";

const platforms = [
  {
    id: 1,
    title: "SSANSKAR on",
subtitle: "YouTube",
    img: yt,
    link: "https://www.youtube.com/@ssanskartradingacademy7280",
  },
  {
    id: 2,
    title: "SSANSKAR on",
subtitle: "Justdial",
    img: jd,
    link: "https://www.justdial.com/Kolhapur/SSANSKAR-TRADING-ACADEMY-Near-Venus-Corner-Venus-Corner/0231PX231-X231-220701221744-V9P9_BZDET?auto=1&trkid=3669428959&term=SSANSKAR%20TRADING",
  },
];

function H_Section_08() {
  const scrollRef = useRef(null);
  const cardRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // Stable active-card detection
  const handleScroll = () => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const center = container.scrollLeft + container.offsetWidth / 2;

    let closest = 0;
    let min = Infinity;

    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      const elCenter = el.offsetLeft + el.offsetWidth / 2;
      const dist = Math.abs(center - elCenter);
      if (dist < min) {
        min = dist;
        closest = i;
      }
    });

    setActiveIndex(closest);
  };

  return (
    <section className="w-full py-24  bg-gradient-to-b from-[#092019] to-[#050D0B] flex flex-col justify-center items-center">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-16 px-6"
      >
        <h2 className="text-4xl md:text-5xl font-['Anek_Telugu'] font-semibold text-white tracking-tight">
         Trusted and Recognized Across Leading{" "}
<span className="text-emerald-400">Platforms</span>
        </h2>
      </motion.div>

      {/* Scroll Container */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        ref={scrollRef}
        onScroll={handleScroll}
        className="
          w-full max-w-[1200px]
          px-6 py-6
          flex gap-8
          overflow-x-auto
          snap-x snap-mandatory
          no-scrollbar
        "
      >
        {platforms.map((item, index) => (
          <a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="snap-center shrink-0"
          >
            <div ref={(el) => (cardRefs.current[index] = el)}>
              <PlatformCard
                title={item.title}
                subtitle={item.subtitle}
                img={item.img}
                isActive={index === activeIndex}
              />
            </div>
          </a>
        ))}
      </motion.div>

    
      <div className="flex gap-3 mt-8">
        {platforms.map((_, index) => (
          <button
            key={index}
            onClick={() =>
              cardRefs.current[index]?.scrollIntoView({
                behavior: "smooth",
                inline: "center",
              })
            }
            className={`transition-all duration-300 rounded-full ${
              activeIndex === index
                ? "w-8 h-2.5 bg-emerald-400"
                : "w-2.5 h-2.5 bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default H_Section_08;
