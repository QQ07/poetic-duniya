import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import poemsData from '../data/poems.json';

const backgroundStyles = {
  marathi: {
    bg: "bg-[url('https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?q=80&w=2970')", // Starry mountain landscape
    textGradient: "from-orange-100",
    accent: "orange"
  },
  hindi: {
    bg: "bg-[url('https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=2970')", // Desert night sky
    textGradient: "from-red-100",
    accent: "red"
  },
  english: {
    bg: "bg-[url('https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=2970')", // Northern lights with stars
    textGradient: "from-blue-100",
    accent: "blue"
  }
};

export default function PoemPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const poem = poemsData.poems.find(p => p.id === Number(id));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);
  
  if (!poem) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-2xl">Poem not found</p>
      </div>
    );
  }

  const style = backgroundStyles[poem.language as keyof typeof backgroundStyles];

  return (
    <div className={`min-h-screen ${style.bg} bg-cover bg-center bg-fixed relative flex items-center justify-center`}>
      <div className={`absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 backdrop-blur-sm`} />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative z-10 w-full min-h-screen flex items-center"
      >
        <button
          onClick={() => navigate('/')}
          className={`fixed top-8 left-8 text-${style.accent}-100 hover:text-white transition-colors flex items-center gap-2 text-lg`}
        >
          <ArrowLeft />
          Back to Poems
        </button>

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto py-32"
          >
            <h1 className={`text-5xl font-bold mb-12 text-gradient bg-gradient-to-r ${style.textGradient} to-white leading-[1.4]`}>
              {poem.title}
            </h1>
            <p className="text-xl leading-relaxed text-white/90 whitespace-pre-line mb-12">
              {poem.content}
            </p>
            
            <div>
              <span className={`inline-block px-4 py-2 rounded-full text-${style.accent}-100 border border-${style.accent}-100/30 text-sm font-semibold uppercase tracking-wide shadow-sm transition-all hover:shadow-md`}>
                {poem.language.toUpperCase()}
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}