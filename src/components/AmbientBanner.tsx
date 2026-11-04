import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, HeartHandshake } from 'lucide-react';

interface AmbientBannerProps {
  imageUrl: string;
  alt: string;
  badgeText: string;
  quote: string;
  subtitle: string;
  icon?: 'sparkles' | 'heart';
}

export default function AmbientBanner({
  imageUrl,
  alt,
  badgeText,
  quote,
  subtitle,
  icon = 'sparkles'
}: AmbientBannerProps) {
  const Icon = icon === 'heart' ? HeartHandshake : Sparkles;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="relative overflow-hidden py-24 sm:py-28 min-h-[360px] flex items-center justify-center text-center"
    >
      {/* Fotografía de fondo */}
      <img
        src={imageUrl}
        alt={alt}
        width={1920}
        height={800}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      {/* Overlay con brand-aqua al 20% y contraste para legibilidad limpia */}
      <div className="absolute inset-0 bg-brand-graphite/45 mix-blend-multiply pointer-events-none" />
      <div className="absolute inset-0 bg-brand-aqua/20 pointer-events-none" />

      {/* Contenido textual con animación de entrada */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-white space-y-4">
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
      </div>
    </motion.section>
  );
}
