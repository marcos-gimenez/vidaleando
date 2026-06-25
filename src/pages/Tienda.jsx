import React from 'react'
import { Hero } from '../components/Hero'
import { products, socials } from '../data/siteData'
import { asset } from '../utils/assets'

export function Tienda() {
  return (
    <>
      <Hero
        title="Tienda Vidalera"
        eyebrow="Movimiento que se viste"
        copy="Prendas con identidad vidalera para llevar la danza, la peña y la memoria en el cuerpo."
        media={[
          '2025/12/portada-ropa.webp',
          '2025/12/01-poesia-1.webp',
          '2025/12/02-bailamos-historias-1.webp',
          '2025/12/04-pena-de-amigxs-1.webp'
        ]}
      />
      <section className="product-grid">
        {products.map(([name, price, text, front, back]) => (
          <article className="product" key={name}>
            <div className="product-images">
              <img src={asset(front)} alt={name} />
              <img src={asset(back)} alt={`${name} reverso`} />
            </div>
            <h2>{name}</h2>
            <strong>{price}</strong>
            <p>{text}</p>
            <a className="button" href={`${socials.danzaWa}?text=${encodeURIComponent(`Hola, quiero consultar por ${name}`)}`}>Consultar por WhatsApp</a>
          </article>
        ))}
      </section>
    </>
  )
}
