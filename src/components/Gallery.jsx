import React, { useEffect, useState } from 'react'
import { asset } from '../utils/assets'
import { imageAttrs } from '../utils/imageMeta'

export function Gallery({ title, media }) {
  const [selectedIndex, setSelectedIndex] = useState(null)
  const selectedImage = selectedIndex === null ? null : media[selectedIndex]
  const hasManyImages = media.length > 1
  const showPrevious = () => setSelectedIndex((current) => (current === null ? current : (current - 1 + media.length) % media.length))
  const showNext = () => setSelectedIndex((current) => (current === null ? current : (current + 1) % media.length))

  useEffect(() => {
    if (!selectedImage) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedIndex(null)
      }
      if (event.key === 'ArrowLeft') {
        showPrevious()
      }
      if (event.key === 'ArrowRight') {
        showNext()
      }
    }
    document.body.classList.add('modal-open')
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.classList.remove('modal-open')
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [selectedImage])

  return (
    <section className="gallery-section">
      <h2>{title}</h2>
      <div className="gallery">
        {media.map((item, index) => (
          <button className="gallery-item" key={item} onClick={() => setSelectedIndex(index)} aria-label={`Ampliar imagen ${index + 1} de ${title}`}>
            <img src={asset(item)} alt={`${title} ${index + 1}`} loading="lazy" decoding="async" {...imageAttrs(item)} />
          </button>
        ))}
      </div>
      {selectedImage && (
        <div className="image-modal" role="dialog" aria-modal="true" onClick={() => setSelectedIndex(null)}>
          <button className="modal-close" onClick={() => setSelectedIndex(null)} aria-label="Cerrar imagen">×</button>
          {hasManyImages && (
            <button className="modal-arrow modal-arrow-prev" onClick={(event) => { event.stopPropagation(); showPrevious() }} aria-label="Imagen anterior">‹</button>
          )}
          <img src={asset(selectedImage)} alt={`${title} ${selectedIndex + 1}`} decoding="async" {...imageAttrs(selectedImage)} onClick={(event) => event.stopPropagation()} />
          {hasManyImages && (
            <button className="modal-arrow modal-arrow-next" onClick={(event) => { event.stopPropagation(); showNext() }} aria-label="Imagen siguiente">›</button>
          )}
        </div>
      )}
    </section>
  )
}
