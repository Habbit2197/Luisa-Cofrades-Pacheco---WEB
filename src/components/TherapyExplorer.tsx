import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CloudSun, 
  Heart, 
  Sparkles, 
  Wind, 
  Compass, 
  Feather, 
  MessageCircleHeart,
  ArrowRight,
  CheckCircle2,
  Calendar
} from 'lucide-react';

interface Difficulty {
  id: string;
  title: string;
  icon: any;
  emoji: string;
  accent: 'sky' | 'fuchsia' | 'violet' | 'mint';
  accentBorder: string;
  accentBg: string;
  accentText: string;
  shortDesc: string;
  fullDesc: string;
  focusPoints: string[];
  therapyMethod: string;
  linkSlug?: string;
}

const difficulties: Difficulty[] = [
  {
    id: 'tristeza',
    title: 'Tristeza',
    icon: CloudSun,
    emoji: '🌤️',
    accent: 'sky',
    accentBorder: 'hover:border-accent-sky/60 hover:shadow-accent-sky/10',
    accentBg: 'bg-accent-sky/10 text-sky-600',
    accentText: 'text-sky-600',
    shortDesc: 'Te acompañamos a transitar el dolor y la apatía, buscando el origen de esa tristeza profunda.',
    fullDesc: 'Te acompañamos a transitar el dolor y la apatía, buscando el origen de esa tristeza profunda para que puedas recuperar la vitalidad y el sentido.',
    focusPoints: [
      'Espacio seguro de desahogo y contención sin juicios',
      'Identificación del origen emocional y vital del dolor',
      'Reconexión gradual con la vitalidad y el sentido propio'
    ],
    therapyMethod: 'Psicoterapia Humanista e Integrativa',
    linkSlug: 'duelo'
  },
  {
    id: 'rupturas',
    title: 'Rupturas y dependencias emocionales',
    icon: Heart,
    emoji: '🌱',
    accent: 'fuchsia',
    accentBorder: 'hover:border-accent-fuchsia/60 hover:shadow-accent-fuchsia/10',
    accentBg: 'bg-accent-fuchsia/10 text-fuchsia-600',
    accentText: 'text-fuchsia-600',
    shortDesc: 'Trabajamos los apegos y el duelo por la pérdida para reconstruir tu identidad y libertad.',
    fullDesc: 'Trabajamos los apegos y el duelo por la pérdida, ayudándote a reconstruir tu identidad y a establecer relaciones futuras desde la libertad y el amor propio.',
    focusPoints: [
      'Elaboración del duelo afectivo y cierre de ciclos',
      'Sanación de heridas y dependencias de apego',
      'Construcción de vínculos sanos desde el amor propio y la libertad'
    ],
    therapyMethod: 'Terapia Sistémica y Reparación de Apego',
    linkSlug: 'psicoterapia-de-pareja'
  },
  {
    id: 'autoestima',
    title: 'Baja autoestima',
    icon: Sparkles,
    emoji: '✨',
    accent: 'violet',
    accentBorder: 'hover:border-accent-violet/60 hover:shadow-accent-violet/10',
    accentBg: 'bg-accent-violet/10 text-violet-600',
    accentText: 'text-violet-600',
    shortDesc: 'Fomentamos una mirada compasiva hacia ti mismo/a, sanando las heridas que te limitan.',
    fullDesc: 'Fomentamos una mirada compasiva hacia ti mismo/a, sanando las heridas que te impiden reconocer tu propio valor y potencial.',
    focusPoints: [
      'Transformación de la autocrítica destructiva en compasión',
      'Sanación de vivencias que minaron la seguridad personal',
      'Reconocimiento genuino del propio valor y potencial'
    ],
    therapyMethod: 'Reestructuración del Autoconcepto y Autocompasión',
    linkSlug: 'autoestima'
  },
  {
    id: 'ansiedad',
    title: 'Ansiedad',
    icon: Wind,
    emoji: '🌿',
    accent: 'mint',
    accentBorder: 'hover:border-accent-mint/60 hover:shadow-accent-mint/10',
    accentBg: 'bg-accent-mint/15 text-emerald-600',
    accentText: 'text-emerald-600',
    shortDesc: 'Herramientas para calmar el sistema nervioso, entender su mensaje y recuperar la calma.',
    fullDesc: 'Te ofrecemos herramientas para calmar el sistema nervioso, entender qué mensaje trae tu ansiedad y recuperar el control y la calma en tu día a día.',
    focusPoints: [
      'Regulación somática y calma del sistema nervioso',
      'Comprensión del mensaje y detonantes de la alarma ansiosa',
      'Recuperación progresiva del control y la tranquilidad diaria'
    ],
    therapyMethod: 'EMDR y Regulación Somática del Sistema Nervioso',
    linkSlug: 'ansiedad'
  },
  {
    id: 'impulsividad',
    title: 'Violencia / impulsividad',
    icon: Compass,
    emoji: '🧭',
    accent: 'fuchsia',
    accentBorder: 'hover:border-accent-fuchsia/60 hover:shadow-accent-fuchsia/10',
    accentBg: 'bg-accent-fuchsia/10 text-fuchsia-600',
    accentText: 'text-fuchsia-600',
    shortDesc: 'Exploramos las raíces de la reactividad para aprender a regular tus emociones.',
    fullDesc: 'Exploramos las raíces de la reactividad, ofreciéndote un espacio seguro para aprender a gestionar la frustración y regular tus emociones.',
    focusPoints: [
      'Comprensión profunda de las raíces de la reactividad',
      'Espacio seguro para modular la frustración y el enfado',
      'Estrategias prácticas de autorregulación emocional'
    ],
    therapyMethod: 'Terapia Sensoriomotriz y Gestión de Impulsos',
    linkSlug: 'psicoterapia'
  },
  {
    id: 'rigidez',
    title: 'Rigidez mental',
    icon: Feather,
    emoji: '🕊️',
    accent: 'violet',
    accentBorder: 'hover:border-accent-violet/60 hover:shadow-accent-violet/10',
    accentBg: 'bg-accent-violet/10 text-violet-600',
    accentText: 'text-violet-600',
    shortDesc: 'Flexibilizar tus patrones de pensamiento, reduciendo la autoexigencia hacia perspectivas amables.',
    fullDesc: 'Te ayudamos a flexibilizar tus patrones de pensamiento, reduciendo la autoexigencia y abriendo espacio a nuevas perspectivas más amables.',
    focusPoints: [
      'Flexibilización de patrones rígidos y autoexigentes',
      'Apertura a nuevas perspectivas más serenas y amables',
      'Mayor tolerancia a la incertidumbre y adaptación vital'
    ],
    therapyMethod: 'Flexibilidad Cognitiva y Aceptación Consciente',
    linkSlug: 'toc'
  },
  {
    id: 'cnv',
    title: 'CNV (Comunicación No Violenta)',
    icon: MessageCircleHeart,
    emoji: '💬',
    accent: 'sky',
    accentBorder: 'hover:border-accent-sky/60 hover:shadow-accent-sky/10',
    accentBg: 'bg-accent-sky/10 text-sky-600',
    accentText: 'text-sky-600',
    shortDesc: 'Formas de expresión que conectan con tus necesidades y las de los demás.',
    fullDesc: 'Entrenamos formas de expresión que conectan con tus necesidades y las de los demás, mejorando tus vínculos y reduciendo el conflicto.',
    focusPoints: [
      'Conexión profunda con las propias necesidades y emociones',
      'Escucha empática sin juicio hacia la otra persona',
      'Resolución pacífica y constructiva de los conflictos'
    ],
    therapyMethod: 'Entrenamiento Relacional en Comunicación No Violenta',
    linkSlug: 'psicoterapia-de-pareja'
  }
];

export default function TherapyExplorer() {
  const [selectedId, setSelectedId] = useState<string>('ansiedad');
  const activeDifficulty = difficulties.find((d) => d.id === selectedId) || difficulties[3];

  return (
    <div className="w-full">
      {/* Grid Visual de las 7 Dificultades con toques dinámicos de color corporativo */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 mb-10">
        {difficulties.map((diff) => {
          const Icon = diff.icon;
          const isSelected = diff.id === selectedId;

          return (
            <motion.button
              key={diff.id}
              type="button"
              aria-label={`Ver abordaje clínico para ${diff.title}`}
              aria-pressed={isSelected}
              onClick={() => setSelectedId(diff.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`text-left p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                diff.accentBorder
              } ${
                isSelected
                  ? 'bg-brand-aqua text-white border-brand-aqua-dark shadow-md ring-2 ring-brand-aqua/30'
                  : 'bg-white text-brand-graphite border-gray-100 hover:bg-gray-50/80 shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${
                    isSelected ? 'bg-white/20 text-white' : diff.accentBg
                  }`}>
                    <Icon className="w-5 h-5" strokeWidth={1.75} />
                  </div>
                  <span className="text-xl select-none" aria-hidden="true">
                    {diff.emoji}
                  </span>
                </div>

                <h3 className={`text-base font-semibold tracking-tight ${
                  isSelected ? 'text-white' : 'text-brand-graphite'
                }`}>
                  {diff.title}
                </h3>

                <p className={`mt-2 text-xs leading-relaxed line-clamp-3 ${
                  isSelected ? 'text-white/90' : 'text-brand-graphite/70'
                }`}>
                  {diff.shortDesc}
                </p>
              </div>

              <div className={`mt-4 pt-3 border-t flex items-center justify-between text-xs font-medium ${
                isSelected ? 'border-white/20 text-white' : 'border-gray-100 text-brand-aqua'
              }`}>
                <span>{isSelected ? 'Seleccionado' : 'Conocer abordaje'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Panel Detallado del Abordaje Terapéutico Seleccionado (Framer Motion) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeDifficulty.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="bg-white rounded-3xl p-7 sm:p-10 border border-gray-100 shadow-sm hover:shadow-card-hover transition-shadow"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-brand-graphite text-xs font-semibold uppercase tracking-wider">
                <activeDifficulty.icon className={`w-4 h-4 ${activeDifficulty.accentText}`} strokeWidth={1.75} />
                <span>Abordaje Clínico: {activeDifficulty.title}</span>
              </div>

              <h4 className="text-2xl sm:text-3xl font-light text-brand-graphite tracking-tight">
                ¿Cómo intervenimos en <span className="font-semibold text-brand-aqua">{activeDifficulty.title}</span>?
              </h4>

              {/* Texto clínico exacto requerido */}
              <div className="p-5 sm:p-6 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm">
                <p className="text-base sm:text-lg text-brand-graphite leading-relaxed font-normal">
                  "{activeDifficulty.fullDesc}"
                </p>
              </div>

              <div className="pt-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-graphite mb-3">
                  Pilares de nuestra intervención:
                </p>
                <ul className="space-y-2.5">
                  {activeDifficulty.focusPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-graphite">
                      <CheckCircle2 className="w-4 h-4 text-brand-aqua shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-4 bg-gray-50 rounded-2xl p-6 border border-gray-100 space-y-4 text-center lg:text-left">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-brand-aqua font-semibold">
                  Metodología Recomendada
                </span>
                <p className="text-sm font-semibold text-brand-graphite">
                  {activeDifficulty.therapyMethod}
                </p>
              </div>

              <p className="text-xs text-brand-graphite/70 leading-relaxed">
                Sesiones presenciales en <strong>Salamanca</strong> y <strong>Zamora</strong>, o por <strong>videoconsulta online</strong>.
              </p>

              <div className="pt-2 flex flex-col gap-2.5">
                <a
                  href="#contacto"
                  aria-label={`Pedir cita para consulta de ${activeDifficulty.title}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-aqua hover:bg-brand-aqua-hover text-white text-xs sm:text-sm font-medium transition-colors shadow-sm"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Pedir cita para esta consulta</span>
                </a>

                {activeDifficulty.linkSlug && (
                  <a
                    href={`/${activeDifficulty.linkSlug}`}
                    aria-label={`Leer más sobre el tratamiento de ${activeDifficulty.title}`}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs text-brand-aqua hover:text-brand-aqua-dark font-medium transition-colors"
                  >
                    <span>Leer más sobre este tratamiento</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}