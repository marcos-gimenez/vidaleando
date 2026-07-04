import React from 'react'
import { asset } from '../utils/assets'

export function Feature({ title, text, image, href, go }) {
  return (
    <article className="feature">
      <img src={asset(image)} alt={title} loading="lazy" decoding="async" />
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
        <button className="text-link" onClick={() => go(href)}>Más Info..</button>
      </div>
    </article>
  )
}
