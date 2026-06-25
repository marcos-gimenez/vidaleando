import React from 'react'
import { Feature } from '../components/Feature'
import { Hero } from '../components/Hero'
import { homeFeatures, socials } from '../data/siteData'
import { asset } from '../utils/assets'

export function Home({ go }) {
  return (
    <>
      <Hero
        title="Folklore en Movimiento"
        eyebrow="Vida Le Ando"
        copy="Moverse con el pulso de la vida y el alma de la vidala. Andar caminos con arte, memoria y cuerpo."
        media={[
          '2025/11/16-anonimas_2.webp',
          '2025/09/Ensayo02.jpeg',
          '2025/11/45_circo_criollo.webp',
          '2025/09/portada-danzateatro-02.webp'
        ]}
      />
      <section className="intro narrow">
        <p>Este espacio reúne todo lo que hacemos desde la danza, la música y la cultura.</p>
      </section>
      <section className="feature-grid">
        {homeFeatures.map((feature) => (
          <Feature key={feature.href} {...feature} go={go} />
        ))}
      </section>
      <section className="support band">
        <div>
          <p className="eyebrow">Apoyan nuestro movimiento de Arte Independiente</p>
          <h2>Querés apoyar y formar parte de esta familia?</h2>
          <a className="button" href={socials.danzaWa}>Contactate Ahora</a>
        </div>
        <div className="sponsors">
          <img src={asset('2025/12/Patrocinio-1.webp')} alt="Patrocinio" />
          <img src={asset('2025/12/Patrocinio-2.webp')} alt="Patrocinio" />
        </div>
      </section>
    </>
  )
}
