import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import { ArrowRight, Check, Linkedin, Instagram } from 'lucide-react';
import emailIcon from '../../assets/contact-icons/email.svg';
import addressIcon from '../../assets/contact-icons/address.svg';

function ContactLines() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1200 800"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Upper flowing lines */}
      <path
        d="M-80 100 C150 80, 320 200, 480 160 S700 60, 860 140 S1050 260, 1200 170 S1300 110, 1400 190"
        stroke="rgba(26, 109, 181, 0.10)"
        strokeWidth="1.5"
      />
      <path
        d="M-40 220 C130 195, 290 310, 460 270 S680 160, 840 250 S1020 370, 1180 280 S1290 220, 1400 300"
        stroke="rgba(26, 109, 181, 0.07)"
        strokeWidth="1.2"
      />
      <path
        d="M-60 340 C170 320, 340 410, 510 380 S720 280, 880 360 S1060 450, 1210 370 S1310 310, 1420 390"
        stroke="rgba(26, 109, 181, 0.05)"
        strokeWidth="1"
      />

      {/* Mid-section lines that pass behind form */}
      <path
        d="M-50 440 C160 420, 300 520, 490 480 S710 380, 870 460 S1050 560, 1200 470 S1310 420, 1420 500"
        stroke="rgba(26, 109, 181, 0.14)"
        strokeWidth="1.8"
      />
      <path
        d="M-30 530 C180 510, 360 600, 530 570 S730 470, 900 550 S1080 640, 1230 560 S1330 510, 1450 580"
        stroke="rgba(26, 109, 181, 0.10)"
        strokeWidth="1.5"
      />
      <path
        d="M-70 620 C140 600, 310 690, 500 660 S720 560, 880 640 S1060 730, 1210 650 S1310 600, 1430 670"
        stroke="rgba(26, 109, 181, 0.07)"
        strokeWidth="1.2"
      />

      {/* Lower lines */}
      <path
        d="M-40 710 C190 690, 370 760, 540 740 S740 660, 910 730 S1090 810, 1240 740 S1340 690, 1460 760"
        stroke="rgba(26, 109, 181, 0.05)"
        strokeWidth="1"
      />
    </svg>
  );
}

const inputClasses = 'w-full px-4 py-3.5 rounded-xl bg-slate-50/80 border border-slate-200/80 focus:border-brand-mid focus:ring-2 focus:ring-brand-mid/10 outline-none transition-all duration-300 text-sm text-navy-800 placeholder-slate-350';

export default function Contact() {
  const [state, handleSubmit] = useForm('meorzrjo');

  return (
    <section id="contact" className="py-28 lg:py-44 relative overflow-hidden" style={{ backgroundColor: '#f8f7f4' }}>
      {/* Abstract meridian lines */}
      <ContactLines />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <p className="text-brand-mid font-semibold text-xs tracking-[0.3em] uppercase mb-8">Contact us</p>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] mb-6">
              <span className="text-navy-800">Let's build something</span>
              <br />
              <span className="text-slate-300">together.</span>
            </h2>

            <p className="text-slate-500 leading-relaxed text-base lg:text-lg mb-12 max-w-md">
              Have a project in mind? Share a few details and we'll get back to you within 24 hours.
            </p>

            {/* Contact details */}
            <div className="space-y-5">
              <a href="mailto:info@bleumeridiantech.com" className="group flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-sky-50 border border-sky-100 shadow-sm flex items-center justify-center group-hover:bg-brand-mid group-hover:border-brand-mid transition-all duration-300 flex-shrink-0">
                  <img src={emailIcon} alt="" className="w-5 h-5 transition-all duration-300" style={{ filter: 'invert(35%) sepia(85%) saturate(1000%) hue-rotate(185deg) brightness(95%) contrast(95%)' }} onMouseOver={(e) => e.currentTarget.style.filter = 'brightness(0) invert(1)'} onMouseOut={(e) => e.currentTarget.style.filter = 'invert(35%) sepia(85%) saturate(1000%) hue-rotate(185deg) brightness(95%) contrast(95%)'} />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 font-medium uppercase tracking-wider mb-0.5">Email</div>
                  <div className="text-navy-800 font-medium text-sm">info@bleumeridiantech.com</div>
                </div>
              </a>

              <a href="https://maps.google.com/?q=9+Aminu+Saleh+Crescent+Katampe+Extension+Abuja" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-100 shadow-sm flex items-center justify-center group-hover:bg-brand-mid group-hover:border-brand-mid transition-all duration-300 flex-shrink-0">
                  <img src={addressIcon} alt="" className="w-5 h-5 transition-all duration-300" style={{ filter: 'invert(42%) sepia(74%) saturate(600%) hue-rotate(110deg) brightness(95%) contrast(90%)' }} onMouseOver={(e) => e.currentTarget.style.filter = 'brightness(0) invert(1)'} onMouseOut={(e) => e.currentTarget.style.filter = 'invert(42%) sepia(74%) saturate(600%) hue-rotate(110deg) brightness(95%) contrast(90%)'} />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 font-medium uppercase tracking-wider mb-0.5">Office</div>
                  <div className="text-navy-800 font-medium text-sm leading-relaxed">
                    9, Aminu Saleh Crescent<br />
                    Katampe Extension, Abuja<br />
                    FCT, Nigeria
                  </div>
                </div>
              </a>
            </div>

            {/* Social */}
            <div className="mt-10 flex gap-3">
              <a
                href="https://www.linkedin.com/company/bleu-meridian-technologies/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/60 backdrop-blur-sm border border-white/50 shadow-sm text-slate-400 hover:bg-brand-mid hover:text-white hover:border-brand-mid hover:-translate-y-0.5 hover:shadow-md flex items-center justify-center transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/bleumeridiantech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/60 backdrop-blur-sm border border-white/50 shadow-sm text-slate-400 hover:bg-brand-mid hover:text-white hover:border-brand-mid hover:-translate-y-0.5 hover:shadow-md flex items-center justify-center transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right - Form card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="bg-white/25 backdrop-blur-[3px] rounded-3xl border border-white/40 shadow-[0_4px_30px_-4px_rgba(0,0,0,0.06),0_1px_4px_-1px_rgba(0,0,0,0.03)] p-8 lg:p-10">
              {state.succeeded ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Check className="w-7 h-7 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-800 mb-2">Message sent</h3>
                  <p className="text-slate-500">We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-[11px] font-medium text-slate-400 mb-2 uppercase tracking-wider">Name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className={inputClasses}
                        placeholder="Your full name"
                      />
                      <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-xs mt-1" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-[11px] font-medium text-slate-400 mb-2 uppercase tracking-wider">Email</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className={inputClasses}
                        placeholder="you@company.com"
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-[11px] font-medium text-slate-400 mb-2 uppercase tracking-wider">Company</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      className={inputClasses}
                      placeholder="Your company name"
                    />
                    <ValidationError prefix="Company" field="company" errors={state.errors} className="text-red-500 text-xs mt-1" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[11px] font-medium text-slate-400 mb-2 uppercase tracking-wider">Project details</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className={`${inputClasses} resize-none`}
                      placeholder="Tell us about your project..."
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs mt-1" />
                  </div>

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="group w-full inline-flex items-center justify-center gap-2 bg-navy-800 hover:bg-navy-700 text-white font-medium py-4 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50"
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
