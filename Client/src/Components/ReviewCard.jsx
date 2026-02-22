import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

function ReviewCard({ elem }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const stringToColor = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  const colors = [
    "065f46",
    "1f2937",
    "0f766e",
    "1e3a8a",
    "7c3aed",
    "be123c",
    "14532d",
    "0e7490"
  ];

  return colors[Math.abs(hash) % colors.length];
};
  return (
    <div
      className="bg-[#1f4239] flex-shrink-0 flex items-start gap-4 
      border border-transparent hover:border-[#00D591]
      transition-all duration-300 
      backdrop-blur-2xl text-white p-6 rounded-xl 
      w-[350px] md:opacity-50 hover:opacity-100 h-fit"
    >
     
      <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
        <img
          src={`https://ui-avatars.com/api/?name=${elem.name.replace(" ", "+")}&background=${stringToColor(elem.name)}&color=fff`}
          className="w-full h-full object-cover"
          alt={elem.name}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1">
        {/* Name */}
        <p className="font-semibold text-base">{elem.name}</p>

        {/* Rating + Time */}
        <div className="flex items-center gap-2 mt-1">
          <div className="flex">
            {Array.from({ length: elem.rating }).map((_, i) => (
              <FaStar key={i} className="text-yellow-400 text-sm" />
            ))}
          </div>
          <span className="text-xs text-gray-400">{elem.time}</span>
        </div>

        {/* Description */}
        <p
          className={`text-sm text-gray-300 leading-relaxed mt-2 transition-all duration-300 ${
            !isExpanded ? "line-clamp-3" : ""
          }`}
        >
          {elem.description}
        </p>

        {/* Toggle Button */}
       
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[#00D591] text-xs mt-2 font-semibold w-fit hover:cursor-pointer"
          >
            {isExpanded ? "View Less" : "View More"}
          </button>
        
      </div>
    </div>
  );
}

export default ReviewCard;