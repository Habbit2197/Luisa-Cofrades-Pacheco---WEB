import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CloudRain, 
  HeartOff, 
  Sparkles, 
  Activity, 
  AlertCircle, 
  Layers, 
  MessageCircleHeart,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  HeartHandshake
} from 'lucide-react';

interface Difficulty {
  id: string;
  title: string;
  icon: any;
  emoji: string;
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
    icon: CloudRain,
    emoji: '🌧️',
    shortDesc: 'Desánimo persistente, sensación de vacío o dificultad para reconectar con el disfrute de la vida.',
    fullDesc: 'La tristeza sostenida no es un defecto personal, sino un mensaje del organismo que necesita ser escuchado y sostenido. Trabajamos desde un enfoque humanista y compasivo para comprender su origen, aliviar la carga y recuperar la vitalidad.',
    focusPoints: [
      'Espacio seguro de desahogo sin juicios ni exigencias',
      'Identificación y procesamiento de heridas emocionales no resueltas',
      'Reconexión gradual con el placer y el sentido cotidiano'
    ],
    therapyMethod: 'Psicoterapia Humanista e Integrativa',
    linkSlug: 'duelo'
  },
  {
    id: 'rupturas',
    title: 'Rupturas y dependencias emocionales',
    icon: HeartOff,
    emoji: '💔',
    shortDesc: 'Dificultad para soltar vínculos dañinos, miedo a la soledad o duelos complejos tras una separación.',
    fullDesc: 'Los patrones de apego dolorosos y la dependencia emocional generan un profundo desgaste vital. Te acompañamos a desenredar la culpa, reconstruir tu centro interior y establecer límites afectivos saludables y firmes.',
    focusPoints: [
      'Elaboración del duelo de la separación afectiva',
      'Sanación de heridas tempranas de apego y abandono',
      'Desarrollo de autonomía emocional y límites claros'
    ],
    therapyMethod: 'Terapia Sistémica y Reparación de Apego',
    linkSlug: 'psicoterapia-de-pareja'
  },
  {
    id: 'autoestima',
    title: 'Baja autoestima',
    icon: Sparkles,
    emoji: '✨',
    shortDesc: 'Voz interior excesivamente autocrítica, inseguridad recurrente y dificultad para valorarse.',
    fullDesc: 'La autocrítica destructiva sabotea proyectos y relaciones. A través de la terapia transformamos el diálogo interno punitivo en una mirada apreciativa y justa hacia uno mismo, fundamentada en el autorrespeto.',
    focusPoints: [
      'Desactivación del juez interno severo y de la culpa aprendida',
      'Fortalecimiento de la asertividad y el derecho a decir «no»',
      'Consolidación de una confianza personal sólida y realista'
    ],
    therapyMethod: 'Reestructuración del Autoconcepto y Autocompasión',
    linkSlug: 'autoestima'
  },
  {
    id: 'ansiedad',
    title: 'Ansiedad',
    icon: Activity,
    emoji: '⚡',
    shortDesc: 'Pensamientos en bucle, inquietud continua, opresión física en el pecho o sensación de pérdida de control.',
    fullDesc: 'La ansiedad es una alarma neurofisiológica de alerta ante una amenaza percibida. Con abordajes somáticos y EMDR desactivamos la hiperactivación corporal, devolviendo la calma a tu mente y a tu sistema nervioso.',
    focusPoints: [
      'Regulación somática del sistema nervioso simpático/parasimpático',
      'Desactivación de detonantes con estimulación bilateral EMDR',
      'Herramientas prácticas para frenar la rumiación y el pánico'
    ],
    therapyMethod: 'EMDR y Regulación Neurovegetativa Somática',
    linkSlug: 'ansiedad'
  },
  {
    id: 'impulsividad',
    title: 'Violencia / impulsividad',
    icon: AlertCircle,
    emoji: '🔥',
    shortDesc: 'Reacciones de ira desbordada, frustración explosiva o conductas impulsivas que dañan a quienes te rodean.',
    fullDesc: 'Detrás de la impulsividad y la reactividad suele esconderse una dificultad para autorregular emociones intensas ante la vulnerabilidad. Dotamos de recursos para ampliar la ventana de tolerancia y actuar desde la calma.',
    focusPoints: [
      'Detección temprana de señales corporales de desbordamiento',
      'Comprensión del dolor o miedo que enmascara la ira',
      'Entrenamiento en contención saludable y resolución pacífica'
    ],
    therapyMethod: 'Terapia Sensoriomotriz y Gestión de Impulsos',
    linkSlug: 'psicoterapia'
  },
  {
    id: 'rigidez',
    title: 'Rigidez mental',
    icon: Layers,
    emoji: '🧩',
    shortDesc: 'Perfeccionismo paralizante, necesidad excesiva de control, rumiación mental e intolerancia al cambio.',
    fullDesc: 'Cuando la mente intenta controlar cada detalle para evitar el malestar, la vida se vuelve una prisión de exigencias. Fomentamos la flexibilidad cognitiva para vivir con mayor ligereza y adaptabilidad ante lo imprevisto.',
    focusPoints: [
      'Desarticulación del pensamiento dicotómico (todo o nada)',
      'Aceptación consciente de la incertidumbre sin angustia',
      'Mayor espontaneidad y toma de decisiones liberada de la exigencia'
    ],
    therapyMethod: 'Flexibilidad Cognitiva y Aceptación Consciente',
    linkSlug: 'toc'
  },
  {
    id: 'cnv',
    title: 'CNV (Comunicación No Violenta)',
    icon: MessageCircleHeart,
    emoji: '💬',
    shortDesc: 'Aprender a expresar necesidades profundas sin atacar ni someterse, transformando el conflicto en empatía.',
    fullDesc: 'La Comunicación No Violenta (CNV) es una herramienta terapéutica transformadora para parejas, familias y relaciones laborales. Permite identificar necesidades universales insatisfechas y dialogar desde la honestidad y la empatía.',
    focusPoints: [
      'Diferenciación entre observaciones neutras y juicios hirientes',
      'Identificación clara de sentimientos y necesidades genuinas',
      'Peticiones concretas, constructivas y libres de exigencia'
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
      {/* Grid Visual de las 7 Dificultades Exactas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 mb-10">
        {difficulties.map((diff) => {
          const Icon = diff.icon;
          const isSelected = diff.id === selectedId;

          return (
            <motion.button
              key={diff.id}
              onClick={() => setSelectedId(diff.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`text-left p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                isSelected
                  ? 'bg-brand-700 text-white border-brand-800 shadow-card-hover ring-2 ring-brand-400/40'
                  : 'bg-white text-slateText-dark border-sand-200/90 hover:bg-sand-50/90 hover:border-brand-300 shadow-card-subtle'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${
                    isSelected ? 'bg-white/15 text-white' : 'bg-brand-100 text-brand-700'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xl select-none" aria-hidden="true">
                    {diff.emoji}
                  </span>
                </div>

                <h3 className={`text-base font-semibold tracking-tight ${
                  isSelected ? 'text-white' : 'text-slateText-dark'
                }`}>
                  {diff.title}
                </h3>

                <p className={`mt-2 text-xs leading-relaxed line-clamp-3 ${
                  isSelected ? 'text-sand-100/90' : 'text-slateText-muted'
                }`}>
                  {diff.shortDesc}
                </p>
              </div>

              <div className={`mt-4 pt-3 border-t flex items-center justify-between text-xs font-medium ${
                isSelected ? 'border-white/15 text-brand-200' : 'border-sand-100 text-brand-600'
              }`}>
                <span>{isSelected ? 'Seleccionado' : 'Conocer abordaje'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Panel Detallado del Abordaje Terapéutico Seleccionado */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeDifficulty.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="bg-white rounded-3xl p-7 sm:p-10 border border-sand-200/90 shadow-card-hover"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sand-100 text-sand-900 text-xs font-semibold uppercase tracking-wider">
                <activeDifficulty.icon className="w-4 h-4 text-brand-600" />
                <span>Abordaje Clínico: {activeDifficulty.title}</span>
              </div>

              <h4 className="text-2xl sm:text-3xl font-light text-slateText-dark tracking-tight">
                ¿Cómo intervenimos en <span className="font-semibold text-brand-700">{activeDifficulty.title}</span>?
              </h4>

              <p className="text-sm sm:text-base text-slateText-muted leading-relaxed">
                {activeDifficulty.fullDesc}
              </p>

              <div className="pt-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-slateText-dark mb-3">
                  Pilares de nuestra intervención:
                </p>
                <ul className="space-y-2">
                  {activeDifficulty.focusPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slateText-base">
                      <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-4 bg-sand-50 rounded-2xl p-6 border border-sand-200 space-y-4 text-center lg:text-left">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-brand-700 font-semibold">
                  Metodología Recomendada
                </span>
                <p className="text-sm font-semibold text-slateText-dark">
                  {activeDifficulty.therapyMethod}
                </p>
              </div>

              <p className="text-xs text-slateText-muted leading-relaxed">
                Sesiones presenciales en <strong>Salamanca</strong> y <strong>Zamora</strong>, o por <strong>videoconsulta online</strong>.
              </p>

              <div className="pt-2 flex flex-col gap-2.5">
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs sm:text-sm font-medium transition-colors shadow-sm"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Pedir cita para esta consulta</span>
                </a>

                {activeDifficulty.linkSlug && (
                  <a
                    href={`/${activeDifficulty.linkSlug}`}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs text-brand-700 hover:text-brand-900 font-medium transition-colors"
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
