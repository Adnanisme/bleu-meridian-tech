import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import logo from '../../assets/logos/logo.png';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Partners', href: '#partners' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const location = useLocation();
  const navigateTo = useNavigate();

  const handleNav = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    setActiveLink(href);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (location.pathname !== '/') {
      navigateTo('/' + href);
    }
  };

  return (
    <>
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-6xl">
        <nav
          className={`flex items-center justify-between px-3 sm:px-4 py-2.5 rounded-2xl transition-all duration-500 ${
            scrolled
              ? 'bg-white/70 backdrop-blur-2xl shadow-lg shadow-black/[0.08] border border-white/60 ring-1 ring-black/[0.04]'
              : 'bg-navy-950/40 backdrop-blur-xl shadow-lg shadow-black/10 border border-white/[0.08] ring-1 ring-white/[0.05]'
          }`}
        >
          {/* Left - Logo + Name */}
          <a
            href="#hero"
            onClick={(e) => handleNav(e, '#hero')}
            className="flex items-center gap-2.5 flex-shrink-0 group"
          >
            <div className="flex items-center justify-center flex-shrink-0">
              <img src={logo} alt="Bleu Meridian" className="h-9 w-9 object-contain" />
            </div>
            <div>
              <span className={`font-bold text-base tracking-wide leading-none transition-colors duration-500 ${
                scrolled ? 'text-navy-800' : 'text-white'
              }`}>Bleu Meridian</span>
              <span className={`block text-[10px] tracking-[0.2em] uppercase font-medium leading-none mt-1 transition-colors duration-500 ${
                scrolled ? 'text-slate-400' : 'text-brand-light/40'
              }`}>Technologies</span>
            </div>
          </a>

          {/* Center - Nav links in pill */}
          <div className={`hidden lg:flex items-center gap-0.5 rounded-full px-1 py-1 transition-colors duration-500 ${
            scrolled ? 'bg-slate-100/80' : 'bg-white/[0.04]'
          }`}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${
                  activeLink === link.href
                    ? scrolled
                      ? 'bg-navy-800 text-white'
                      : 'bg-white text-navy-950'
                    : scrolled
                      ? 'text-slate-500 hover:text-navy-800 hover:bg-slate-200/60'
                      : 'text-white/60 hover:text-white hover:bg-white/[0.08]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right - CTA + Mobile toggle */}
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              onClick={(e) => handleNav(e, '#contact')}
              className={`hidden lg:inline-flex items-center text-sm font-medium px-5 py-2 rounded-full transition-all duration-300 ${
                scrolled
                  ? 'bg-brand-mid hover:bg-brand-mid/90 text-white'
                  : 'bg-brand-mid hover:bg-brand-mid/90 text-white'
              }`}
            >
              Get in touch
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 ${
                scrolled
                  ? 'text-navy-800 hover:bg-slate-100'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Full-screen mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-navy-950/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Menu panel */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0, 1] }}
              className="fixed top-20 left-4 right-4 z-50 lg:hidden"
            >
              <div className={`rounded-2xl border overflow-hidden ${
                scrolled
                  ? 'bg-white/95 backdrop-blur-2xl border-slate-200/60 shadow-2xl shadow-black/10'
                  : 'bg-navy-950/95 backdrop-blur-2xl border-white/[0.08] shadow-2xl shadow-black/30'
              }`}>
                {/* Nav links */}
                <div className="p-3">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleNav(e, link.href)}
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 + i * 0.04, duration: 0.3 }}
                      className={`flex items-center justify-between px-5 py-4 rounded-xl text-[15px] font-medium transition-all duration-200 ${
                        scrolled
                          ? activeLink === link.href
                            ? 'bg-slate-100 text-navy-800'
                            : 'text-slate-600 hover:text-navy-800 hover:bg-slate-50'
                          : activeLink === link.href
                            ? 'bg-white/[0.08] text-white'
                            : 'text-white/60 hover:text-white hover:bg-white/[0.04]'
                      }`}
                    >
                      {link.label}
                      <ArrowRight className={`w-4 h-4 ${scrolled ? 'text-slate-300' : 'text-white/20'}`} />
                    </motion.a>
                  ))}
                </div>

                {/* Divider */}
                <div className={`mx-5 h-px ${scrolled ? 'bg-slate-100' : 'bg-white/[0.06]'}`} />

                {/* CTA */}
                <div className="p-3">
                  <motion.a
                    href="#contact"
                    onClick={(e) => handleNav(e, '#contact')}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                    className="flex items-center justify-center gap-2 bg-brand-mid hover:bg-brand-mid/90 text-white text-[15px] font-medium py-4 rounded-xl transition-all duration-300"
                  >
                    Get in touch
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
