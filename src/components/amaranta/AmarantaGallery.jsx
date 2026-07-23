import React, { useEffect, useRef, useState } from 'react'
import { trackAmaranta } from './amarantaTracking'

export function AmarantaGallery({ gallery }) {
  const images = gallery.images.slice(0, 4)
  const [selected, setSelected] = useState(null)
  const closeButtonRef = useRef(null)

  useEffect(() => {
    if (selected === null) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setSelected(null)
      if (event.key === 'ArrowLeft') setSelected((current) => (current - 1 + images.length) % images.length)
      if (event.key === 'ArrowRight') setSelected((current) => (current + 1) % images.length)
    }
    document.body.classList.add('modal-open')
    window.addEventListener('keydown', onKeyDown)
    closeButtonRef.current?.focus()
    return () => {
      document.body.classList.remove('modal-open')
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [selected, images.length])

  if (!images.length) return null

  const openImage = (index) => {
    trackAmaranta('open_gallery', 'galeria')
    setSelected(index)
  }

  return (
    <section className="amaranta-section amaranta-gallery" aria-labelledby="amaranta-gallery-title">
      <header>
        <h2 id="amaranta-gallery-title">{gallery.title}</h2>
      </header>
      <div className="amaranta-gallery-grid">
        {images.map((image, index) => (
          <button key={image.src} onClick={() => openImage(index)} aria-label={`Ampliar: ${image.alt}`}>
            <img
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              style={{ aspectRatio: `${image.width} / ${image.height}` }}
              loading="lazy"
              decoding="async"
            />
          </button>
        ))}
      </div>
      {selected !== null && (
        <div className="amaranta-gallery-modal" role="dialog" aria-modal="true" aria-label="Visor de fotografías" onClick={() => setSelected(null)}>
          <button ref={closeButtonRef} className="amaranta-modal-close" onClick={() => setSelected(null)} aria-label="Cerrar fotografía">×</button>
          <button className="amaranta-modal-prev" onClick={(event) => { event.stopPropagation(); setSelected((selected - 1 + images.length) % images.length) }} aria-label="Fotografía anterior">‹</button>
          <img
            src={images[selected].src}
            alt={images[selected].alt}
            width={images[selected].width}
            height={images[selected].height}
            onClick={(event) => event.stopPropagation()}
          />
          <button className="amaranta-modal-next" onClick={(event) => { event.stopPropagation(); setSelected((selected + 1) % images.length) }} aria-label="Fotografía siguiente">›</button>
        </div>
      )}
    </section>
  )
}
