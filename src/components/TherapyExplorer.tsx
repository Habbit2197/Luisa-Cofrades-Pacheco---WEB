import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  Brain, 
  Users, 
  Heart, 
  Compass, 
  Scale, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

interface Category {
  id: string;
  name: string;
  icon: any;
  headline: string;
  description: string;
  therapies: {
    title: string;
    slug: string;
    shortDesc: string;
    keyPoints: string[];
    recommendedMethod: string;
  }[];
}

const categories: Category[] = [
  {
    id: 'ansiedad',
    name: 'Ansiedad y Estrés',
    icon: Activity,
    headline: 'Cuando la mente no para y el cuerpo permanece en alerta constante',
    description: 'La ansiedad es una respuesta neurofisiológica de alarma que puede desregularse ante presiones continuadas o miedos anticipatorios.',
    therapies: [
      {
        title: 'Ansiedad Generalizada y Preocupación',
        slug: 'ansiedad',
        shortDesc: 'Comprensión y desactivación de la hiperactivación fisiológica, reestructuración cognitiva y serenidad mental.',
        keyPoints: ['Desactivación del estado de alarma corporal', 'Manejo de pensamientos catastróficos', 'Técnicas somáticas de calma'],
        recommendedMethod: 'Regulación Neurovegetativa y Cognitiva'
      },
      {
        title: 'Ataques de Pánico y Angustia',
        slug: 'panico',
        shortDesc: 'Herramientas precisas para afrontar el miedo súbito a perder el control o sentir falta de aire.',
        keyPoints: ['Entendimiento de las sensaciones físicas', 'Protocolos de contención inmediata', 'Recuperación de la seguridad personal'],
        recommendedMethod: 'Desensibilización Sistemática e Integración'
      },
      {
        title: 'Relajación vs. Estrés Crónico',
        slug: 'relajacion-vs-estres',
        shortDesc: 'Aprender a escuchar las señales de sobrecarga antes de llegar al agotamiento psicofísico (burnout).',
        keyPoints: ['Equilibrio del sistema simpático/parasimpático', 'Higiene del descanso', 'Pautas prácticas del día a día'],
        recommendedMethod: 'Terapia Sensoriomotriz Somática'
      }
    ]
  },
  {
    id: 'trauma',
    name: 'Trauma y Bloqueos (EMDR)',
    icon: Brain,
    headline: 'Sanar experiencias pasadas que siguen doliendo en el presente',
    description: 'A veces el cerebro no puede procesar un evento doloroso y queda congelado en la red neuronal, detonándose en el día a día.',
    therapies: [
      {
        title: 'Terapia EMDR Especializada',
        slug: 'psicoterapia',
        shortDesc: 'Método neuropsicológico avalado por la Organización Mundial de la Salud para reprocesar memorias traumáticas.',
        keyPoints: ['Estimulación bilateral ocular', 'Disolución del impacto emocional perturbador', 'Integración saludable del recuerdo'],
        recommendedMethod: 'Protocolo Oficial Asociación EMDR España'
      },
      {
        title: 'Terapia Sensoriomotriz',
        slug: 'psicoterapia',
        shortDesc: 'Intervención cuerpo-mente que atiende cómo el cuerpo conserva la memoria de experiencias difíciles.',
        keyPoints: ['Regulación de respuestas somáticas', 'Reparación de huellas de apego temprano', 'Reconexión con la seguridad interna'],
        recommendedMethod: 'Enfoque Somático del Trauma'
      },
      {
        title: 'Trastorno Obsesivo Compulsivo (TOC)',
        slug: 'toc',
        shortDesc: 'Tratamiento de pensamientos intrusivos y rituales que buscan calmar una angustia subyacente.',
        keyPoints: ['Exposición y prevención de respuesta', 'Gestión de la intolerancia a la incertidumbre', 'Disminución del sufrimiento obsesivo'],
        recommendedMethod: 'Psicoterapia Integrativa Especializada'
      }
    ]
  },
  {
    id: 'pareja',
    name: 'Pareja y Vínculos',
    icon: Users,
    headline: 'Reconstruir puentes de comunicación y afecto mutuo',
    description: 'Las crisis de pareja y familiares son momentos cruciales donde los viejos patrones ya no sirven y se necesita una nueva forma de encontrarse.',
    therapies: [
      {
        title: 'Psicoterapia de Adultos y de Pareja',
        slug: 'psicoterapia-de-pareja',
        shortDesc: 'Espacio neutral y mediador para desarmar reproches, sanar heridas afectivas y renovar el compromiso.',
        keyPoints: ['Identificación de dinámicas defensivas', 'Comunicación asertiva y honesta', 'Reconexión íntima y emocional'],
        recommendedMethod: 'Terapia Relacional y Sistémica'
      },
      {
        title: 'Psicoterapia Familiar',
        slug: 'psicoterapia-individual',
        shortDesc: 'Armonización de dinámicas familiares, pautas parentales y resolución de tensiones intergeneracionales.',
        keyPoints: ['Establecimiento de límites saludables', 'Comprensión de los roles familiares', 'Apoyo en transiciones vitales'],
        recommendedMethod: 'Enfoque Sistémico Integrativo'
      },
      {
        title: 'Terapia Infanto-Juvenil',
        slug: 'psicoterapia-infanto-juvenil',
        shortDesc: 'Atención a niños y adolescentes mediante técnicas adaptadas (EMDR Caja de Arena, juego y expresión).',
        keyPoints: ['Manejo de rabietas y miedos infantiles', 'Apoyo escolar y emocional en la adolescencia', 'Orientación continua a familias'],
        recommendedMethod: 'EMDR Infantil y Caja de Arena'
      }
    ]
  },
  {
    id: 'autoestima',
    name: 'Autoestima y Crecimiento',
    icon: Heart,
    headline: 'Transformar la autocrítica en un diálogo interno comprensivo y firme',
    description: 'La forma en que te hablas a ti mismo determina cómo te relacionas con los demás y qué decisiones te atreves a tomar.',
    therapies: [
      {
        title: 'Reconstrucción de la Autoestima',
        slug: 'autoestima',
        shortDesc: 'Desactivación del juez interno severo y fortalecimiento del merecimiento y la confianza.',
        keyPoints: ['Autocompasión científica vs. complacencia', 'Aprender a decir no sin culpa', 'Validación emocional interna'],
        recommendedMethod: 'Psicoterapia Cognitivo-Afectiva'
      },
      {
        title: 'Crecimiento Personal y Proyecto Vital',
        slug: 'crecimiento-personal',
        shortDesc: 'Aclarar prioridades vitales, desbloquear talentos y alinear tus decisiones cotidianas con tus valores profundos.',
        keyPoints: ['Clarificación de valores fundamentales', 'Toma de decisiones conscientes', 'Superación de bloqueos y miedos'],
        recommendedMethod: 'Psicoterapia Humanista e Integradora'
      },
      {
        title: 'Resiliencia ante la Adversidad',
        slug: 'resiliencia',
        shortDesc: 'Aprender a levantarse con mayores recursos y sabiduría tras golpes emocionales severos.',
        keyPoints: ['Fortalecimiento del sostén interno', 'Flexibilidad psicológica', 'Trascendencia del dolor'],
        recommendedMethod: 'Psicología Positiva Basada en Evidencia'
      }
    ]
  },
  {
    id: 'duelo',
    name: 'Duelo y Pérdidas',
    icon: Compass,
    headline: 'Acompañamiento respetuoso para transitar el dolor de lo que ya no está',
    description: 'El duelo no es una enfermedad que haya que curar con prisas, sino un camino de adaptación que requiere contención y escucha honesta.',
    therapies: [
      {
        title: 'Acompañamiento en el Duelo',
        slug: 'duelo',
        shortDesc: 'Validación de todas las etapas del duelo tras el fallecimiento de un ser querido, una ruptura o un cambio de etapa.',
        keyPoints: ['Desahogo seguro sin exigencias', 'Elaboración de la despedida', 'Reorganización de la propia vida con sentido'],
        recommendedMethod: 'Acompañamiento Terapéutico en Duelo'
      },
      {
        title: '¿Por qué acudir a un Psicólogo?',
        slug: 'porque-acudir-a-un-psicologo',
        shortDesc: 'Orientación para desmitificar la ayuda psicológica y entender cuándo es el momento indicado de pedir apoyo.',
        keyPoints: ['Cero etiquetas patologizantes', 'Evaluación inicial personalizada', 'Plan de trabajo conjunto y transparente'],
        recommendedMethod: 'Entrevista Clínica Diagnóstica'
      }
    ]
  },
  {
    id: 'judicial',
    name: 'Peritaje Psico-Jurídico',
    icon: Scale,
    headline: 'Evaluaciones psicológicas forenses con validez ante tribunales',
    description: 'Informes periciales oficiales ratificados en sede judicial con el máximo rigor metodológico y científico.',
    therapies: [
      {
        title: 'Peritajes Oficiales para Juzgados',
        slug: 'peritajes-psicologicos',
        shortDesc: 'Evaluación forense objetiva en el ámbito civil, penal, laboral y de familia en Castilla y León.',
        keyPoints: ['Acreditada ante el Tribunal Superior de Justicia de CyL', 'Metodología pericial objetiva y contrastable', 'Ratificación presencial en juicio'],
        recommendedMethod: 'Psicología Jurídica y Forense Oficial'
      },
      {
        title: 'Formación y Educación',
        slug: 'formacion-y-educacion',
        shortDesc: 'Conferencias, talleres clínicos y docencia universitaria para profesionales y colectivos.',
        keyPoints: ['Docente Máster PGS Universidad de Salamanca', 'Supervisión de casos clínicos', 'Formación en trauma y apego'],
        recommendedMethod: 'Docencia Universitaria Acreditada'
      }
    ]
  }
];

export default function TherapyExplorer() {
  const [activeTab, setActiveTab] = useState('ansiedad');
  const currentCategory = categories.find((c) => c.id === activeTab) || categories[0];

  return (
    <div className="w-full">
      {/* Botones / Píldoras de Selección de Necesidades */}
      <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-12">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = cat.id === activeTab;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`inline-flex items-center gap-2 px-4 sm:px-5 py-3 rounded-2xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                isActive
                  ? 'bg-brand-700 text-white shadow-card-hover scale-105'
                  : 'bg-white text-slateText-base hover:bg-sand-100 border border-sand-200'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-brand-200' : 'text-brand-600'}`} />
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* Contenido animado de la categoría activa */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="bg-sand-50/70 rounded-3xl p-6 sm:p-10 border border-sand-200/90 shadow-soft-elevation"
        >
          {/* Cabecera de la necesidad seleccionada */}
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-600 flex items-center gap-1.5 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-brand-600" />
              <span>Área: {currentCategory.name}</span>
            </span>
            <h3 className="text-2xl sm:text-3xl font-light text-slateText-dark tracking-tight leading-snug">
              {currentCategory.headline}
            </h3>
            <p className="mt-3 text-sm sm:text-base text-slateText-muted leading-relaxed">
              {currentCategory.description}
            </p>
          </div>

          {/* Tarjetas de intervención correspondientes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentCategory.therapies.map((therapy) => (
              <div
                key={therapy.title}
                className="bg-white rounded-2xl p-6 border border-sand-200 flex flex-col justify-between hover:shadow-card-hover hover:border-brand-300 transition-all duration-300"
              >
                <div>
                  <span className="inline-block text-[11px] font-semibold text-brand-800 bg-brand-50 px-2.5 py-1 rounded-md mb-3 border border-brand-200/60">
                    {therapy.recommendedMethod}
                  </span>
                  
                  <h4 className="text-lg font-semibold text-slateText-dark mb-2.5">
                    {therapy.title}
                  </h4>
                  
                  <p className="text-xs sm:text-sm text-slateText-muted leading-relaxed mb-4">
                    {therapy.shortDesc}
                  </p>

                  <ul className="space-y-1.5 mb-6 text-xs text-slateText-muted">
                    {therapy.keyPoints.map((point) => (
                      <li key={point} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-sand-100 flex items-center justify-between">
                  <a
                    href={`/${therapy.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-700 hover:text-brand-900 transition-colors"
                  >
                    <span>Información completa</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href="#contacto"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-sand-100 hover:bg-brand-50 text-slateText-dark font-medium transition-colors"
                  >
                    Pedir cita
                  </a>
                </div>
              </div>
            ))}
          </div>

        </motion.div>
      </AnimatePresence>
    </div>
  );
}
