import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HERO_IMAGE = "https://customer-assets.emergentagent.com/job_compliance-masters/artifacts/je32x1f1_IMG_9347.JPG";

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
    transition: { staggerChildren: 0.15 }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function HomePage() {
  return (
    <div className="bg-white min-h-screen" data-testid="home-page">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center" data-testid="hero-section">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={HERO_IMAGE} 
            alt="Yasmin Lemke" 
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 md:px-12 max-w-7xl pt-32 pb-24">
          <motion.div 
            className="max-w-4xl"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            {/* Label */}
            <motion.p 
              className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-500 mb-8"
              variants={staggerItem}
            >
              Strategic Advisory
            </motion.p>

            {/* Main Headline */}
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter leading-none text-black mb-8"
              variants={staggerItem}
              data-testid="hero-headline"
            >
              Governance &<br />Risk Leadership.
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              className="text-lg md:text-xl font-light leading-relaxed text-neutral-600 max-w-2xl mb-12"
              variants={staggerItem}
              data-testid="hero-subheadline"
            >
              Governance that Accelerates. Careers that Scale. I build AI-driven, supportable risk frameworks for global enterprises, and mentor ambitious professionals to conquer rigorous Big Tech interview loops.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-20"
              variants={staggerItem}
            >
              <Link 
                to="/companies"
                className="inline-flex items-center justify-center h-14 px-10 bg-[#D4AF37] text-white text-xs font-medium tracking-[0.2em] uppercase hover:bg-[#C5A028] transition-all duration-300"
                data-testid="partner-cta"
              >
                Partner with Me
                <ArrowRight className="ml-3 w-4 h-4" />
              </Link>
              <Link 
                to="/careers"
                className="inline-flex items-center justify-center h-14 px-10 border border-[#D4AF37] text-black text-xs font-medium tracking-[0.2em] uppercase hover:bg-[#D4AF37] hover:text-white transition-all duration-300"
                data-testid="career-cta"
              >
                Advance Your Career
              </Link>
            </motion.div>

            {/* Trust Banner */}
            <motion.div 
              className="border-t border-neutral-200 pt-12"
              variants={staggerItem}
            >
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-400 mb-6">
                Trusted Experience
              </p>
              <p className="text-sm md:text-base text-neutral-500 tracking-widest" data-testid="trust-banner">
                Microsoft &nbsp;&nbsp;|&nbsp;&nbsp; Amazon &nbsp;&nbsp;|&nbsp;&nbsp; BNP Paribas
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-24 md:py-32 bg-white" data-testid="metrics-section">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {/* Metric 1 */}
            <motion.div className="text-left" variants={staggerItem}>
              <p className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tighter text-black mb-4" data-testid="metric-portfolios">
                $9B+
              </p>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400">
                Managed Portfolios
              </p>
            </motion.div>

            {/* Metric 2 */}
            <motion.div className="text-left" variants={staggerItem}>
              <p className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tighter text-black mb-4" data-testid="metric-reduction">
                25%
              </p>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400">
                Risk Reduction
              </p>
            </motion.div>

            {/* Metric 3 */}
            <motion.div className="text-left" variants={staggerItem}>
              <p className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tighter text-black mb-4" data-testid="metric-languages">
                3
              </p>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400">
                Languages
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Brief Intro Section */}
      <section className="py-24 md:py-32 bg-white border-t border-neutral-100">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <motion.div 
            className="max-w-3xl"
            {...fadeInUp}
          >
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-8">
              Dual Expertise
            </p>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-black mb-8">
              Enterprise transformation meets career acceleration.
            </h2>
            <p className="text-lg md:text-xl font-light leading-relaxed text-neutral-600 mb-12">
              Whether you're a global enterprise seeking robust governance frameworks, or an ambitious professional preparing for your defining career move — I provide strategic guidance that delivers measurable outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                to="/companies"
                className="text-sm font-medium tracking-[0.15em] uppercase text-black hover:text-[#D4AF37] transition-colors inline-flex items-center"
                data-testid="explore-companies-link"
              >
                For Enterprises
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link 
                to="/careers"
                className="text-sm font-medium tracking-[0.15em] uppercase text-black hover:text-[#D4AF37] transition-colors inline-flex items-center"
                data-testid="explore-careers-link"
              >
                For Professionals
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
