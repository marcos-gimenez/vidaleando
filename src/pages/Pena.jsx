import React from 'react'
import { Hero } from '../components/Hero'
import { penaEditions, socials } from '../data/siteData'
import { asset } from '../utils/assets'

export function Pena() {
  return (
    <>
      <Hero
        title="Peña de Amigxs"
        eyebrow="Vidalita del alma"
        copy="Una ronda abierta con pinceladas de color, donde el arte se hace encuentro entre danzas y cantores."
        video="2025/11/Portada_1_1.mp4"
      />
      <section className="narrative narrow narrative-brush narrative-fire">
        <p>Es un refugio donde entre cuadros y coplas se cruzan miradas que crean. Un fogón que no apaga su llama, un rincón donde caben todas las voces.</p>
        <p>Aquí no hay escenario, hay abrazo. No hay espectadores, hay comunidad.</p>
      </section>
      <section className="editions">
        <h2>Reviví algunas de nuestras ediciones</h2>
        {penaEditions.map(([title, artists]) => (
          <article key={title}>
            <h3>{title}</h3>
            <ul>{artists.map((artist) => <li key={artist}>{artist}</li>)}</ul>
          </article>
        ))}
      </section>
      <section className="contact-band">
        <img src={asset('2025/12/02-768x768.png')} alt="Peña de Amigxs" />
        <div>
          <h2>Contactá a la Peña</h2>
          <p>Consultas, reservas, talleres y presentaciones.</p>
          <a className="button" href={socials.penaWa}>WhatsApp</a>
          <a className="button ghost" href={socials.penaIg}>Instagram</a>
        </div>
      </section>
    </>
  )
}
