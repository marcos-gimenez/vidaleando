import React from 'react'
import { AmarantaPromo } from '../components/amaranta/AmarantaPromo'
import { AmarantaSponsorSection } from '../components/amaranta/AmarantaSponsorSection'
import { Feature } from '../components/Feature'
import { Hero } from '../components/Hero'
import { amarantaSponsors } from '../data/amarantaSponsors'
import { homeFeatures, socials } from '../data/siteData'
import { asset } from '../utils/assets'
import { imageAttrs } from '../utils/imageMeta'

export function Home({ go }) {
  return (
    <>
      <Hero
        title="Folklore en Movimiento"
        eyebrow="Vida Le Ando"
        copy="‘Vida Le Ando’ es moverse con el pulso de la vida y el alma de la vidala. Es andar caminos con ARTE, memoria y cuerpo."
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
      <AmarantaPromo go={go} context="home" />
      <AmarantaSponsorSection
        sponsors={amarantaSponsors}
        variant="compact"
        location="home"
        onNavigate={go}
      />
      <section className="feature-grid">
        {homeFeatures.map((feature) => (
          <Feature key={feature.href} {...feature} go={go} />
        ))}
      </section>
      <section className="support band">
        <div>
          <p className="eyebrow">Apoyan nuestro movimiento de Arte Independiente</p>
          <h2>Querés apoyar y formar parte de esta familia?</h2>
          <a className="button" href={socials.danzaWa} target="_blank" rel="noopener noreferrer">Contactate Ahora</a>
        </div>
        <div className="sponsors">
          <img src={asset('2025/12/Patrocinio-1.webp')} alt="Patrocinio" loading="lazy" decoding="async" {...imageAttrs('2025/12/Patrocinio-1.webp')} />
          <img src={asset('2025/12/Patrocinio-2.webp')} alt="Patrocinio" loading="lazy" decoding="async" {...imageAttrs('2025/12/Patrocinio-2.webp')} />
        </div>
      </section>
    </>
  )
}
