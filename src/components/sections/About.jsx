import { motion } from 'framer-motion';

import purposeIcon from '../../assets/about-us-icons/purpose.svg';
import ownershipIcon from '../../assets/about-us-icons/ownership.svg';
import shipFastIcon from '../../assets/about-us-icons/shift-fast.svg';
import secureIcon from '../../assets/about-us-icons/secure.svg';

const values = [
  { icon: purposeIcon, title: 'Purpose-built', text: 'Every system starts with a real problem.', iconBg: 'bg-rose-50', iconBorder: 'border-rose-200/50' },
  { icon: ownershipIcon, title: 'Full ownership', text: 'One team, end-to-end. No handoffs.', iconBg: 'bg-teal-50', iconBorder: 'border-teal-200/50' },
  { icon: shipFastIcon, title: 'Ship fast, ship right', text: 'Agile delivery with weekly progress.', iconBg: 'bg-orange-50', iconBorder: 'border-orange-200/50' },
  { icon: secureIcon, title: 'Secure by default', text: 'Security baked in from day one.', iconBg: 'bg-slate-100', iconBorder: 'border-slate-200/50' },
];

function MeridianLines() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1200 900"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Upper flowing lines */}
      <path
        d="M-80 120 C120 100, 280 240, 420 190 S620 80, 780 170 S980 300, 1120 200 S1250 140, 1350 220"
        stroke="rgba(26, 109, 181, 0.12)"
        strokeWidth="1.8"
      />
      <path
        d="M-50 260 C100 230, 320 360, 480 310 S680 180, 830 280 S1020 400, 1160 300 S1280 240, 1350 340"
        stroke="rgba(26, 109, 181, 0.09)"
        strokeWidth="1.5"
      />
      <path
        d="M-30 380 C180 360, 300 440, 500 410 S700 340, 860 400 S1040 480, 1180 390 S1270 350, 1350 430"
        stroke="rgba(26, 109, 181, 0.07)"
        strokeWidth="1.2"
      />

      {/* Lines that run through the card area - prominent for glass reflection */}
      <path
        d="M-60 530 C140 510, 260 600, 440 560 S660 480, 820 550 S1000 640, 1150 560 S1270 510, 1350 580"
        stroke="rgba(26, 109, 181, 0.18)"
        strokeWidth="2"
      />
      <path
        d="M-40 620 C170 600, 350 690, 520 650 S720 570, 880 640 S1060 730, 1200 640 S1290 590, 1380 660"
        stroke="rgba(26, 109, 181, 0.14)"
        strokeWidth="1.8"
      />
      <path
        d="M-70 700 C130 680, 280 760, 460 730 S680 650, 840 720 S1030 800, 1170 720 S1280 670, 1380 740"
        stroke="rgba(26, 109, 181, 0.11)"
        strokeWidth="1.5"
      />
      <path
        d="M-20 780 C200 760, 380 830, 540 800 S740 720, 900 790 S1080 860, 1220 790 S1300 740, 1400 810"
        stroke="rgba(26, 109, 181, 0.08)"
        strokeWidth="1.2"
      />
    </svg>
  );
}

export default function About() {
  return (
    <section id="about" className="py-28 lg:py-44 relative overflow-hidden" style={{ backgroundColor: '#f8f7f4' }}>
      {/* Abstract meridian line art - runs through entire section including behind cards */}
      <MeridianLines />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-brand-mid font-semibold text-xs tracking-[0.3em] uppercase mb-12 lg:mb-16"
        >
          About us
        </motion.p>

        {/* Two-column editorial layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-24 lg:mb-32">
          {/* Left - Large editorial heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05]">
              <span className="text-navy-800">We build </span>
              <br className="hidden sm:block" />
              <span className="text-brand-mid">software </span>
              <span className="text-navy-800">that actually works</span>
              <br />
              <span className="text-slate-300 italic font-normal">for the people who use it.</span>
            </h2>
          </motion.div>

          {/* Right - Body text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col justify-end"
          >
            <div className="space-y-5 text-slate-500 text-[15px] sm:text-base leading-[1.8]">
              <p>
                Bleu Meridian Technologies is a full-stack software development company that designs and builds digital products organizations and everyday users rely on.
              </p>
              <p>
                We work across the entire product lifecycle, from strategy and design to development, deployment, and long-term support. Our work powers systems used by government institutions, energy companies, agricultural businesses, and ambitious startups.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Value cards - frosted glass with lines visible behind */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.25 + i * 0.08 }}
              className="relative group"
            >
              <div className="h-full p-7 sm:p-8 rounded-3xl bg-white/25 backdrop-blur-[3px] border border-white/40 shadow-[0_2px_24px_-4px_rgba(0,0,0,0.05),0_1px_4px_-1px_rgba(0,0,0,0.03)] transition-all duration-500 hover:shadow-[0_8px_40px_-4px_rgba(0,0,0,0.08)] hover:bg-white/35">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl ${v.iconBg} border ${v.iconBorder} flex items-center justify-center mb-5`}>
                  <img src={v.icon} alt="" className="w-6 h-6" aria-hidden="true" />
                </div>

                <h3 className="text-sm font-semibold text-navy-800 mb-2 tracking-tight">{v.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{v.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
