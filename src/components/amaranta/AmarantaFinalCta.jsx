import React from 'react'
import { trackAmaranta } from './amarantaTracking'

export function AmarantaFinalCta({ whatsapp, title, subtitle, children }) {
  const message = encodeURIComponent('Hola, quiero reservar entradas para Amaranta.')
  return (
    <section className="amaranta-final" aria-labelledby="amaranta-final-title">
      <h2 id="amaranta-final-title"><span>{title}</span><em>{subtitle}</em></h2>
      <div className="amaranta-actions">
        <a
          className="amaranta-primary-action"
          href={`${whatsapp}?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            trackAmaranta('click_ticket', 'cta_final', '2026-09-06')
            trackAmaranta('click_whatsapp', 'cta_final', '2026-09-06')
          }}
        >
          RESERVAR ENTRADAS
        </a>
      </div>
      {children}
      <p className="amaranta-final-company">COMPAÑÍA DE DANZA-TEATRO<br />VIDA LE ANDO</p>
      <a className="amaranta-back-link" href="/" onClick={() => trackAmaranta('click_back_vidaleando', 'footer')}>Volver a Vidaleando</a>
    </section>
  )
}
