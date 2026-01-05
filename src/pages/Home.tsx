import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import PoemCard from "../components/PoemCard";
import poemsData from "../data/poems.json";
import Footer from "../components/Footer";

export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("all");
  const [visiblePoems, setVisiblePoems] = useState(4); // reduced initial to show a 2x2 grid
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
    <div className="min-h-screen bg-gray-50">
      <Hero />

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Discover Poems
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Showing{" "}
            {Math.min(visiblePoems, filteredPoems.length)} of{" "}
            {filteredPoems.length}{" "}
            {selectedLanguage !== "all" && `in ${selectedLanguage}`}
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => setSelectedLanguage(lang)}
              className={`px-5 py-2 rounded-full transition-all shadow-sm focus:outline-none ${
                selectedLanguage === lang
                  ? "bg-purple-600 text-white shadow-lg"
                  : "bg-white text-purple-600 hover:bg-purple-50"
              }`}
            >
              {lang.charAt(0).toUpperCase() + lang.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPoems.slice(0, visiblePoems).map((poem) => (
            <motion.div
              key={poem.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow"
            >
              <PoemCard poem={poem} onClick={() => handlePoemClick(poem.id)} />
            </motion.div>
          ))}
        </div>

        {visiblePoems < filteredPoems.length && (
          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <button
              onClick={loadMore}
              className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors shadow-md"
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
