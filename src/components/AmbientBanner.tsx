import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, HeartHandshake } from 'lucide-react';

interface AmbientBannerProps {
  imageUrl: string;
  alt?: string;
  badgeText: string;
  quote: string;
  subtitle: string;
  icon?: 'sparkles' | 'heart';
}

export default function AmbientBanner({
  imageUrl,
  badgeText,
  quote,
  subtitle,
  icon = 'sparkles'
}: AmbientBannerProps) {
  const Icon = icon === 'heart' ? HeartHandshake : Sparkles;

  return (
    <section
      className="relative w-full h-[60vh] bg-cover bg-center bg-no-repeat bg-fixed overflow-hidden"
      style={{ backgroundImage: `url("${imageUrl}")` }}
    >
      {/* Overlay para legibilidad y tono corporativo */}
      <div className="absolute inset-0 bg-brand-graphite/40" />
      <div className="absolute inset-0 bg-brand-aqua/20 mix-blend-multiply" />

      {/* Contenido centrado vertical y horizontalmente con animación suave de entrada */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 text-center text-white space-y-4 max-w-3xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider border border-white/30">
          <Icon className="w-3.5 h-3.5 text-white" />
          <span>{badgeText}</span>
        </div>
        <p className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight leading-snug drop-shadow-sm">
          "{quote}"
        </p>
        <p className="text-sm sm:text-base text-white/90 max-w-xl mx-auto font-normal">
          {subtitle}
        </p>
      </motion.div>
    </section>
  );
}
