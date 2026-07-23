import React from 'react'
import { trackAmaranta } from './amarantaTracking'

const bookingMessage = (show) => encodeURIComponent(`Hola, quiero reservar entradas para Amaranta el ${show.shortDate.toLowerCase()}.`)

export function AmarantaShows({ shows, whatsapp }) {
  return (
    <section className="amaranta-section amaranta-shows" id="amaranta-funciones" aria-labelledby="amaranta-shows-title">
      <h2 id="amaranta-shows-title">FUNCIONES</h2>
      <div className="amaranta-show-list">
        {shows.map((show, index) => {
          const confirmed = Boolean(show.venue && show.time && show.advancePrice && show.doorPrice)
          const bookingUrl = show.bookingUrl || (index === 0 ? `${whatsapp}?text=${bookingMessage(show)}` : '')
          return (
            <article className="amaranta-show" key={show.id}>
              <time dateTime={show.dateTime || show.id}>{show.dateLabel}</time>
              {confirmed ? (
                <>
                  <h3>{show.venue}</h3>
                  {(show.address || show.city || show.region) && (
                    <p className="amaranta-show-place">
                      {[
                        show.address,
                        [show.city, show.region].filter(Boolean).join(', ')
                      ].filter(Boolean).join(' · ')}
                    </p>
                  )}
                  <strong className="amaranta-show-time">{show.time}</strong>
                  <p className="amaranta-ticket-label">ENTRADAS</p>
                  <dl className="amaranta-prices">
                    <div><dt>Anticipadas</dt><dd>{show.advancePrice}</dd></div>
                    <div><dt>En puerta</dt><dd>{show.doorPrice}</dd></div>
                  </dl>
                  <div className="amaranta-actions">
                    <a
                      className="amaranta-primary-action"
                      href={bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        trackAmaranta('select_show_date', `funcion_${index + 1}`, show.id)
                        trackAmaranta('click_ticket', `funcion_${index + 1}`, show.id)
                        if (!show.bookingUrl) trackAmaranta('click_whatsapp', `funcion_${index + 1}`, show.id)
                      }}
                    >
                      RESERVAR ENTRADAS
                    </a>
                    {show.mapUrl ? (
                      <a
                        className="amaranta-button amaranta-button-quiet"
                        href={show.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackAmaranta('click_map', `funcion_${index + 1}`, show.id)}
                      >
                        CÓMO LLEGAR
                      </a>
                    ) : (
                      <span className="amaranta-pending-action">UBICACIÓN A CONFIRMAR</span>
                    )}
                  </div>
                </>
              ) : (
                <p className="amaranta-show-pending">Próximamente, más información.</p>
              )}
            </article>
          )
        })}
      </div>
    </section>
  )
}
