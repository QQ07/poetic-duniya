import React, { useMemo } from 'react';

interface LanguageFilterProps {
  selectedLanguage: string | null;
  onLanguageChange: (language: string | null) => void;
  poems: Array<{ language: string }>;
}

const LanguageFilter: React.FC<LanguageFilterProps> = ({
  selectedLanguage,
  onLanguageChange,
  poems,
}) => {
  const languages = useMemo(() => {
    const langs = new Set(poems.map(p => p.language));
    return Array.from(langs).sort();
  }, [poems]);

  const handleFilterClick = (lang: string | null) => {
    const element = document.documentElement;
    element.animate(
      [{ opacity: 1 }, { opacity: 0.5 }, { opacity: 1 }],
      { duration: 300, easing: 'ease-in-out' }
    );
    onLanguageChange(lang);
  };

  return (
    <div className="flex flex-col items-center gap-4 py-6 px-4">
      <p className="text-xs uppercase tracking-widest text-[#8B7355]">Filter by language</p>
      <div className="flex flex-wrap gap-2 justify-center">
        <button
          onClick={() => handleFilterClick(null)}
          className={`px-4 py-2 text-sm font-medium transition-all duration-300 ${
            selectedLanguage === null
              ? 'bg-[#E8D5D5] text-[#1A1A1A]'
              : 'bg-transparent border border-[#D1D7C4] text-[#1A1A1A] hover:border-[#E8D5D5]'
          }`}
        >
          All
        </button>
        {languages.map((lang) => (
          <button
            key={lang}
            onClick={() => handleFilterClick(lang)}
            className={`px-4 py-2 text-sm font-medium transition-all duration-300 capitalize ${
              selectedLanguage === lang
                ? 'bg-[#E8D5D5] text-[#1A1A1A]'
                : 'bg-transparent border border-[#D1D7C4] text-[#1A1A1A] hover:border-[#E8D5D5]'
            }`}
          >
            {lang}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageFilter;
