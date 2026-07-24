import React from 'react'
import { AMARANTA_ROUTE } from '../../data/amaranta'
import { SponsorGrid } from '../shared/SponsorGrid'
import './amarantaButton.css'
import './amarantaSponsors.css'

export function AmarantaSponsorSection({
  sponsors = [],
  variant = 'full',
  location,
  onNavigate
}) {
  const hasActiveSponsors = sponsors.some((sponsor) => sponsor.active === true)

  if (!hasActiveSponsors) return null

  const compact = variant === 'compact'
  const titleId = `amaranta-sponsors-${location}-title`

  const navigateToAmaranta = (event) => {
    if (!onNavigate) return
    event.preventDefault()
    onNavigate(AMARANTA_ROUTE)
  }

  return (
    <section
      className={`amaranta-sponsor-section amaranta-sponsor-section--${variant}`}
      aria-labelledby={titleId}
    >
      <header className="amaranta-sponsor-heading">
        <h2 id={titleId}>
          {compact ? 'Comercios que acompañan Amaranta' : 'Acompañan esta producción'}
        </h2>
        {!compact && (
          <p>
            Amaranta es posible también gracias al apoyo de comercios, empresas e instituciones que acompañan el arte y la cultura.
          </p>
        )}
      </header>

      <SponsorGrid sponsors={sponsors} variant={variant} location={location} />

      {compact && (
        <a
          className="amaranta-primary-action amaranta-sponsor-cta"
          href={AMARANTA_ROUTE}
          onClick={navigateToAmaranta}
        >
          Conocer Amaranta
        </a>
      )}
    </section>
  )
}
