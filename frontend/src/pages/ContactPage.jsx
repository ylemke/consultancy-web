import { useState } from 'react';
import { motion } from 'framer-motion';
import { InlineWidget } from 'react-calendly';
import { ArrowRight, CheckCircle, Loader2, Linkedin } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { useLanguage } from '../context/LanguageContext';

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};
const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
    interest: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSelectChange = (value) => {
    setFormData((prev) => ({ ...prev, interest: value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!formData.name || !formData.company || !formData.email || !formData.message || !formData.interest) {
      setError(t('contact.error'));
      return;
    }
    setIsSubmitting(true);
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...formData }),
      });
      setIsSubmitted(true);
      setFormData({ name: '', company: '', email: '', message: '', interest: '' });
    } catch (err) {
      setError(t('contact.errorGeneric'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white min-h-screen pt-16 sm:pt-24" data-testid="contact-page">
      <section className="py-16 sm:py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl">
          <motion.div variants={staggerContainer} initial="hidden" animate="show">
            <motion.p
              className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4 sm:mb-8"
              variants={staggerItem}
            >
              {t('contact.label')}
            </motion.p>
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tighter leading-[0.95] text-black mb-6 sm:mb-8"
              variants={staggerItem}
              data-testid="contact-headline"
            >
              {t('contact.headline')}<br />{t('contact.headline2')}
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg md:text-xl font-light leading-relaxed text-neutral-600 max-w-2xl"
              variants={staggerItem}
            >
              {t('contact.subheadline')}
            </motion.p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl">
        <div className="h-px bg-neutral-100" />
      </div>

      <section className="py-16 sm:py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-8 sm:mb-12">
                {t('contact.sendMessage')}
              </p>

              {isSubmitted ? (
                <motion.div
                  className="flex flex-col items-start gap-4 sm:gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 text-black" />
                  <div>
                    <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-black mb-2">
                      {t('contact.messageSent')}
                    </h3>
                    <p className="text-sm sm:text-base text-neutral-600">
                      {t('contact.messageSentDesc')}
                    </p>
                  </div>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs sm:text-sm font-medium tracking-[0.15em] uppercase text-black hover:text-neutral-500 transition-colors"
                    data-testid="send-another-btn"
                  >
                    {t('contact.sendAnother')}
                  </button>
                </motion.div>
              ) : (
                <form
                  name="contact"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-6 sm:space-y-8"
                  data-testid="contact-form"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <div hidden>
                    <input name="bot-field" />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={t('contact.namePlaceholder')}
                      className="w-full bg-transparent border-b border-neutral-200 py-3 sm:py-4 text-sm sm:text-base text-black placeholder:text-neutral-400 focus:outline-none focus:border-black transition-colors"
                      data-testid="contact-name-input"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder={t('contact.companyPlaceholder')}
                      className="w-full bg-transparent border-b border-neutral-200 py-3 sm:py-4 text-sm sm:text-base text-black placeholder:text-neutral-400 focus:outline-none focus:border-black transition-colors"
                      data-testid="contact-company-input"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={t('contact.emailPlaceholder')}
                      className="w-full bg-transparent border-b border-neutral-200 py-3 sm:py-4 text-sm sm:text-base text-black placeholder:text-neutral-400 focus:outline-none focus:border-black transition-colors"
                      data-testid="contact-email-input"
                    />
                  </div>
                  <div>
                    <Select value={formData.interest} onValueChange={handleSelectChange}>
                      <SelectTrigger
                        className="w-full bg-transparent border-0 border-b border-neutral-200 rounded-none py-3 sm:py-4 h-auto text-sm sm:text-base focus:ring-0 focus:border-black transition-colors"
                        data-testid="contact-interest-select"
                      >
                        <SelectValue placeholder={t('contact.interestPlaceholder')} className="text-neutral-400" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="AI Courses" data-testid="option-courses">{t('contact.interestOption5')}</SelectItem>
                        <SelectItem value="AI GRC Career Transition" data-testid="option-grc">{t('contact.interestOption1')}</SelectItem>
                        <SelectItem value="Cybersecurity Career Advisory" data-testid="option-cyber">{t('contact.interestOption2')}</SelectItem>
                        <SelectItem value="Executive Interview Coaching" data-testid="option-interview">{t('contact.interestOption3')}</SelectItem>
                        <SelectItem value="Big Tech Career Entry" data-testid="option-bigtech">{t('contact.interestOption4')}</SelectItem>
                        <SelectItem value="1:1 Private Sessions" data-testid="option-private">{t('contact.interestOption6')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder={t('contact.messagePlaceholder')}
                      rows={4}
                      className="w-full bg-transparent border-b border-neutral-200 py-3 sm:py-4 text-sm sm:text-base text-black placeholder:text-neutral-400 focus:outline-none focus:border-black transition-colors resize-none"
                      data-testid="contact-message-input"
                    />
                  </div>
                  {error && (
                    <p className="text-xs sm:text-sm text-red-500" data-testid="contact-error">
                      {error}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center h-12 px-6 sm:px-8 bg-black text-white text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase hover:bg-neutral-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
                    data-testid="contact-submit-btn"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-3 animate-spin" />
                        {t('contact.sending')}
                      </>
                    ) : (
                      <>
                        {t('contact.submitButton')}
                        <ArrowRight className="ml-3 w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-8 sm:mb-12">
                {t('contact.scheduleCall')}
              </p>

              <div className="bg-neutral-50 mb-8" data-testid="calendly-embed">
                <InlineWidget
                  url="https://calendly.com/yasmin-lemke"
                  styles={{ height: '450px', width: '100%' }}
                  pageSettings={{
                    backgroundColor: 'fafafa',
                    hideEventTypeDetails: false,
                    hideLandingPageDetails: false,
                    primaryColor: '000000',
                    textColor: '000000',
                  }}
                />
              </div>

              <div className="border border-neutral-200 bg-white p-6 sm:p-8" data-testid="linkedin-card">
                <div className="flex items-center gap-3 mb-4">
                  <Linkedin className="w-5 h-5 text-neutral-400" />
                  <p className="text-sm font-medium text-neutral-600">
                    {t('contact.bookingDesc')}
                  </p>
                </div>
                <a
                  href="https://www.linkedin.com/in/yasmin-lemke/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-10 px-6 border border-black text-black text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-all duration-300"
                  data-testid="booking-linkedin-btn"
                >
                  {t('contact.bookingCta')}
                  <ArrowRight className="ml-2 w-3 h-3" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 md:py-32 border-t border-neutral-100">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div variants={staggerItem}>
              <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-3 sm:mb-4">
                {t('contact.locationLabel')}
              </p>
              <p className="text-sm sm:text-base text-neutral-600">{t('contact.locationDesc')}</p>
            </motion.div>
            <motion.div variants={staggerItem}>
              <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-3 sm:mb-4">
                {t('contact.responseTime')}
              </p>
              <p className="text-sm sm:text-base text-neutral-600">{t('contact.responseTimeDesc')}</p>
            </motion.div>
            <motion.div variants={staggerItem}>
              <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-3 sm:mb-4">
                {t('contact.availability')}
              </p>
              <p className="text-sm sm:text-base text-neutral-600">{t('contact.availabilityDesc')}</p>
            </motion.div>
            <motion.div variants={staggerItem}>
              <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-3 sm:mb-4">
                {t('contact.languagesLabel')}
              </p>
              <p className="text-sm sm:text-base text-neutral-600">{t('contact.languagesDesc')}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
