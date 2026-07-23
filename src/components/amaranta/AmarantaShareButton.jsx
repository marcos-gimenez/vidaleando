import React, { useEffect, useRef, useState } from 'react'
import { trackAmaranta } from './amarantaTracking'

const shareData = {
  title: 'Amaranta — Lo que no se marchita',
  text: 'Descubrí Amaranta, una obra de danza-teatro y música en vivo.',
  url: 'https://vidaleando.com.ar/obras/amaranta'
}

const whatsappText = [
  shareData.title,
  '',
  'Descubrí una obra de danza-teatro y música en vivo.',
  '',
  shareData.url
].join('\n')

const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(whatsappText)}`
const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareData.url)}`

const copyShareUrl = async () => {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(shareData.url)
      return true
    } catch {
      // Continue with the selection fallback when Clipboard API is unavailable.
    }
  }

  const activeElement = document.activeElement
  const textarea = document.createElement('textarea')
  textarea.value = shareData.url
  textarea.setAttribute('readonly', '')
  textarea.style.position = 'fixed'
  textarea.style.opacity = '0'
  document.body.appendChild(textarea)
  textarea.select()

  try {
    return document.execCommand('copy')
  } catch {
    return false
  } finally {
    textarea.remove()
    if (typeof activeElement?.focus === 'function') activeElement.focus()
  }
}

export function AmarantaShareButton() {
  const [open, setOpen] = useState(false)
  const [status, setStatus] = useState('')
  const rootRef = useRef(null)
  const triggerRef = useRef(null)
  const firstOptionRef = useRef(null)
  const statusTimer = useRef(0)
  const canNativeShare = typeof navigator !== 'undefined' && typeof navigator.share === 'function'

  useEffect(() => () => window.clearTimeout(statusTimer.current), [])

  useEffect(() => {
    if (!open) return undefined

    const focusFrame = window.requestAnimationFrame(() => firstOptionRef.current?.focus())
    const closeWithEscape = (event) => {
      if (event.key !== 'Escape') return
      setOpen(false)
      triggerRef.current?.focus()
    }
    const closeOnOutsideClick = (event) => {
      if (!rootRef.current?.contains(event.target)) setOpen(false)
    }

    document.addEventListener('keydown', closeWithEscape)
    document.addEventListener('pointerdown', closeOnOutsideClick)
    return () => {
      window.cancelAnimationFrame(focusFrame)
      document.removeEventListener('keydown', closeWithEscape)
      document.removeEventListener('pointerdown', closeOnOutsideClick)
    }
  }, [open])

  const announce = (message) => {
    window.clearTimeout(statusTimer.current)
    setStatus(message)
    statusTimer.current = window.setTimeout(() => setStatus(''), 2500)
  }

  const copyLink = async () => {
    setOpen(false)
    if (await copyShareUrl()) {
      announce('Enlace copiado')
      trackAmaranta('share_amaranta', 'hero', '', { metodo: 'copy_link' })
    } else {
      announce('No se pudo copiar el enlace')
    }
    triggerRef.current?.focus()
  }

  const nativeShare = async () => {
    setOpen(false)
    setStatus('')

    try {
      await navigator.share(shareData)
      trackAmaranta('share_amaranta', 'hero', '', { metodo: 'native_share' })
    } catch (error) {
      if (error?.name !== 'AbortError') announce('No se pudo abrir el menú de compartir')
    } finally {
      triggerRef.current?.focus()
    }
  }

  const selectExternal = (method) => {
    setOpen(false)
    trackAmaranta('share_amaranta', 'hero', '', { metodo: method })
    window.requestAnimationFrame(() => triggerRef.current?.focus())
  }

  return (
    <div className="amaranta-share-control" ref={rootRef}>
      <button
        ref={triggerRef}
        className="amaranta-share-button"
        type="button"
        aria-label="Compartir Amaranta"
        aria-expanded={open}
        aria-controls="amaranta-share-panel"
        onClick={() => setOpen((current) => !current)}
      >
        <svg
          className="amaranta-share-icon"
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
        >
          <circle cx="18" cy="5" r="2.5" />
          <circle cx="6" cy="12" r="2.5" />
          <circle cx="18" cy="19" r="2.5" />
          <path d="m8.2 10.8 7.6-4.5M8.2 13.2l7.6 4.5" />
        </svg>
        <span className="amaranta-share-label">Compartir</span>
      </button>
      {open && (
        <div
          className="amaranta-share-panel"
          id="amaranta-share-panel"
          role="group"
          aria-label="Opciones para compartir Amaranta"
        >
          <a
            ref={firstOptionRef}
            className="amaranta-share-option"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => selectExternal('whatsapp')}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M5.2 18.8 6 15.9a7 7 0 1 1 2.2 2.1l-3 .8Z" />
              <path d="M9.2 8.5c.5 2.8 2 4.3 4.8 4.9" />
            </svg>
            WHATSAPP
          </a>
          <a
            className="amaranta-share-option"
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => selectExternal('facebook')}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M14.5 20v-7h2.4l.4-3h-2.8V8.1c0-.9.3-1.5 1.5-1.5h1.5V4a20 20 0 0 0-2.2-.1c-2.2 0-3.7 1.3-3.7 3.9V10H9v3h2.6v7" />
            </svg>
            FACEBOOK
          </a>
          {canNativeShare && (
            <button className="amaranta-share-option" type="button" onClick={nativeShare}>
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <circle cx="18" cy="5" r="2.2" />
                <circle cx="6" cy="12" r="2.2" />
                <circle cx="18" cy="19" r="2.2" />
                <path d="m8 11 8-4.8M8 13l8 4.8" />
              </svg>
              COMPARTIR…
            </button>
          )}
          <button className="amaranta-share-option" type="button" onClick={copyLink}>
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <rect x="8" y="8" width="10" height="11" rx="1" />
              <path d="M15 8V5H5v11h3" />
            </svg>
            COPIAR ENLACE
          </button>
        </div>
      )}
      <span className="amaranta-share-status" role="status" aria-live="polite">
        {status}
      </span>
    </div>
  )
}
