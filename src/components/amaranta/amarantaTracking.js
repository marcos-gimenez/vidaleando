import { trackEvent } from '../../utils/analytics'

export const trackAmaranta = (eventName, ubicacionCta, fechaFuncion = '', parameters = {}) => {
  trackEvent(eventName, {
    ...parameters,
    obra: 'amaranta',
    ubicacion_cta: ubicacionCta,
    ...(fechaFuncion ? { fecha_funcion: fechaFuncion } : {})
  })
}
