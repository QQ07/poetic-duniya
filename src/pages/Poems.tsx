import React, { useState, useMemo, useEffect } from 'react';
import Navigation from '../components/Navigation';
import LanguageFilter from '../components/LanguageFilter';
import PoemPage from '../components/PoemPage';
import PoemPagination from '../components/PoemPagination';
import poemsData from '../data/poems.json';

interface Poem {
  id: number;
  title: string;
  language: string;
  content: string;
  preview: string;
}

export default function Poems() {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filter poems based on selected language
  const filteredPoems = useMemo(() => {
    if (selectedLanguage === null) {
      return poemsData.poems;
    }
    return poemsData.poems.filter(poem => poem.language === selectedLanguage);
  }, [selectedLanguage]);

  const currentPoem = filteredPoems[currentIndex] || null;

  // Reset index when language changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedLanguage]);

  const handleNext = () => {
    if (currentIndex < filteredPoems.length - 1) {
      setCurrentIndex(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleLanguageChange = (language: string | null) => {
    setSelectedLanguage(language);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF9F6]">
      <Navigation />
      <LanguageFilter
        selectedLanguage={selectedLanguage}
        onLanguageChange={handleLanguageChange}
        poems={poemsData.poems}
      />
      
      <main className="flex-1">
        {filteredPoems.length > 0 ? (
          <>
            <PoemPage poem={currentPoem} />
            <PoemPagination
              currentIndex={currentIndex}
              totalCount={filteredPoems.length}
              onNext={handleNext}
              onPrevious={handlePrevious}
            />
          </>
        ) : (
          <div className="flex items-center justify-center min-h-screen">
            <p className="text-[#8B7355] text-lg">No poems found for this language</p>
          </div>
        )}
      </main>
    </div>
  );
}
