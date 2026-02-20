import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import logo from "../assets/image.png";
import { Link } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navItems = [
  { name: "Home", link: "home" },
  { name: "About", link: "about" },
  { name: "Services", link: "services" },
  { name: "Roadmap", link: "roadmap" },
  { name: "Mentors", link: "mentors" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 20);
    if (latest > previous && latest > 150) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  });

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setOpen(false);
  };

  return (
    <>
      <motion.nav
        variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
        animate={visible ? "visible" : "hidden"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`w-full fixed top-0 left-0 z-50 px-3 md:px-12 flex items-center h-20 justify-between transition-colors duration-300 ${
          scrolled ? "bg-black/20 backdrop-blur-lg border-b border-white/10" : "bg-transparent"
        }`}
      >
        <Link className="flex  items-center" to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <img src={logo} alt="Logo" className="w-16 h-16 md:w-20 md:h-20" />
          <h1 className="text-green-400 font-['Anek_Telugu'] drop-shadow-[0_0_12px_rgba(34,197,94,0.6)] text-2xl font-bold ">SSANSKAR</h1>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-10 text-sm text-white/80">
            {navItems.map((item, i) => (
              <motion.li
                key={i}
                className="relative cursor-pointer"
                initial="rest"
                whileHover="hover"
                animate="rest"
                onClick={() => scrollToSection(item.link)}
              >
                <span>{item.name}</span>
                <motion.span
                  variants={{ rest: { width: 0 }, hover: { width: "100%" } }}
                  className="absolute left-0 -bottom-1 h-0.5 bg-green-400"
                />
              </motion.li>
            ))}
          </ul>
        </div>

        <button onClick={() => setOpen(true)} className="md:hidden text-white text-3xl">
          <HiMenuAlt3 />
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed inset-0 z-50 bg-[#050D0B]/95 backdrop-blur-lg flex flex-col"
          >
            <div className="flex justify-end p-6">
              <button onClick={() => setOpen(false)} className="text-white text-3xl"><HiX /></button>
            </div>
            <ul className="flex flex-col items-center gap-8 mt-10 text-lg text-white">
              {navItems.map((item, i) => (
                <li key={i} className="cursor-pointer" onClick={() => scrollToSection(item.link)}>
                  {item.name}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar; // <-- ENSURE THIS IS AT THE BOTTOM