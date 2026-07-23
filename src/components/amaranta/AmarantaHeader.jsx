import React, { useEffect, useRef, useState } from 'react'
import { asset } from '../../utils/assets'
import { imageAttrs } from '../../utils/imageMeta'
import { trackAmaranta } from './amarantaTracking'

const logoPath = '2025/07/logo-20.png'
const directionThreshold = 8
const hideAfter = 80

export function AmarantaHeader({ bookingUrl, whatsapp, onNavigate }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(() => window.scrollY >= 12)
  const [hidden, setHidden] = useState(false)
  const headerRef = useRef(null)
  const menuRef = useRef(null)
  const toggleRef = useRef(null)
  const firstLinkRef = useRef(null)
  const message = encodeURIComponent('Hola, quiero reservar entradas para Amaranta.')
  const reserveUrl = bookingUrl || `${whatsapp}?text=${message}`

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 901px)')
    const onChange = (event) => {
      if (event.matches) setOpen(false)
    }
    desktop.addEventListener('change', onChange)
    return () => desktop.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    let frame = 0
    let lastY = Math.max(0, window.scrollY)

    const updateHeader = () => {
      frame = 0
      const currentY = Math.max(0, window.scrollY)
      const delta = currentY - lastY
      const focusedInside = headerRef.current?.contains(document.activeElement)
      const nextScrolled = currentY >= 12

      setScrolled((current) => current === nextScrolled ? current : nextScrolled)

      if (open || focusedInside || currentY < hideAfter) {
        setHidden(false)
        lastY = currentY
        return
      }

      if (Math.abs(delta) >= directionThreshold) {
        setHidden(delta > 0)
        lastY = currentY
      }
    }

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateHeader)
    }

    updateHeader()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [open])

  useEffect(() => {
    if (!open) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    const onPointerDown = (event) => {
      if (!menuRef.current?.contains(event.target) && !toggleRef.current?.contains(event.target)) {
        setOpen(false)
      }
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    firstLinkRef.current?.focus()

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [open])

  const goToSection = (event, id) => {
    setOpen(false)
    onNavigate(event, id)
  }

  const handleBack = () => {
    setOpen(false)
    trackAmaranta('click_back_vidaleando', 'header')
  }
  const trackTickets = () => {
    setOpen(false)
    trackAmaranta('click_ticket', 'header', '2026-09-06')
    if (!bookingUrl) trackAmaranta('click_whatsapp', 'header', '2026-09-06')
  }

  const visibilityClass = hidden ? 'amaranta-header--hidden' : 'amaranta-header--visible'

  return (
    <header
      ref={headerRef}
      className={`amaranta-header ${scrolled ? 'amaranta-header--scrolled' : 'amaranta-header--top'} ${visibilityClass}`}
      onFocusCapture={() => setHidden(false)}
    >
      <a className="amaranta-header-logo" href="/" aria-label="Volver al inicio de Vidaleando" onClick={handleBack}>
        <img src={asset(logoPath)} alt="Vida Le Ando" decoding="async" {...imageAttrs(logoPath)} />
      </a>

      <nav className="amaranta-desktop-nav" aria-label="Navegación de Amaranta">
        <a href="#amaranta-obra" onClick={(event) => goToSection(event, 'amaranta-obra')}>La obra</a>
        <a href="#amaranta-funciones" onClick={(event) => goToSection(event, 'amaranta-funciones')}>Funciones</a>
        <a href="#amaranta-equipo" onClick={(event) => goToSection(event, 'amaranta-equipo')}>Equipo</a>
        <a href={reserveUrl} target="_blank" rel="noopener noreferrer" onClick={trackTickets}>Entradas</a>
      </nav>

      <button
        ref={toggleRef}
        className="amaranta-menu-button"
        type="button"
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={open}
        aria-controls="amaranta-mobile-menu"
        onClick={() => setOpen((current) => !current)}
      >
        <span></span><span></span><span></span>
      </button>

      <nav
        id="amaranta-mobile-menu"
        ref={menuRef}
        className={`amaranta-mobile-menu ${open ? 'open' : ''}`}
        aria-label="Menú mobile de Amaranta"
      >
        <a ref={firstLinkRef} href="/" onClick={handleBack}>Volver a Vidaleando</a>
        <a href="#amaranta-obra" onClick={(event) => goToSection(event, 'amaranta-obra')}>La obra</a>
        <a href="#amaranta-funciones" onClick={(event) => goToSection(event, 'amaranta-funciones')}>Funciones</a>
        <a href="#amaranta-equipo" onClick={(event) => goToSection(event, 'amaranta-equipo')}>Equipo</a>
        <a href={reserveUrl} target="_blank" rel="noopener noreferrer" onClick={trackTickets}>Entradas</a>
      </nav>
    </header>
  )
}
