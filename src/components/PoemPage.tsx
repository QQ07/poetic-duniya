import React, { useEffect } from 'react';

interface Poem {
  id: number;
  title: string;
  language: string;
  content: string;
  preview: string;
}

interface PoemPageProps {
  poem: Poem | null;
}

const PoemPage: React.FC<PoemPageProps> = ({ poem }) => {
  useEffect(() => {
    if (poem) {
      const element = document.querySelector('.poem-content');
      if (element) {
        element.animate(
          [{ opacity: 0, transform: 'translateY(8px)' }, { opacity: 1, transform: 'translateY(0)' }],
          { duration: 400, easing: 'ease-out' }
        );
      }
    }
  }, [poem]);

  if (!poem) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#FAF9F6]">
        <p className="text-[#8B7355] text-lg">Select a poem to begin reading</p>
      </div>
    );
  }

  return (
    <article className="poem-content min-h-screen bg-[#FAF9F6] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl">
        {/* Parchment paper effect */}
        <div className="relative bg-white/70 shadow-lg rounded-lg p-12 sm:p-16 border border-[#E8D5D5]/30">
          {/* Subtle texture overlay */}
          <div className="absolute inset-0 opacity-5 pointer-events-none rounded-lg" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' result=\'noise\' /%3E%3C/filter%3E%3Crect width=\'100\' height=\'100\' filter=\'url(%23noise)\' opacity=\'0.3\' /%3E%3C/svg%3E")',
            backgroundRepeat: 'repeat'
          }} />
          
          {/* Content */}
          <div className="relative z-10">
            {/* Language tag */}
            <div className="flex justify-center mb-8">
              <span className="text-xs uppercase tracking-widest text-[#8B7355] bg-[#E8D5D5]/20 px-4 py-2 rounded-full">
                {poem.language}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-4xl sm:text-5xl text-[#1A1A1A] text-center mb-12 leading-tight">
              {poem.title}
            </h1>

            {/* Divider */}
            <div className="flex justify-center mb-12">
              <div className="w-12 h-0.5 bg-[#D1D7C4]" />
            </div>

            {/* Poem content */}
            <div className="font-serif text-lg sm:text-xl text-[#1A1A1A] leading-relaxed whitespace-pre-wrap mb-12">
              {poem.content}
            </div>

            {/* Divider */}
            <div className="flex justify-center">
              <div className="w-12 h-0.5 bg-[#D1D7C4]" />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PoemPage;
