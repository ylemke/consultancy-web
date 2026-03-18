import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function NotFoundPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-white min-h-screen flex items-center justify-center pt-16 sm:pt-24" data-testid="not-found-page">
      <motion.div 
        className="text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4 sm:mb-8">
          404
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tighter leading-[0.95] text-black mb-6 sm:mb-8">
          Page Not Found
        </h1>
        <p className="text-base sm:text-lg font-light leading-relaxed text-neutral-500 max-w-md mx-auto mb-8 sm:mb-12">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/"
          className="inline-flex items-center justify-center h-12 px-6 sm:px-8 bg-black text-white text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase hover:bg-neutral-800 transition-all duration-300"
          data-testid="back-home-btn"
        >
          <ArrowLeft className="mr-2 sm:mr-3 w-4 h-4" />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
