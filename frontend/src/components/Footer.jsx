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
              className="text-sm font-medium tracking-[0.15em] uppercase text-black hover:text-[#D4AF37] transition-colors"
              data-testid="footer-logo"
            >
              Yasmin Lemke
            </Link>
            <p className="text-sm text-neutral-500 mt-4 max-w-sm">
              Strategic governance advisory and career mentorship for ambitious leaders.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-6">
              Navigation
            </p>
            <div className="flex flex-col gap-3">
              <Link 
                to="/companies" 
                className="text-sm text-neutral-600 hover:text-[#D4AF37] transition-colors"
                data-testid="footer-companies"
              >
                Companies
              </Link>
              <Link 
                to="/careers" 
                className="text-sm text-neutral-600 hover:text-[#D4AF37] transition-colors"
                data-testid="footer-careers"
              >
                Careers
              </Link>
              <Link 
                to="/about" 
                className="text-sm text-neutral-600 hover:text-[#D4AF37] transition-colors"
                data-testid="footer-about"
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="text-sm text-neutral-600 hover:text-[#D4AF37] transition-colors"
                data-testid="footer-contact"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-6">
              Connect
            </p>
            <div className="flex flex-col gap-3">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-neutral-600 hover:text-[#D4AF37] transition-colors"
                data-testid="footer-linkedin"
              >
                LinkedIn
              </a>
              <Link 
                to="/contact" 
                className="text-sm text-neutral-600 hover:text-[#D4AF37] transition-colors"
                data-testid="footer-email"
              >
                Email
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-neutral-100 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-neutral-400">
            © {currentYear} Yasmin Lemke. All rights reserved.
          </p>
          <p className="text-xs text-neutral-400">
            Strategic Advisory & Mentorship
          </p>
        </div>
      </div>
    </footer>
  );
}
