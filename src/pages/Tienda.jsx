import React, { useEffect, useState } from 'react'
import { Hero } from '../components/Hero'
import { products, socials } from '../data/siteData'
import { asset } from '../utils/assets'
import { imageAttrs } from '../utils/imageMeta'

export function Tienda() {
  const [modalProduct, setModalProduct] = useState(null)
  const selectedImage = modalProduct ? modalProduct.images[modalProduct.index] : null
  const showPrevious = () => {
    setModalProduct((current) => current && {
      ...current,
      index: (current.index - 1 + current.images.length) % current.images.length
    })
  }
  const showNext = () => {
    setModalProduct((current) => current && {
      ...current,
      index: (current.index + 1) % current.images.length
    })
  }

  useEffect(() => {
    if (!modalProduct) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setModalProduct(null)
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
  }, [modalProduct])

  return (
    <>
      <Hero
        title="Tienda Vidalera"
        eyebrow="Movimiento que se viste"
        copy="Prendas con identidad vidalera para llevar la danza, la peña y la memoria en el cuerpo."
        media={[
          '2025/12/portada-ropa.webp'
        ]}
      />
      <section className="product-grid">
        {products.map(([name, price, text, front, back]) => (
          <article className="product" key={name}>
            <div className="product-images">
              {[front, back].map((image, index) => (
                <button
                  className="product-image-button"
                  key={image}
                  onClick={() => setModalProduct({ name, images: [front, back], index })}
                  aria-label={`Ver ${index === 0 ? name : `${name} reverso`}`}
                >
                  <img src={asset(image)} alt={index === 0 ? name : `${name} reverso`} loading="lazy" decoding="async" {...imageAttrs(image)} />
                </button>
              ))}
            </div>
            <h2>{name}</h2>
            <strong>{price}</strong>
            <p>{text}</p>
            <a className="button" href={`${socials.danzaWa}?text=${encodeURIComponent(`Hola, quiero consultar por ${name}`)}`} target="_blank" rel="noopener noreferrer">Consultar por WhatsApp</a>
          </article>
        ))}
      </section>
      {modalProduct && (
        <div className="image-modal" role="dialog" aria-modal="true" onClick={() => setModalProduct(null)}>
          <button className="modal-close" onClick={() => setModalProduct(null)} aria-label="Cerrar imagen">×</button>
          <button className="modal-arrow modal-arrow-prev" onClick={(event) => { event.stopPropagation(); showPrevious() }} aria-label="Imagen anterior">‹</button>
          <figure className="product-modal-figure" onClick={(event) => event.stopPropagation()}>
            <img src={asset(selectedImage)} alt={modalProduct.name} decoding="async" {...imageAttrs(selectedImage)} />
            <figcaption>{modalProduct.name}</figcaption>
          </figure>
          <button className="modal-arrow modal-arrow-next" onClick={(event) => { event.stopPropagation(); showNext() }} aria-label="Imagen siguiente">›</button>
        </div>
      )}
    </>
  )
}
