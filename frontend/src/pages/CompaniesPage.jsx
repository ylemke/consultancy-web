import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

export default function CompaniesPage() {
  return (
    <div className="bg-white min-h-screen pt-24" data-testid="companies-page">
      {/* Hero Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-8">
              Corporate Advisory
            </p>
            <h1 
              className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter leading-none text-black mb-8"
              data-testid="companies-headline"
            >
              Resilient Systems<br />at Scale.
            </h1>
            <p className="text-lg md:text-xl font-light leading-relaxed text-neutral-600 max-w-2xl">
              Strategic governance frameworks that transform complexity into competitive advantage. From audit to implementation, I partner with global enterprises to build systems that scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="h-px bg-neutral-100" />
      </div>

      {/* Services Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {/* Service 1 */}
            <motion.div variants={staggerItem} data-testid="service-governance">
              <div className="mb-8">
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#D4AF37]">01</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-black mb-6">
                Governance Supportability & PMO
              </h3>
              <p className="text-base font-normal leading-relaxed text-neutral-600 mb-8">
                Audit IT pipelines and design standardized governance frameworks for global scale. Bridging the gap between technical innovation and business continuity.
              </p>
              <ul className="space-y-3 text-sm text-neutral-500">
                <li className="flex items-start">
                  <span className="w-1 h-1 bg-[#D4AF37] rounded-full mt-2 mr-3 flex-shrink-0" />
                  Enterprise-wide governance audits
                </li>
                <li className="flex items-start">
                  <span className="w-1 h-1 bg-[#D4AF37] rounded-full mt-2 mr-3 flex-shrink-0" />
                  Standardized framework design
                </li>
                <li className="flex items-start">
                  <span className="w-1 h-1 bg-[#D4AF37] rounded-full mt-2 mr-3 flex-shrink-0" />
                  Cross-functional alignment
                </li>
              </ul>
            </motion.div>

            {/* Service 2 */}
            <motion.div variants={staggerItem} data-testid="service-risk">
              <div className="mb-8">
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#D4AF37]">02</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-black mb-6">
                Quantitative Risk & AI Compliance
              </h3>
              <p className="text-base font-normal leading-relaxed text-neutral-600 mb-8">
                Tailored frameworks prioritizing quantitative models and advanced anomaly detection. Transition operations from reactive firefighting to proactive prevention.
              </p>
              <ul className="space-y-3 text-sm text-neutral-500">
                <li className="flex items-start">
                  <span className="w-1 h-1 bg-[#D4AF37] rounded-full mt-2 mr-3 flex-shrink-0" />
                  FAIR methodology implementation
                </li>
                <li className="flex items-start">
                  <span className="w-1 h-1 bg-[#D4AF37] rounded-full mt-2 mr-3 flex-shrink-0" />
                  Cyber risk quantification
                </li>
                <li className="flex items-start">
                  <span className="w-1 h-1 bg-[#D4AF37] rounded-full mt-2 mr-3 flex-shrink-0" />
                  Predictive analytics integration
                </li>
              </ul>
            </motion.div>

            {/* Service 3 */}
            <motion.div variants={staggerItem} data-testid="service-roadmaps">
              <div className="mb-8">
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#D4AF37]">03</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-black mb-6">
                Master Roadmaps & Resilience
              </h3>
              <p className="text-base font-normal leading-relaxed text-neutral-600 mb-8">
                Master Integration Roadmaps for global M&A consolidations. Automated Data Sanitization frameworks to ensure multi-jurisdictional compliance.
              </p>
              <ul className="space-y-3 text-sm text-neutral-500">
                <li className="flex items-start">
                  <span className="w-1 h-1 bg-[#D4AF37] rounded-full mt-2 mr-3 flex-shrink-0" />
                  M&A integration strategy
                </li>
                <li className="flex items-start">
                  <span className="w-1 h-1 bg-[#D4AF37] rounded-full mt-2 mr-3 flex-shrink-0" />
                  Multi-jurisdictional compliance
                </li>
                <li className="flex items-start">
                  <span className="w-1 h-1 bg-[#D4AF37] rounded-full mt-2 mr-3 flex-shrink-0" />
                  Automated data sanitization
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 border-t border-neutral-100">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <motion.div 
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12"
            {...fadeInUp}
          >
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-6">
                Ready to Transform?
              </p>
              <h2 className="text-3xl md:text-5xl font-light tracking-tight text-black">
                Let's architect your enterprise resilience.
              </h2>
            </div>
            <Link 
              to="/contact"
              className="inline-flex items-center justify-center h-14 px-10 bg-[#D4AF37] text-white text-xs font-medium tracking-[0.2em] uppercase hover:bg-[#C5A028] transition-all duration-300 flex-shrink-0"
              data-testid="companies-cta"
            >
              Schedule Consultation
              <ArrowRight className="ml-3 w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
