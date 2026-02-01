import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import logo from "../assets/image.png";
import { Link } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navItems = ["Home", "Services", "Features", "About", "Pricing"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full absolute top-1 md:top-0 left-0 z-50 px-3 md:px-12 flex items-center h-23 justify-between"
      > 
        {/* Logo */}
        <Link to="/">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Sanskar Logo" className="w-20 h-20" />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-10 text-sm text-white/80">
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

          
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-white text-3xl"
        >
          <HiMenuAlt3 />
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[#050D0B]/95 backdrop-blur-lg flex flex-col"
          >
            {/* Close */}
            <div className="flex justify-end p-6">
              <button
                onClick={() => setOpen(false)}
                className="text-white text-3xl"
              >
                <HiX />
              </button>
            </div>

            {/* Menu Items */}
            <ul className="flex flex-col items-center gap-8 mt-10 text-lg text-white/80">
              {navItems.map((item, i) => (
                <li key={i} className="cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>

           
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
