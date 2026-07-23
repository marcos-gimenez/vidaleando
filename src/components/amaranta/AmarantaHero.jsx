import React from 'react'
import { AmarantaShareButton } from './AmarantaShareButton'

export function AmarantaHero({ data, onTickets }) {
  return (
    <section className="amaranta-hero" aria-labelledby="amaranta-title">
      <img
        className="amaranta-hero-image"
        src={data.hero.image.src}
        alt={data.hero.image.alt}
        width={data.hero.image.width}
        height={data.hero.image.height}
        loading="eager"
        fetchPriority="high"
        decoding="async"
      />
      <div className="amaranta-hero-overlay" aria-hidden="true"></div>
      <div className="amaranta-hero-inner">
        <h1 id="amaranta-title">
          <span>{data.title}</span>
          <em>{data.subtitle}</em>
        </h1>
        <div className="amaranta-poem">
          {data.hero.poem.map((line) => <span key={line}>{line}</span>)}
        </div>
        <div className="amaranta-actions">
          <button className="amaranta-primary-action" onClick={onTickets}>{data.hero.action}</button>
          <AmarantaShareButton />
        </div>
      </div>
    </section>
  )
}
