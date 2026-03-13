import { motion } from 'framer-motion';
import { Search, Palette, Code2, Rocket } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: <Search className="w-5 h-5" />,
    title: 'Discovery',
    description: 'We learn your business, your users, and your goals. Workshops and research shape the roadmap before a single line of code is written.',
  },
  {
    num: '02',
    icon: <Palette className="w-5 h-5" />,
    title: 'Design',
    description: 'Wireframes become prototypes. We validate with real users, iterate fast, and lock in the experience before development begins.',
  },
  {
    num: '03',
    icon: <Code2 className="w-5 h-5" />,
    title: 'Build',
    description: 'Agile sprints, continuous delivery. You see working software every week — not a demo six months later.',
  },
  {
    num: '04',
    icon: <Rocket className="w-5 h-5" />,
    title: 'Launch & Support',
    description: 'We deploy, monitor, and optimize. Post-launch, we stay on as your technical partner — not just a vendor who disappears.',
  },
];

export default function Process() {
  return (
    <section className="py-24 lg:py-32 bg-navy-950 relative overflow-hidden">
      {/* Subtle bg accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-mid/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16 lg:mb-20"
        >
          <p className="text-brand-light font-semibold text-sm tracking-wide uppercase mb-3">Our process</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            From idea to launch.{' '}
            <span className="text-white/30">No surprises.</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative"
            >
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-[1px] bg-gradient-to-r from-white/10 to-transparent z-0" />
              )}

              <div className="relative p-6 lg:p-8 rounded-2xl border border-white/5 hover:border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500">
                {/* Number */}
                <span className="text-[10px] font-bold tracking-[0.3em] text-brand-light/40 uppercase">
                  Step {step.num}
                </span>

                {/* Icon */}
                <div className="mt-4 mb-4 w-10 h-10 rounded-lg bg-brand-mid/10 flex items-center justify-center text-brand-light group-hover:bg-brand-mid/20 transition-colors duration-300">
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
