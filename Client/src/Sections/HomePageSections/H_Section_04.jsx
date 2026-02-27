import React, { useEffect, useRef, useState } from "react";
import bgImage from "../../assets/SEBI/image.png";
import { motion } from "framer-motion";

function H_Section_04() {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Scroll based autoplay / pause
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = videoRef.current;
        if (!video) return;

        if (entry.isIntersecting) {
          video.play();
          setIsPlaying(true);
        } else {
          video.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Update progress
  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;
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
      className="w-full bg-gradient-to-b from-[#050D0B] via-[#0A1F1A] to-[#030D0B] text-white py-16 px-6"
    >
      <div className="max-w-7xl mx-auto font-['Anek_Telugu'] text-center">

        {/* SEBI Section */}
        <div
          className="relative  bg-contain bg-center rounded-lg overflow-hidden bg-no-repeat py-20 px-6 text-center"
        
        >
          <div className="relative z-10">
            <h2 className="text-5xl font-bold mb-4">
              The <span className="text-green-400">SEBI</span> at a Glance
            </h2>

            <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
              “Our courses are aligned with SEBI guidelines, ensuring that all
              training is compliant with India’s securities regulations and
              promotes responsible trading.”
            </p>
          </div>
        </div>

        {/* Journey */}
        <h3 className="text-3xl font-semibold text-green-400 md:mt-14 mb-8">
          Journey
        </h3>

        {/* VIDEO CARD */}
        <motion.div
        
          className="relative rounded-3xl overflow-hidden shadow-2xl border border-green-900"
        >
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
            onLoadedData={() => setIsLoading(false)}
            onTimeUpdate={handleTimeUpdate}
            className="w-full h-[700px] object-cover"
          >
            <source
              src="https://ozf1yx5t6oecfmx3.public.blob.vercel-storage.com/SanskarAcademy.mp4"
              type="video/mp4"
            />
          </video>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Play / Pause Button */}
          <button
            onClick={() => {
              const video = videoRef.current;
              if (!video) return;

              if (video.paused) {
                video.play();
                setIsPlaying(true);
              } else {
                video.pause();
                setIsPlaying(false);
              }
            }}
            className="absolute bottom-16 left-6 bg-black/60 backdrop-blur px-4 py-2 rounded-full text-white text-sm z-10"
          >
            {isPlaying ? "Pause" : "Play"}
          </button>

          {/* Progress Bar */}
          <div
            onClick={handleProgressClick}
            className="absolute bottom-0 left-0 w-full h-2 bg-white/20 cursor-pointer z-10"
          >
            <div
              style={{ width: `${progress}%` }}
              className="h-full bg-green-400 transition-all duration-150"
            />
          </div>
        </motion.div>
       
      </div>
    </section>
  );
}

export default H_Section_04;