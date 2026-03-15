import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Lottie from 'lottie-react';
import heroAnimation from '../../assets/hero.json';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-950">
      {/*
        Lottie flow animation — masked so it fades from invisible at the top
        (keeping text readable) to fully visible at the bottom (showing through
        the frosted glass buttons). No overlay div between animation and buttons.
      */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent 8%, rgba(0,0,0,0.15) 20%, rgba(0,0,0,0.5) 35%, black 50%, black 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 8%, rgba(0,0,0,0.15) 20%, rgba(0,0,0,0.5) 35%, black 50%, black 100%)',
        }}
      >
        {/* Mobile/tablet: force animation to cover full viewport height via scaleY stretch */}
        <div className="absolute inset-0 lg:hidden overflow-hidden">
          <div className="absolute inset-0 opacity-70 sm:opacity-55" style={{ transform: 'scaleY(2.5) scaleX(1.5)', transformOrigin: 'center 45%' }}>
            <Lottie
              animationData={heroAnimation}
              loop
              autoplay
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
        {/* Desktop: natural flow, bottom-aligned */}
        <div className="hidden lg:flex absolute inset-0 items-end justify-center">
          <div className="w-full max-w-[1920px] opacity-45">
            <Lottie
              animationData={heroAnimation}
              loop
              autoplay
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </div>

      {/* Subtle grain texture */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
        }}
      />

      {/* Content — z-10 so text is above everything, buttons use backdrop-blur to see animation through */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1] }}
        >
          <h1
            className="text-[2.75rem] sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[1.08]"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            <span className="block">Built to be used.</span>
            <span className="block mt-2 bg-gradient-to-r from-brand-light via-brand-mid to-brand-light bg-clip-text text-transparent">
              Built to last.
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0, 1] }}
          className="mt-6 sm:mt-8 text-base sm:text-xl text-white/45 max-w-2xl mx-auto leading-relaxed font-light px-2"
        >
          We design and engineer software, apps, and platforms that real people rely on, every day.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0, 1] }}
          className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0"
        >
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="group inline-flex items-center justify-center gap-3 bg-brand-mid/10 backdrop-blur-xl hover:bg-brand-mid/20 text-white font-medium px-8 py-4 rounded-xl border border-white/20 shadow-[0_4px_30px_-4px_rgba(26,109,181,0.3),inset_0_1px_0_rgba(255,255,255,0.15)] hover:shadow-[0_6px_40px_-4px_rgba(26,109,181,0.4),inset_0_1px_0_rgba(255,255,255,0.2)] transition-all duration-300"
          >
            Start a project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="inline-flex items-center justify-center gap-2 text-white/80 hover:text-white font-medium px-8 py-4 rounded-xl bg-white/[0.03] backdrop-blur-xl border border-white/15 hover:bg-white/[0.07] hover:border-white/25 shadow-[0_4px_30px_-4px_rgba(255,255,255,0.04),inset_0_1px_0_rgba(255,255,255,0.1)] hover:shadow-[0_6px_40px_-4px_rgba(255,255,255,0.08),inset_0_1px_0_rgba(255,255,255,0.15)] transition-all duration-300"
          >
            See our projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}
