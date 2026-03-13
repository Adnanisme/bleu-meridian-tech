import { motion } from 'framer-motion';
import { Smartphone, Code2, Globe, Cloud, Lightbulb } from 'lucide-react';

const services = [
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: 'App Development',
    description: 'iOS, Android, and cross-platform apps — designed, built, deployed, and managed end-to-end.',
    accent: 'from-brand-mid to-brand-light',
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: 'Software Development',
    description: 'Custom systems built for your needs — from national repositories to executive dashboards.',
    accent: 'from-brand-dark to-brand-mid',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Web Platforms',
    description: 'Scalable websites and digital platforms — e-commerce, corporate, informational, and beyond.',
    accent: 'from-brand-mid to-sky-400',
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    title: 'Cloud & Infrastructure',
    description: 'Reliable, secure tech architecture — hosting, scaling, and keeping your systems running.',
    accent: 'from-sky-500 to-brand-light',
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Tech Consulting',
    description: 'Strategy, system design, and digital transformation — from roadmap to execution.',
    accent: 'from-brand-dark to-sky-500',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16 lg:mb-20"
        >
          <p className="text-brand-mid font-semibold text-sm tracking-wide uppercase mb-3">What we do</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-800 tracking-tight">
            Five services.{' '}
            <span className="text-slate-400">Full spectrum.</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative p-8 rounded-2xl border border-slate-100 hover:border-slate-200 bg-white hover:shadow-lg hover:shadow-slate-100/80 transition-all duration-500 ${
                i === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${service.accent} text-white mb-5`}>
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-navy-800 mb-2">{service.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{service.description}</p>

              {/* Hover line */}
              <div className={`absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r ${service.accent} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
