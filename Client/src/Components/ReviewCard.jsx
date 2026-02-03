import React from "react";
import img from "../assets/image.png";

function ReviewCard() {
  return (
    <div className=" bg-[#1f4239] flex-shrink-0 flex items-center justify-start gap-3 
    border border-transparent hover:border-[#00D591]
    transition-transform duration-300 
    backdrop-blur-2xl text-white p-6 rounded-xl 
    w-[350px] opacity-50 hover:opacity-100">
      
      <div className="w-1/4 rounded-full bg-green-100 flex-shrink-0">
        <img
          src={img}
          className="w-full rounded-full"
          alt=""
        />
      </div>

      <div>
        <p className="font-medium">Song Yoo-Mee</p>
        <p className="text-sm text-gray-400 leading-tight test-sm tracking-tight">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dolores
          
        </p>
      </div>
    </div>
  );
}

export default ReviewCard;
