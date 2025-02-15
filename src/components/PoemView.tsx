import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface PoemViewProps {
  poem: {
    title: string;
    content: string;
    language: string;
  };
  onClose: () => void;
}

const backgroundStyles = {
  marathi: {
    bg: "bg-[url('https://images.unsplash.com/photo-1507502707541-f369a3b18502?q=80&w=2574')",
    overlay: "from-orange-900/70",
  },
  hindi: {
    bg: "bg-[url('https://images.unsplash.com/photo-1506604900144-7360175909e2?q=80&w=2574')",
    overlay: "from-red-900/70",
  },
  english: {
    bg: "bg-[url('https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?q=80&w=2574')",
    overlay: "from-blue-900/70",
  },
};

export default function PoemView({ poem, onClose }: PoemViewProps) {
  const style = backgroundStyles[poem.language as keyof typeof backgroundStyles];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center z-50"
    >
      <div className={`fixed inset-0 ${style.bg} bg-cover bg-center`}>
        <div className={`absolute inset-0 bg-gradient-to-b ${style.overlay} to-black/90`} />
      </div>
      
      <div className="relative z-10 max-w-2xl w-full mx-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white/10 backdrop-blur-md rounded-lg p-8 text-white shadow-2xl"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white"
          >
            <X size={24} />
          </button>
          
          <h2 className="text-3xl font-bold mb-6">{poem.title}</h2>
          <p className="text-lg whitespace-pre-line leading-relaxed">
            {poem.content}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}