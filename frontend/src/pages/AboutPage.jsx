import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const PROFESSIONAL_IMAGE = "https://images.unsplash.com/photo-1673658173863-a28be73c7f90?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTV8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBsYXRpbmElMjB3b21hbiUyMGhlYWRzaG90JTIwY29ycG9yYXRlJTIwZWxlZ2FudCUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwwfHx8fDE3NzM3Njg2NjJ8MA&ixlib=rb-4.1.0&q=85";

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

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen pt-24" data-testid="about-page">
      {/* Hero Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            {/* Text Content */}
            <motion.div
              className="lg:col-span-7"
              variants={staggerContainer}
              initial="hidden"
              animate="show"
            >
              <motion.p 
                className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-8"
                variants={staggerItem}
              >
                About
              </motion.p>
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tighter leading-[0.95] text-black mb-12"
                variants={staggerItem}
                data-testid="about-headline"
              >
                Global Expertise.<br />Human-Centric<br />Growth.
              </motion.h1>
              <motion.div 
                className="flex items-center gap-10"
                variants={staggerItem}
              >
                <div>
                  <p className="text-4xl md:text-5xl font-extralight tracking-tighter text-black">$9B+</p>
                  <p className="text-xs tracking-[0.15em] uppercase text-neutral-400 mt-1">Portfolios</p>
                </div>
                <div className="h-16 w-px bg-neutral-200" />
                <div>
                  <p className="text-4xl md:text-5xl font-extralight tracking-tighter text-black">3</p>
                  <p className="text-xs tracking-[0.15em] uppercase text-neutral-400 mt-1">Languages</p>
                </div>
                <div className="h-16 w-px bg-neutral-200" />
                <div>
                  <p className="text-4xl md:text-5xl font-extralight tracking-tighter text-black">15+</p>
                  <p className="text-xs tracking-[0.15em] uppercase text-neutral-400 mt-1">Years</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div 
              className="lg:col-span-5"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative">
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={PROFESSIONAL_IMAGE} 
                    alt="Yasmin Lemke" 
                    className="w-full h-full object-cover object-top"
                    data-testid="about-image"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 w-24 h-px bg-black" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-24 md:py-32 border-t border-neutral-100">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-12 gap-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {/* Label */}
            <motion.div className="lg:col-span-3" variants={staggerItem}>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400">
                Background
              </p>
            </motion.div>

            {/* Content */}
            <motion.div className="lg:col-span-9 space-y-8" variants={staggerItem}>
              <p className="text-lg md:text-xl font-light leading-relaxed text-neutral-500" data-testid="about-bio-1">
                With a career spanning $9B+ in managed portfolios, I specialize in transforming complex regulatory requirements into streamlined, AI-driven operational frameworks. My approach bridges the gap between rigorous compliance and agile business growth.
              </p>
              <p className="text-lg md:text-xl font-light leading-relaxed text-neutral-500" data-testid="about-bio-2">
                As a trilingual leader (English, Portuguese, Spanish), I have successfully navigated the nuances of global markets, aligning cross-functional teams across continents to deliver robust risk management strategies.
              </p>
              <p className="text-lg md:text-xl font-light leading-relaxed text-neutral-500" data-testid="about-bio-3">
                Beyond enterprise consulting, I am deeply committed to mentoring the next generation of tech leaders. I reverse-engineer the Big Tech hiring process to help ambitious professionals articulate their value and secure career-defining roles.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 md:py-32 border-t border-neutral-100">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-12 gap-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {/* Label */}
            <motion.div className="lg:col-span-3" variants={staggerItem}>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400">
                Expertise
              </p>
            </motion.div>

            {/* Content */}
            <motion.div className="lg:col-span-9" variants={staggerItem}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-lg font-medium tracking-tight text-black mb-4">Enterprise Governance</h3>
                  <ul className="space-y-2 text-base text-neutral-500">
                    <li>Risk Framework Design</li>
                    <li>Regulatory Compliance (AML, KYC, GDPR)</li>
                    <li>IT Governance & PMO</li>
                    <li>M&A Integration Strategy</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium tracking-tight text-black mb-4">Career Development</h3>
                  <ul className="space-y-2 text-base text-neutral-500">
                    <li>Big Tech Interview Coaching</li>
                    <li>Executive Presence Training</li>
                    <li>Leadership Transition</li>
                    <li>Strategic Career Planning</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 md:py-32 border-t border-neutral-100">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-12 gap-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {/* Label */}
            <motion.div className="lg:col-span-3" variants={staggerItem}>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400">
                Experience
              </p>
            </motion.div>

            {/* Content */}
            <motion.div className="lg:col-span-9" variants={staggerItem}>
              <div className="space-y-10">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-12">
                  <p className="text-sm text-neutral-400 font-medium tracking-wider w-32 flex-shrink-0">Microsoft</p>
                  <p className="text-base text-neutral-500">Enterprise governance and risk strategy leadership</p>
                </div>
                <div className="h-px bg-neutral-100" />
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-12">
                  <p className="text-sm text-neutral-400 font-medium tracking-wider w-32 flex-shrink-0">Amazon</p>
                  <p className="text-base text-neutral-500">Operational excellence and compliance frameworks</p>
                </div>
                <div className="h-px bg-neutral-100" />
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-12">
                  <p className="text-sm text-neutral-400 font-medium tracking-wider w-32 flex-shrink-0">BNP Paribas</p>
                  <p className="text-base text-neutral-500">Global risk management and portfolio oversight</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 border-t border-neutral-100">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <motion.div 
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-6">
                Let's Connect
              </p>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight text-black">
                Ready to discuss your goals?
              </h2>
            </div>
            <Link 
              to="/contact"
              className="inline-flex items-center justify-center h-12 px-8 bg-black text-white text-xs font-medium tracking-[0.2em] uppercase hover:bg-neutral-800 transition-all duration-300 flex-shrink-0"
              data-testid="about-cta"
            >
              Get in Touch
              <ArrowRight className="ml-3 w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
