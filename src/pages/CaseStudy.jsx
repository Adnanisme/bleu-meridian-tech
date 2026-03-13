import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Users, Target, Code2, Check } from 'lucide-react';
import { projectsData } from '../data/projects';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function CaseStudy() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData[parseInt(id)];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-navy-800 mb-4">Project not found</h1>
          <button onClick={() => navigate('/')} className="text-brand-mid hover:underline">
            Go back home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 bg-navy-950 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-mid/5 rounded-full blur-[120px]" />

        <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
          <button
            onClick={() => navigate('/')}
            className="group inline-flex items-center gap-2 text-white/40 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to home
          </button>

          <span className="text-xs font-semibold tracking-wide uppercase text-brand-light/60 block mb-3">
            {project.category}
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            {project.title}
          </h1>

          <p className="text-lg text-white/40 max-w-2xl">{project.description}</p>

          {/* Meta */}
          <div className="mt-8 flex flex-wrap gap-6">
            <div className="flex items-center gap-2 text-white/30">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{project.timeline}</span>
            </div>
            <div className="flex items-center gap-2 text-white/30">
              <Users className="w-4 h-4" />
              <span className="text-sm">{project.team}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs font-medium text-white/50 bg-white/5 px-3 py-1.5 rounded-md">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className={`grid gap-8 ${project.displayType === 'mobile' ? 'grid-cols-1 sm:grid-cols-3 max-w-3xl mx-auto' : 'grid-cols-1 gap-12'}`}>
            {project.images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {project.displayType === 'mobile' ? (
                  <div className="mx-auto max-w-[220px]">
                    <div className="rounded-[2rem] overflow-hidden border-[6px] border-slate-800 bg-slate-900 shadow-2xl">
                      <div className="relative">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-slate-800 rounded-b-2xl z-10" />
                        <img src={img} alt={project.imageLabels[i]} className="w-full aspect-[9/19.5] object-cover object-top" />
                      </div>
                    </div>
                    <p className="text-center text-xs text-slate-400 mt-3 font-medium">{project.imageLabels[i]}</p>
                  </div>
                ) : (
                  <div>
                    <div className="rounded-xl overflow-hidden bg-slate-100 shadow-lg border border-slate-200">
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
                      <img src={img} alt={project.imageLabels[i]} className="w-full" />
                    </div>
                    <p className="text-xs text-slate-400 mt-3 font-medium">{project.imageLabels[i]}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-16 lg:py-20 bg-slate-50/50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-navy-800/5 flex items-center justify-center text-brand-mid">
                  <Target className="w-4 h-4" />
                </div>
                <h2 className="text-xl font-bold text-navy-800">The Challenge</h2>
              </div>
              <p className="text-slate-500 leading-relaxed">{project.challenge}</p>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-navy-800/5 flex items-center justify-center text-brand-mid">
                  <Code2 className="w-4 h-4" />
                </div>
                <h2 className="text-xl font-bold text-navy-800">Our Solution</h2>
              </div>
              <p className="text-slate-500 leading-relaxed">{project.solution}</p>
            </motion.div>
          </div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16"
          >
            <h2 className="text-xl font-bold text-navy-800 mb-6">Results</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.results.map((result, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-100">
                  <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <span className="text-sm text-slate-600">{result}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-800 mb-4">Have a similar project in mind?</h2>
          <p className="text-slate-500 mb-8">Let's talk about how we can build something great together.</p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 bg-brand-mid hover:bg-brand-mid/90 text-white font-medium px-7 py-3.5 rounded-lg transition-all duration-300"
          >
            Get in touch
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
