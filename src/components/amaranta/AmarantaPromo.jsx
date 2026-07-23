import React from 'react'
import { AMARANTA_ROUTE, amaranta } from '../../data/amaranta'
import './amarantaButton.css'
import './amarantaPromo.css'

export function AmarantaPromo({ go, context = 'danza' }) {
  const navigate = (event) => {
    event.preventDefault()
    go(AMARANTA_ROUTE)
  }

  return (
    <aside className={`amaranta-promo amaranta-promo-${context}`} aria-labelledby={`amaranta-promo-title-${context}`}>
      <p>PRÓXIMO ESTRENO · 2026</p>
      <h2 id={`amaranta-promo-title-${context}`}>{amaranta.title}</h2>
      <em>{amaranta.subtitle}</em>
      <span>6 de septiembre · 10 de octubre </span>
      <a className="amaranta-primary-action" href={AMARANTA_ROUTE} onClick={navigate}>DESCUBRIR AMARANTA</a>
    </aside>
  )
}
