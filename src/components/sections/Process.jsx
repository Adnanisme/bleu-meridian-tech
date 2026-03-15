import { partners } from '../../data/partners';

const steps = [
  { num: '01.', title: 'Discovery', text: 'We learn your business, users, and goals. Research shapes the roadmap before any code is written.' },
  { num: '02.', title: 'Design & Prototype', text: 'Wireframes become prototypes. We validate with real users and iterate fast.' },
  { num: '03.', title: 'Build & Deliver', text: 'Agile sprints with continuous delivery. You see working software every week.' },
  { num: '04.', title: 'Launch & Support', text: 'We deploy, monitor, and optimize. Post-launch, we stay on as your partner.' },
];

const clientLogos = partners.slice(0, 5);

export default function Process() {
  return (
    <section className="py-28 lg:py-36 bg-navy-950 relative overflow-hidden">
      {/* Ambient gradient - top-left bloom */}
      <div className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-brand-mid/[0.15] rounded-full blur-[180px] pointer-events-none" />

      {/* Ambient gradient - bottom-right bloom behind cards */}
      <div className="absolute -bottom-10 -right-10 w-[700px] h-[700px] bg-brand-mid/[0.18] rounded-full blur-[200px] pointer-events-none" />

      {/* Teal accent - mid section */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-teal-400/[0.07] rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <p className="text-brand-light/60 font-semibold text-xs tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-mid" />
            Our Process
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Effortless Process,
            <br />
            <span className="text-white/40">Consistent Results.</span>
          </h2>
        </div>

        {/* Divider line with gradient glow */}
        <div className="hidden lg:block w-full h-[1px] bg-gradient-to-r from-transparent via-brand-mid/20 to-transparent mb-12" />

        {/* Steps grid — no framer motion, pure CSS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm p-6 lg:p-7 flex flex-col hover:border-white/[0.12] hover:bg-white/[0.05] transition-all duration-300"
            >
              <span className="text-sm font-bold text-brand-light/70 mb-4">{step.num}</span>
              <h3 className="text-lg font-bold text-white mb-3 tracking-tight">{step.title}</h3>
              <p className="text-sm text-white/30 leading-relaxed mt-auto">{step.text}</p>
            </div>
          ))}
        </div>

        {/* Bottom bar with client logos */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              {clientLogos.map((client, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full bg-white border-2 border-navy-950 flex items-center justify-center overflow-hidden"
                >
                  <img src={client.logo} alt={client.name} loading="lazy" className="w-6 h-6 object-contain" />
                </div>
              ))}
            </div>
            <p className="text-sm text-white/40">
              Trusted by teams that <span className="text-white font-medium">Choose Quality</span>
            </p>
          </div>

          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="inline-flex items-center gap-2 bg-brand-mid hover:bg-brand-mid/90 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300"
          >
            Start Now
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
