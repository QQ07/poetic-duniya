import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import poemsData from '../data/poems.json';

interface Poem {
  id: number;
  title: string;
  language: string;
  content: string;
  preview: string;
}

export default function Collections() {
  const navigate = useNavigate();

  // Group poems by language
  const groupedPoems = useMemo(() => {
    const groups: Record<string, Poem[]> = {};
    poemsData.poems.forEach(poem => {
      if (!groups[poem.language]) {
        groups[poem.language] = [];
      }
      groups[poem.language].push(poem);
    });
    return groups;
  }, []);

  const languages = Object.keys(groupedPoems).sort();

  useEffect(() => {
    const sections = document.querySelectorAll('.collection-fade');
    sections.forEach((section, index) => {
      section.animate(
        [{ opacity: 0, transform: 'translateY(24px)' }, { opacity: 1, transform: 'translateY(0)' }],
        { duration: 500, delay: index * 100, easing: 'ease-out' }
      );
    });
  }, []);

  const handlePoemClick = (poemId: number) => {
    navigate(`/poems?id=${poemId}`);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl text-[#1A1A1A] mb-4">Collections</h1>
          <p className="text-[#8B7355] text-lg">Explore poems organized by language</p>
        </div>

        {/* Language Shelves */}
        {languages.map((language) => (
          <section key={language} className="collection-fade mb-20">
            {/* Shelf Header */}
            <div className="mb-8">
              <h2 className="font-serif text-3xl text-[#1A1A1A] capitalize mb-2">{language}</h2>
              <div className="w-12 h-0.5 bg-[#E8D5D5]" />
            </div>

            {/* Book Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {groupedPoems[language].map((poem) => (
                <div
                  key={poem.id}
                  onClick={() => handlePoemClick(poem.id)}
                  className="group cursor-pointer"
                >
                  {/* Polaroid Card */}
                  <div className="bg-white/70 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-[#E8D5D5]/30 transform hover:scale-105 transition-transform">
                    {/* Card Header */}
                    <div className="p-6 pb-4">
                      <h3 className="font-serif text-lg text-[#1A1A1A] mb-3 line-clamp-2">
                        {poem.title}
                      </h3>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs uppercase tracking-widest text-[#8B7355]">
                          {poem.language}
                        </span>
                        <div className="w-6 h-0.5 bg-[#D1D7C4]" />
                      </div>
                    </div>

                    {/* Preview */}
                    <div className="px-6 pb-6">
                      <p className="font-serif text-sm text-[#8B7355]/80 line-clamp-3 italic">
                        "{poem.preview}"
                      </p>
                    </div>

                    {/* CTA */}
                    <div className="px-6 pb-6 pt-4 border-t border-[#D1D7C4]/20">
                      <button className="text-xs uppercase tracking-widest text-[#8B7355] hover:text-[#E8D5D5] transition-colors">
                        Read More →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
