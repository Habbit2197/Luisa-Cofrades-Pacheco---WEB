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
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 lg:pt-32 lg:pb-28">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Contenido textual principal */}
        <motion.div
          className="lg:col-span-7 text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge Acreditativo */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-100/90 text-brand-800 text-xs sm:text-sm font-medium mb-6 border border-brand-200">
            <ShieldCheck className="w-4 h-4 text-brand-600" />
            <span>Psicóloga Sanitaria Colegiada · Especialista en EMDR y Trauma</span>
          </motion.div>

          {/* Titular Emocional de Alto Impacto */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-slateText-dark leading-[1.12]"
          >
            Un lugar sereno donde <br />
            <span className="font-semibold text-brand-700">sanar, comprenderte y avanzar</span>
          </motion.h1>

          {/* Subtítulo Empático */}
          <motion.p 
            variants={itemVariants}
            className="mt-6 text-lg sm:text-xl text-slateText-muted leading-relaxed max-w-2xl font-normal"
          >
            Acompañamiento psicoterapéutico profesional y cercano en <strong>Salamanca</strong>, <strong>Zamora</strong> y en <strong>modalidad online</strong>. Aplicamos terapias basadas en la evidencia como EMDR y Terapia Sensoriomotriz para superar la ansiedad, el dolor emocional y el trauma.
          </motion.p>

          {/* Bloque de CTAs */}
          <motion.div variants={itemVariants} className="mt-10 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-medium shadow-soft-elevation hover:shadow-card-hover transition-all duration-300 group"
            >
              <Calendar className="w-5 h-5 text-brand-200 group-hover:scale-110 transition-transform" />
              <span>Solicitar primera consulta</span>
            </a>

            <a
              href="tel:+34675809974"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-white hover:bg-sand-100 text-slateText-dark font-medium border border-sand-200 transition-colors duration-200"
            >
              <PhoneCall className="w-4 h-4 text-brand-600" />
              <span>675 80 99 74</span>
            </a>
          </motion.div>

          {/* Píldoras de Confianza */}
          <motion.div variants={itemVariants} className="mt-12 pt-8 border-t border-sand-200/80 flex flex-wrap gap-6 text-xs sm:text-sm text-slateText-muted">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-500"></span>
              <span>Atención 100% individualizada</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-500"></span>
              <span>Confidencialidad sanitaria rigurosa</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-500"></span>
              <span>Consultas presenciales y online</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Tarjeta Visual Envolvente con Fotografía del Espacio Clínico */}
        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
        >
          <div className="relative mx-auto max-w-md lg:max-w-none">
            
            {/* Halo decorativo de fondo */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-brand-200/50 to-sand-200/50 rounded-3xl blur-2xl -z-10"></div>

            <div className="relative bg-white rounded-3xl p-4 shadow-card-hover border border-sand-200 overflow-hidden">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-sand-100">
                <img
                  src="/assets/media/consulta-1.jpg"
                  alt="Consulta de Psicología de Luisa Cofrades"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slateText-dark/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-medium text-white mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-brand-200" />
                    <span>Espacio de escucha y calma</span>
                  </div>
                  <p className="text-sm font-light text-sand-50">Consulta en Salamanca Centro y Roelos de Sayago (Zamora)</p>
                </div>
              </div>

              {/* Cita empática enmarcada */}
              <div className="p-5">
                <div className="flex items-center gap-3">
                  <img
                    src="/assets/branding/logo-luisa-positivo404x.png"
                    alt="Luisa Cofrades"
                    className="h-9 object-contain"
                  />
                  <div className="border-l border-sand-200 pl-3">
                    <p className="text-xs font-semibold text-slateText-dark">Luisa Cofrades</p>
                    <p className="text-[11px] text-slateText-muted">Psicóloga Sanitaria · Docente USAL</p>
                  </div>
                </div>
                <p className="mt-3 text-xs text-slateText-muted italic leading-relaxed">
                  "El sufrimiento forma parte de la vida, pero el estancamiento y la soledad en el dolor no tienen por qué ser permanentes."
                </p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </div>
  );
}

