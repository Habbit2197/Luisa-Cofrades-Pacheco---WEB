import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  MapPin, 
  Globe, 
  MessageCircle, 
  Phone, 
  ArrowRight, 
  ArrowLeft,
  CalendarCheck,
  ShieldCheck,
  UserCheck
} from 'lucide-react';

export default function InteractiveTriage() {
  const [step, setStep] = useState(1);
  const [reason, setReason] = useState('');
  const [modality, setModality] = useState('');
  const [name, setName] = useState('');

  const reasons = [
    { id: 'ansiedad', label: 'Ansiedad o Estrés', desc: 'Preocupaciones intensas, sensación de agobio o ataques de pánico' },
    { id: 'trauma', label: 'Trauma o Heridas del Pasado (EMDR)', desc: 'Recuerdos dolorosos, experiencias difíciles o bloqueos emocionales' },
    { id: 'pareja', label: 'Problemas de Pareja o Familia', desc: 'Conflictos de comunicación, rupturas o dinámicas familiares tensas' },
    { id: 'duelo', label: 'Duelo y Pérdidas', desc: 'Acompañamiento respetuoso ante la pérdida de un ser querido o cambio vital' },
    { id: 'autoestima', label: 'Autoestima y Crecimiento', desc: 'Fortalecer la confianza personal y aprender a poner límites' },
    { id: 'forense', label: 'Peritaje Psicológico Oficial', desc: 'Evaluaciones periciales para juzgados y tribunales' }
  ];

  const modalities = [
    { id: 'salamanca', label: 'Presencial en Salamanca', desc: 'Calle del Prior 5-7, 1º B (junto a Plaza Mayor)', icon: MapPin },
    { id: 'zamora', label: 'Presencial en Zamora', desc: 'Roelos de Sayago (provincia de Zamora)', icon: MapPin },
    { id: 'online', label: 'Videoconsulta Online', desc: 'Desde cualquier lugar por plataforma segura y confidencial', icon: Globe }
  ];

  const selectedReasonLabel = reasons.find(r => r.id === reason)?.label || 'Consulta General';
  const selectedModalityLabel = modalities.find(m => m.id === modality)?.label || 'A convenir';

  const whatsappMessage = encodeURIComponent(
    `Hola Luisa, mi nombre es ${name.trim() || '[Mi Nombre]'}. Me gustaría solicitar cita previa para una consulta de psicología. \n- Motivo principal: ${selectedReasonLabel}\n- Modalidad preferida: ${selectedModalityLabel}\n¿Podrías indicarme disponibilidad? Muchas gracias.`
  );

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-sand-200 shadow-card-hover max-w-3xl mx-auto">
      
      {/* Indicador de pasos */}
      <div className="flex items-center justify-between border-b border-sand-100 pb-5 mb-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-brand-100 text-brand-800 flex items-center justify-center font-bold text-xs">
            {step}/3
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-slateText-muted">
            {step === 1 && 'Paso 1: ¿Qué estás experimentando?'}
            {step === 2 && 'Paso 2: ¿Dónde prefieres la consulta?'}
            {step === 3 && 'Paso 3: Tu solicitud personalizada'}
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-brand-700">
          <ShieldCheck className="w-4 h-4 text-brand-600" />
          <span className="hidden sm:inline">100% Confidencial</span>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {/* PASO 1: MOTIVO */}
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-xl sm:text-2xl font-light text-slateText-dark">
              ¿Cuál es la razón principal de tu consulta?
            </h3>
            <p className="text-xs sm:text-sm text-slateText-muted">
              Selecciona la opción que más se aproxime a lo que estás sintiendo:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {reasons.map((r) => (
                <button
                  key={r.id}
                  onClick={() => {
                    setReason(r.id);
                    setStep(2);
                  }}
                  className={`text-left p-4 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                    reason === r.id
                      ? 'bg-brand-50 border-brand-500 ring-2 ring-brand-500'
                      : 'bg-sand-50/50 border-sand-200 hover:border-brand-300 hover:bg-white'
                  }`}
                >
                  <span className="font-semibold text-slateText-dark text-sm block mb-1">
                    {r.label}
                  </span>
                  <span className="text-xs text-slateText-muted leading-relaxed">
                    {r.desc}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* PASO 2: MODALIDAD */}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2 mb-2">
              <button
                onClick={() => setStep(1)}
                className="text-xs text-brand-700 hover:text-brand-900 inline-flex items-center gap-1 font-medium"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Modificar motivo</span>
              </button>
            </div>

            <h3 className="text-xl sm:text-2xl font-light text-slateText-dark">
              ¿Qué modalidad te resulta más cómoda?
            </h3>
            <p className="text-xs sm:text-sm text-slateText-muted">
              Luisa Cofrades atiende en dos sedes físicas en Castilla y León y en formato telemático seguro:
            </p>

            <div className="space-y-3 pt-2">
              {modalities.map((m) => {
                const Icon = m.icon;
                return (
                  <button
                    key={m.id}
                    onClick={() => {
                      setModality(m.id);
                      setStep(3);
                    }}
                    className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 flex items-center gap-4 ${
                      modality === m.id
                        ? 'bg-brand-50 border-brand-500 ring-2 ring-brand-500'
                        : 'bg-sand-50/50 border-sand-200 hover:border-brand-300 hover:bg-white'
                    }`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center text-brand-700 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slateText-dark text-sm sm:text-base">
                        {m.label}
                      </p>
                      <p className="text-xs text-slateText-muted">
                        {m.desc}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* PASO 3: CONFIRMACIÓN Y CONTACTO DIRECTO */}
        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-2">
              <button
                onClick={() => setStep(2)}
                className="text-xs text-brand-700 hover:text-brand-900 inline-flex items-center gap-1 font-medium"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Modificar modalidad</span>
              </button>
            </div>

            <div className="bg-sand-50 p-5 rounded-2xl border border-sand-200 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">Resumen de tu solicitud:</p>
              <div className="text-sm text-slateText-dark font-medium flex flex-wrap gap-x-4 gap-y-1">
                <span>• Motivo: <strong>{selectedReasonLabel}</strong></span>
                <span>• Modalidad: <strong>{selectedModalityLabel}</strong></span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slateText-dark mb-1.5">
                ¿Cuál es tu nombre? (opcional)
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Escribe tu nombre para dirigirnos a ti"
                className="w-full px-4 py-3 rounded-xl border border-sand-200 bg-sand-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
              />
            </div>

            {/* Opciones de Envío Directo */}
            <div className="space-y-3 pt-2">
              <a
                href={`https://wa.me/34675809974?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm transition-all shadow-sm hover:shadow-card-hover"
              >
                <MessageCircle className="w-5 h-5 text-white" />
                <span>Enviar solicitud directa por WhatsApp</span>
              </a>

              <a
                href="tel:+34675809974"
                className="w-full inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-white hover:bg-sand-100 text-slateText-dark border border-sand-200 font-medium text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-600" />
                <span>Llamar por teléfono al 675 80 99 74</span>
              </a>
            </div>

            <p className="text-[11px] text-slateText-muted text-center leading-tight">
              Tus datos y motivo de consulta están protegidos bajo estricto secreto profesional sanitario conforme a la LOPD.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
