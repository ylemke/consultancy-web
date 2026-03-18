import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } },
};
const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const services = [
  { num: '01', testId: 'service-grc', key: 'service1' },
  { num: '02', testId: 'service-cyber', key: 'service2' },
  { num: '03', testId: 'service-interview', key: 'service3' },
  { num: '04', testId: 'service-bigtech', key: 'service4' },
];

export default function MentoringPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-white min-h-screen pt-16 sm:pt-24" data-testid="mentoring-page">

      {/* Hero Section */}
      <section className="py-16 sm:py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4 sm:mb-8">
              {t('mentoring.label')}
            </p>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tighter leading-[0.95] text-black mb-6 sm:mb-8"
              data-testid="mentoring-headline"
            >
              {t('mentoring.headline')}<br />{t('mentoring.headline2')}
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed text-neutral-600 max-w-2xl">
              {t('mentoring.subheadline')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl">
        <div className="h-px bg-neutral-100" />
      </div>

      {/* Services Section */}
      <section className="py-16 sm:py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 xl:gap-24"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {services.map(({ num, testId, key }) => (
              <motion.div key={key} variants={staggerItem} data-testid={testId}>
                <div className="mb-6 sm:mb-8">
                  <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-neutral-300">
                    {num}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-black mb-4 sm:mb-6">
                  {t(`mentoring.${key}Title`)}
                </h3>
                <p className="text-sm sm:text-base font-normal leading-relaxed text-neutral-600 mb-6 sm:mb-8">
                  {t(`mentoring.${key}Desc`)}
                </p>
                <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-neutral-500">
                  {['Item1', 'Item2', 'Item3'].map((item) => (
                    <li key={item} className="flex items-start">
                      <span className="w-1 h-1 bg-black rounded-full mt-2 mr-3 flex-shrink-0" />
                      {t(`mentoring.${key}${item}`)}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 sm:py-24 md:py-32 border-t border-neutral-100">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-6 sm:mb-8">
              {t('mentoring.approachLabel')}
            </p>
            <blockquote className="text-xl sm:text-2xl md:text-3xl font-light tracking-tight text-black leading-relaxed mb-6 sm:mb-8">
              {t('mentoring.approachQuote')}
            </blockquote>
            <p className="text-sm font-medium text-neutral-500">â Yasmin Lemke</p>
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
                {t('mentoring.ctaLabel')}
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-black">
                {t('mentoring.ctaTitle')}
              </h2>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center h-12 px-6 sm:px-8 bg-black text-white text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase hover:bg-neutral-800 transition-all duration-300 flex-shrink-0 w-full sm:w-auto"
              data-testid="mentoring-cta"
            >
              {t('mentoring.ctaButton')}
              <ArrowRight className="ml-3 w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
