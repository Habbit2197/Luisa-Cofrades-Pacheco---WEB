import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ShieldCheck, HeartHandshake, PhoneCall, Sparkles } from 'lucide-react';

export default function HeroMotion() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.21, 0.47, 0.32, 0.98]
      }
    }
  };

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-28 lg:pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        
        {/* Contenido textual principal */}
        <motion.div
          className="lg:col-span-6 text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Vídeo Animado del Logotipo que corona el Hero */}
          <motion.div variants={itemVariants}>
            <video 
              src="/assets/branding/entrada_logo.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-64 sm:w-80 md:w-96 h-auto object-contain mb-8 mix-blend-multiply" 
            />
          </motion.div>

          {/* Badge Acreditativo */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-aqua/10 text-brand-aqua text-xs sm:text-sm font-semibold mb-6 border border-brand-aqua/25">
            <ShieldCheck className="w-4 h-4 text-brand-aqua" />
            <span>Psicóloga Sanitaria Colegiada · Especialista en EMDR y Trauma</span>
          </motion.div>

          {/* Titular Principal */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-brand-graphite leading-[1.14]"
          >
            Psicología para vivir <br />
            <span className="font-semibold text-brand-aqua">centro de Luisa Cofrades</span>
          </motion.h1>

          {/* Subtítulo Empático */}
          <motion.p 
            variants={itemVariants}
            className="mt-6 text-lg sm:text-xl text-brand-graphite/80 leading-relaxed font-normal"
          >
            ¿Cómo podemos ayudarte? Equipo especializado en trauma y experiencias adversas con consulta en <strong>Salamanca Centro</strong> y atención <strong>online</strong>. Mirada sistémica, humanista e integrativa.
          </motion.p>

          {/* Bloque de CTAs */}
          <motion.div variants={itemVariants} className="mt-8 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-brand-aqua hover:bg-brand-aqua-hover text-white font-medium shadow-sm hover:shadow-card-hover transition-all duration-300 group"
            >
              <Calendar className="w-5 h-5 text-white/90 group-hover:scale-110 transition-transform" />
              <span>Solicitar primera consulta</span>
            </a>

            <a
              href="#tarifas"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-gray-50 text-brand-graphite font-medium border border-gray-200 shadow-sm transition-colors duration-200"
            >
              <span>Ver tarifas</span>
            </a>

            <a
              href="tel:+34675809974"
              aria-label="Llamar por teléfono al 675 80 99 74"
              className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-brand-aqua hover:text-brand-aqua-dark font-semibold text-sm transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-brand-aqua" />
              <span>675 80 99 74</span>
            </a>
          </motion.div>

          {/* Píldoras de Confianza */}
          <motion.div variants={itemVariants} className="mt-10 pt-6 border-t border-gray-100 flex flex-wrap gap-5 text-xs sm:text-sm text-brand-graphite/70">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-aqua"></span>
              <span>Enfoque sensible al trauma</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-violet"></span>
              <span>Infanto/juvenil, adultos y pareja</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-sky"></span>
              <span>Presencial y online</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Tarjeta Visual con la imagen de la taza y vela + Texto de Enfoque Terapéutico */}
        <motion.div
          className="lg:col-span-6"
          initial={{ opacity: 0, scale: 0.96, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="relative mx-auto max-w-lg lg:max-w-none">
            
            {/* Halo decorativo de fondo con tonos del logotipo */}
            <div className="absolute -inset-3 bg-gradient-to-tr from-accent-sky/20 via-brand-aqua/15 to-accent-fuchsia/15 rounded-3xl blur-2xl -z-10"></div>

            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-card-hover border border-gray-100 overflow-hidden transition-shadow">
              
              {/* Imagen de la taza y la vela */}
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-gray-50 border border-gray-100">
                <img
                  src="/assets/media/tacita.jpeg"
                  alt="Espacio terapéutico de Psicología para vivir con taza y vela"
                  width={800}
                  height={500}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-aqua/90 backdrop-blur-md text-xs font-medium text-white shadow-sm">
                    <Sparkles className="w-3.5 h-3.5 text-white" />
                    <span>Psicología para vivir · Luisa Cofrades</span>
                  </div>
                </div>
              </div>

              {/* Texto exacto de la clienta */}
              <div className="mt-5 pt-1 space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-aqua">
                  <HeartHandshake className="w-4 h-4 text-brand-aqua" />
                  <span>Nuestro Enfoque Terapéutico</span>
                </div>
                <p className="text-xs sm:text-sm text-brand-graphite leading-relaxed text-justify sm:text-left">
                  En Psicología para vivir nuestro enfoque terapéutico es humanista, integrativo, sistémico y sensible al trauma. Trabajamos considerando todos los aspectos de tu ser -emoción, cuerpo, mente y espíritu- no solo para que puedas procesar lo que necesites, sino para que puedas generar nuevas perspectivas y mecanismos de afrontamiento y gestionar el asunto en cuestión, y la vida en general, de una manera más saludable y amorosa para ti. Trabajamos infanto/juvenil, adultos y pareja de forma presencial como online.
                </p>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </div>
  );
}
