/*
BlueMeridian_Modern_React.jsx

HOW TO USE
1. Requires: React, Tailwind CSS, framer-motion, lucide-react
   npm i framer-motion lucide-react
   (Tailwind should already be set up in your project)

2. Add a Google font to your index.html <head>:
   <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;800&display=swap" rel="stylesheet">

3. Drop this component into your app (e.g., src/components/BlueMeridian_Modern_React.jsx)

Notes:
- Placeholder images use Unsplash; replace with your assets.
- This is a single-file React component intended as a polished, modern redesign
  of your existing Blue Meridian page (Wix-like aesthetic: generous spacing, glass panels,
  soft shadows, subtle motion).
*/

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import { projectsData } from '../App';
import {
  Menu,
  X,
  ArrowRight,
  Code2,
  Database,
  Cloud,
  Smartphone,
  Globe,
  Shield,
  Zap,
  Users,
  TrendingUp,
  Target,
  Award,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Check
} from 'lucide-react';

// Animated Counter Component
function AnimatedCounter({ end, duration = 2000, suffix = '' }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const endValue = parseInt(end);
          const startTime = Date.now();
          const timer = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const current = Math.floor(progress * endValue);
            setCount(current);
            if (progress === 1) clearInterval(timer);
          }, 16);
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return <span ref={countRef}>{count}{suffix}</span>;
}

export default function BlueMeridianModern() {
  const [openMenu, setOpenMenu] = useState(false);
  const [flippedProject, setFlippedProject] = useState(null);
  const [flippedWorkCard, setFlippedWorkCard] = useState(null);
  const [state, handleSubmit] = useForm("meorzrjo");

  const services = [
    { icon: <Code2 className="w-6 h-6" />, title: 'Custom Software', subtitle: 'Bespoke web and mobile applications' },
    { icon: <Cloud className="w-6 h-6" />, title: 'Cloud & DevOps', subtitle: 'Secure and scalable infrastructure' },
    { icon: <Database className="w-6 h-6" />, title: 'Data & Analytics', subtitle: 'Insights that drive decisions' },
    { icon: <Shield className="w-6 h-6" />, title: 'Cybersecurity', subtitle: 'Protect your digital assets' },
    { icon: <Smartphone className="w-6 h-6" />, title: 'Mobile Apps', subtitle: 'Native and cross-platform solutions' },
    { icon: <Globe className="w-6 h-6" />, title: 'Web Development', subtitle: 'Modern and responsive websites' }
  ];

  const features = [
    { icon: <Award className="w-5 h-5" />, title: 'Proven Teams', desc: 'Product, design and engineering in one unit' },
    { icon: <Zap className="w-5 h-5" />, title: 'Fast Delivery', desc: 'Sprints that ship value' },
    { icon: <Shield className="w-5 h-5" />, title: 'Secure by design', desc: 'Threat modelling & audits' }
  ];

  const tech = [
    { name: 'React' },
    { name: 'Next.js' },
    { name: 'TypeScript' },
    { name: 'Node.js' },
    { name: 'PostgreSQL' },
    { name: 'Kubernetes' },
    { name: 'AWS' },
    { name: 'Docker' }
  ];

  const partners = [
    { name: 'NNPC', logo: '/logos/nnpc.png' },
    { name: 'PTDF', logo: '/logos/ptdf.png' },
    { name: 'Blackterra Energies', logo: '/logos/blackterra.png' },
    { name: 'Redline Autos', logo: '/logos/redline.png' },
    { name: 'Karsource Global', logo: '/logos/karsoruce.png' },
    { name: 'Shamzak Farms', logo: '/logos/shamzak.jpg' },
    { name: 'The V Malaysia', logo: '/logos/thev.png' }
  ];

  const projects = projectsData;


  return (
    <div className="font-sans antialiased text-gray-900 bg-gradient-to-b from-white via-slate-50 to-slate-100">
      {/* Nav */}
      <header className="fixed w-full z-40">
        <div className="backdrop-blur bg-white/60 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <a href="#hero" className="flex items-center gap-2">
                <img src="/logos/logo.png" alt="Bleu Meridian Technologies" className="h-10 w-auto" />
                <div>
                  <div className="text-sm font-bold text-slate-900">Bleu Meridian</div>
                  <div className="text-xs text-slate-600 -mt-0.5">Technologies</div>
                </div>
              </a>

              <nav className="hidden lg:flex items-center gap-2">
                {['Services', 'About', 'Work', 'Partners', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-3 py-2 text-sm rounded-lg hover:bg-slate-100 transition"
                  >
                    {item}
                  </a>
                ))}
                <a href="#contact" className="ml-2 inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 text-sm rounded-xl shadow-lg hover:bg-indigo-700 transition">
                  Get Started <ArrowRight className="w-3 h-3" />
                </a>
              </nav>

              <div className="lg:hidden">
                <button onClick={() => setOpenMenu((s) => !s)} className="p-2 bg-white rounded-xl shadow-sm border">
                  {openMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {openMenu && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="lg:hidden bg-white/95 border-b border-slate-200">
            <div className="px-6 py-4 space-y-2">
              {['Services', 'About', 'Work', 'Partners', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenMenu(false);
                    document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block py-3 px-4 rounded-lg hover:bg-slate-50"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </header>

      {/* Hero */}
      <main className="pt-28">
        <section id="hero" className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6">
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
                  <div className="inline-flex items-center gap-3 bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full mb-6 shadow-sm">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse"></span>
                    Trusted by teams worldwide
                  </div>

                  <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">We build elegant software that scales — <span className="text-indigo-600">from idea to impact</span></h1>

                  <p className="mt-6 text-lg text-slate-600 max-w-xl">At Bleu Meridian, we specialize in creating powerful online experiences for our clients. We deliver customized solutions that not only enhance visibility but also drive growth and efficiency in their operations.</p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a href="#contact" className="inline-flex items-center gap-3 bg-indigo-600 text-white px-5 py-3 rounded-2xl shadow-lg hover:bg-indigo-700 transition">
                      Start your project <ArrowRight className="w-4 h-4" />
                    </a>
                    <a href="#work" className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl border border-slate-200 hover:bg-slate-50 transition">View work</a>
                  </div>

                  <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-md">
                    <div className="text-sm">
                      <div className="text-2xl font-bold text-indigo-600">
                        <AnimatedCounter end="50" suffix="+" />
                      </div>
                      <div className="text-slate-500">Projects</div>
                    </div>
                    <div className="text-sm">
                      <div className="text-2xl font-bold text-indigo-600">
                        <AnimatedCounter end="30" suffix="+" />
                      </div>
                      <div className="text-slate-500">Clients</div>
                    </div>
                    <div className="text-sm">
                      <div className="text-2xl font-bold text-indigo-600">
                        <AnimatedCounter end="5" suffix="+" />
                      </div>
                      <div className="text-slate-500">Years</div>
                    </div>
                    <div className="text-sm">
                      <div className="text-2xl font-bold text-indigo-600">
                        <AnimatedCounter end="99" suffix="%" />
                      </div>
                      <div className="text-slate-500">Satisfaction</div>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="lg:col-span-6 relative">
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 }} className="rounded-3xl overflow-hidden shadow-2xl">
                  <div className="relative h-72 md:h-96 lg:h-[520px] bg-slate-100">
                    {/* background image */}
                    <img src="/logos/homepagepic.png" alt="team" className="object-cover w-full h-full" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="mt-20 mb-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">What we do</h2>
              <p className="mt-3 text-slate-600 max-w-2xl mx-auto">End-to-end product design and engineering for teams that want to move fast and ship quality.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {services.map((s, i) => (
                <motion.div key={i} whileHover={{ y: -6 }} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                  <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 mb-4">{s.icon}</div>
                  <div className="font-semibold">{s.title}</div>
                  <div className="mt-2 text-sm text-slate-500">{s.subtitle}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full mb-6">
                  <Users className="w-4 h-4" />
                  <span className="text-sm font-semibold">About Us</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                  Who We Are
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Bleu Meridian Technologies is a leading software development company based in Nigeria, specializing in building cutting-edge digital solutions for businesses across Africa and beyond.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Founded with a vision to bridge the technology gap, we combine global best practices with local expertise to deliver world-class software products. Our team of expert developers, designers, and strategists work collaboratively to transform ideas into powerful digital experiences.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-indigo-600 mb-2">2019</div>
                    <div className="text-slate-600">Year Founded</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-indigo-600 mb-2">20+</div>
                    <div className="text-slate-600">Team Members</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/logos/why-choose-us.png"
                    alt="Bleu Meridian Team"
                    className="w-full h-[500px] object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why choose - Redesigned */}
        <section className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full mb-6"
              >
                <Award className="w-4 h-4" />
                <span className="text-sm font-semibold">Why Choose Us</span>
              </motion.div>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
                Built for <span className="text-indigo-600">Excellence</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                We don't just write code — we engineer scalable solutions. Our team combines cutting-edge technology with proven methodologies to deliver products that drive real business impact.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {[
                { num: '50+', label: 'Projects Delivered', icon: <Target className="w-6 h-6" /> },
                { num: '98%', label: 'Client Satisfaction', icon: <Award className="w-6 h-6" /> },
                { num: '24/7', label: 'Support Available', icon: <Shield className="w-6 h-6" /> },
                { num: '5+', label: 'Years Experience', icon: <TrendingUp className="w-6 h-6" /> }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg hover:shadow-xl transition-shadow text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-indigo-600 mb-1">{stat.num}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Features with better messaging */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: <Users className="w-6 h-6" />,
                  title: 'Expert Team',
                  desc: 'Product managers, designers, and senior engineers working as one cohesive unit',
                  color: 'from-blue-500 to-indigo-600'
                },
                {
                  icon: <Zap className="w-6 h-6" />,
                  title: 'Rapid Deployment',
                  desc: 'Agile sprints with continuous delivery — see progress every week, not every quarter',
                  color: 'from-purple-500 to-pink-600'
                },
                {
                  icon: <Shield className="w-6 h-6" />,
                  title: 'Enterprise Security',
                  desc: 'Security-first architecture with threat modeling, audits, and compliance built in',
                  color: 'from-green-500 to-emerald-600'
                }
              ].map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  whileHover={{ y: -8 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl blur-xl"
                       style={{ background: `linear-gradient(to right, ${f.color})` }}></div>
                  <div className="relative bg-white rounded-2xl p-8 border border-slate-200 shadow-lg hover:shadow-2xl transition-all h-full">
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${f.color} text-white mb-4 shadow-lg`}>
                      {f.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tech Stack with animations */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-3">Our Tech Stack</h3>
              <p className="text-slate-600">Modern, battle-tested technologies for scalable solutions</p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {tech.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.1,
                    type: "spring",
                    stiffness: 200,
                    damping: 10
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                  className="group relative"
                >
                  <div className="bg-indigo-600 rounded-2xl px-6 py-4 shadow-lg hover:shadow-2xl transition-all cursor-pointer">
                    <span className="text-white font-semibold">{t.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Work - Portfolio */}
        <section id="projects" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-6"
              >
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-semibold">Our Work</span>
              </motion.div>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
                Projects We're <span className="text-indigo-600">Proud Of</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                From enterprise systems to consumer apps, we've delivered solutions that drive growth and delight users.
              </p>
            </div>

            {/* Project Cards Grid - Flip Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative h-[550px]"
                  style={{ perspective: '1000px' }}
                >
                  <motion.div
                    className="relative w-full h-full cursor-pointer"
                    style={{ transformStyle: 'preserve-3d' }}
                    animate={{ rotateY: flippedProject === i ? 180 : 0 }}
                    transition={{ duration: 0.6 }}
                    onClick={() => setFlippedProject(flippedProject === i ? null : i)}
                  >
                    {/* Front of Card */}
                    <div
                      className="absolute w-full h-full bg-white rounded-2xl overflow-hidden shadow-lg"
                      style={{ backfaceVisibility: 'hidden' }}
                    >
                      {/* Image Container */}
                      <div className="relative h-64 overflow-hidden bg-slate-200">
                        <img
                          src={project.image}
                          alt={project.title}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                        {/* Category Badge */}
                        <div className="absolute top-4 right-4">
                          <span className="bg-white/90 backdrop-blur text-indigo-600 text-xs font-semibold px-3 py-1.5 rounded-full">
                            {project.category}
                          </span>
                        </div>

                        {/* Bottom overlay text */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                          <p className="text-sm text-white/90">{project.client}</p>
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="p-6">
                        <p className="text-slate-600 text-sm leading-relaxed mb-4">
                          {project.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* View Case Study Button */}
                        <div className="flex items-center gap-2 text-indigo-600 font-semibold text-sm">
                          <span>Click to view case study</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    {/* Back of Card */}
                    <div
                      className="absolute w-full h-full bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl overflow-hidden shadow-lg p-6"
                      style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                    >
                      <div className="flex flex-col h-full text-white justify-center">
                        {/* Header */}
                        <div className="mb-6">
                          <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                          <p className="text-indigo-100 text-sm">{project.client}</p>
                        </div>

                        {/* Challenge */}
                        <div className="mb-6">
                          <div className="flex items-center gap-2 mb-3">
                            <Target className="w-5 h-5" />
                            <h4 className="font-bold text-lg">The Challenge</h4>
                          </div>
                          <p className="text-white/90 text-sm leading-relaxed">
                            {project.challenge}
                          </p>
                        </div>

                        {/* Solution */}
                        <div className="mb-6">
                          <div className="flex items-center gap-2 mb-3">
                            <Code2 className="w-5 h-5" />
                            <h4 className="font-bold text-lg">Our Solution</h4>
                          </div>
                          <p className="text-white/90 text-sm leading-relaxed">
                            {project.solution}
                          </p>
                        </div>

                        {/* Click to flip back */}
                        <div className="mt-auto pt-4 border-t border-white/20 text-center">
                          <span className="text-sm text-white/80">Click to flip back</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* Work / Process */}
        <section id="work" className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">How we work</h2>
              <p className="mt-3 text-slate-600 max-w-2xl mx-auto">A pragmatic, iterative process that keeps stakeholders aligned and reduces risk.</p>
            </div>

            {/* Flip cards - Desktop and Mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[{
                step: 'Discovery',
                desc: 'Workshops, discovery and alignment',
                details: 'We dive deep into understanding your business goals, user needs, and technical requirements. Through collaborative workshops and stakeholder interviews, we align on vision and define success metrics.',
                icon: <Target className="w-8 h-8" />
              },{
                step: 'Design',
                desc: 'Prototypes, user testing and final specs',
                details: 'Our design team creates interactive prototypes and validates them with real users. We iterate based on feedback and deliver pixel-perfect designs with comprehensive specifications for development.',
                icon: <TrendingUp className="w-8 h-8" />
              },{
                step: 'Build',
                desc: 'Sprints, automation and continuous delivery',
                details: 'Development happens in focused sprints with continuous integration and deployment. We ship working software regularly, gather feedback, and adapt quickly to changing requirements.',
                icon: <Code2 className="w-8 h-8" />
              },{
                step: 'Launch & Support',
                desc: 'Deployment, monitoring and optimization',
                details: 'We ensure a smooth launch with comprehensive testing and deployment. Post-launch, we monitor performance, gather user feedback, and provide ongoing support and optimization to maximize success.',
                icon: <Award className="w-8 h-8" />
              }].map((p, i) => (
                <motion.div
                  key={i}
                  className="relative h-80 cursor-pointer"
                  style={{ perspective: '1000px' }}
                  onHoverStart={() => setFlippedWorkCard(i)}
                  onHoverEnd={() => setFlippedWorkCard(null)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <motion.div
                    className="relative w-full h-full"
                    style={{ transformStyle: 'preserve-3d' }}
                    animate={{ rotateY: flippedWorkCard === i ? 180 : 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    {/* Front of card */}
                    <div
                      className="absolute w-full h-full bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-3xl p-8 text-white shadow-xl"
                      style={{ backfaceVisibility: 'hidden' }}
                    >
                      <div className="flex flex-col items-center justify-center h-full text-center">
                        <div className="mb-4 p-4 bg-white/10 rounded-2xl backdrop-blur">{p.icon}</div>
                        <div className="text-3xl font-bold mb-3">{p.step}</div>
                        <div className="text-indigo-100">{p.desc}</div>
                        <div className="mt-6 text-sm text-indigo-200">Hover to learn more</div>
                      </div>
                    </div>

                    {/* Back of card */}
                    <div
                      className="absolute w-full h-full bg-white rounded-3xl p-8 border border-slate-100 shadow-xl"
                      style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                    >
                      <div className="flex flex-col h-full">
                        <div className="text-2xl font-bold text-indigo-600 mb-4">{p.step}</div>
                        <div className="text-slate-600 leading-relaxed flex-1">{p.details}</div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners */}
        <section id="partners" className="py-16 bg-slate-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold">Technology and delivery partners</h3>
              <p className="mt-3 text-slate-600 max-w-2xl mx-auto">Trusted by leading organizations across Nigeria</p>
            </div>

            {/* Infinite scrolling carousel */}
            <div className="relative">
              <div className="overflow-hidden">
                <motion.div
                  className="flex gap-8 md:gap-12 items-center"
                  animate={{
                    x: ['0%', '-50%'],
                  }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 12,
                      ease: "linear",
                    },
                  }}
                >
                  {/* First set of logos */}
                  {partners.concat(partners).map((partner, i) => (
                    <div
                      key={`logo-${i}`}
                      className="flex-shrink-0 bg-white rounded-xl px-6 py-4 md:px-8 md:py-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex flex-col items-center gap-2">
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="h-10 md:h-12 w-auto object-contain"
                          style={{ minWidth: '100px' }}
                        />
                        {partner.name !== 'NNPC' && (
                          <span className="text-xs md:text-sm font-medium text-slate-700">{partner.name}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-3xl p-8 lg:p-12 text-white shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-3xl font-bold">Let's build something together</h3>
                  <p className="mt-3 text-indigo-100">Share a few details and we'll propose a tailored plan.</p>

                  <div className="mt-8 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-md bg-white/10 flex items-center justify-center"><Mail className="w-4 h-4" /></div>
                      <div>
                        <div className="text-sm font-semibold">Email</div>
                        <div className="text-sm text-indigo-100">info@bleumeridiantech.com</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-md bg-white/10 flex items-center justify-center"><Phone className="w-4 h-4" /></div>
                      <div>
                        <div className="text-sm font-semibold">Phone</div>
                        <div className="text-sm text-indigo-100">+2348033636707</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-md bg-white/10 flex items-center justify-center"><MapPin className="w-4 h-4" /></div>
                      <div>
                        <div className="text-sm font-semibold">Location</div>
                        <div className="text-sm text-indigo-100">Abuja, Nigeria</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input 
                        className="w-full px-4 py-3 rounded-xl text-slate-800" 
                        placeholder="Full name" 
                        type="text"
                        name="name"
                        required
                      />
                      <input 
                        className="w-full px-4 py-3 rounded-xl text-slate-800" 
                        placeholder="Email address" 
                        type="email"
                        name="email"
                        required
                      />
                    </div>
                    <input 
                      className="w-full px-4 py-3 rounded-xl text-slate-800" 
                      placeholder="Company" 
                      type="text"
                      name="company"
                      required
                    />
                    <textarea 
                      rows={4} 
                      className="w-full px-4 py-3 rounded-xl text-slate-800" 
                      placeholder="Project details" 
                      name="message"
                      required
                    />
                    <ValidationError 
                      prefix="Name" 
                      field="name" 
                      errors={state.errors}
                      className="text-red-500 text-sm mt-1"
                    />
                    <ValidationError 
                      prefix="Email" 
                      field="email" 
                      errors={state.errors}
                      className="text-red-500 text-sm mt-1"
                    />
                    <ValidationError 
                      prefix="Company" 
                      field="company" 
                      errors={state.errors}
                      className="text-red-500 text-sm mt-1"
                    />
                    <ValidationError 
                      prefix="Message" 
                      field="message" 
                      errors={state.errors}
                      className="text-red-500 text-sm mt-1"
                    />
                    <button 
                      type="submit" 
                      disabled={state.submitting}
                      className="w-full inline-flex items-center justify-center gap-3 bg-white text-indigo-700 font-semibold px-5 py-3 rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {state.submitting ? 'Sending...' : 'Send message'} 
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                  
                  {/* Success Message */}
                  {state.succeeded && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.95 }}
                      className="mt-6 bg-green-50 border border-green-200 rounded-2xl p-6 shadow-lg"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                            <Check className="w-6 h-6 text-green-600" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-green-800 mb-1">Message Sent Successfully!</h4>
                          <p className="text-green-700">
                            Thank you for reaching out! We have received your message and will get back to you within 24 hours.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
              {/* Company Info */}
              <div className="lg:col-span-1">
                <img src="/logos/logo.png" alt="Bleu Meridian" className="h-16 w-auto mb-4" />
                <p className="text-slate-400 text-sm leading-relaxed">
                  Building elegant software that scales — from idea to impact. We partner with ambitious organisations to deliver modern digital products.
                </p>
                <div className="flex gap-3 mt-6">
                  <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-indigo-600 flex items-center justify-center transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-indigo-600 flex items-center justify-center transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-indigo-600 flex items-center justify-center transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-indigo-600 flex items-center justify-center transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Services */}
              <div>
                <h4 className="font-semibold text-lg mb-4">Services</h4>
                <ul className="space-y-3">
                  <li><a href="#services" onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-slate-400 hover:text-white transition-colors cursor-pointer">Custom Software</a></li>
                  <li><a href="#services" onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-slate-400 hover:text-white transition-colors cursor-pointer">Cloud & DevOps</a></li>
                  <li><a href="#services" onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-slate-400 hover:text-white transition-colors cursor-pointer">Data & Analytics</a></li>
                  <li><a href="#services" onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-slate-400 hover:text-white transition-colors cursor-pointer">Cybersecurity</a></li>
                  <li><a href="#services" onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-slate-400 hover:text-white transition-colors cursor-pointer">Mobile Development</a></li>
                  <li><a href="#services" onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-slate-400 hover:text-white transition-colors cursor-pointer">Web Development</a></li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="font-semibold text-lg mb-4">Company</h4>
                <ul className="space-y-3">
                  <li><a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-slate-400 hover:text-white transition-colors cursor-pointer">About Us</a></li>
                  <li><a href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-slate-400 hover:text-white transition-colors cursor-pointer">Our Work</a></li>
                  <li><a href="#work" onClick={(e) => { e.preventDefault(); document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-slate-400 hover:text-white transition-colors cursor-pointer">How We Work</a></li>
                  <li><a href="#partners" onClick={(e) => { e.preventDefault(); document.getElementById('partners')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-slate-400 hover:text-white transition-colors cursor-pointer">Partners</a></li>
                  <li><a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-slate-400 hover:text-white transition-colors cursor-pointer">Contact</a></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="font-semibold text-lg mb-4">Get in Touch</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-indigo-400 mt-0.5" />
                    <div>
                      <div className="text-sm text-slate-400">Email</div>
                      <a href="mailto:info@bleumeridiantech.com" className="text-white hover:text-indigo-400 transition-colors">info@bleumeridiantech.com</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-indigo-400 mt-0.5" />
                    <div>
                      <div className="text-sm text-slate-400">Phone</div>
                      <a href="tel:+2348033636707" className="text-white hover:text-indigo-400 transition-colors">+2348033636707</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-indigo-400 mt-0.5" />
                    <div>
                      <div className="text-sm text-slate-400">Location</div>
                      <div className="text-white">Abuja, Nigeria</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-800 pt-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-sm text-slate-400">
                  © {new Date().getFullYear()} Bleu Meridian Technologies. All rights reserved.
                </div>
                <div className="flex gap-6 text-sm">
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">Cookie Policy</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
