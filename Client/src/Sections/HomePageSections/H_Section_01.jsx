import { motion } from "framer-motion";
import bitcoinImg from "../../assets/bitcoin-stack.png";
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
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#081915] via-[#0E2C23] to-[#050D0B] overflow-hidden">
      
      {/* Decorative shapes (hidden on small screens) */}
      <div className="hidden md:block absolute w-[279px] h-[880px] top-[-250px] left-[350px] rotate-[-150deg] rounded-[186px] opacity-50 bg-white/10" />
      <div className="hidden md:block absolute w-[379px] h-[980px] top-[-300px] left-[300px] rotate-[-150deg] rounded-[186px] opacity-40 bg-white/10" />

      <div className="hidden lg:block absolute h-[200vh] w-[100rem] top-[-735px] rotate-[-6deg] rounded-bl-[200px] rounded-br-[400px] bg-white/10 opacity-10" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-5 md:pt-35 pt-30 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center md:pl-20 md:justify-start"
        >
          <motion.img
            src={bitcoinImg}
            alt="Bitcoin Stack"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-[260px] sm:w-[320px] md:w-[380px] lg:w-[420px]"
          />
        </motion.div>

        {/* Text */}
        <div className="text-white text-center  md:text-left">
          
          <motion.h1
            custom={0}
            variants={textVariant}
            initial="hidden"
            animate="visible"
            className="
              font-['Anek_Telugu']
              font-semibold
              tracking-[-0.5px]
              leading-tight
              text-[36px]
              sm:text-[44px]
              md:text-[52px]
              lg:text-[60px]
            "
          >
            <span className="block">“Where Trading Meets</span>
            <span className="block">
              Excellence, <span className="text-green-400">SSANSKAR</span>”
            </span>
          </motion.h1>

          <motion.p
            custom={1}
            variants={textVariant}
            initial="hidden"
            animate="visible"
            className="mt-6 text-white/70 max-w-xl mx-auto md:mx-0 text-sm sm:text-base leading-relaxed"
          >
            Struggling to understand market movements? SSANSKAR offers structured
            trading education, expert insights, and easy-to-follow lessons designed
            for all levels. Learn how markets work and improve your decision-making
            step by step!
          </motion.p>

          {/* Buttons */}
          <motion.div
            custom={2}
            variants={textVariant}
            initial="hidden"
            animate="visible"
            className="mt-10 flex flex-col sm:flex-row gap-5 justify-center md:justify-start"
          >
            <motion.button
              whileHover={{ scale: 1.08 }}
              className="bg-green-400 text-black px-8 py-4 rounded-lg font-medium flex items-center justify-center gap-2 tracking-wider"
            >
              Get Started <FiArrowRightCircle />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center gap-3 text-white/80 px-6 py-4 rounded-lg bg-white/10 backdrop-blur tracking-wider"
            >
              <BsPlayFill className="text-xl" /> Watch Video
            </motion.button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default H_Section_01;
