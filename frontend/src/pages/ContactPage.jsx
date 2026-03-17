import { useState } from 'react';
import { motion } from 'framer-motion';
import { InlineWidget } from 'react-calendly';
import axios from 'axios';
import { ArrowRight, CheckCircle, Loader2 } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
    interest: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSelectChange = (value) => {
    setFormData(prev => ({ ...prev, interest: value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!formData.name || !formData.company || !formData.email || !formData.message || !formData.interest) {
      setError('Please fill in all fields.');
      return;
    }

    setIsSubmitting(true);

    try {
      await axios.post(`${API}/contact`, formData);
      setIsSubmitted(true);
      setFormData({
        name: '',
        company: '',
        email: '',
        message: '',
        interest: ''
      });
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white min-h-screen pt-24" data-testid="contact-page">
      {/* Hero Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <motion.p 
              className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-8"
              variants={staggerItem}
            >
              Contact
            </motion.p>
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter leading-none text-black mb-8"
              variants={staggerItem}
              data-testid="contact-headline"
            >
              Let's Build<br />Your Strategy.
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl font-light leading-relaxed text-neutral-600 max-w-2xl"
              variants={staggerItem}
            >
              Schedule a complimentary, no-obligation 30-minute consultation. Let's discuss how we can accelerate your enterprise or career.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="h-px bg-neutral-100" />
      </div>

      {/* Main Content */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Contact Form */}
            <motion.div
              {...fadeInUp}
            >
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-12">
                Send a Message
              </p>

              {isSubmitted ? (
                <motion.div 
                  className="flex flex-col items-start gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <CheckCircle className="w-12 h-12 text-black" />
                  <div>
                    <h3 className="text-2xl font-medium tracking-tight text-black mb-2">
                      Message Sent
                    </h3>
                    <p className="text-base text-neutral-600">
                      Thank you for reaching out. I'll respond within 24-48 hours.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-sm font-medium tracking-[0.15em] uppercase text-black hover:text-neutral-500 transition-colors"
                    data-testid="send-another-btn"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8" data-testid="contact-form">
                  {/* Name */}
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Name"
                      className="w-full bg-transparent border-b border-neutral-200 py-4 text-base text-black placeholder:text-neutral-400 focus:outline-none focus:border-black transition-colors"
                      data-testid="contact-name-input"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Company"
                      className="w-full bg-transparent border-b border-neutral-200 py-4 text-base text-black placeholder:text-neutral-400 focus:outline-none focus:border-black transition-colors"
                      data-testid="contact-company-input"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                      className="w-full bg-transparent border-b border-neutral-200 py-4 text-base text-black placeholder:text-neutral-400 focus:outline-none focus:border-black transition-colors"
                      data-testid="contact-email-input"
                    />
                  </div>

                  {/* Interest Dropdown */}
                  <div>
                    <Select value={formData.interest} onValueChange={handleSelectChange}>
                      <SelectTrigger 
                        className="w-full bg-transparent border-0 border-b border-neutral-200 rounded-none py-4 h-auto text-base focus:ring-0 focus:border-black transition-colors"
                        data-testid="contact-interest-select"
                      >
                        <SelectValue placeholder="I am interested in:" className="text-neutral-400" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Corporate Advisory" data-testid="option-corporate">Corporate Advisory</SelectItem>
                        <SelectItem value="Career Mentorship" data-testid="option-career">Career Mentorship</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Message */}
                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Message"
                      rows={4}
                      className="w-full bg-transparent border-b border-neutral-200 py-4 text-base text-black placeholder:text-neutral-400 focus:outline-none focus:border-black transition-colors resize-none"
                      data-testid="contact-message-input"
                    />
                  </div>

                  {/* Error */}
                  {error && (
                    <p className="text-sm text-red-500" data-testid="contact-error">
                      {error}
                    </p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center h-12 px-8 bg-black text-white text-xs font-medium tracking-[0.2em] uppercase hover:bg-neutral-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    data-testid="contact-submit-btn"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-3 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight className="ml-3 w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Calendly Embed */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-12">
                Schedule a Call
              </p>
              <div className="bg-neutral-50 min-h-[650px]" data-testid="calendly-embed">
                <InlineWidget 
                  url="https://calendly.com/yasmin-lemke"
                  styles={{
                    height: '650px',
                    width: '100%'
                  }}
                  pageSettings={{
                    backgroundColor: 'ffffff',
                    hideEventTypeDetails: false,
                    hideLandingPageDetails: false,
                    primaryColor: '000000',
                    textColor: '000000'
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-24 md:py-32 border-t border-neutral-100">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div variants={staggerItem}>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4">
                Response Time
              </p>
              <p className="text-base text-neutral-600">
                I respond to all inquiries within 24-48 hours.
              </p>
            </motion.div>
            <motion.div variants={staggerItem}>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4">
                Availability
              </p>
              <p className="text-base text-neutral-600">
                Currently accepting new clients for Q1 2026.
              </p>
            </motion.div>
            <motion.div variants={staggerItem}>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4">
                Languages
              </p>
              <p className="text-base text-neutral-600">
                English, Portuguese, Spanish
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
