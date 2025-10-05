import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Target,
  Code2,
  TrendingUp,
  Check,
  ArrowLeft
} from 'lucide-react';

export default function CaseStudy({ projects }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects[parseInt(id)];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <button
            onClick={() => navigate('/')}
            className="text-indigo-600 hover:text-indigo-700"
          >
            Go back home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100">
      {/* Back Button */}
      <div className="fixed top-8 left-8 z-40">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/')}
          className="flex items-center gap-2 bg-white px-4 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-slate-200"
        >
          <ArrowLeft className="w-5 h-5 text-slate-700" />
          <span className="font-semibold text-slate-700">Back to Home</span>
        </motion.button>
      </div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[50vh] overflow-hidden"
      >
        <div className="w-full h-full bg-slate-200">
          <img
            src={project.image}
            alt={project.title}
            loading="eager"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 py-8 md:py-10 text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="inline-block bg-white/20 backdrop-blur text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
                {project.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-extrabold mb-2">{project.title}</h1>
              <p className="text-lg text-white/90">{project.client}</p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
        {/* Project Info Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
            <div className="text-xs text-slate-500 mb-1">Timeline</div>
            <div className="font-bold text-xl text-indigo-600">{project.timeline}</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
            <div className="text-xs text-slate-500 mb-1">Team Size</div>
            <div className="font-bold text-xl text-indigo-600">{project.team}</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
            <div className="text-xs text-slate-500 mb-2">Technologies</div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-indigo-50 text-indigo-600 px-2.5 py-1 rounded-full font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Challenge Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl p-6 md:p-8 mb-6 shadow-lg border border-slate-200"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
              <Target className="w-6 h-6 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold">The Challenge</h2>
          </div>
          <p className="text-slate-600 text-base leading-relaxed">
            {project.challenge}
          </p>
        </motion.div>

        {/* Solution Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-2xl p-6 md:p-8 mb-6 shadow-lg border border-slate-200"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
              <Code2 className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold">Our Solution</h2>
          </div>
          <p className="text-slate-600 text-base leading-relaxed">
            {project.solution}
          </p>
        </motion.div>

        {/* Results Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-2xl p-6 md:p-8 mb-10 shadow-lg border border-slate-200"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold">Results & Impact</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.results.map((result, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + idx * 0.1 }}
                className="flex items-start gap-3 bg-green-50 rounded-xl p-4 border border-green-100"
              >
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 text-sm font-medium">{result}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-10 text-center shadow-2xl"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Ready to start your project?
          </h3>
          <p className="text-base text-indigo-100 mb-6 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve similar results and transform your business.
          </p>
          <button
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="inline-flex items-center gap-3 bg-white text-indigo-600 px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all font-semibold"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}
