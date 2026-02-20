import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import img from "../assets/image.png";

function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-[#050D0B] to-[#020806] text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-20">
        
        {/* Top Section */}
        {/* Changed: added flex-col for mobile, lg:flex-row for desktop. 
            Changed items-start for mobile alignment, lg:items-center for original desktop alignment */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
          
          {/* Brand / Description */}
          <div className="space-y-3 w-full lg:w-auto">
            <div className="flex items-center gap-2 text-emerald-400 text-xl font-semibold">
              <img src={img} className="rounded-full h-17 w-17" alt="logo" />
              <span className="font-['Anek_Telugu'] drop-shadow-[0_0_12px_rgba(34,197,94,0.6)] font-semibold text-2xl">
                SSANSKAR
              </span>
            </div>

            <p className="text-sm leading-relaxed max-w-xs">
            SSANSKAR Trading Academy delivers structured and practical 
stock market education designed to build disciplined, confident, 
and skilled traders. Our mission is to empower individuals with 
real-world knowledge and long-term market success strategies.
            </p>

            <div className="flex gap-4 mt-8">
              {[
                FaFacebookF,
                FaLinkedinIn,
                FaInstagram,
                FaYoutube,
                FaTwitter,
              ].map((Icon, idx) => (
                <div
                  key={idx}
                  className="w-9 h-9 rounded-full border border-white/10 
                    flex items-center justify-center hover:border-emerald-400
                    hover:text-emerald-400 transition-all cursor-pointer"
                >
                  <Icon size={14} />
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links / Support / Company */}
          {/* Changed: w-[600px] is now lg:w-[600px] (desktop only). 
              Added w-full for mobile. 
              Added flex-wrap so columns don't squish on tiny screens. */}
          <div className="flex flex-wrap md:flex-nowrap items-start justify-between gap-8 w-full lg:w-[600px]">
            
            {/* Quick Links */}
            <div className="min-w-[120px]">
              <h4 className="text-white font-medium mb-5">Quick links</h4>
              <ul className="space-y-3 text-sm">
                <li className="hover:text-emerald-400 cursor-pointer">About Us</li>
                <li className="hover:text-emerald-400 cursor-pointer">Teams</li>
                <li className="hover:text-emerald-400 cursor-pointer">Services</li>
                <li className="hover:text-emerald-400 cursor-pointer">Features</li>
              </ul>
            </div>

            {/* Support */}
            <div className="min-w-[120px]">
              <h4 className="text-white font-medium mb-5">Support</h4>
              <ul className="space-y-3 text-sm">
                <li className="hover:text-emerald-400 cursor-pointer">
                  Terms & Conditions
                </li>
                <li className="hover:text-emerald-400 cursor-pointer">
                  Privacy Policy
                </li>
                <li className="hover:text-emerald-400 cursor-pointer">FAQs</li>
                <li className="hover:text-emerald-400 cursor-pointer">
                  Support Center
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="min-w-[120px]">
              <h4 className="text-white font-medium mb-5">Company</h4>
              <ul className="space-y-3 text-sm">
                <li className="hover:text-emerald-400 cursor-pointer">Careers</li>
                <li className="hover:text-emerald-400 cursor-pointer">Updates</li>
                <li className="hover:text-emerald-400 cursor-pointer">Job</li>
                <li className="hover:text-emerald-400 cursor-pointer">Announce</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-16 pt-6 text-center text-sm">
          © 2026 SSANSKAR Trading Academy. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;