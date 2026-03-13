import { motion } from 'framer-motion';
import { Shield, Zap, Users, Target } from 'lucide-react';

const values = [
  {
    icon: <Target className="w-5 h-5" />,
    title: 'Purpose-built',
    description: 'Every system we build starts with a real problem. We don\'t build for the sake of building.',
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: 'Full ownership',
    description: 'From first conversation to post-launch support — one team, end-to-end. No handoffs.',
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: 'Ship fast, ship right',
    description: 'Agile delivery with weekly progress. We move quickly without cutting corners.',
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: 'Secure by default',
    description: 'RBAC, encryption, compliance — security is baked in from day one, not bolted on after.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-brand-mid font-semibold text-sm tracking-wide uppercase mb-3">About us</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-800 tracking-tight mb-6">
              Software that works{' '}
              <span className="text-slate-400">for the people who use it.</span>
            </h2>

            <div className="space-y-4 text-slate-500 leading-relaxed">
              <p>
                Bleu Meridian Technologies is a software development company based in Abuja, Nigeria. Since 2019, we've been designing and building digital products that organizations depend on — from national-scale repositories to consumer mobile apps.
              </p>
              <p>
                We work across the full stack: strategy, design, development, deployment, and ongoing support. Our clients include government agencies, energy companies, agricultural businesses, and startups across Africa and beyond.
              </p>
            </div>

            {/* Stats row */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { value: '2019', label: 'Founded' },
                { value: '50+', label: 'Projects delivered' },
                { value: '30+', label: 'Clients served' },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-2xl sm:text-3xl font-bold text-navy-800">{stat.value}</div>
                  <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-5"
          >
            <p className="text-sm font-semibold text-slate-400 tracking-wide uppercase mb-6">How we work</p>
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                className="group flex gap-4 p-5 rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-navy-800/5 flex items-center justify-center text-brand-mid group-hover:bg-brand-mid group-hover:text-white transition-all duration-300">
                  {value.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-navy-800 mb-1">{value.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
