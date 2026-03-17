import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-white border-t border-neutral-100" data-testid="footer">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand */}
          <div className="col-span-2">
            <Link 
              to="/"
              className="group flex items-center gap-3"
              data-testid="footer-logo"
            >
              <span className="text-2xl font-extralight tracking-tighter text-black">
                Y
              </span>
              <span className="h-4 w-px bg-neutral-200" />
              <span className="text-[10px] font-medium tracking-[0.25em] uppercase text-neutral-400">
                Lemke
              </span>
            </Link>
            <p className="text-sm text-neutral-400 mt-4 sm:mt-6 max-w-sm leading-relaxed">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] font-medium tracking-[0.25em] uppercase text-neutral-300 mb-4 sm:mb-6">
              {t('footer.navigation')}
            </p>
            <div className="flex flex-col gap-2 sm:gap-3">
              <Link 
                to="/companies" 
                className="text-sm text-neutral-500 hover:text-black transition-colors"
                data-testid="footer-companies"
              >
                {t('nav.companies')}
              </Link>
              <Link 
                to="/careers" 
                className="text-sm text-neutral-500 hover:text-black transition-colors"
                data-testid="footer-careers"
              >
                {t('nav.careers')}
              </Link>
              <Link 
                to="/about" 
                className="text-sm text-neutral-500 hover:text-black transition-colors"
                data-testid="footer-about"
              >
                {t('nav.about')}
              </Link>
              <Link 
                to="/contact" 
                className="text-sm text-neutral-500 hover:text-black transition-colors"
                data-testid="footer-contact"
              >
                {t('nav.contact')}
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <p className="text-[10px] font-medium tracking-[0.25em] uppercase text-neutral-300 mb-4 sm:mb-6">
              {t('footer.connect')}
            </p>
            <div className="flex flex-col gap-2 sm:gap-3">
              <a 
                href="https://www.linkedin.com/in/yasmin-lemke/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-neutral-500 hover:text-black transition-colors"
                data-testid="footer-linkedin"
              >
                LinkedIn
              </a>
              <Link 
                to="/contact" 
                className="text-sm text-neutral-500 hover:text-black transition-colors"
                data-testid="footer-email"
              >
                {t('footer.email')}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-neutral-100 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4">
          <p className="text-[10px] sm:text-[11px] text-neutral-300 tracking-wider">
            © {currentYear} {t('footer.rights')}
          </p>
          <p className="text-[10px] sm:text-[11px] text-neutral-300 tracking-wider">
            {t('footer.tagline2')}
          </p>
        </div>
      </div>
    </footer>
  );
}
