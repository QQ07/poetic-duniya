import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import PoemCard from "../components/PoemCard";
import poemsData from "../data/poems.json";
import Footer from "../components/Footer";

export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("all");
  const [visiblePoems, setVisiblePoems] = useState(6);
  const navigate = useNavigate();

  const filteredPoems = poemsData.poems.filter(
    (poem) => selectedLanguage === "all" || poem.language === selectedLanguage
  );

  const languages = [
    "all",
    ...new Set(poemsData.poems.map((poem) => poem.language)),
  ];

  const loadMore = () => {
    setVisiblePoems((prev) => prev + 6);
  };

  const handlePoemClick = (poemId: number) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(`/poem/${poemId}`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Hero />

      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-center gap-4 mb-12">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => setSelectedLanguage(lang)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedLanguage === lang
                  ? "bg-purple-600 text-white"
                  : "bg-white text-purple-600 hover:bg-purple-100"
              }`}
            >
              {lang.charAt(0).toUpperCase() + lang.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPoems.slice(0, visiblePoems).map((poem) => (
            <PoemCard
              key={poem.id}
              poem={poem}
              onClick={() => handlePoemClick(poem.id)}
            />
          ))}
        </div>

        {visiblePoems < filteredPoems.length && (
          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <button
              onClick={loadMore}
              className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors"
            >
              Load More Poems
            </button>
          </motion.div>
        )}
      </div>
      <Footer />
    </div>
  );
}
