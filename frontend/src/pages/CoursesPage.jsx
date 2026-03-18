import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, MessageCircle, Award, Clock, BarChart2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};
const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const courseKeys = ['course1', 'course2', 'course3', 'course4', 'course5'];

const levelColorMap = {
  Beginner: 'text-emerald-600 bg-emerald-50',
  Iniciante: 'text-emerald-600 bg-emerald-50',
  Principiante: 'text-emerald-600 bg-emerald-50',
  Intermediate: 'text-blue-600 bg-blue-50',
  Intermediário: 'text-blue-600 bg-blue-50',
  Intermedio: 'text-blue-600 bg-blue-50',
  Advanced: 'text-purple-600 bg-purple-50',
  Avançado: 'text-purple-600 bg-purple-50',
  Avanzado: 'text-purple-600 bg-purple-50',
};

export default function CoursesPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-white min-h-screen pt-16 sm:pt-24">

      {/* Hero */}
      <section className="py-16 sm:py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4 sm:mb-8">
              {t('courses.label')}
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tighter leading-[0.95] text-black mb-3">
              {t('courses.headline')}
            </h1>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tighter leading-[0.95] text-neutral-300 mb-8 sm:mb-12">
              {t('courses.headline2')}
            </h2>
            <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed text-neutral-600 max-w-2xl">
              {t('courses.subheadline')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t border-neutral-100 py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl">
          <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-10 sm:mb-14">
            {t('courses.formatTitle')}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-4"
            >
              <Play className="w-6 h-6 text-black" strokeWidth={1.5} />
              <p className="text-sm sm:text-base font-light text-neutral-700 leading-relaxed">
                {t('courses.formatVideo')}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col gap-4"
            >
              <MessageCircle className="w-6 h-6 text-black" strokeWidth={1.5} />
              <p className="text-sm sm:text-base font-light text-neutral-700 leading-relaxed">
                {t('courses.formatQa')}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col gap-4"
            >
              <Award className="w-6 h-6 text-black" strokeWidth={1.5} />
              <p className="text-sm sm:text-base font-light text-neutral-700 leading-relaxed">
                {t('courses.formatCert')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="border-t border-neutral-100 py-16 sm:py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-100"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {courseKeys.map((key) => {
              const level = t(`courses.${key}Level`);
              const levelColor = levelColorMap[level] || 'text-neutral-600 bg-neutral-50';
              return (
                <motion.div
                  key={key}
                  variants={staggerItem}
                  className="bg-white p-8 sm:p-10 flex flex-col gap-6"
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-semibold tracking-[0.15em] uppercase px-3 py-1 ${levelColor}`}>
                      {level}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-neutral-400">
                      <Clock className="w-3.5 h-3.5" />
                      {t(`courses.${key}Duration`)}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-black mb-3">
                      {t(`courses.${key}Title`)}
                    </h3>
                    <p className="text-sm font-light leading-relaxed text-neutral-600">
                      {t(`courses.${key}Desc`)}
                    </p>
                  </div>

                  <div className="mt-auto pt-6 border-t border-neutral-50 flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-xs text-neutral-400">
                      <Play className="w-3 h-3" />
                      <span>{t('courses.videoLessons')}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-neutral-400">
                      <MessageCircle className="w-3 h-3" />
                      <span>{t('courses.qaAccess')}</span>
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 text-[10px] sm:text-[11px] font-medium tracking-[0.2em] uppercase text-black border border-black px-5 py-3 hover:bg-black hover:text-white transition-all duration-300"
                  >
                    {t('courses.enroll')}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 1:1 Sessions Section */}
      <section className="border-t border-neutral-100 py-16 sm:py-24 md:py-32 bg-neutral-950">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center"
          >
            <div>
              <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-neutral-500 mb-6">
                Premium
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white mb-6">
                {t('courses.oneOnOneTitle')}
              </h2>
              <p className="text-base sm:text-lg font-light text-neutral-400 leading-relaxed mb-10">
                {t('courses.oneOnOneDesc')}
              </p>
              <ul className="flex flex-col gap-4 mb-10">
                {[
                  t('courses.oneOnOneItem1'),
                  t('courses.oneOnOneItem2'),
                  t('courses.oneOnOneItem3'),
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1 h-1 bg-white rounded-full mt-2.5 flex-shrink-0" />
                    <span className="text-sm font-light text-neutral-300">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-[10px] sm:text-[11px] font-medium tracking-[0.2em] uppercase hover:bg-neutral-100 transition-colors"
              >
                {t('courses.oneOnOneButton')}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="hidden lg:block">
              <div className="border border-neutral-800 p-10 flex flex-col gap-6">
                <BarChart2 className="w-8 h-8 text-neutral-600" strokeWidth={1} />
                <blockquote className="text-xl font-light text-neutral-300 leading-relaxed italic">
                  {t('mentoring.approachQuote')}
                </blockquote>
                <p className="text-sm font-medium text-neutral-500">— Yasmin Lemke</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-neutral-800 bg-neutral-950 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl">
          <motion.div
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-white mb-3">
                {t('courses.ctaTitle')}
              </h2>
              <p className="text-neutral-400 font-light">
                {t('courses.ctaDesc')}
              </p>
            </div>
            <Link
              to="/contact"
              className="shrink-0 inline-flex items-center justify-center gap-3 bg-white text-black px-8 py-4 text-[10px] sm:text-[11px] font-medium tracking-[0.2em] uppercase hover:bg-neutral-100 transition-colors w-full sm:w-auto"
            >
              {t('courses.ctaButton')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
