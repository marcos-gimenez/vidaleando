import React from 'react'
import { Gallery } from '../components/Gallery'
import { Hero } from '../components/Hero'
import { socials, tallerGallery, talleres } from '../data/siteData'
import { asset } from '../utils/assets'

export function Talleres() {
  return (
    <>
      <Hero
        title="Talleres de Danzas Folklóricas Argentinas"
        eyebrow="Animate a bailar tu historia"
        copy="Celebramos nuestras raíces a través del movimiento, la emoción y la expresión."
        media={[
          '2025/08/Talleres_1.webp',
          '2025/09/Ensayo-01.jpeg',
          '2025/11/05-talleres-danza.webp',
          '2025/11/08-talleres-danza.webp'
        ]}
      />
      <section className="narrow narrative narrative-brush narrative-earth">
        <p>Ofrecemos talleres de danzas folklóricas tradicionales argentinas, donde el cuerpo aprende desde la historia, el ritmo y el alma.</p>
      </section>
      <section className="lesson-grid">
        {talleres.map(([title, text, duration, pdf]) => (
          <article className="lesson" key={title}>
            <h2>{title}</h2>
            <p>{text}</p>
            <span>Modalidad Presencial</span>
            <strong>Duración: {duration}</strong>
            <div className="actions">
              <a className="button" href={asset(pdf)} target="_blank" rel="noopener noreferrer">Descargá ficha</a>
              <a className="button ghost" href={socials.danzaWa2} target="_blank" rel="noopener noreferrer">Contacto</a>
            </div>
          </article>
        ))}
      </section>
      <section className="band split">
        <div>
          <p className="eyebrow">Talleres Itinerantes</p>
          <h2>Todos los talleres también pueden viajar.</h2>
        </div>
        <p>Si alguno de ellos podría sumar a tu ciudad, grupo, comunidad o espacio, estamos abiertos a llevarlo y compartirlo. Podemos conversar fechas, requisitos técnicos, modalidad y honorarios.</p>
      </section>
      <Gallery title="Postales de nuestros encuentros" media={tallerGallery} />
    </>
  )
}
