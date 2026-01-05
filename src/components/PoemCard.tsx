import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface PoemCardProps {
  poem: {
    id: number;
    title: string;
    preview: string;
    language: string;
  };
  onClick: () => void;
}

export default function PoemCard({ poem, onClick }: PoemCardProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      onClick={onClick}
      className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-6 cursor-pointer transform hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-gray-100"
    >
      <h3 className="text-2xl font-bold mb-4 text-gray-900 leading-tight">{poem.title}</h3>
      <p className="text-gray-700 whitespace-pre-line leading-relaxed mb-4">{poem.preview}</p>
      <div className="mt-4">
        <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full text-sm font-semibold uppercase tracking-wide shadow-sm">
          {poem.language.toUpperCase()}
        </span>
      </div>
    </motion.div>
  );
}