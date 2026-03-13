import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { projectsData } from '../../data/projects';
import { useNavigate } from 'react-router-dom';

function ImageCarousel({ images, labels, displayType }) {
  const [current, setCurrent] = useState(0);

  const next = (e) => {
    e.stopPropagation();
    setCurrent((prev) => (prev + 1) % images.length);
  };
  const prev = (e) => {
    e.stopPropagation();
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  if (displayType === 'mobile') {
    return (
      <div className="relative flex items-center justify-center gap-4 py-8">
        {/* Show all 3 phones staggered */}
        <div className="relative flex items-end justify-center gap-3 sm:gap-5">
          {images.map((img, i) => {
            const isCenter = i === current;
            const offset = i - current;
            return (
              <motion.div
                key={i}
                animate={{
                  scale: isCenter ? 1 : 0.85,
                  opacity: isCenter ? 1 : 0.5,
                  y: isCenter ? 0 : 20,
                  zIndex: isCenter ? 10 : 1,
                }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0, 1] }}
                className="relative cursor-pointer flex-shrink-0"
                onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
              >
                <div className={`relative rounded-[2rem] overflow-hidden shadow-2xl border-[6px] border-slate-800 bg-slate-900 ${
                  isCenter ? 'w-48 sm:w-56' : 'w-36 sm:w-44 hidden sm:block'
                }`}>
                  {/* Phone notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-slate-800 rounded-b-2xl z-10" />
                  <img
                    src={img}
                    alt={labels[i]}
                    className="w-full aspect-[9/19.5] object-cover object-top"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Nav dots */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? 'bg-brand-mid w-6' : 'bg-slate-300'
              }`}
            />
          ))}
        </div>
      </div>
    );
  }

  // Desktop display
  return (
    <div className="relative group/carousel">
      <div className="relative rounded-xl overflow-hidden bg-slate-100 shadow-lg border border-slate-200">
        {/* Browser chrome */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 border-b border-slate-200">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
          </div>
          <div className="flex-1 mx-8">
            <div className="h-5 bg-slate-200/80 rounded-md max-w-xs mx-auto" />
          </div>
        </div>

        {/* Image */}
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={images[current]}
            alt={labels[current]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full aspect-[16/10] object-cover object-top"
          />
        </AnimatePresence>
      </div>

      {/* Navigation arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 shadow-md flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity"
          >
            <ChevronLeft className="w-4 h-4 text-slate-700" />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 shadow-md flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity"
          >
            <ChevronRight className="w-4 h-4 text-slate-700" />
          </button>
        </>
      )}

      {/* Label + dots */}
      <div className="flex items-center justify-between mt-3 px-1">
        <span className="text-xs text-slate-400 font-medium">{labels[current]}</span>
        <div className="flex gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                i === current ? 'bg-brand-mid w-4' : 'bg-slate-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function FeaturedWork() {
  const navigate = useNavigate();

  return (
    <section id="work" className="py-24 lg:py-32 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16 lg:mb-20"
        >
          <p className="text-brand-mid font-semibold text-sm tracking-wide uppercase mb-3">Featured Work</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-800 tracking-tight">
            Real systems.{' '}
            <span className="text-slate-400">Real impact.</span>
          </h2>
          <p className="mt-4 text-slate-500 text-lg">
            A selection of projects we're proud to have built.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-20 lg:space-y-28">
          {projectsData.map((project, i) => {
            const isReversed = i % 2 === 1;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  isReversed ? 'lg:direction-rtl' : ''
                }`}
              >
                {/* Image side */}
                <div className={`${isReversed ? 'lg:order-2' : ''}`}>
                  <ImageCarousel
                    images={project.images}
                    labels={project.imageLabels}
                    displayType={project.displayType}
                  />
                </div>

                {/* Text side */}
                <div className={`${isReversed ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-semibold tracking-wide uppercase text-brand-mid bg-brand-mid/10 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-navy-800 mb-2">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-400 font-medium mb-4">
                    {project.client}
                  </p>

                  <p className="text-slate-500 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium text-navy-800/70 bg-slate-100 px-3 py-1.5 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => navigate(`/case-study/${i}`)}
                    className="group inline-flex items-center gap-2 text-brand-mid hover:text-brand-dark font-medium text-sm transition-colors"
                  >
                    View case study
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
