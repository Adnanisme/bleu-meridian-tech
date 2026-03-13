import { Linkedin, Instagram } from 'lucide-react';
import logo from '../../assets/logos/logo.png';

const footerLinks = {
  services: [
    'App Development',
    'Software Development',
    'Web Platforms',
    'Cloud & Infrastructure',
    'Tech Consulting',
  ],
  company: [
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Partners', href: '#partners' },
    { label: 'Contact', href: '#contact' },
  ],
};

export default function Footer() {
  const handleNav = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Bleu Meridian" className="h-8 w-auto" />
              <div>
                <span className="text-white font-semibold text-sm">Bleu Meridian</span>
                <span className="block text-brand-light/40 text-[10px] tracking-[0.2em] uppercase">Technologies</span>
              </div>
            </div>
            <p className="text-sm text-white/30 leading-relaxed max-w-xs">
              Built to be used. Built to last. We design and engineer software that real people rely on.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.linkedin.com/company/bleu-meridian-technologies/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-brand-mid text-white/40 hover:text-white flex items-center justify-center transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/bleumeridiantech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-brand-mid text-white/40 hover:text-white flex items-center justify-center transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={(e) => handleNav(e, '#services')}
                    className="text-sm text-white/30 hover:text-white transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNav(e, link.href)}
                    className="text-sm text-white/30 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-4">Get in touch</h4>
            <ul className="space-y-3 text-sm text-white/30">
              <li>
                <a href="mailto:info@bleumeridiantech.com" className="hover:text-white transition-colors">
                  info@bleumeridiantech.com
                </a>
              </li>
              <li>
                <a href="tel:+2348033636707" className="hover:text-white transition-colors">
                  +234 803 363 6707
                </a>
              </li>
              <li className="leading-relaxed">
                9, Aminu Saleh Crescent<br />
                Katampe Extension, Abuja<br />
                FCT, Nigeria
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20">
            &copy; {new Date().getFullYear()} Bleu Meridian Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
