import React from 'react'
import { asset } from '../utils/assets'
import { imageAttrs } from '../utils/imageMeta'

export function Feature({ title, text, image, href, go }) {
  return (
    <article className="feature">
      <img src={asset(image)} alt={title} loading="lazy" decoding="async" {...imageAttrs(image)} />
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
        <button className="text-link" onClick={() => go(href)}>Más Info..</button>
      </div>
    </article>
  )
}
