import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { projectsData } from '../../data/projects';
import { useNavigate } from 'react-router-dom';

import brandIcon1 from '../../assets/brand-icons/brand-icon-1.png';
import brandIcon2 from '../../assets/brand-icons/brand-icon-2.png';
import brandIcon3 from '../../assets/brand-icons/brand-icon-3.png';
import brandIconSpotts from '../../assets/brand-icons/brand-icon-spotts.png';

const brandIcons = [brandIcon1, brandIcon2, brandIconSpotts, brandIcon3];

function useSwipe(onSwipeLeft, onSwipeRight) {
  const touchStart = useRef(null);
  const touchEnd = useRef(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    touchEnd.current = null;
    touchStart.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;
    const distance = touchStart.current - touchEnd.current;
    if (Math.abs(distance) >= minSwipeDistance) {
      if (distance > 0) onSwipeLeft();
      else onSwipeRight();
    }
  };

  return { onTouchStart, onTouchMove, onTouchEnd };
}

function ImageCarousel({ images, labels, displayType }) {
  const [current, setCurrent] = useState(0);
  const goNext = () => setCurrent((p) => (p + 1) % images.length);
  const goPrev = () => setCurrent((p) => (p - 1 + images.length) % images.length);
  const swipeHandlers = useSwipe(goNext, goPrev);

  if (displayType === 'mobile') {
    return (
      <div className="relative" {...swipeHandlers}>
        <div className="relative flex items-end justify-center gap-3 sm:gap-5 py-4">
          {images.map((img, i) => {
            const isCenter = i === current;
            return (
              <motion.div
                key={i}
                animate={{ scale: isCenter ? 1 : 0.85, opacity: isCenter ? 1 : 0.5, y: isCenter ? 0 : 20, zIndex: isCenter ? 10 : 1 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0, 1] }}
                className="relative cursor-pointer flex-shrink-0"
                onClick={() => setCurrent(i)}
              >
                <div className={`overflow-hidden ${isCenter ? 'w-48 sm:w-56' : 'w-36 sm:w-44 hidden sm:block'}`}>
                  <img src={img} alt={labels[i]} loading="lazy" className="w-full h-auto object-contain" />
                </div>
              </motion.div>
            );
          })}
        </div>
        {/* Label */}
        <p className="text-center text-xs text-slate-400 font-medium mt-2">{labels[current]}</p>
        {/* Nav arrows + dots */}
        <div className="flex items-center justify-center gap-4 mt-3">
          <button onClick={goPrev} className="w-9 h-9 rounded-full bg-white shadow-md border border-slate-200 flex items-center justify-center active:scale-95 transition-transform">
            <ChevronLeft className="w-4 h-4 text-slate-600" />
          </button>
          <div className="flex gap-2">
            {images.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'bg-brand-mid w-6' : 'bg-slate-300 w-2'}`} />
            ))}
          </div>
          <button onClick={goNext} className="w-9 h-9 rounded-full bg-white shadow-md border border-slate-200 flex items-center justify-center active:scale-95 transition-transform">
            <ChevronRight className="w-4 h-4 text-slate-600" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative group/carousel" {...swipeHandlers}>
      <div className="relative rounded-xl overflow-hidden bg-slate-100 shadow-lg border border-slate-200">
        <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 border-b border-slate-200">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
          </div>
          <div className="flex-1 mx-8"><div className="h-5 bg-slate-200/80 rounded-md max-w-xs mx-auto" /></div>
        </div>
        <img src={images[current]} alt={labels[current]} loading="lazy" className="w-full aspect-[16/10] object-cover object-top transition-opacity duration-300" />
      </div>
      {images.length > 1 && (
        <>
          <button onClick={goPrev} className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 shadow-md flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 lg:opacity-0 max-lg:opacity-100 transition-opacity active:scale-95">
            <ChevronLeft className="w-4 h-4 text-slate-700" />
          </button>
          <button onClick={goNext} className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 shadow-md flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 lg:opacity-0 max-lg:opacity-100 transition-opacity active:scale-95">
            <ChevronRight className="w-4 h-4 text-slate-700" />
          </button>
        </>
      )}
      <div className="flex items-center justify-between mt-3 px-1">
        <span className="text-xs text-slate-400 font-medium">{labels[current]}</span>
        <div className="flex gap-1.5">
          {images.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'bg-brand-mid w-4' : 'bg-slate-300 w-1.5'}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Desktop: Cotool-style split-screen ── */
function DesktopFeaturedWork({ navigate }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef([]);

  const setCardRef = useCallback((el, i) => {
    cardRefs.current[i] = el;
  }, []);

  useEffect(() => {
    const observers = [];
    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveIndex(i);
        },
        { rootMargin: '-35% 0px -35% 0px', threshold: 0 }
      );
      observer.observe(card);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollToProject = (i) => {
    const card = cardRefs.current[i];
    if (card) card.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div className="grid" style={{ gridTemplateColumns: '340px 1fr', gap: '4rem' }}>
      {/* Left - Sticky sidebar */}
      <div className="sticky top-28 self-start h-fit">
        {/* Section header - always visible */}
        <div className="mb-10">
          <p className="text-brand-mid font-semibold text-sm tracking-[0.2em] uppercase mb-3">Featured Projects</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-800 tracking-tight leading-snug">
            Real systems.{' '}
            <span className="text-slate-300">Real impact.</span>
          </h2>
        </div>

        {/* Project names - large text, Cotool style */}
        <div className="space-y-1">
          {projectsData.map((project, i) => (
            <button
              key={project.id}
              onClick={() => scrollToProject(i)}
              className="w-full text-left group flex items-center gap-3 py-3 transition-all duration-500"
            >
              {/* Brand icon - visible when active */}
              <div className={`flex-shrink-0 w-7 h-7 flex items-center justify-center transition-all duration-500 ${
                activeIndex === i ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}>
                <img src={brandIcons[i]} alt="" loading="lazy" className="w-6 h-6 object-contain" aria-hidden="true" />
              </div>

              <div className={`transition-all duration-500 ${activeIndex !== i ? '-ml-10' : ''}`}>
                <h3 className={`text-xl font-bold tracking-tight transition-colors duration-500 ${
                  activeIndex === i ? 'text-navy-800' : 'text-slate-200 group-hover:text-slate-400'
                }`}>
                  {project.shortTitle}
                </h3>
                {activeIndex === i && (
                  <p className="text-xs text-slate-400 mt-0.5 transition-opacity duration-500">
                    {project.category}
                  </p>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Client info for active project */}
        <div className="mt-8 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm transition-all duration-500">
          <p className="text-xs text-slate-400 font-medium uppercase tracking-wide mb-2">Client</p>
          <p className="text-sm font-semibold text-navy-800 mb-1">
            {projectsData[activeIndex].client}
          </p>
          <div className="flex items-center gap-4 mt-3 text-xs text-slate-400">
            <span>{projectsData[activeIndex].timeline}</span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span>{projectsData[activeIndex].team}</span>
          </div>
        </div>
      </div>

      {/* Right - Scrolling project content */}
      <div className="space-y-36">
        {projectsData.map((project, i) => (
          <div key={project.id} ref={(el) => setCardRef(el, i)}>
            {/* Top row: title + description + CTA */}
            <div className="flex items-start justify-between gap-8 mb-8">
              <div className="flex-1">
                <h3 className="text-3xl lg:text-4xl font-bold text-navy-800 tracking-tight mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-500 leading-relaxed max-w-lg">
                  {project.description}
                </p>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium text-navy-800/70 bg-slate-100 px-3 py-1.5 rounded-md">{tag}</span>
                  ))}
                </div>
              </div>
              <button
                onClick={() => navigate(`/projects/${i}`)}
                className="flex-shrink-0 group inline-flex items-center gap-2 bg-navy-800 hover:bg-navy-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-all duration-300"
              >
                View project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Screenshot */}
            <ImageCarousel
              images={project.images}
              labels={project.imageLabels}
              displayType={project.displayType}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Mobile: Stacked cards ── */
function MobileFeaturedWork({ navigate }) {
  return (
    <div className="space-y-20">
      {projectsData.map((project, i) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-brand-mid mb-3">{project.category}</p>
          <ImageCarousel images={project.images} labels={project.imageLabels} displayType={project.displayType} />

          <div className="mt-6">
            {/* Project name with brand icon beside it */}
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200/60 flex items-center justify-center flex-shrink-0">
                <img src={brandIcons[i]} alt="" loading="lazy" className="w-6 h-6 object-contain" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-navy-800 tracking-tight">{project.title}</h3>
            </div>

            <p className="text-sm text-slate-400 font-medium mt-2 mb-3">{project.client}</p>
            <p className="text-slate-500 leading-relaxed mb-5 text-[15px]">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs font-medium text-navy-800/70 bg-slate-100 px-3 py-1.5 rounded-md">{tag}</span>
              ))}
            </div>
            <button onClick={() => navigate(`/projects/${i}`)} className="group inline-flex items-center gap-2 bg-navy-800 hover:bg-navy-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-all duration-300">
              View project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function FeaturedWork() {
  const navigate = useNavigate();

  return (
    <section id="projects" className="py-28 lg:py-36 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Mobile header only */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:hidden"
        >
          <p className="text-brand-mid font-semibold text-sm tracking-[0.2em] uppercase mb-4">Featured Projects</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 tracking-tight">
            Real systems. <span className="text-slate-300">Real impact.</span>
          </h2>
          <p className="mt-4 text-slate-500 text-base sm:text-lg">A selection of projects we're proud to have built.</p>
        </motion.div>

        <div className="hidden lg:block">
          <DesktopFeaturedWork navigate={navigate} />
        </div>
        <div className="lg:hidden">
          <MobileFeaturedWork navigate={navigate} />
        </div>
      </div>
    </section>
  );
}
