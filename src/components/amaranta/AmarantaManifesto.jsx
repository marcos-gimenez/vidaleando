import React from 'react'

export function AmarantaManifesto({ content }) {
  return (
    <section className="amaranta-central" id="amaranta-obra" aria-labelledby="amaranta-central-title">
      <div className="amaranta-thread" aria-hidden="true"></div>
      <h2 id="amaranta-central-title">
        {content.title.map((line) => <span key={line}>{line}</span>)}
      </h2>
      <p>{content.text}</p>
    </section>
  )
}
