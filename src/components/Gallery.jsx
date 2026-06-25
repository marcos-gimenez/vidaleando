import React from 'react'
import { asset } from '../utils/assets'

export function Gallery({ title, media }) {
  return (
    <section className="gallery-section">
      <h2>{title}</h2>
      <div className="gallery">
        {media.map((item) => (
          <img key={item} src={asset(item)} alt="" loading="lazy" />
        ))}
      </div>
    </section>
  )
}
