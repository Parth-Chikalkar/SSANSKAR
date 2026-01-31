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
   

<div
  className="
    absolute
    w-[279.34px]
    h-[879.72px]
    top-[-248.26px]
    left-[350.22px]
    rotate-[-150deg]
    rounded-[186.5px]
    opacity-50
    bg-white/10
  "
/>
<div
  className="
    absolute
    w-[379.34px]
    h-[979.72px]
    top-[-303.26px]
    left-[300px]
    rotate-[-150deg]
    rounded-[186.5px]
    opacity-40
    bg-white/10
  "
/>

<div className="
 h-[200vh]
 bg-white/10
 absolute
 rounded-bl-[200px]
 rounded-br-[400px]
 w-[100rem]
top-[-735px] 
rotate-[-6deg]
opacity-10
" />



      <div className="relative z-10 max-w-7xl mx-auto pt-35 grid md:grid-cols-2 gap-16 items-center">
        
       
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <motion.img
            src={bitcoinImg}
            alt="Bitcoin Stack"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-[420px]"
          />
        </motion.div>

       
        <div className="text-white ">
        <motion.h1
  custom={0}
  variants={textVariant}
  initial="hidden"
  animate="visible"
  className="
    font-['Anek_Telugu']
    text-[60px]
    font-semibold
    leading-[68px]
    tracking-[-0.5px]
  "
>
   
  <span className="block">“Where Trading Meets </span>
  <span className="block">
    Excellence,{" "}
    <span className="text-green-400">SSANSKAR</span>”
  </span>
</motion.h1>
          <motion.p
            custom={1}
            variants={textVariant}
            initial="hidden"
            animate="visible"
            className="mt-6 font-sans text-white/70 max-w-lg text leading-relaxed "
          >            
            Struggling to understand market movements? SSANSKAR offers structured 
            trading education, expert insights, and easy-to-follow lessons designed for 
            all levels. Learn how markets work and improve your decision-making step 
            by step !
          </motion.p>

          <motion.div
            custom={2}
            variants={textVariant}
            initial="hidden"
            animate="visible"
            className="mt-10 flex gap-6"
          >
            <motion.button
              whileHover={{ scale: 1.08 }}
           
              className="bg-green-400 tracking-wider text-black px-8 py-4 rounded-lg font-medium flex items-center gap-2"
            >
              Get Started <FiArrowRightCircle className="h-4 w-4" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="flex tracking-wider items-center gap-3 text-white/80 px-6 py-4 rounded-lg bg-white/10 backdrop-blur"
            >
              <BsPlayFill /> Watch Video
            </motion.button>
          </motion.div>
        </div>
      </div>
      
    </section>
  );
};

export default H_Section_01;
