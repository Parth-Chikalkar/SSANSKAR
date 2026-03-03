import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import logo from "../assets/image.png";
import { Link } from "react-router-dom";
import { HiX } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";

const navItems = [
  { name: "Home", link: "home" },
  { name: "About", link: "about" },
  { name: "Services", link: "services" },
  { name: "SEBI", link: "sebi" },
  { name: "Roadmap", link: "roadmap" },
  { name: "Advisers", link: "mentors" },
  { name: "Reviews", link: "reviews" },
  { name: "Platforms", link: "platforms" },
  { name: "Contact", link: "contact" },
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
      {/* NAVBAR */}
      <motion.nav
        variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
        animate={visible ? "visible" : "hidden"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`w-full fixed top-0 left-0 z-50 px-3 md:px-12 flex items-center h-20 justify-between transition-all duration-300 ${
          scrolled
            ? "bg-black/20 backdrop-blur-lg border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        {/* LOGO */}
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
        >
          <div className="w-16 h-16 overflow-hidden flex items-center justify-center">
            <img
              src={logo}
              alt="SSANSKAR Logo"
              className="h-full w-full object-contain"
            />
          </div>

          <h1 className="text-green-400 font-['Anek_Telugu'] mt-3 drop-shadow-[0_0_12px_rgba(34,197,94,0.6)] text-2xl font-bold tracking-tight">
            SSANSKAR
          </h1>
        </Link>

     

        {/* HAMBURGER (VISIBLE ON ALL SCREENS) */}
        <button
          onClick={() => setOpen(true)}
          className="text-white text-3xl hover:scale-110 transition-transform"
        >
          <GiHamburgerMenu />
        </button>
      </motion.nav>

      {/* SIDEBAR */}
      <AnimatePresence>
        {open && (
          <>
            {/* OVERLAY */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            />

            {/* SIDEBAR PANEL */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 18,
              }}
              className="fixed right-0 top-0 h-full w-[350px] bg-gradient-to-b from-[#050D0B] to-[#020806] z-50 shadow-2xl flex flex-col"
            >
              {/* CLOSE BUTTON */}
              <div className="flex justify-end p-6">
                <button
                  onClick={() => setOpen(false)}
                  className="text-white text-3xl hover:rotate-90 transition-transform duration-300"
                >
                  <HiX />
                </button>
              </div>

              {/* SCROLLABLE CONTENT */}
              <div className="flex-1 overflow-y-auto no-scrollbar px-10 pb-10">
                <ul className="flex flex-col gap-8 text-lg text-white">
                  {navItems.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                     
                      className="cursor-pointer hover:text-green-400 border-b border-white/10 pb-2"
                      onClick={() => scrollToSection(item.link)}
                    >
                      {item.name}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;