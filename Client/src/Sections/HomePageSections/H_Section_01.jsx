import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import bitcoinImg from "../../assets/indian_coin_stack.png";
import { FiArrowRightCircle } from "react-icons/fi";
import { BsPlayFill } from "react-icons/bs";

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
  const videoRef = useRef(null);
  const [showVideo, setShowVideo] = useState(false);
const [isPlaying, setIsPlaying] = useState(true);
const [progress, setProgress] = useState(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  const closeModal = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setShowVideo(false);
  };

  return (
    <>
      <section
        ref={sectionRef}
        className="relative min-h-screen bg-gradient-to-b from-[#081915] via-[#0E2C23] to-[#050D0B] overflow-hidden"
      >
        {/* Decorative shapes */}
        <div className="hidden md:block absolute w-[279px] h-[880px] top-[-300px] left-[350px] rotate-[-150deg] rounded-[186px] opacity-50 bg-white/10" />
        <div className="hidden md:block absolute w-[379px] h-[980px] top-[-350px] left-[300px] rotate-[-150deg] rounded-[186px] opacity-40 bg-white/10" />
        <div className="hidden lg:block absolute h-[200vh] w-[100rem] top-[-730px] rotate-[-10deg] rounded-bl-[200px] rounded-br-[400px] bg-white/10 opacity-10" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 pt-28 md:pt-35 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          
          {/* Image */}
          <motion.div
            style={{ y: imageY }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex justify-center md:pl-20 md:justify-start"
          >
            <motion.img
              src={bitcoinImg}
              alt="Bitcoin Stack"
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-[240px] sm:w-[300px] md:w-[380px] lg:w-[420px] drop-shadow-[0_0_30px_rgba(34,197,94,0.15)]"
            />
          </motion.div>

          {/* Text */}
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

            {/* Buttons */}
            <motion.div
              custom={2}
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-10 flex flex-col sm:flex-row gap-5 justify-center md:justify-start"
            >
              <motion.button
                className="bg-green-400 text-black px-8 py-4 rounded-lg font-medium flex items-center justify-center gap-2 tracking-wider shadow-[0_0_35px_rgba(34,197,94,0.45)]"
              >
                Book Inquiry <FiArrowRightCircle />
              </motion.button>

            
            </motion.div>
          </div>
        </div>
      </section>


    </>
  );
};

export default H_Section_01;