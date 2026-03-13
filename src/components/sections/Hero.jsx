import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

function FloatingTriangle({ className, delay = 0, duration = 20, size = 120, opacity = 0.08 }) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: delay + 0.5, duration: 1.5 }}
    >
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        animate={{ rotate: [0, 360] }}
        transition={{ duration, repeat: Infinity, ease: 'linear' }}
      >
        <path
          d="M60 10L110 100H10L60 10Z"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          style={{ opacity }}
        />
      </motion.svg>
    </motion.div>
  );
}

function FloatingDiamond({ className, delay = 0, duration = 25, size = 80, opacity = 0.1 }) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: delay + 0.5, duration: 1.5 }}
    >
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 80 80"
        fill="none"
        animate={{ rotate: [45, 405] }}
        transition={{ duration, repeat: Infinity, ease: 'linear' }}
      >
        <rect
          x="10"
          y="10"
          width="60"
          height="60"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          style={{ opacity }}
        />
      </motion.svg>
    </motion.div>
  );
}

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();

    // Create subtle grid nodes
    const cols = Math.floor(canvas.offsetWidth / 80);
    const rows = Math.floor(canvas.offsetHeight / 80);
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        particles.push({
          x: (i + 0.5) * 80 + (Math.random() - 0.5) * 30,
          y: (j + 0.5) * 80 + (Math.random() - 0.5) * 30,
          baseX: (i + 0.5) * 80,
          baseY: (j + 0.5) * 80,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          radius: Math.random() * 1.2 + 0.4,
        });
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      // Move particles gently
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        const dx = p.x - p.baseX;
        const dy = p.y - p.baseY;
        if (Math.abs(dx) > 25) p.vx *= -1;
        if (Math.abs(dy) > 25) p.vy *= -1;
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            const alpha = (1 - dist / 100) * 0.06;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(125, 211, 252, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw dots
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.fillStyle = 'rgba(125, 211, 252, 0.15)';
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      cancelAnimationFrame(animationId);
      particles = [];
      resize();
      const newCols = Math.floor(canvas.offsetWidth / 80);
      const newRows = Math.floor(canvas.offsetHeight / 80);
      for (let i = 0; i < newCols; i++) {
        for (let j = 0; j < newRows; j++) {
          particles.push({
            x: (i + 0.5) * 80 + (Math.random() - 0.5) * 30,
            y: (j + 0.5) * 80 + (Math.random() - 0.5) * 30,
            baseX: (i + 0.5) * 80,
            baseY: (j + 0.5) * 80,
            vx: (Math.random() - 0.5) * 0.15,
            vy: (Math.random() - 0.5) * 0.15,
            radius: Math.random() * 1.2 + 0.4,
          });
        }
      }
      draw();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-navy-950">
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-800/50 via-navy-950 to-navy-950" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand-mid/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-brand-light/3 rounded-full blur-[100px]" />

      {/* Canvas mesh */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Floating geometric shapes */}
      <FloatingTriangle className="text-brand-light top-[15%] left-[8%]" delay={0} duration={30} size={100} opacity={0.06} />
      <FloatingTriangle className="text-brand-mid top-[60%] right-[12%]" delay={0.5} duration={25} size={140} opacity={0.04} />
      <FloatingDiamond className="text-brand-light top-[25%] right-[20%]" delay={0.3} duration={35} size={70} opacity={0.07} />
      <FloatingDiamond className="text-brand-mid bottom-[20%] left-[15%]" delay={0.8} duration={28} size={90} opacity={0.05} />
      <FloatingTriangle className="text-brand-glow top-[45%] left-[50%]" delay={1} duration={40} size={60} opacity={0.04} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-0 w-full">
        <div className="max-w-3xl mx-auto text-center lg:text-left lg:mx-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1] }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
              <span className="block">Built to be used.</span>
              <span className="block mt-1 bg-gradient-to-r from-brand-light via-brand-mid to-brand-light bg-clip-text text-transparent">
                Built to last.
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0, 1] }}
            className="mt-6 text-lg sm:text-xl text-white/50 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light"
          >
            We design and engineer software, apps, and platforms that real people rely on — every day.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0, 1] }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="group inline-flex items-center justify-center gap-3 bg-brand-mid hover:bg-brand-mid/90 text-white font-medium px-7 py-3.5 rounded-lg transition-all duration-300"
            >
              Start a project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#work"
              onClick={(e) => { e.preventDefault(); document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-flex items-center justify-center gap-2 text-white/60 hover:text-white font-medium px-7 py-3.5 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              See our work
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
