import { trackEvent } from '../../utils/analytics'

export const trackAmaranta = (eventName, ubicacionCta, fechaFuncion = '') => {
  trackEvent(eventName, {
    obra: 'amaranta',
    ubicacion_cta: ubicacionCta,
    ...(fechaFuncion ? { fecha_funcion: fechaFuncion } : {})
  })
}
