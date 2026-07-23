export const AMARANTA_ROUTE = '/obras/amaranta'

export const amaranta = {
  slug: 'amaranta',
  route: AMARANTA_ROUTE,
  canonical: 'https://vidaleando.com.ar/obras/amaranta',
  title: 'Amaranta',
  subtitle: 'Lo que no se marchita',
  hero: {
    poem: [
      'Hay amores que llegan para quedarse,',
      'otros que enseñan a soltar.',
      'Algunos desafían al mundo',
      'y otros sobreviven a la ausencia.'
    ],
    action: 'VER FUNCIONES',
    image: {
      src: '/assets/amaranta/hero-amaranta.webp',
      alt: 'Intérprete de Amaranta iluminada por una luz roja en una escena oscura',
      width: 1060,
      height: 1484
    }
  },
  central: {
    title: ['“Amaranta”', 'es un homenaje a todas las formas de AMAR.'],
    text: 'Una obra de danza, teatro y música en vivo sobre aquello que permanece.'
  },
  gallery: {
    title: 'Cuerpo. Memoria. Ausencia.',
    // TODO: agregar de 2 a 4 fotografías reales en /public/assets/amaranta/gallery/.
    // Cada objeto debe incluir: src, alt descriptivo, width y height.
    images: []
  },
  shows: [
    {
      id: '2026-09-06',
      dateLabel: '6 DE SEPTIEMBRE DE 2026',
      shortDate: '6 DE SEPTIEMBRE',
      dateTime: '2026-09-06T19:30:00-03:00',
      endDate: '', // TODO: completar cuando se confirme la duración.
      venue: 'Auditorio Municipal Rafael de Aguiar',
      time: '20 HS',
      advancePrice: '$15.000',
      doorPrice: '$20.000',
      city: 'San Nicolás de los Arroyos',
      address: 'Maipú 22',
      region: 'Buenos Aires',
      postalCode: '2900',
      country: 'AR',
      mapUrl:
        'https://www.google.com/maps/place/Auditorio+Municipal+Rafael+de+Aguiar/@-33.3344758,-60.2201873,19.75z/data=!4m6!3m5!1s0x95b767467aa15a0d:0x380e7dc963c2cbba!8m2!3d-33.3345568!4d-60.2197927!16s%2Fg%2F11h7q6gd4d?authuser=0&entry=ttu&g_ep=EgoyMDI2MDcxOS4wIKXMDSoASAFQAw%3D%3D',
      bookingUrl: '' // TODO: completar si la reserva no utiliza el WhatsApp general.
    },
    {
      id: '2026-10-10',
      dateLabel: '10 DE OCTUBRE DE 2026',
      shortDate: '10 DE OCTUBRE',
      dateTime: '', // TODO: completar horario y zona horaria.
      endDate: '',
      venue: '', // TODO: completar lugar.
      time: '', // TODO: completar horario.
      advancePrice: '', // TODO: completar precio anticipado.
      doorPrice: '', // TODO: completar precio en puerta.
      city: '', // TODO: completar ciudad.
      address: '', // TODO: completar dirección.
      mapUrl: '', // TODO: completar URL de Google Maps.
      bookingUrl: '' // TODO: completar enlace o teléfono de reservas.
    }
  ],
  contact: {
    whatsapp: 'https://wa.me/5493364193864',
    instagram: 'https://www.instagram.com/vida_leando'
  },
  team: [
    { role: 'DIRECCIÓN GENERAL', names: ['Yamila Aguilar'] },
    { role: 'ACTUACIÓN', names: ['Jorgelina Sceusa'] },
    { role: 'BAILARINAS', names: ['Melina Murri', 'Agustina Lacoume', 'Leila Giménez', 'Aldana Pintos', 'María Ramírez', 'Micaela Huerta'] },
    { role: 'MÚSICA EN VIVO', names: ['Marcos Giménez', 'Juan Cruz Martínez', 'Jorge Taborda'] }
  ],
  seo: {
    title: 'Amaranta | Obra de danza-teatro y música en vivo | Vidaleando',
    description: 'Descubrí Amaranta, una obra de danza-teatro con música en vivo de Vida le Ando. Funciones el 6 de septiembre y el 10 de octubre de 2026.',
    ogTitle: 'Amaranta — Lo que no se marchita',
    ogDescription: 'Un homenaje a todas las formas de amar.',
    ogType: 'website',
    // TODO: completar cuando exista /public/assets/amaranta/amaranta-og-1200x630.webp.
    image: null
  }
}
