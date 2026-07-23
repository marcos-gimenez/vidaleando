import React from 'react'
import { AmarantaPromo } from '../components/amaranta/AmarantaPromo'
import { Hero } from '../components/Hero'
import { danzaWorks } from '../data/siteData'
import { asset } from '../utils/assets'
import { imageAttrs } from '../utils/imageMeta'

export function DanzaTeatro({ go }) {
  const openWork = (event, href) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      go(href)
    }
  }

  return (
    <>
      <Hero
        title="Danza Teatro"
        eyebrow="Bailamos historias"
        copy="Andamos la vida con el cuerpo y con la voz. Somos raíz que habla, somos memoria en movimiento."
        media={[
          '2025/09/portada-danzateatro-07.webp',
          '2025/09/portada-danzateatro-03.webp',
          '2025/09/portada-danzateatro-04.webp',
          '2025/09/portada-danzateatro-05.webp'
        ]}
      />
      <section className="narrative narrow narrative-brush narrative-stage">
        <p>Tejemos escenarios con el pulso del FOLKLORE VIVO, con la nostalgia de la vidala y la urgencia de un presente que respira, que VIVE.</p>
        <p>Danza y teatro se conjugan en nuestro andar. VIDA LE ANDO es andar amando, bailar habitando, decimos con el cuerpo lo que el ALMA nos recuerda y nos volvemos ronda, encuentro, ritual, obras.</p>
      </section>
      <AmarantaPromo go={go} context="danza" />
      <section className="work-grid">
        {danzaWorks.map(([title, subtitle, image, href]) => (
          <article className="work-card" key={href} onClick={() => go(href)} onKeyDown={(event) => openWork(event, href)} role="button" tabIndex={0}>
            <img src={asset(image)} alt={title} loading="lazy" decoding="async" {...imageAttrs(image)} />
            <div>
              <p>{subtitle}</p>
              <h2>{title}</h2>
            </div>
          </article>
        ))}
      </section>
    </>
  )
}
