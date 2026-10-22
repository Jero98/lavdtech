/**
 * Configuración central del sitio LAVD Technologies.
 * Edite este archivo para cambiar textos, imágenes, contacto y el destino del CTA.
 * No duplique estos datos en los componentes.
 */

const PENDING = 'PENDIENTE_COMPLETAR'

export const site = {
  company: {
    name: 'LAVD Technologies',
    shortName: 'LAVD',
    legalName: 'LAVD Technologies',
    acronym: 'Light & ADAS Vehicle Detection',
    country: 'Chile',
    industry: 'Industrial IoT & Mobility',
    tagline:
      'Inteligencia artificial, radar y telemetría avanzada para la seguridad de flotas.',
  },

  seo: {
    title: 'LAVD Technologies | ADAS, radar y telemetría para flotas',
    description:
      'Sistema autónomo ADAS + GPS de LAVD Technologies: visión artificial, radar Doppler de 24 GHz y telemetría para prevenir colisiones por alcance en flotas comerciales.',
  },

  /**
   * Contacto comercial.
   * Deje los campos vacíos hasta tener datos reales.
   * El CTA usa calendarUrl si existe; si no, desplaza a #contacto.
   */
  contact: {
    email: '', // PENDIENTE_COMPLETAR: correo comercial
    phone: '', // PENDIENTE_COMPLETAR: teléfono comercial
    whatsapp: '', // PENDIENTE_COMPLETAR: enlace wa.me
    address: '', // PENDIENTE_COMPLETAR: dirección física
    hours: '', // PENDIENTE_COMPLETAR: horario de atención
    calendarUrl: '', // PENDIENTE_COMPLETAR: enlace de agenda (Calendly u otro)
    pendingLabel: PENDING,
  },

  images: {
    hero: '/images/hero-highway.jpg',
    problem: '/images/problem-traffic.jpg',
    solution: '/images/solution-truck.jpg',
    hardware: '/images/hardware-board.jpg',
    fleet: '/images/road-view.jpg',
  },

  nav: [
    { id: 'problema', label: 'Problema' },
    { id: 'solucion', label: 'Solución' },
    { id: 'funcionamiento', label: 'Funcionamiento' },
    { id: 'resultados', label: 'Resultados' },
    { id: 'beneficios', label: 'Beneficios' },
    { id: 'especificaciones', label: 'Especificaciones' },
    { id: 'contacto', label: 'Contacto' },
  ],

  cta: {
    label: 'Agendar una Demostración Comercial',
    shortLabel: 'Agendar demostración',
    secondaryLabel: 'Ver la plataforma',
    secondaryHref: '#solucion',
  },

  hero: {
    eyebrow: 'Industrial IoT & Mobility · Chile',
    title:
      'Inteligencia artificial, radar y telemetría avanzada para la seguridad de flotas.',
    lead: 'Light & ADAS Vehicle Detection: un sistema autónomo de grado industrial para erradicar el siniestro número uno en rutas urbanas e interurbanas: las colisiones por alcance.',
    meta: ['ADAS', 'Radar 24 GHz', 'Visión artificial', 'GPS / GNSS', 'Energía solar'],
  },

  about: {
    title: '¿Quiénes somos?',
    body: 'LAVD Technologies es una empresa de tecnología y hardware (Industrial IoT & Mobility) especializada en sistemas avanzados de asistencia al conductor (ADAS) y telemetría predictiva. Desarrollamos soluciones autónomas de grado industrial diseñadas para erradicar el siniestro número uno en rutas urbanas e interurbanas: las colisiones por alcance.',
    mission:
      'Nuestra misión es dotar a las flotas comerciales de una plataforma integral que combina visión artificial, radar y seguimiento satelital para proteger a los conductores, optimizar la operación y blindar jurídicamente a las empresas.',
  },

  problem: {
    id: 'problema',
    eyebrow: 'El punto ciego operacional',
    title: 'Las ayudas de frenado tradicionales llegan demasiado tarde.',
    body: 'Operan únicamente cuando el conductor pisa el pedal. Eso deja un margen de vulnerabilidad crítico durante la desaceleración por freno motor o las distracciones en ruta.',
    consequence:
      'En flotas de transporte, un solo choque por alcance genera costos ocultos masivos en franquicias de seguros, tiempos muertos y riesgos legales severos.',
    points: [
      {
        title: 'Reacción, no anticipación',
        text: 'El frenado asistido convencional espera el pedal. No cubre el tramo en que el vehículo ya desacelera y el tráfico posterior aún no percibe el riesgo.',
      },
      {
        title: 'Costo operativo del alcance',
        text: 'Un incidente arrastra franquicias, vehículos detenidos, conductores fuera de ruta y exposición jurídica para la empresa.',
      },
      {
        title: 'Evidencia insuficiente',
        text: 'Sin registro de proximidad y dinámica, la reconstrucción del evento queda a interpretación frente a aseguradoras y mutualidades.',
      },
    ],
  },

  solution: {
    id: 'solucion',
    eyebrow: 'Plataforma integral ADAS + GPS',
    title: 'LAVD fusiona seguridad perimetral activa con gestión de flotas.',
    body: 'LAVD es el primer sistema autónomo del mercado que une detección dual (visión + radar), telemetría satelital y energía independiente en un mismo dispositivo de grado industrial.',
    pillars: [
      {
        icon: 'shield',
        title: 'Seguridad perimetral activa',
        text: 'Cámaras con modelos de computer vision y radar Doppler calculan la tasa de cierre y el Time-to-Collision sin depender del pedal de freno.',
      },
      {
        icon: 'map',
        title: 'Gestión satelital de flota',
        text: 'Seguimiento GPS/GNSS continuo, vallas virtuales, alertas de exceso de velocidad y notificaciones de eventos inerciales.',
      },
      {
        icon: 'sun',
        title: 'Autonomía energética',
        text: 'Panel solar, MPPT y batería LiFePO4. Opera sin cortes ni modificaciones en el cableado eléctrico original del vehículo.',
      },
    ],
  },

  how: {
    id: 'funcionamiento',
    eyebrow: 'Stack tecnológico',
    title: 'Un núcleo de procesamiento de alta eficiencia respaldado por sensores de vanguardia.',
    intro:
      'El dispositivo opera sobre ESP32-S3. La percepción, la dinámica y el posicionamiento trabajan en conjunto para anticipar el alcance y registrar el evento.',
    items: [
      {
        step: '01',
        icon: 'vision',
        title: 'Visión artificial y radar (detección dual)',
        text: 'Integra cámaras con modelos de computer vision entrenados para la detección vehicular en tiempo real, combinadas con un radar Doppler de 24 GHz y un acelerómetro/giroscopio (IMU) para calcular la tasa de cierre y desaceleración (Time-to-Collision).',
      },
      {
        step: '02',
        icon: 'gps',
        title: 'GPS comercial de alta gama',
        text: 'Ofrece seguimiento satelital continuo, creación de vallas virtuales (geofencing), alertas instantáneas de exceso de velocidad y notificaciones de eventos críticos detectados por el acelerómetro.',
      },
      {
        step: '03',
        icon: 'sun',
        title: 'Energía 100% autónoma',
        text: 'Diseñado con un panel solar integrado, cargador MPPT de alta eficiencia y batería LiFePO4. Opera de forma independiente, sin requerir cortes ni modificaciones en el cableado eléctrico original del vehículo.',
      },
    ],
    sensors: [
      { icon: 'vision', label: 'Computer vision' },
      { icon: 'radar', label: 'Radar Doppler 24 GHz' },
      { icon: 'imu', label: 'IMU 6 ejes' },
      { icon: 'gps', label: 'GPS / GNSS' },
      { icon: 'sun', label: 'Panel solar + MPPT' },
      { icon: 'chip', label: 'ESP32-S3' },
    ],
  },

  results: {
    id: 'resultados',
    eyebrow: 'Ensayos en terreno',
    title: 'Resultados de pruebas en un vehículo de ensayos.',
    disclaimer:
      'Las cifras siguientes corresponden a ensayos realizados en terreno sobre un vehículo de pruebas. No son proyecciones teóricas ni resultados de flotas de clientes.',
    stats: [
      {
        value: '1.5 s',
        context: 'Ciudad',
        text: 'Mejora comprobada en el tiempo de reacción del tráfico posterior, con una mediana de 1.5 segundos.',
      },
      {
        value: '2.5 s',
        context: 'Carretera / autopistas',
        text: 'Anticipación de advertencia de hasta 2.5 segundos, reduciendo el riesgo de colisiones por alcance en alta velocidad.',
      },
    ],
  },

  benefits: {
    id: 'beneficios',
    eyebrow: 'Operación de flota',
    title: 'Instalación, telemetría y evidencia en un mismo sistema.',
    items: [
      {
        icon: 'install',
        title: 'Instalación cero fricción (plug & play)',
        text: 'Al ser un sistema autónomo alimentado por energía solar, se instala mediante soporte no invasivo en la luneta trasera. No interviene el sistema eléctrico de fábrica ni afecta la homologación en PRT.',
      },
      {
        icon: 'telemetry',
        title: 'Telemetría y control total',
        text: 'Monitoreo en tiempo real de la ubicación, rutas, velocidad y hábitos de conducción de los choferes desde una sola plataforma.',
      },
      {
        icon: 'log',
        title: 'Mitigación de responsabilidad legal',
        text: 'Registra data logs de eventos críticos de proximidad, proporcionando evidencia técnica irrefutable ante aseguradoras y mutualidades en caso de incidentes.',
      },
    ],
  },

  specs: {
    id: 'especificaciones',
    eyebrow: 'Ficha técnica',
    title: 'Especificaciones técnicas principales',
    rows: [
      {
        module: 'Procesamiento',
        spec: 'ESP32-S3 con arquitectura de bajo consumo y alta velocidad',
      },
      {
        module: 'Visión y percepción',
        spec: 'Cámaras con modelos de computer vision (detección de vehículos) + radar Doppler 24 GHz',
      },
      {
        module: 'Dinámica vehicular',
        spec: 'IMU de 6 ejes (acelerometría y giroscopios para eventos inerciales)',
      },
      {
        module: 'Posicionamiento',
        spec: 'GPS / GNSS de alta precisión con registro de velocidad y vallas virtuales',
      },
      {
        module: 'Alimentación',
        spec: 'Panel solar 12V 5W + MPPT + batería LiFePO4 de alta durabilidad (autónomo)',
      },
      {
        module: 'Instalación',
        spec: 'Montaje en luneta trasera sin alteración del cableado original',
      },
    ],
  },

  demo: {
    id: 'contacto',
    eyebrow: 'Demostración comercial',
    title: 'Eleva el estándar de seguridad y control de tu flota.',
    body: 'Protege tus activos, anticipa los riesgos en ruta y optimiza tu operación con tecnología autónoma.',
    form: {
      name: 'Nombre',
      company: 'Empresa',
      fleet: 'Tamaño de flota',
      message: 'Mensaje',
      submit: 'Solicitar demostración',
      fleetOptions: ['1–10 vehículos', '11–50 vehículos', '51–200 vehículos', 'Más de 200 vehículos'],
      hintWithEmail:
        'El envío abre su cliente de correo con los datos de la solicitud. No almacenamos información en este sitio.',
      hintPending:
        'Los datos de contacto comercial están pendientes de completar. El envío se activa al configurar el correo o el enlace de agenda.',
    },
  },

  footer: {
    copyrightName: 'LAVD Technologies',
    note: 'Tecnología vehicular para flotas comerciales. Chile.',
  },
}

export function getDemoHref() {
  return site.contact.calendarUrl || `#${site.demo.id}`
}

export function getMailtoHref({ name, company, fleet, message } = {}) {
  const email = site.contact.email
  if (!email) return ''
  const subject = encodeURIComponent('Solicitud de demostración comercial — LAVD Technologies')
  const lines = [
    `Nombre: ${name || ''}`,
    `Empresa: ${company || ''}`,
    `Flota: ${fleet || ''}`,
    '',
    message || '',
  ]
  const body = encodeURIComponent(lines.join('\n'))
  return `mailto:${email}?subject=${subject}&body=${body}`
}

export function hasRealContact() {
  return Boolean(site.contact.email || site.contact.phone || site.contact.calendarUrl)
}
