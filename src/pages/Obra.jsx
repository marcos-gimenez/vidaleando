import React from 'react'
import { Gallery } from '../components/Gallery'
import { Hero } from '../components/Hero'

export function Obra({ obra }) {
  const galleryMedia = obra.media.filter((item) => !item.endsWith('.mp4'))
  const video = obra.media[0].endsWith('.mp4') ? obra.media[0] : null

  return (
    <>
      <Hero
        title={obra.title}
        eyebrow="Danza Teatro"
        copy={obra.quote}
        media={galleryMedia.slice(0, 5)}
        video={video}
      />
      <section className="obra-layout">
        <div className="narrative narrative-brush narrative-obra">
          {obra.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <aside>
          <h2>Créditos</h2>
          <ul>{obra.credits.map((credit) => <li key={credit}>{credit}</li>)}</ul>
        </aside>
      </section>
      <Gallery title={`Galería ${obra.title}`} media={galleryMedia} />
    </>
  )
}
