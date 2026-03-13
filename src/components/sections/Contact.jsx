import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import { Mail, Phone, MapPin, ArrowRight, Check, Linkedin, Instagram } from 'lucide-react';

export default function Contact() {
  const [state, handleSubmit] = useForm('meorzrjo');

  return (
    <section id="contact" className="py-24 lg:py-32 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-brand-mid font-semibold text-sm tracking-wide uppercase mb-3">Contact</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-800 tracking-tight mb-4">
              Let's build something{' '}
              <span className="text-slate-400">together.</span>
            </h2>
            <p className="text-slate-500 leading-relaxed mb-10">
              Have a project in mind? Share a few details and we'll get back to you within 24 hours with a tailored proposal.
            </p>

            {/* Contact details */}
            <div className="space-y-5">
              <a href="mailto:info@bleumeridiantech.com" className="group flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-navy-800/5 flex items-center justify-center text-brand-mid group-hover:bg-brand-mid group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium uppercase tracking-wide">Email</div>
                  <div className="text-navy-800 font-medium">info@bleumeridiantech.com</div>
                </div>
              </a>

              <a href="tel:+2348033636707" className="group flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-navy-800/5 flex items-center justify-center text-brand-mid group-hover:bg-brand-mid group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium uppercase tracking-wide">Phone</div>
                  <div className="text-navy-800 font-medium">+234 803 363 6707</div>
                </div>
              </a>

              <div className="group flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-navy-800/5 flex items-center justify-center text-brand-mid flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium uppercase tracking-wide">Office</div>
                  <div className="text-navy-800 font-medium">
                    9, Aminu Saleh Crescent<br />
                    Katampe Extension, Abuja<br />
                    FCT, Nigeria
                  </div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="mt-10 flex gap-3">
              <a
                href="https://www.linkedin.com/company/bleu-meridian-technologies/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-navy-800/5 hover:bg-brand-mid text-slate-500 hover:text-white flex items-center justify-center transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/bleumeridiantech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-navy-800/5 hover:bg-brand-mid text-slate-500 hover:text-white flex items-center justify-center transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 lg:p-10">
              {state.succeeded ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-7 h-7 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-800 mb-2">Message sent</h3>
                  <p className="text-slate-500">We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-slate-500 mb-1.5 uppercase tracking-wide">Name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-mid focus:ring-1 focus:ring-brand-mid/20 outline-none transition-all text-sm text-navy-800 placeholder-slate-300"
                        placeholder="Your full name"
                      />
                      <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-xs mt-1" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-slate-500 mb-1.5 uppercase tracking-wide">Email</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-mid focus:ring-1 focus:ring-brand-mid/20 outline-none transition-all text-sm text-navy-800 placeholder-slate-300"
                        placeholder="you@company.com"
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-xs font-medium text-slate-500 mb-1.5 uppercase tracking-wide">Company</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-mid focus:ring-1 focus:ring-brand-mid/20 outline-none transition-all text-sm text-navy-800 placeholder-slate-300"
                      placeholder="Your company name"
                    />
                    <ValidationError prefix="Company" field="company" errors={state.errors} className="text-red-500 text-xs mt-1" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-slate-500 mb-1.5 uppercase tracking-wide">Project details</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-mid focus:ring-1 focus:ring-brand-mid/20 outline-none transition-all text-sm text-navy-800 placeholder-slate-300 resize-none"
                      placeholder="Tell us about your project..."
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs mt-1" />
                  </div>

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="group w-full inline-flex items-center justify-center gap-2 bg-navy-800 hover:bg-navy-700 text-white font-medium py-3.5 rounded-lg transition-all duration-300 disabled:opacity-50"
                  >
                    {state.submitting ? 'Sending...' : 'Send message'}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
