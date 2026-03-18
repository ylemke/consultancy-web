import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { name: t('nav.mentoring'), path: '/mentoring' },
    { name: t('nav.courses'), path: '/courses' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'es', label: 'ES' },
    { code: 'pt', label: 'PT' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsLangOpen(false);
  }, [location]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 nav-blur border-b border-neutral-100'
            : 'bg-transparent'
        }`}
        data-testid="main-navigation"
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link
              to="/"
              className="group flex items-center gap-2 sm:gap-3"
              data-testid="nav-logo"
            >
              <span className="text-xl sm:text-2xl font-extralight tracking-tighter text-black group-hover:opacity-60 transition-opacity">
                Y
              </span>
              <span className="h-4 w-px bg-neutral-200" />
              <span className="text-[9px] sm:text-[10px] font-medium tracking-[0.25em] uppercase text-neutral-400 group-hover:text-black transition-colors">
                Lemke
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8 xl:gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-[11px] font-medium tracking-[0.2em] uppercase transition-colors ${
                    location.pathname === link.path
                      ? 'text-black'
                      : 'text-neutral-400 hover:text-black'
                  }`}
                  data-testid={`nav-${link.path.slice(1)}`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="flex items-center gap-1 text-[11px] font-medium tracking-[0.2em] uppercase text-neutral-400 hover:text-black transition-colors"
                  data-testid="language-selector"
                >
                  {language.toUpperCase()}
                  <ChevronDown className={`w-3 h-3 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isLangOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full right-0 mt-2 bg-white border border-neutral-100 shadow-sm"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => { setLanguage(lang.code); setIsLangOpen(false); }}
                          className={`block w-full px-4 py-2 text-[11px] font-medium tracking-[0.2em] uppercase text-left transition-colors ${
                            language === lang.code
                              ? 'text-black bg-neutral-50'
                              : 'text-neutral-400 hover:text-black hover:bg-neutral-50'
                          }`}
                          data-testid={`lang-${lang.code}`}
                        >
                          {lang.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Mobile: Language + Menu */}
            <div className="flex lg:hidden items-center gap-4">
              <div className="relative">
                <button
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="flex items-center gap-1 text-[10px] font-medium tracking-[0.15em] uppercase text-neutral-400"
                  data-testid="language-selector-mobile"
                >
                  {language.toUpperCase()}
                  <ChevronDown className={`w-3 h-3 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isLangOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full right-0 mt-2 bg-white border border-neutral-100 shadow-sm z-50"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => { setLanguage(lang.code); setIsLangOpen(false); }}
                          className={`block w-full px-4 py-2 text-[10px] font-medium tracking-[0.15em] uppercase text-left transition-colors ${
                            language === lang.code
                              ? 'text-black bg-neutral-50'
                              : 'text-neutral-400 hover:text-black'
                          }`}
                        >
                          {lang.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-black"
                data-testid="mobile-menu-toggle"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white pt-16 sm:pt-20 lg:hidden"
            data-testid="mobile-menu"
          >
            <div className="container mx-auto px-6 py-12 sm:py-16">
              <div className="flex flex-col gap-6 sm:gap-8">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className={`text-2xl sm:text-3xl font-extralight tracking-tight ${
                        location.pathname === link.path
                          ? 'text-black'
                          : 'text-neutral-300 hover:text-black'
                      } transition-colors`}
                      data-testid={`mobile-nav-${link.path.slice(1)}`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
