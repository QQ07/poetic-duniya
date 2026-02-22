import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PoemPaginationProps {
  currentIndex: number;
  totalCount: number;
  onNext: () => void;
  onPrevious: () => void;
}

const PoemPagination: React.FC<PoemPaginationProps> = ({
  currentIndex,
  totalCount,
  onNext,
  onPrevious,
}) => {
  const canGoPrevious = currentIndex > 0;
  const canGoNext = currentIndex < totalCount - 1;

  return (
    <div className="sticky bottom-0 z-10 bg-[#FAF9F6] border-t border-[#E8D5D5] backdrop-blur-sm">
      <div className="flex items-center justify-between px-6 py-6 max-w-6xl mx-auto">
        <button
          onClick={onPrevious}
          disabled={!canGoPrevious}
          className={`flex items-center gap-2 px-4 py-2 rounded transition-all duration-300 ${
            canGoPrevious
              ? 'text-[#1A1A1A] hover:bg-[#E8D5D5]/30 cursor-pointer'
              : 'text-[#D1D7C4] cursor-not-allowed'
          }`}
          aria-label="Previous poem"
        >
          <ChevronLeft size={20} />
          <span className="hidden sm:inline text-sm">Previous</span>
        </button>

        <div className="text-center">
          <p className="text-xs uppercase tracking-widest text-[#8B7355]">
            {currentIndex + 1} of {totalCount}
          </p>
          <div className="flex gap-1 mt-2 justify-center">
            {Array.from({ length: Math.min(totalCount, 5) }).map((_, i) => (
              <div
                key={i}
                className={`h-1 w-6 rounded transition-all duration-300 ${
                  i === (currentIndex % 5)
                    ? 'bg-[#E8D5D5]'
                    : 'bg-[#D1D7C4]/30'
                }`}
              />
            ))}
          </div>
        </div>

        <button
          onClick={onNext}
          disabled={!canGoNext}
          className={`flex items-center gap-2 px-4 py-2 rounded transition-all duration-300 ${
            canGoNext
              ? 'text-[#1A1A1A] hover:bg-[#E8D5D5]/30 cursor-pointer'
              : 'text-[#D1D7C4] cursor-not-allowed'
          }`}
          aria-label="Next poem"
        >
          <span className="hidden sm:inline text-sm">Next</span>
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default PoemPagination;
