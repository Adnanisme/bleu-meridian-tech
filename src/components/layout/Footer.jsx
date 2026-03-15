import { useLocation, useNavigate } from 'react-router-dom';
import { Mail, MapPin, Linkedin, Instagram } from 'lucide-react';
import logo from '../../assets/logos/logo.png';
import brandIcon1 from '../../assets/brand-icons/brand-icon-1.png';
import brandIcon2 from '../../assets/brand-icons/brand-icon-2.png';
import brandIcon3 from '../../assets/brand-icons/brand-icon-3.png';
import brandIcon4 from '../../assets/brand-icons/brand-icon-4.png';

const brandIcons = [brandIcon1, brandIcon2, brandIcon3, brandIcon4];

const services = [
  'App Development',
  'Software Development',
  'Web Platforms',
  'Cloud & Infrastructure',
  'Tech Consulting',
];

const pages = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Partners', href: '#partners' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const location = useLocation();
  const navigateTo = useNavigate();

  const handleNav = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (location.pathname !== '/') {
      navigateTo('/' + href);
    }
  };

  return (
    <footer className="bg-navy-950 relative overflow-hidden">
      {/* Subtle radial glow behind the contact card area */}
      <div className="absolute top-1/2 right-[15%] -translate-y-1/2 w-[500px] h-[500px] bg-brand-mid/[0.03] rounded-full blur-[150px] pointer-events-none" />



      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-20 lg:pt-28 pb-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 mb-20">

          {/* Left - Branding */}
          <div className="lg:col-span-4">
            <div className="mb-6">
              <img src={logo} alt="Bleu Meridian" loading="lazy" className="h-12 w-12 object-contain" />
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight leading-[1.1] mb-5">
              Bleu Meridian
              <br />
              <span className="text-white/60">Technologies</span>
            </h2>

            <p className="text-sm text-white/30 leading-relaxed max-w-sm mb-8">
              Built to be used. Built to last. We design and engineer software that real people rely on.
            </p>

            {/* Brand icons */}
            <div className="flex items-center gap-3">
              {brandIcons.map((icon, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center overflow-hidden hover:bg-white/[0.12] hover:border-white/[0.15] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-mid/10 transition-all duration-200 cursor-default"
                >
                  <img
                    src={icon}
                    alt=""
                    loading="lazy"
                    className="w-5 h-5 object-contain brightness-0 invert opacity-30 transition-opacity duration-200 group-hover:opacity-50"
                    style={{ filter: 'brightness(0) invert(1)' }}
                    aria-hidden="true"
                    onMouseOver={(e) => e.currentTarget.style.opacity = '0.6'}
                    onMouseOut={(e) => e.currentTarget.style.opacity = '0.3'}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Center - Services + Pages side by side */}
          <div className="lg:col-span-3 lg:pt-2 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-[11px] font-semibold text-white/50 uppercase tracking-[0.2em] mb-6">Services</h4>
              <ul className="space-y-4">
                {services.map((service) => (
                  <li key={service}>
                    <a
                      href="#services"
                      onClick={(e) => handleNav(e, '#services')}
                      className="text-sm text-white/30 hover:text-brand-light font-medium transition-colors duration-200"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] font-semibold text-white/50 uppercase tracking-[0.2em] mb-6">Pages</h4>
              <ul className="space-y-4">
                {pages.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNav(e, link.href)}
                      className="text-sm text-white/30 hover:text-brand-light font-medium transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right - Frosted glass contact card */}
          <div className="lg:col-span-5">
            <div
              className="rounded-[22px] p-8 lg:p-10"
              style={{
                background: 'rgba(255, 255, 255, 0.06)',
                backdropFilter: 'blur(18px)',
                WebkitBackdropFilter: 'blur(18px)',
                border: '1px solid rgba(255, 255, 255, 0.10)',
                boxShadow: '0 4px 40px -8px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.1)',
              }}
            >
              <h4 className="text-[11px] font-semibold text-white/50 uppercase tracking-[0.2em] mb-8">Get in touch</h4>

              <div className="space-y-6">
                {/* Email */}
                <a href="mailto:info@bleumeridiantech.com" className="group flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-brand-light/60 group-hover:bg-brand-mid group-hover:text-white group-hover:border-brand-mid flex-shrink-0 transition-all duration-200">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-white/30 font-medium uppercase tracking-wider mb-1">Email</div>
                    <div className="text-sm text-white/70 group-hover:text-white font-medium transition-colors duration-200">info@bleumeridiantech.com</div>
                  </div>
                </a>

                {/* Address */}
                <a
                  href="https://maps.google.com/?q=9+Aminu+Saleh+Crescent+Katampe+Extension+Abuja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-brand-light/60 group-hover:bg-brand-mid group-hover:text-white group-hover:border-brand-mid flex-shrink-0 transition-all duration-200">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-white/30 font-medium uppercase tracking-wider mb-1">Office</div>
                    <div className="text-sm text-white/70 group-hover:text-white font-medium leading-relaxed transition-colors duration-200">
                      9, Aminu Saleh Crescent<br />
                      Katampe Extension, Abuja<br />
                      FCT, Nigeria
                    </div>
                  </div>
                </a>
              </div>

              {/* Social inside card */}
              <div className="mt-8 pt-6 border-t border-white/[0.06] flex gap-3">
                <a
                  href="https://www.linkedin.com/company/bleu-meridian-technologies/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/[0.08] text-white/30 hover:text-white hover:bg-brand-mid hover:border-brand-mid hover:-translate-y-0.5 flex items-center justify-center transition-all duration-200"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://www.instagram.com/bleumeridiantech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/[0.08] text-white/30 hover:text-white hover:bg-brand-mid hover:border-brand-mid hover:-translate-y-0.5 flex items-center justify-center transition-all duration-200"
                >
                  <Instagram className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.05] pt-6">
          <p className="text-xs text-white/20">
            &copy; {new Date().getFullYear()} Bleu Meridian Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
