import { motion } from "framer-motion";
import logo from "../assets/image.png";
import { Link } from "react-router-dom";

const navItems = ["Home", "Services", "Features", "About", "Pricing"];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full absolute top-0 left-0 z-50 px-12 flex items-center h-23 justify-between"
    >
      <Link to="/">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Sanskar Logo" className="w-20 h-20" />
        </div>
      </Link>

      <div className="flex items-center gap-8">
        <ul className="hidden md:flex gap-10 text-sm text-white/80">
        {navItems.map((item, i) => (
          <motion.li
            key={i}
            className="relative cursor-pointer"
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            <span className="text-white/80">{item}</span>

            <motion.span
              variants={{
                rest: { width: 0 },
                hover: { width: "100%" },
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute left-0 -bottom-1 h-0.5 bg-green-400"
            />
          </motion.li>
        ))}
      </ul>

      <motion.button
        whileHover={{ scale: 1.08 }}
        className="bg-green-400 text-black font-medium px-6 py-2 rounded-lg shadow-lg"
      >
        Join Now
      </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
