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
          {/* Badge Acreditativo */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-100/90 text-brand-800 text-xs sm:text-sm font-medium mb-6 border border-brand-200">
            <ShieldCheck className="w-4 h-4 text-brand-600" />
            <span>Psicóloga Sanitaria Colegiada · Especialista en EMDR y Trauma</span>
          </motion.div>

          {/* Titular Principal */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-slateText-dark leading-[1.14]"
          >
            Psicología para vivir <br />
            <span className="font-semibold text-brand-700">centro de Luisa Cofrades</span>
          </motion.h1>

          {/* Subtítulo Empático */}
          <motion.p 
            variants={itemVariants}
            className="mt-6 text-lg sm:text-xl text-slateText-muted leading-relaxed font-normal"
          >
            ¿Cómo podemos ayudarte? Equipo especializado en trauma y experiencias adversas con consultas en <strong>Salamanca</strong> y <strong>Zamora</strong>, y atención <strong>online</strong>.
          </motion.p>

          {/* Bloque de CTAs */}
          <motion.div variants={itemVariants} className="mt-8 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-medium shadow-soft-elevation hover:shadow-card-hover transition-all duration-300 group"
            >
              <Calendar className="w-5 h-5 text-brand-200 group-hover:scale-110 transition-transform" />
              <span>Solicitar primera consulta</span>
            </a>

            <a
              href="#tarifas"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-sand-100 text-slateText-dark font-medium border border-sand-200 transition-colors duration-200"
            >
              <span>Ver tarifas</span>
            </a>

            <a
              href="tel:+34675809974"
              className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-brand-700 hover:text-brand-800 font-semibold text-sm transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-brand-600" />
              <span>675 80 99 74</span>
            </a>
          </motion.div>

          {/* Píldoras de Confianza */}
          <motion.div variants={itemVariants} className="mt-10 pt-6 border-t border-sand-200/80 flex flex-wrap gap-5 text-xs sm:text-sm text-slateText-muted">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-500"></span>
              <span>Enfoque sensible al trauma</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-500"></span>
              <span>Infanto/juvenil, adultos y pareja</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-500"></span>
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
            
            {/* Halo decorativo de fondo */}
            <div className="absolute -inset-3 bg-gradient-to-tr from-brand-200/40 via-sand-200/40 to-brand-100/30 rounded-3xl blur-2xl -z-10"></div>

            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-card-hover border border-sand-200 overflow-hidden">
              
              {/* Imagen de la taza y la vela */}
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-sand-100">
                <img
                  src="/assets/media/tacita.jpeg"
                  alt="Espacio terapéutico de Psicología para vivir con taza y vela"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slateText-dark/55 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-medium text-white">
                    <Sparkles className="w-3.5 h-3.5 text-brand-200" />
                    <span>Psicología para vivir · Luisa Cofrades</span>
                  </div>
                </div>
              </div>

              {/* Texto exacto de la clienta */}
              <div className="mt-5 pt-1 space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-700">
                  <HeartHandshake className="w-4 h-4 text-brand-600" />
                  <span>Nuestro Enfoque Terapéutico</span>
                </div>
                <p className="text-xs sm:text-sm text-slateText-base leading-relaxed text-justify sm:text-left">
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
