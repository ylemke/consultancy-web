import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-neutral-100" data-testid="footer">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
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
            <p className="text-sm text-neutral-400 mt-6 max-w-sm leading-relaxed">
              Strategic governance advisory and career mentorship for ambitious leaders.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] font-medium tracking-[0.25em] uppercase text-neutral-300 mb-6">
              Navigation
            </p>
            <div className="flex flex-col gap-3">
              <Link 
                to="/companies" 
                className="text-sm text-neutral-500 hover:text-black transition-colors"
                data-testid="footer-companies"
              >
                Companies
              </Link>
              <Link 
                to="/careers" 
                className="text-sm text-neutral-500 hover:text-black transition-colors"
                data-testid="footer-careers"
              >
                Careers
              </Link>
              <Link 
                to="/about" 
                className="text-sm text-neutral-500 hover:text-black transition-colors"
                data-testid="footer-about"
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="text-sm text-neutral-500 hover:text-black transition-colors"
                data-testid="footer-contact"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <p className="text-[10px] font-medium tracking-[0.25em] uppercase text-neutral-300 mb-6">
              Connect
            </p>
            <div className="flex flex-col gap-3">
              <a 
                href="https://linkedin.com" 
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
                Email
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-neutral-100 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-neutral-300 tracking-wider">
            © {currentYear} Yasmin Lemke
          </p>
          <p className="text-[11px] text-neutral-300 tracking-wider">
            Strategic Advisory
          </p>
        </div>
      </div>
    </footer>
  );
}
