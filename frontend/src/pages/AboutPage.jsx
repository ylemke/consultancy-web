import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const PROFESSIONAL_IMAGE_BW = "https://customer-assets.emergentagent.com/job_compliance-masters/artifacts/ufcorw3h_WhatsApp%20Image%202026-03-17%20at%2020.34.42.jpeg";
const PROFESSIONAL_IMAGE_COLOR = "https://customer-assets.emergentagent.com/job_compliance-masters/artifacts/ip9spapz_WhatsApp%20Image%202026-03-17%20at%2020.46.25.jpeg";

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
  const { t } = useLanguage();

  return (
    <div className="bg-white min-h-screen pt-16 sm:pt-24" data-testid="about-page">
      {/* Hero Section */}
      <section className="py-16 sm:py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 xl:gap-24 items-start">
            {/* Text Content */}
            <motion.div
              className="lg:col-span-7 order-2 lg:order-1"
              variants={staggerContainer}
              initial="hidden"
              animate="show"
            >
              <motion.p 
                className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4 sm:mb-8"
                variants={staggerItem}
              >
                {t('about.label')}
              </motion.p>
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tighter leading-[0.95] text-black mb-8 sm:mb-12"
                variants={staggerItem}
                data-testid="about-headline"
              >
                {t('about.headline')}<br />{t('about.headline2')}<br />{t('about.headline3')}
              </motion.h1>
              <motion.div 
                className="flex items-center gap-6 sm:gap-10 flex-wrap"
                variants={staggerItem}
              >
                <div>
                  <p className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tighter text-black">$9B+</p>
                  <p className="text-[10px] sm:text-xs tracking-[0.15em] uppercase text-neutral-400 mt-1">{t('about.portfolios')}</p>
                </div>
                <div className="h-12 sm:h-16 w-px bg-neutral-200" />
                <div>
                  <p className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tighter text-black">3</p>
                  <p className="text-[10px] sm:text-xs tracking-[0.15em] uppercase text-neutral-400 mt-1">{t('about.languages')}</p>
                </div>
                <div className="h-12 sm:h-16 w-px bg-neutral-200" />
                <div>
                  <p className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tighter text-black">{t('about.yearsNumber') || '7+'}</p>
                  <p className="text-[10px] sm:text-xs tracking-[0.15em] uppercase text-neutral-400 mt-1">{t('about.years')}</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div 
              className="lg:col-span-5 order-1 lg:order-2"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative max-w-sm mx-auto lg:max-w-none group">
                <div className="aspect-[3/4] overflow-hidden relative">
                  {/* B&W Image - default */}
                  <img 
                    src={PROFESSIONAL_IMAGE_BW} 
                    alt="Yasmin Lemke" 
                    className="w-full h-full object-cover object-top absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
                    data-testid="about-image"
                  />
                  {/* Color Image - on hover */}
                  <img 
                    src={PROFESSIONAL_IMAGE_COLOR} 
                    alt="Yasmin Lemke" 
                    className="w-full h-full object-cover object-top absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 sm:w-24 h-px bg-black" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 sm:py-24 md:py-32 border-t border-neutral-100">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div className="lg:col-span-3" variants={staggerItem}>
              <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400">
                {t('about.background')}
              </p>
            </motion.div>

            <motion.div className="lg:col-span-9 space-y-6 sm:space-y-8" variants={staggerItem}>
              <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed text-neutral-500" data-testid="about-bio-1">
                {t('about.bio1')}
              </p>
              <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed text-neutral-500" data-testid="about-bio-2">
                {t('about.bio2')}
              </p>
              <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed text-neutral-500" data-testid="about-bio-3">
                {t('about.bio3')}
              </p>
              <p className="text-sm sm:text-base font-medium text-neutral-400 pt-4">
                {t('about.location')}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 sm:py-24 md:py-32 border-t border-neutral-100">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div className="lg:col-span-3" variants={staggerItem}>
              <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400">
                {t('about.expertise')}
              </p>
            </motion.div>

            <motion.div className="lg:col-span-9" variants={staggerItem}>
              <div>
                <h3 className="text-base sm:text-lg font-medium tracking-tight text-black mb-3 sm:mb-4">{t('about.expertiseCareer')}</h3>
                <ul className="space-y-2 text-sm sm:text-base text-neutral-500">
                  {t('about.expertiseCareerItems').map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 sm:py-24 md:py-32 border-t border-neutral-100">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div className="lg:col-span-3" variants={staggerItem}>
              <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400">
                {t('about.experience')}
              </p>
            </motion.div>

            <motion.div className="lg:col-span-9" variants={staggerItem}>
              <div className="space-y-8 sm:space-y-10">
                {t('about.experienceItems')?.map((item, index) => (
                  <div key={index}>
                    <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-12">
                      <p className="text-sm text-neutral-400 font-medium tracking-wider w-32 flex-shrink-0">{item.company}</p>
                      <p className="text-sm sm:text-base text-neutral-500">{item.role}</p>
                    </div>
                    {index < t('about.experienceItems').length - 1 && <div className="h-px bg-neutral-100 mt-8 sm:mt-10" />}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 md:py-32 border-t border-neutral-100">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl">
          <motion.div 
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 sm:gap-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-2xl">
              <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4 sm:mb-6">
                {t('about.ctaLabel')}
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-black">
                {t('about.ctaTitle')}
              </h2>
            </div>
            <Link 
              to="/contact"
              className="inline-flex items-center justify-center h-12 px-6 sm:px-8 bg-black text-white text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase hover:bg-neutral-800 transition-all duration-300 flex-shrink-0 w-full sm:w-auto"
              data-testid="about-cta"
            >
              {t('about.ctaButton')}
              <ArrowRight className="ml-3 w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
