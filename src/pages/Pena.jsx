import React from 'react'
import { Hero } from '../components/Hero'
import { penaEditions, socials } from '../data/siteData'
import { asset } from '../utils/assets'

const getYoutubeEmbedUrl = (url) => {
  if (!url) return ''
  const match = url.match(/(?:shorts\/|watch\?v=|youtu\.be\/|embed\/)([A-Za-z0-9_-]{6,})/)
  return match ? `https://www.youtube.com/embed/${match[1]}` : url
}

export function Pena() {
  return (
    <>
      <Hero
        title="Peña de Amigxs"
        eyebrow="El arte se comparte"
        copy="Es una ronda abierta, Vidalita del alma con pinceladas de color."
        video="2025/11/Portada_1_1.mp4"
      />
      <section className="narrative narrow narrative-brush narrative-fire">
        <p>Es un refugio donde el arte se hace encuentro entre danzas y cantores, entre cuadros y coplas se cruzan miradas que crean.</p>
        <p>Es un fogón que no apaga su llama, un rincón donde caben todas las voces, todas las formas de decir y de sentir.</p>
        <p>Aquí no hay escenario, hay abrazo.</p>
        <p>No hay espectadores, hay comunidad.</p>
      </section>
      <section className="editions">
        <h2>Reviví algunas de nuestras ediciones</h2>
        {penaEditions.map(([title, artists, shorts = []]) => (
          <article key={title}>
            <h3>{title}</h3>
            <div>
              <ul>{artists.map((artist) => <li key={artist}>{artist}</li>)}</ul>
              <div className="edition-shorts">
                {shorts.map((shortUrl, index) => {
                  const embedUrl = getYoutubeEmbedUrl(shortUrl)
                  return embedUrl ? (
                    <iframe
                      key={`${title}-short-${index}`}
                      src={embedUrl}
                      title={`${title} - Short ${index + 1}`}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <div className="short-placeholder" key={`${title}-short-placeholder-${index}`}>
                      Short de YouTube {index + 1}
                    </div>
                  )
                })}
              </div>
            </div>
          </article>
        ))}
      </section>
      <section className="contact-band">
        <img src={asset('2025/12/02-768x768-1.png')} alt="Peña de Amigxs" />
        <div>
          <h2>Contactá a la Peña</h2>
          <p>Consultas, reservas, talleres y presentaciones.</p>
          <a className="button" href={socials.penaWa} target="_blank">WhatsApp</a>
          <a className="button ghost" href={socials.penaIg} target="_blank">Instagram</a>
        </div>
      </section>
    </>
  )
}
