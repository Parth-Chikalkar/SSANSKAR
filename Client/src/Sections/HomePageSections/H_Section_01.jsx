import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImg from "../../assets/Homepage/homepg3.png";
import { FiArrowRightCircle } from "react-icons/fi";
import bgImg  from "../../assets/Homepage/homeBg.png";
import mobileImg from "../../assets/Homepage/homepg2.png";
const textVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const H_Section_01 = () => {
  const sectionRef = useRef(null);

    const phoneNumber = "9108668438665"; // Without + and spaces
  const message = "Hello SSANSKAR Academy, I would like to inquire about trading courses.";
   const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section
      ref={sectionRef}
className="relative min-h-screen bg-gradient-to-b from-[#081915]/90 via-[#0E2C23]/90 to-[#050D0B]/90 overflow-hidden"
style={{
  backgroundImage: `url(${bgImg})`,
  backgroundSize: "cover",
  backgroundPosition: "top",
  backgroundBlendMode: "overlay",
}}    >
    
   

      <div className="relative z-10 max-w-7xl md:mt-7 mx-auto mt-16 px-5 pt-28 md:pt-35 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

       

        {/* TEXT */}
        <div className="text-white text-center md:text-left">
          <motion.h1
            custom={0}
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-['Anek_Telugu'] font-semibold tracking-[-0.5px] leading-tight text-[33px] sm:text-[44px] md:text-[52px] lg:text-[60px]"
          >
            <span className="block">“Where Trading Meets</span>
            <span className="block">
              Excellence,{" "}
              <span className="text-green-400 drop-shadow-[0_0_12px_rgba(34,197,94,0.6)]">
                SSANSKAR
              </span>
              ”
            </span>
          </motion.h1>

          <motion.p
            custom={1}
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-6 text-white/70 max-w-xl mx-auto md:mx-0 sm:text-base leading-relaxed"
          >
            Struggling to understand market movements? SSANSKAR provides structured 
            trading education, expert insights, and easy-to-follow lessons tailored 
            for learners at every level.
          </motion.p>

          {/* BUTTON */}
          <motion.div
            custom={2}
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-10 flex justify-center md:justify-start"
          >
            <button onClick={()=>{handleClick()}} className="bg-green-400 text-black px-8 py-4 rounded-lg font-medium flex items-center gap-2 tracking-wider shadow-[0_0_35px_rgba(34,197,94,0.45)] hover:scale-105 transition">
              Book Inquiry <FiArrowRightCircle />
            </button>
          </motion.div>
        </div>
         {/* IMAGE */}
      <motion.div
  style={{ y: imageY }}
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
  className="relative flex  md:mt-0 scale-105 mt-5 justify-center md:justify-start"
>
  {/* Main Image */}
  <motion.img
    src={heroImg}
    alt="Main Trading"
    animate={{ y: [0, -12, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    className="relative z-10 left-2 rotate-[-10deg] w-[380px] sm:w-[340px] md:w-[500px]  drop-shadow-[0_0_40px_rgba(34,197,94,0.25)]"
  />

  {/* Overlapping Image */}
  <motion.img
    src={mobileImg}
    alt="Mobile Trading"
    animate={{ y: [0, -18, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
    className="absolute top-10  md:top-16   w-[500px] sm:w-[250px] md:w-[500px]  z-20 drop-shadow-[0_0_40px_rgba(34,197,94,0.35)]"
  />
</motion.div>
      </div>
    </section>
  );
};

export default H_Section_01;