import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "../assets/logo/poetic.png";

const welcomeTexts = [
  { text: "Poetic Duniya me aapka swagat hai", lang: "hindi" },
  { text: "कवितेच्या दुनियेत आपले स्वागत आहे", lang: "marathi" },
  { text: "Welcome to the World of Poetry", lang: "english" },
];

export default function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % welcomeTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-b from-purple-900 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=2942')] bg-cover bg-center opacity-10" />

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="mb-12 bg-white/10 p-6 rounded-full backdrop-blur-sm"
      >
        <img src={logo} alt="Poetic Duniya Logo" style={{"height":"72px"}} />
      </motion.div>

      <motion.div
        key={currentTextIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl text-center font-light px-4 relative"
      >
        <span className="bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
          {welcomeTexts[currentTextIndex].text}
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-black to-transparent"
      />
    </div>
  );
}
