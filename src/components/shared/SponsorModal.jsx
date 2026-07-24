import React, { useEffect, useId, useRef } from 'react'
import { createPortal } from 'react-dom'
import { trackEvent } from '../../utils/analytics'
import './sponsorModal.css'

const FOCUSABLE_ELEMENTS = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])'
].join(',')

export function SponsorModal({ sponsor, location, onClose }) {
  const titleId = useId()
  const dialogRef = useRef(null)

  useEffect(() => {
    if (!sponsor) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const focusFrame = window.requestAnimationFrame(() => {
      dialogRef.current?.focus()
    })

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }

      if (event.key !== 'Tab' || !dialogRef.current) return

      const focusableElements = [...dialogRef.current.querySelectorAll(FOCUSABLE_ELEMENTS)]
      if (!focusableElements.length) {
        event.preventDefault()
        dialogRef.current.focus()
        return
      }

      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      if (
        event.shiftKey &&
        (document.activeElement === firstElement || document.activeElement === dialogRef.current)
      ) {
        event.preventDefault()
        lastElement.focus()
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      window.cancelAnimationFrame(focusFrame)
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [sponsor, onClose])

  if (!sponsor) return null

  const visitSponsor = () => {
    trackEvent('click_sponsor', {
      obra: 'amaranta',
      comercio: sponsor.id,
      ubicacion: location
    })
  }

  return createPortal(
    <div
      className="sponsor-modal-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div
        className="sponsor-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        ref={dialogRef}
        tabIndex="-1"
      >
        <button
          className="sponsor-modal__close"
          type="button"
          aria-label="Cerrar información del auspiciante"
          onClick={onClose}
        >
          <span aria-hidden="true">×</span>
        </button>

        <div className="sponsor-modal__logo-wrapper">
          <img
            src={sponsor.logo}
            alt={sponsor.name}
            width={sponsor.width}
            height={sponsor.height}
          />
        </div>

        <div className="sponsor-modal__content">
          <h2 id={titleId}>{sponsor.name}</h2>

          {sponsor.description && (
            <p className="sponsor-modal__description">{sponsor.description}</p>
          )}

          {(sponsor.address || sponsor.phone) && (
            <dl className="sponsor-modal__details">
              {sponsor.address && (
                <div>
                  <dt>Dirección</dt>
                  <dd>{sponsor.address}</dd>
                </div>
              )}
              {sponsor.phone && (
                <div>
                  <dt>Teléfono</dt>
                  <dd>{sponsor.phone}</dd>
                </div>
              )}
            </dl>
          )}

          {sponsor.url && (
            <a
              className="sponsor-modal__link"
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={visitSponsor}
            >
              {sponsor.linkLabel || 'Visitar auspiciante'}
            </a>
          )}
        </div>
      </div>
    </div>,
    document.body
  )
}
