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
      className="bg-white rounded-lg shadow-xl p-6 cursor-pointer transform hover:scale-105 transition-transform duration-300"
    >
      <h3 className="text-2xl font-semibold mb-4">{poem.title}</h3>
      <p className="text-gray-600 whitespace-pre-line">{poem.preview}</p>
      <div className="mt-4">
        <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
          {poem.language}
        </span>
      </div>
    </motion.div>
  );
}