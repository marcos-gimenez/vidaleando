import React from 'react'
import { Hero } from '../components/Hero'
import { danzaWorks } from '../data/siteData'
import { asset } from '../utils/assets'

export function DanzaTeatro({ go }) {
  return (
    <>
      <Hero
        title="Danza Teatro"
        eyebrow="Bailamos historias"
        copy="Andamos la vida con el cuerpo y con la voz. Somos raíz que habla, memoria en movimiento y folklore vivo."
        media={[
          '2025/09/portada-danzateatro-07.webp',
          '2025/09/portada-danzateatro-03.webp',
          '2025/09/portada-danzateatro-04.webp',
          '2025/09/portada-danzateatro-05.webp'
        ]}
      />
      <section className="narrative narrow">
        <p>Tejemos escenarios con el pulso del folklore vivo, con la nostalgia de la vidala y la urgencia de un presente que respira.</p>
        <p>Danza y teatro se conjugan en nuestro andar: Vida Le Ando es andar amando, bailar habitando y volvernos ronda, encuentro, ritual, obras.</p>
      </section>
      <section className="work-grid">
        {danzaWorks.map(([title, subtitle, image, href]) => (
          <article className="work-card" key={href} onClick={() => go(href)}>
            <img src={asset(image)} alt={title} />
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
