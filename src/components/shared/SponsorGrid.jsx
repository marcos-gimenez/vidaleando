import React, { useRef, useState } from 'react'
import { trackEvent } from '../../utils/analytics'
import { SponsorModal } from './SponsorModal'
import './sponsorGrid.css'

export function SponsorGrid({ sponsors = [], variant = 'full', location }) {
  const activeSponsors = sponsors.filter((sponsor) => sponsor.active === true)
  const [selectedSponsor, setSelectedSponsor] = useState(null)
  const sponsorButtons = useRef(new Map())

  if (!activeSponsors.length) return null

  const openSponsor = (sponsor) => {
    setSelectedSponsor(sponsor)
    trackEvent('open_sponsor', {
      obra: 'amaranta',
      comercio: sponsor.id,
      ubicacion: location
    })
  }

  const closeSponsor = () => {
    const sponsorId = selectedSponsor?.id
    setSelectedSponsor(null)
    window.requestAnimationFrame(() => sponsorButtons.current.get(sponsorId)?.focus())
  }

  return (
    <>
      <div className={`sponsor-grid sponsor-grid--${variant}`}>
        {activeSponsors.map((sponsor) => (
          <button
            className="sponsor-card"
            key={sponsor.id}
            type="button"
            aria-label={`Ver información de ${sponsor.name}`}
            aria-haspopup="dialog"
            data-level={sponsor.level}
            ref={(button) => {
              if (button) sponsorButtons.current.set(sponsor.id, button)
              else sponsorButtons.current.delete(sponsor.id)
            }}
            onClick={() => openSponsor(sponsor)}
          >
            <span className="sponsor-card__logo-wrapper">
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                width={sponsor.width}
                height={sponsor.height}
                loading="lazy"
                decoding="async"
              />
            </span>
            {variant !== 'compact' && (
              <span className="sponsor-card__name">{sponsor.name}</span>
            )}
          </button>
        ))}
      </div>

      <SponsorModal sponsor={selectedSponsor} location={location} onClose={closeSponsor} />
    </>
  )
}
