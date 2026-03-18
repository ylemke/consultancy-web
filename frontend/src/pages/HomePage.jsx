import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const PROFESSIONAL_IMAGE_BW = "https://customer-assets.emergentagent.com/job_compliance-masters/artifacts/qgqwjw2b_WhatsApp%20Image%202026-03-17%20at%2020.34.41.jpeg";
const PROFESSIONAL_IMAGE_COLOR = "https://customer-assets.emergentagent.com/job_compliance-masters/artifacts/gcfjbtio_WhatsApp%20Image%202026-03-17%20at%2020.46.24.jpeg";

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};
const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="bg-white min-h-screen" data-testid="home-page">

      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-16 sm:pt-20 pb-12" data-testid="hero-section">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 xl:gap-24 items-center">
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
                {t('home.label')}
              </motion.p>
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tighter leading-[0.95] text-black mb-6 sm:mb-8"
                variants={staggerItem}
                data-testid="hero-headline"
              >
                {t('home.headline')}<br />{t('home.headline2')}
              </motion.h1>
              <motion.p
                className="text-base sm:text-lg md:text-xl font-light leading-relaxed text-neutral-500 max-w-xl mb-8 sm:mb-12"
                variants={staggerItem}
                data-testid="hero-subheadline"
              >
                {t('home.subheadline')}
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 sm:mb-16"
                variants={staggerItem}
              >
                <Link
                  to="/courses"
                  className="inline-flex items-center justify-center h-12 px-6 sm:px-8 bg-black text-white text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase hover:bg-neutral-800 transition-all duration-300"
                  data-testid="courses-cta"
                >
                  {t('home.cta1')}
                  <ArrowRight className="ml-2 sm:ml-3 w-4 h-4" />
                </Link>
                <Link
                  to="/mentoring"
                  className="inline-flex items-center justify-center h-12 px-6 sm:px-8 border border-neutral-200 text-neutral-600 text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase hover:border-black hover:text-black transition-all duration-300"
                  data-testid="mentoring-cta"
                >
                  {t('home.cta2')}
                  <ArrowRight className="ml-2 sm:ml-3 w-4 h-4" />
                </Link>
              </motion.div>
              <motion.div variants={staggerItem}>
                <p className="text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase text-neutral-300 mb-3 sm:mb-4">
                  {t('home.trusted')}
                </p>
                <p className="text-xs sm:text-sm text-neutral-400 tracking-[0.15em] mb-4" data-testid="trust-banner">
                  Microsoft &nbsp;&nbsp;·&nbsp;&nbsp; Amazon &nbsp;&nbsp;·&nbsp;&nbsp; BNP Paribas
                </p>
                <p className="text-[10px] sm:text-xs text-neutral-300 tracking-[0.15em]">
                  {t('home.location')}
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              className="lg:col-span-5 order-1 lg:order-2"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative max-w-sm mx-auto lg:max-w-none group">
                <div className="aspect-[3/4] overflow-hidden relative">
                  <img
                    src={PROFESSIONAL_IMAGE_BW}
                    alt="Yasmin Lemke"
                    className="w-full h-full object-cover object-top absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
                    data-testid="hero-image"
                  />
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

      {/* AI Courses Teaser Section — light design */}
      <section className="py-16 sm:py-24 md:py-32 border-t border-neutral-100" data-testid="courses-teaser-section">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 sm:mb-16"
          >
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4 sm:mb-8">
              {t('home.coursesLabel')}
            </p>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tighter text-black leading-tight">
                {t('home.coursesHeadline')}
              </h2>
              <Link
                to="/courses"
                className="shrink-0 inline-flex items-center gap-2 text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase text-black border border-black px-6 py-3 hover:bg-black hover:text-white transition-all duration-300"
              >
                {t('home.coursesCta')}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <p className="text-base sm:text-lg font-light text-neutral-500 mt-6 max-w-2xl">
              {t('home.coursesDesc')}
            </p>
          </motion.div>

          <motion.div
            className="divide-y divide-neutral-100"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              { num: '01', key: 'course1' },
              { num: '02', key: 'course2' },
              { num: '03', key: 'course3' },
            ].map(({ num, key }) => (
              <motion.div
                key={key}
                variants={staggerItem}
                className="py-8 sm:py-10 flex flex-col sm:flex-row gap-4 sm:gap-12"
              >
                <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-neutral-300 sm:w-12 shrink-0 pt-1">{num}</span>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-light text-black leading-tight mb-2">
                    {t(`courses.${key}Title`)}
                  </h3>
                  <p className="text-sm font-light text-neutral-500 leading-relaxed">
                    {t(`courses.${key}Desc`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 sm:mt-12 pt-8 border-t border-neutral-100 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8"
          >
            <p className="text-sm font-light text-neutral-400">
              {t('home.coursesNote')}
            </p>
            <Link
              to="/courses"
              className="shrink-0 inline-flex items-center gap-2 bg-black text-white text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase px-8 py-4 hover:bg-neutral-800 transition-colors"
            >
              {t('home.cta1')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 sm:py-24 md:py-32 border-t border-neutral-100" data-testid="metrics-section">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl">
          <motion.div
            className="grid grid-cols-3 gap-6 sm:gap-12 md:gap-24"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div className="text-left" variants={staggerItem}>
              <p className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight tracking-tighter text-black mb-1 sm:mb-3" data-testid="metric-portfolios">
                $9B+
              </p>
              <p className="text-[9px] sm:text-xs font-medium tracking-[0.15em] sm:tracking-[0.2em] uppercase text-neutral-400">
                {t('home.managedPortfolios')}
              </p>
            </motion.div>
            <motion.div className="text-left" variants={staggerItem}>
              <p className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight tracking-tighter text-black mb-1 sm:mb-3" data-testid="metric-languages">
                3
              </p>
              <p className="text-[9px] sm:text-xs font-medium tracking-[0.15em] sm:tracking-[0.2em] uppercase text-neutral-400">
                {t('home.languages')}
              </p>
            </motion.div>
            <motion.div className="text-left" variants={staggerItem}>
              <p className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight tracking-tighter text-black mb-1 sm:mb-3" data-testid="metric-years">
                7+
              </p>
              <p className="text-[9px] sm:text-xs font-medium tracking-[0.15em] sm:tracking-[0.2em] uppercase text-neutral-400">
                {t('home.yearsExperience')}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Brief Intro Section */}
      <section className="py-16 sm:py-24 md:py-32 border-t border-neutral-100">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4 sm:mb-8">
              {t('home.dualExpertise')}
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-black mb-6 sm:mb-8 leading-tight">
              {t('home.dualTitle')}
            </h2>
            <p className="text-base sm:text-lg font-light leading-relaxed text-neutral-500 mb-8 sm:mb-12">
              {t('home.dualDesc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              <Link
                to="/mentoring"
                className="text-xs sm:text-sm font-medium tracking-[0.15em] uppercase text-black hover:text-neutral-500 transition-colors inline-flex items-center group"
                data-testid="explore-mentoring-link"
              >
                {t('home.forProfessionals')}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
