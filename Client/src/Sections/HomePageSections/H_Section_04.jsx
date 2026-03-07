import React, { useEffect, useRef, useState } from "react";
import bgImage from "../../assets/SEBI/sebi.png";
import { motion } from "framer-motion";

function H_Section_04() {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Removed the IntersectionObserver Autoplay logic to prevent NotAllowedError
  // We keep the sectionRef in case you want to use it for other animations later.

  // Update progress
  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || isNaN(video.duration)) return;
    const percent = (video.currentTime / video.duration) * 100;
    setProgress(percent);
  };

  // Click progress bar
  const handleProgressClick = (e) => {
    const video = videoRef.current;
    if (!video) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    video.currentTime = (clickX / width) * video.duration;
  };

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#00150F] text-white py-16 px-6"
    >
      <div className="max-w-7xl mx-auto font-['Anek_Telugu'] text-center">
        {/* SEBI Section */}
        <div className="relative text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative z-20"
          >
            <h2 className="text-5xl font-['Anek_Telugu'] font-bold mb-4">
              The <span className="text-green-400">SEBI</span> at a Glance
            </h2>

            <p className="text-white font-['Anek_Telugu'] max-w-xl mx-auto text-xl leading-relaxed">
              “Our courses are aligned with SEBI guidelines, ensuring that all
              training is compliant with India’s securities regulations and
              promotes responsible trading.”
            </p>
          </motion.div>

          <motion.div
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="hidden md:block absolute h-70 opacity-15 -top-20 rounded-lg inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
            style={{
              backgroundImage: `url(${bgImage})`,
            }}
          />
        </div>

        {/* Journey */}
        <h3 className="md:text-5xl text-3xl font-semibold text-green-400 mt-10 md:mt-34 mb-8">
          Journey
        </h3>

        {/* VIDEO CARD */}
        {/* VIDEO CARD */}
<motion.div className="relative rounded-3xl overflow-hidden shadow-2xl border border-green-900 group">
  {/* Loading Spinner */}
  {isLoading && (
    <div className="absolute inset-0 flex items-center justify-center bg-black z-20">
      <div className="w-10 h-10 border-4 border-green-400 border-t-transparent rounded-full animate-spin"></div>
    </div>
  )}

  <video
    ref={videoRef}
    playsInline
    loop
    preload="auto"
    onLoadedData={() => setIsLoading(false)}
    onTimeUpdate={handleTimeUpdate}
    className="w-full h-[700px] object-cover cursor-pointer"
    onClick={() => {
      const video = videoRef.current;
      if (video.paused) {
        video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }}
  >
    <source
      src="https://res.cloudinary.com/dr8poybri/video/upload/f_auto,q_auto/v1772915946/SanskarAcademy_t3wgyq.mp4"
      type="video/mp4"
    />
  </video>

  {/* Aesthetic Overlay & Play Button */}
  <div 
    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 pointer-events-none z-10 
    ${isPlaying ? "bg-black/10 opacity-0 group-hover:opacity-100" : "bg-black/40 opacity-100"}`}
  >
    <motion.div
      initial={false}
      animate={{ scale: isPlaying ? 0.8 : 1, opacity: isPlaying ? 0 : 1 }}
      className="w-20 h-20 flex items-center justify-center rounded-full bg-green-400/20 backdrop-blur-md border border-green-400/50 shadow-[0_0_20px_rgba(74,222,128,0.3)]"
    >
      {isPlaying ? (
        <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6 4h4v16H6zm8 0h4v16h-4z" />
        </svg>
      ) : (
        <svg className="w-8 h-8 text-green-400 ml-1" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      )}
    </motion.div>
  </div>



  {/* Progress Bar */}
  <div
    onClick={handleProgressClick}
    className="absolute bottom-0 left-0 w-full h-1.5 bg-white/10 cursor-pointer z-30 group/progress"
  >
    <div
      style={{ width: `${progress}%` }}
      className="relative h-full bg-green-400 transition-all duration-150 shadow-[0_0_10px_#4ade80]"
    >
        {/* Glow point at the end of progress */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full scale-0 group-hover/progress:scale-100 transition-transform shadow-[0_0_10px_#fff]" />
    </div>
  </div>
</motion.div>
      </div>
    </section>
  );
}

export default H_Section_04;