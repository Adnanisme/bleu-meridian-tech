import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { partners } from '../../data/partners';

function useNoiseTexture() {
  const [dataUrl, setDataUrl] = useState('');
  useEffect(() => {
    const size = 200;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    const imageData = ctx.createImageData(size, size);
    for (let i = 0; i < imageData.data.length; i += 4) {
      const v = Math.random() * 255;
      imageData.data[i] = v;
      imageData.data[i + 1] = v;
      imageData.data[i + 2] = v;
      imageData.data[i + 3] = 255;
    }
    ctx.putImageData(imageData, 0, 0);
    setDataUrl(canvas.toDataURL('image/png'));
  }, []);
  return dataUrl;
}

export default function Partners() {
  const noiseUrl = useNoiseTexture();

  return (
    <section id="partners" className="py-28 lg:py-36 bg-white relative">
      {/* Film grain texture */}
      {noiseUrl && (
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.07]"
          style={{ backgroundImage: `url(${noiseUrl})`, backgroundRepeat: 'repeat' }}
        />
      )}

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-brand-mid font-semibold text-xs tracking-[0.2em] uppercase mb-4">Trusted by</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 tracking-tight">
            Global Partners
          </h2>
        </motion.div>

        {/* Logo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 lg:gap-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group flex flex-col items-center justify-center p-5 lg:p-6 rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all duration-300 bg-white"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                loading="lazy"
                className="h-10 lg:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <span className="mt-3 text-[11px] font-medium text-slate-400 group-hover:text-slate-600 transition-colors text-center leading-tight">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
