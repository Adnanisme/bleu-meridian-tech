import { motion } from 'framer-motion';
import { partners } from '../../data/partners';

export default function Partners() {
  return (
    <section id="partners" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-brand-mid font-semibold text-sm tracking-wide uppercase mb-3">Trusted by</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 tracking-tight">
            Companies we've worked with
          </h2>
        </motion.div>

        {/* Logo grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6"
        >
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="group flex flex-col items-center justify-center p-5 lg:p-6 rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all duration-300 bg-white"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-10 lg:h-12 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              />
              <span className="mt-3 text-[11px] font-medium text-slate-400 group-hover:text-slate-600 transition-colors text-center leading-tight">
                {partner.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
