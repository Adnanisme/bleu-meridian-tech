import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import appDevIcon from '../../assets/services-icons/App-dev.svg';
import softwareDevIcon from '../../assets/services-icons/software-dev.svg';
import webPlatformsIcon from '../../assets/services-icons/web-platforms.svg';
import cloudInfraIcon from '../../assets/services-icons/cloud-infra.svg';
import techConsultingIcon from '../../assets/services-icons/tech-consulting.svg';

const services = [
  {
    icon: appDevIcon,
    title: 'App Development',
    description: 'iOS, Android, and cross-platform apps designed, built, deployed, and managed end-to-end.',
    bg: 'bg-sky-50',
    border: 'border-sky-100',
  },
  {
    icon: softwareDevIcon,
    title: 'Software Development',
    description: 'Custom systems tailored to your operations, workflows, and business goals.',
    bg: 'bg-indigo-50',
    border: 'border-indigo-100',
  },
  {
    icon: webPlatformsIcon,
    title: 'Web Platforms',
    description: 'Scalable websites and digital platforms for e-commerce, corporate, and beyond.',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
  },
  {
    icon: cloudInfraIcon,
    title: 'Cloud & Infrastructure',
    description: 'Reliable, secure tech architecture with hosting, scaling, and continuous uptime.',
    bg: 'bg-violet-50',
    border: 'border-violet-100',
  },
  {
    icon: techConsultingIcon,
    title: 'Tech Consulting',
    description: 'Strategy, system design, and digital transformation from roadmap to execution.',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
  },
];

function useNoiseTexture() {
  const [dataUrl, setDataUrl] = useState('');
  useEffect(() => {
    const size = 200;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    const imageData = ctx.createImageData(size, size);
    for (let i = 0; i < imageData.data.length; i += 4) {
      const v = Math.random() * 255;
      imageData.data[i] = v;
      imageData.data[i + 1] = v;
      imageData.data[i + 2] = v;
      imageData.data[i + 3] = 255;
    }
    ctx.putImageData(imageData, 0, 0);
    setDataUrl(canvas.toDataURL('image/png'));
  }, []);
  return dataUrl;
}

function ServiceCard({ service, index, totalCards }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start 20%'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <motion.div
      ref={cardRef}
      style={{ scale, opacity }}
      className="sticky top-60"
    >
      <div
        className="bg-white rounded-2xl sm:rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-shadow duration-500 overflow-hidden"
        style={{ marginBottom: index < totalCards - 1 ? '2rem' : 0 }}
      >
        <div className="flex items-center justify-between p-6 sm:p-8 lg:p-10">
          <div className="flex-1 min-w-0 pr-6 sm:pr-10">
            <div className="flex items-center gap-4 mb-3 sm:mb-4">
              <span className="text-[11px] font-bold tracking-[0.3em] text-slate-300 uppercase">
                0{index + 1}
              </span>
              <div className="w-8 h-[1px] bg-slate-200" />
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-navy-800 mb-2 sm:mb-3 tracking-tight">
              {service.title}
            </h3>
            <p className="text-slate-500 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl">
              {service.description}
            </p>
          </div>

          <div className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-2xl ${service.bg} border ${service.border} flex items-center justify-center`}>
            <img
              src={service.icon}
              alt={service.title}
              className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function StickyHeader({ cardsRef }) {
  const { scrollYProgress } = useScroll({
    target: cardsRef,
    offset: ['start start', 'end start'],
  });

  // Fade out and slide up as soon as the 4th card is done (60-72% through scroll)
  const headerOpacity = useTransform(scrollYProgress, [0, 0.58, 0.70], [1, 1, 0]);
  const headerY = useTransform(scrollYProgress, [0, 0.58, 0.70], [0, 0, -40]);

  return (
    <motion.div
      style={{ opacity: headerOpacity, y: headerY }}
      className="sticky top-28 z-10 pb-10 text-center"
    >
      <p className="text-brand-mid font-semibold text-xs tracking-[0.2em] uppercase mb-4">What we do</p>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-800 tracking-tight">
        Five services.{' '}
        <span className="text-slate-300">Full spectrum.</span>
      </h2>
    </motion.div>
  );
}

export default function Services() {
  const noiseUrl = useNoiseTexture();
  const cardsRef = useRef(null);

  return (
    <section id="services" className="pt-40 lg:pt-48 pb-28 lg:pb-36 bg-slate-50/50 relative">
      {/* Film grain texture */}
      {noiseUrl && (
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.07]"
          style={{ backgroundImage: `url(${noiseUrl})`, backgroundRepeat: 'repeat' }}
        />
      )}

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        <StickyHeader cardsRef={cardsRef} />

        {/* Stacking cards */}
        <div ref={cardsRef} className="space-y-6">
          {services.map((service, i) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={i}
              totalCards={services.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
