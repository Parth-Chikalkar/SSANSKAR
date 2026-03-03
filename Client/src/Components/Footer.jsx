import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import img from "../assets/image.png";

function Footer() {
  // Social Media Data
  const socialLinks = [
    { Icon: FaFacebookF, url: "https://www.facebook.com/joinssansta/reviews/" },
    { Icon: FaInstagram, url: "https://www.instagram.com/ssanskar_trading_academy" },
    { Icon: FaYoutube, url: "https://www.youtube.com/@ssanskartradingacademy7280" },
  ];

  return (
    <footer className="w-full bg-gradient-to-b from-[#050D0B] to-[#020806] text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-20">
        
        {/* Main Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Brand / Description */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-emerald-400">
              <img src={img} className="h-16 w-16 object-contain" alt="logo" />
              <span className="font-['Anek_Telugu'] drop-shadow-[0_0_12px_rgba(34,197,94,0.6)] font-semibold text-2xl tracking-wider text-white">
                SSANSKAR
              </span>
            </div>

            <p className="text-sm leading-relaxed max-w-md text-gray-400">
              SSANSKAR Trading Academy delivers structured and practical 
              stock market education designed to build disciplined, confident, 
              and skilled traders. Our mission is to empower individuals with 
              real-world knowledge and long-term market success strategies.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 pt-4">
              {socialLinks.map(({ Icon, url }, idx) => (
                <a
                  key={idx}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/10 
                    flex items-center justify-center hover:border-emerald-400
                    hover:text-emerald-400 transition-all duration-300 cursor-pointer bg-white/5"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Contact Info */}
          <div className="lg:pl-20">
            <h4 className="text-white font-['Anek_Telugu'] text-xl mb-8 tracking-wide">
              CONTACT US
            </h4>

            <ul className="space-y-6 text-gray-300 text-sm">
              {/* Phone */}
              <li className="flex items-start gap-4 group">
  <FaPhoneAlt className="text-emerald-400 text-lg mt-1 transition-transform group-hover:scale-110" />
  <a 
    href="tel:+917720939777" 
    className="hover:text-emerald-400 transition-colors duration-300"
  >
    +91 7720939777
  </a>
</li>

{/* Email */}
<li className="flex items-start gap-4 group">
  <FaEnvelope className="text-emerald-400 text-lg mt-1 transition-transform group-hover:scale-110" />
  <a 
    href="mailto:koshafabricartistry9@gmail.com" 
    className="hover:text-emerald-400 transition-colors duration-300 break-all"
  >
    koshafabricartistry9@gmail.com
  </a>
</li>

              {/* Address */}
              <li className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-emerald-400 text-lg mt-1" />
                <span className="leading-relaxed">
                  Vasant Rutu Plaza Shop No - F8, 1st Floor <br />
                  Shahu Road, Venus Corner, above ICICI Bank, <br />
                  Kolhapur, Maharashtra 416001
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-white/10 mt-16 pt-8 text-center text-xs tracking-widest uppercase">
          © {new Date().getFullYear()} SSANSKAR Trading Academy. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;