import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/Services/Services1.png";
import img2 from "../assets/Services/Services2.png";
import img3 from "../assets/Services/Services3.png";
import img4 from "../assets/Services/Services4.png";
import img5 from "../assets/Services/Services5.png";
import img6 from "../assets/Services/Services6.png";



const services = [
  {
    title: " Free access to trading room & classroom",
    desc:
      "Looking for a social assistant that is flexible? Look no further! Our team of assistants is here to help.",
    media: img1,
  },
  {
    title: "Modules For Smart Trading",
    desc:
      "There are tons of modules for smart trading out there, but finding the right ones takes time and research",
    media: img2,
  },
  {
    title: "Lifetime Community support and doubt-clearing",
    desc:
      "As a news analyst, the reporter observed various stories unfolding, providing casual yet insightful analysis on each.",
    media: img3,
  },
  {
    title: "No education, age, or language barriers",
    desc:
      "Have you checked out any new rcryptocurrency platforms? I hear there are some exciting ones coming soon !",
    media: img4,
  },
  {
    title: "Live market sessions with experienced traders",
    desc:
      "Hey, just wanted to give you a heads up that there have been some changes to exchange orders recently.",
    media: img5,
  },
  {
    title: "Beginner-friendly learning environment.",
    desc:
      "So I added a price notification module to my online shopping app, and now I'm saving money like crazy!",
    media: img6,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

function ServicesCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((item, i) => (  
        <motion.div
          key={i}
          variants={cardVariants}
          transition={{ duration: 0.001, ease: "easeOut" }}
          whileHover={{
            y: -10,
            boxShadow: "0 0 50px rgba(74,222,128,0.28)",
            borderColor: "rgba(74,222,128,0.9)",
          }}
          className="
            group
            relative rounded-2xl px-8 py-4 text-center
            bg-[#1C2A26]
            border border-white/5
            transition-all duration-300           
          "
        >
          {/* Image */}
         
  <motion.img
    src={item.media}
    alt={item.title}
    className="w-fit h-[150px]  mt-3 mx-auto mb-6 rounded-full flex items-center justify-center overflow-hidden"
 
  />
          {/* Title */}
          <h3 className="text-[23px] tracking-wide leading-tight font-['Anek_Telugu'] font-semibold text-white">
            {item.title}
          </h3>

          {/* Description */}
          <p className="mt-4 text-sm font-light text-white/60 leading-relaxed">
            {item.desc}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

export default ServicesCards;
