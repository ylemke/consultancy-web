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

export default function CareersPage() {
  return (
    <div className="bg-white min-h-screen pt-24" data-testid="careers-page">
      {/* Hero Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-8">
              Professional Mentorship
            </p>
            <h1 
              className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter leading-none text-black mb-8"
              data-testid="careers-headline"
            >
              Land Your<br />Defining Role.
            </h1>
            <p className="text-lg md:text-xl font-light leading-relaxed text-neutral-600 max-w-2xl">
              Strategic career guidance that transforms ambitious professionals into Big Tech leaders. I decode the hiring process so you can articulate your value with clarity and confidence.
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
            <motion.div variants={staggerItem} data-testid="service-interview">
              <div className="mb-8">
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-300">01</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-black mb-6">
                Big Tech Interview Mastery
              </h3>
              <p className="text-base font-normal leading-relaxed text-neutral-600 mb-8">
                1:1 behavioral and technical coaching to decode the hiring process and master the STAR method. Understand what top companies truly look for and how to demonstrate it.
              </p>
              <ul className="space-y-3 text-sm text-neutral-500">
                <li className="flex items-start">
                  <span className="w-1 h-1 bg-black rounded-full mt-2 mr-3 flex-shrink-0" />
                  STAR method mastery
                </li>
                <li className="flex items-start">
                  <span className="w-1 h-1 bg-black rounded-full mt-2 mr-3 flex-shrink-0" />
                  Mock interview sessions
                </li>
                <li className="flex items-start">
                  <span className="w-1 h-1 bg-black rounded-full mt-2 mr-3 flex-shrink-0" />
                  Technical deep-dives
                </li>
              </ul>
            </motion.div>

            {/* Service 2 */}
            <motion.div variants={staggerItem} data-testid="service-presence">
              <div className="mb-8">
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-300">02</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-black mb-6">
                Executive Presence & Storytelling
              </h3>
              <p className="text-base font-normal leading-relaxed text-neutral-600 mb-8">
                Learn to translate operational complexity into clear, compelling narratives that influence stakeholders. Build the presence that commands rooms and accelerates careers.
              </p>
              <ul className="space-y-3 text-sm text-neutral-500">
                <li className="flex items-start">
                  <span className="w-1 h-1 bg-black rounded-full mt-2 mr-3 flex-shrink-0" />
                  Narrative construction
                </li>
                <li className="flex items-start">
                  <span className="w-1 h-1 bg-black rounded-full mt-2 mr-3 flex-shrink-0" />
                  Stakeholder influence
                </li>
                <li className="flex items-start">
                  <span className="w-1 h-1 bg-black rounded-full mt-2 mr-3 flex-shrink-0" />
                  Leadership communication
                </li>
              </ul>
            </motion.div>

            {/* Service 3 */}
            <motion.div variants={staggerItem} data-testid="service-strategy">
              <div className="mb-8">
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-300">03</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-black mb-6">
                Career Elevation Strategy
              </h3>
              <p className="text-base font-normal leading-relaxed text-neutral-600 mb-8">
                Strategic mentorship to map your path to senior leadership and build a personalized roadmap. Navigate transitions, negotiate offers, and accelerate your trajectory.
              </p>
              <ul className="space-y-3 text-sm text-neutral-500">
                <li className="flex items-start">
                  <span className="w-1 h-1 bg-black rounded-full mt-2 mr-3 flex-shrink-0" />
                  Career trajectory mapping
                </li>
                <li className="flex items-start">
                  <span className="w-1 h-1 bg-black rounded-full mt-2 mr-3 flex-shrink-0" />
                  Offer negotiation strategy
                </li>
                <li className="flex items-start">
                  <span className="w-1 h-1 bg-black rounded-full mt-2 mr-3 flex-shrink-0" />
                  Leadership transition support
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 md:py-32 border-t border-neutral-100">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <motion.div 
            className="max-w-3xl"
            {...fadeInUp}
          >
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-8">
              The Approach
            </p>
            <blockquote className="text-2xl md:text-3xl font-light tracking-tight text-black leading-relaxed mb-8">
              "I reverse-engineer the Big Tech hiring process to help ambitious professionals articulate their value and secure career-defining roles."
            </blockquote>
            <p className="text-sm font-medium text-neutral-500">
              — Yasmin Lemke
            </p>
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
                Ready to Accelerate?
              </p>
              <h2 className="text-3xl md:text-5xl font-light tracking-tight text-black">
                Let's map your path to leadership.
              </h2>
            </div>
            <Link 
              to="/contact"
              className="inline-flex items-center justify-center h-12 px-8 bg-black text-white text-xs font-medium tracking-[0.2em] uppercase hover:bg-neutral-800 transition-all duration-300 flex-shrink-0"
              data-testid="careers-cta"
            >
              Book Your Session
              <ArrowRight className="ml-3 w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
