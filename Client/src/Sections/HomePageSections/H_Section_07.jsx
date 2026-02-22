import React, { useRef, useState } from "react";
import ReviewCard from "../../Components/ReviewCard";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import reviews from "../../Data/Reviews"
function H_Section_07() {
  const scrollRef = useRef(null);
  const [showAll, setShowAll] = useState(false); // State for the View All modal

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
  };

  return (
    <section className="w-full bg-gradient-to-b from-[#050D0B] to-[#092019] py-16">
      
      {/* ================= REVIEWS SECTION ================= */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl bg-white/5 border border-white/10 mx-auto rounded-xl p-6"
      >
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-semibold text-white">Reviews</h2>
          <button 
            onClick={() => setShowAll(true)}
            className="bg-emerald-400 text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-emerald-500 transition-colors"
          >
            View All
          </button>
        </div>

        <div className="relative flex items-center gap-4">
          <button onClick={scrollLeft} className="hidden md:flex opacity-50 hover:opacity-100 bg-emerald-400 text-black p-3 rounded-full">
            <FiChevronLeft size={20} />
          </button>

          <div ref={scrollRef} className="flex w-full gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar px-1">
          {reviews.map((elem, i) => (
  <div key={i} className="flex justify-center">
    <div className="opacity-100 scale-100">
      <ReviewCard elem={elem} />
    </div>
  </div>
))}
          </div>

          <button onClick={scrollRight} className="hidden md:flex opacity-50 hover:opacity-100 bg-emerald-400 text-black p-3 rounded-full">
            <FiChevronRight size={20} />
          </button>
        </div>
      </motion.div>

      {/* ================= VIEW ALL MODAL ================= */}
      <AnimatePresence>
        {showAll && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 md:p-10"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-[#092019] border border-emerald-500/30 w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-3xl flex flex-col shadow-2xl"
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-white/10 flex justify-between items-center bg-[#050D0B]">
                <h3 className="text-2xl font-bold text-white">All Reviews</h3>
                <button 
                  onClick={() => setShowAll(false)}
                  className="text-white hover:text-emerald-400 p-2 bg-white/5 rounded-full"
                >
                  <FiX size={24} />
                </button>
              </div>

              {/* Scrollable Grid */}
              <div className="p-6 overflow-y-auto no-scrollbar grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((elem, i) => (
  <div key={i} className="flex justify-center">
    <div className="opacity-100 scale-100">
      <ReviewCard elem={elem} />
    </div>
  </div>
))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= MAP SECTION ================= */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="max-w-6xl mx-auto px-6 mt-20"
      >
        <h2 className="text-center font-['Anek_Telugu'] text-4xl font-semibold text-white mb-8">
          Locate Our <span className="text-emerald-400">Learning Center</span> on the Map
        </h2>

        <div className="overflow-hidden rounded-2xl border border-[#1e2f2a]">
          <iframe
            title="location-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3895.026744033889!2d74.228251272693!3d16.702649477089277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc101fd0a9332cb%3A0xfdb0689ad661e8a7!2sSsanskar%20Trading%20Academy!5e0!3m2!1sen!2sin!4v1770044637316!5m2!1sen!2sin"
            className="w-full h-[380px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </motion.div>
    </section>
  );
}

export default H_Section_07;