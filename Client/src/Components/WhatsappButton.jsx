import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  const phoneNumber = "9108668438665"; // Without + and spaces
  const message = "Hello SSANSKAR Academy, I would like to inquire about trading Academy.";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 cursor-pointer group"
    >
      {/* Tooltip */}
      <div className="absolute right-14 bottom-3 bg-white text-black text-xs px-3 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition">
        Chat On WhatsApp
      </div>

      {/* Icon */}
      <div className="bg-green-500 hover:bg-green-600 transition p-4 rounded-full shadow-lg flex items-center justify-center">
        <FaWhatsapp className="text-white text-2xl" />
      </div>
    </div>
  );
};

export default WhatsappButton;