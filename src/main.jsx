import React, { useEffect, useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const A = '/assets/uploads/'

const nav = [
  { label: 'INICIO', href: '/' },
  { label: 'DANZA TEATRO', href: '/danza-teatro' },
  { label: 'TALLERES', href: '/talleres' },
  { label: 'PEÑA DE AMIGXS', href: '/pena-de-amigxs' },
  { label: 'TIENDA', href: '/tienda' }
]

const socials = {
  danzaWa: 'https://wa.me/5492477641312',
  danzaWa2: 'https://wa.me/5492477619321',
  penaWa: 'https://wa.me/5492477419212',
  danzaIg: 'https://www.instagram.com/vidaleando',
  penaIg: 'https://www.instagram.com/penadeamigxs'
}

const img = (path) => `${A}${path}`

const range = (start, end, mapper) =>
  Array.from({ length: end - start + 1 }, (_, index) => mapper(start + index))

const tallerGallery = [
  '2025/11/01-talleres-danza.webp',
  '2025/11/03-talleres-danza.webp',
  '2025/11/04-talleres-danza.webp',
  '2025/11/05-talleres-danza.webp',
  '2025/11/06-talleres-danza.webp',
  '2025/11/07-talleres-danza.webp',
  '2025/11/08-talleres-danza.webp',
  '2025/11/09-talleres-danza.webp',
  '2025/11/10-talleres-danza.webp',
  '2025/11/11-talleres-danza.webp',
  '2025/11/12-talleres-danza.webp',
  '2025/11/13-talleres-danza.webp',
  '2025/11/14-talleres-danza.webp',
  '2025/11/15-talleres-danza.webp',
  '2025/11/17-talleres-danza.webp',
  '2025/11/18-talleres-danza.webp',
  '2025/11/20-talleres-danza.webp',
  '2025/11/21-talleres-danza.webp'
]

const obraImages = {
  nati: [
    '2025/07/portada-nati-1.jpg',
    '2025/07/IMG_0816.jpg',
    '2025/07/IMG-20211125-WA0021.jpg',
    '2025/07/IMG_0750.jpg',
    '2025/07/IMG_0753.jpg',
    '2025/07/IMG_0754.jpg',
    '2025/07/IMG_0755.jpg',
    '2025/07/IMG_0756.jpg',
    '2025/07/IMG_0815.jpg',
    '2025/07/IMG_0819.jpg',
    '2025/07/IMG-20211119-WA0050.jpg',
    '2025/07/IMG-20211122-WA0014.jpg'
  ],
  pausa: [
    '2025/08/Obra-La-Pausa-07-1-1.webp',
    '2025/08/Obra-La-Pausa-01-1.webp',
    '2025/08/Obra-La-Pausa-04.webp',
    '2025/08/Obra-La-Pausa-06.webp',
    '2025/08/Obra-La-Pausa-08.webp',
    '2025/08/Obra-La-Pausa-10.webp',
    '2025/08/Obra-La-Pausa-15.webp',
    '2025/08/Obra-La-Pausa-20.webp',
    '2025/08/Obra-La-Pausa-23.webp',
    '2025/08/Obra-La-Pausa-24.webp',
    '2025/08/Obra-La-Pausa-26.webp',
    '2025/08/Obra-La-Pausa-27.webp',
    '2025/08/Obra-La-Pausa-28.webp',
    '2025/08/Obra-La-Pausa-31.webp',
    '2025/08/Obra-La-Pausa-32.webp',
    '2025/08/Obra-La-Pausa-34.webp',
    '2025/08/Obra-La-Pausa-36.webp',
    '2025/08/Obra-La-Pausa-37.webp',
    '2025/08/Obra-La-Pausa-40.webp',
    '2025/08/Obra-La-Pausa-43.webp',
    '2025/08/Obra-La-Pausa-44.webp',
    '2025/08/Obra-La-Pausa-48.webp',
    '2025/08/Obra-La-Pausa-50.webp',
    '2025/08/Obra-La-Pausa-53.webp',
    '2025/08/Obra-La-Pausa-54.webp'
  ],
  anonimas: [
    '2025/11/portada_comprimido.mp4',
    ...range(1, 20, (n) => `2025/11/${String(n).padStart(2, '0')}-anonimas.webp`)
  ],
  anonimas2: [
    '2025/11/portada_comprimido.mp4',
    ...range(52, 71, (n) => `2025/11/${n}-anonimas_2.webp`)
  ]
}

const obras = {
  '/nati': {
    title: "Ñat'i",
    quote: 'Hay una poesía que nace desde las entrañas, del grito más hondo y menos solo',
    body: [
      "Ñat'i es un susurro antiguo, una vidala encarnada. Es memoria, es grito que nace del vientre, es danza que resiste al olvido.",
      "Es lo que no se dice pero se baila, lo que aún sigue latiendo desde lo más profundo."
    ],
    credits: [
      'Obra: Ñat’i',
      'Dirección y producción general: Yamila Aguilar',
      'Asistencia de dirección: Jorgelina Sceusa',
      'Coreografía: Yamila Aguilar',
      'Música en vivo: Juan Manuel Martinez y Juan Cruz Martinez'
    ],
    media: obraImages.nati
  },
  '/la-pausa': {
    title: 'La Pausa',
    quote: 'El sublime instante en el que el tiempo se detiene y volvemos en recuerdos a transitar el camino',
    body: [
      'La Pausa es un instante suspendido, una grieta por donde se cuela la memoria.',
      'Es reflejo y nostalgia; silencio que habla sin palabras y cuerpo en quietud lleno de danzas viejas que aún respiran.'
    ],
    credits: [
      'Obra: La Pausa',
      'Dirección y producción general: Yamila Aguilar',
      'Asistencia de dirección: Melina Murri',
      'Coreografía: Yamila Aguilar'
    ],
    media: obraImages.pausa
  },
  '/anonimas': {
    title: 'Anónimas',
    quote: 'Historias de mujeres valientes y trabajadoras cobran vida a través de movimiento poético, danza y música en vivo',
    body: [
      'Exploramos el arduo trabajo de aquellas que, a menudo, permanecen en la sombra.',
      'La escena abre memoria, oficio y comunidad para volver visible lo que sostiene la vida cotidiana.'
    ],
    credits: [
      'Obra: Anónimas',
      'Dirección y producción general: Yamila Aguilar',
      'Asistencia de dirección: Melina Murri',
      'Coreografía: Yamila Aguilar',
      'Actriz: Jorgelina Sceusa'
    ],
    media: obraImages.anonimas
  },
  '/anonimas-segunda-funcion': {
    title: 'Anónimas Segunda Función',
    quote: 'Una nueva ronda escénica para seguir nombrando historias de mujeres valientes y trabajadoras',
    body: [
      'La segunda función recupera la potencia colectiva de Anónimas y la vuelve encuentro.',
      'Danza, teatro, música y relato se cruzan para sostener una memoria sensible y compartida.'
    ],
    credits: [
      'Obra: Anónimas',
      'Dirección y producción general: Yamila Aguilar',
      'Asistencia de dirección: Melina Murri',
      'Coreografía: Yamila Aguilar'
    ],
    media: obraImages.anonimas2
  }
}

const products = [
  ['Poesía en Movimiento', '$25.000', 'Para quienes sienten que la poesía también se viste.', '2025/12/01-poesia-1.webp', '2025/12/01-poesia-2.webp'],
  ['Bailamos Historias', '$25.000', 'Una remera que abraza la idea de que cada cuerpo guarda relatos.', '2025/12/02-bailamos-historias-1.webp', '2025/12/02-bailamos-historias-2.webp'],
  ['Soy Vidalera', '$25.000', 'Identidad, raíz y movimiento cotidiano en una prenda liviana.', '2025/12/03-soy-vidalera-1.webp', '2025/12/03-soy-vidalera-2.webp'],
  ['Peña de Amigxs', '$25.000', 'La ronda, el encuentro y la música convertidos en estampa.', '2025/12/04-pena-de-amigxs-1.webp', '2025/12/04-pena-de-amigxs-2.webp'],
  ['Peña de Amigxs II', '$25.000', 'Otra postal vidalera para llevar la peña puesta.', '2025/12/05-pena-de-amigxs-3-.webp', '2025/12/05-pena-de-amigxs-4-.webp']
]

function usePath() {
  const [path, setPath] = useState(window.location.pathname.replace(/\/$/, '') || '/')
  useEffect(() => {
    const onPop = () => setPath(window.location.pathname.replace(/\/$/, '') || '/')
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])
  const go = (href) => {
    window.history.pushState({}, '', href)
    setPath(href)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return [path, go]
}

function App() {
  const [path, go] = usePath()
  const page = useMemo(() => {
    if (path === '/') return <Home go={go} />
    if (path === '/danza-teatro') return <DanzaTeatro go={go} />
    if (path === '/talleres') return <Talleres />
    if (path === '/pena-de-amigxs') return <Pena />
    if (path === '/tienda') return <Tienda />
    if (obras[path]) return <Obra obra={obras[path]} />
    return <Home go={go} />
  }, [path, go])

  return (
    <>
      <Header path={path} go={go} />
      <main>{page}</main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}

function Header({ path, go }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <button className="brand" onClick={() => go('/')} aria-label="Inicio">
        <img src={img('2025/07/logo-20.png')} alt="Vida Le Ando" />
      </button>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span></span><span></span><span></span>
      </button>
      <nav className={open ? 'open' : ''}>
        {nav.map((item) => (
          <button
            key={item.href}
            className={path === item.href ? 'active' : ''}
            onClick={() => {
              setOpen(false)
              go(item.href)
            }}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  )
}

function Hero({ title, eyebrow, copy, media, video }) {
  return (
    <section className="hero">
      {video ? (
        <video src={img(video)} autoPlay muted loop playsInline />
      ) : (
        <img src={img(media)} alt="" />
      )}
      <div className="hero-shade"></div>
      <div className="hero-content">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {copy && <p>{copy}</p>}
      </div>
    </section>
  )
}

function Home({ go }) {
  return (
    <>
      <Hero
        title="Folklore en Movimiento"
        eyebrow="Vida Le Ando"
        copy="Moverse con el pulso de la vida y el alma de la vidala. Andar caminos con arte, memoria y cuerpo."
        media="2025/11/16-anonimas_2.webp"
      />
      <section className="intro narrow">
        <p>Este espacio reúne todo lo que hacemos desde la danza, la música y la cultura.</p>
      </section>
      <section className="feature-grid">
        <Feature title="Danza Teatro" text="Un grupo de danza teatro con raíz folklórica" image="2025/09/portada-danzateatro-02.webp" href="/danza-teatro" go={go} />
        <Feature title="Peña de Amigxs" text="Peñas que celebran el encuentro" image="2025/11/45_circo_criollo.webp" href="/pena-de-amigxs" go={go} />
        <Feature title="Talleres de Danzas Folklóricas" text="Talleres para compartir saberes y disfrute" image="2025/09/Ensayo02.jpeg" href="/talleres" go={go} />
      </section>
      <section className="support band">
        <div>
          <p className="eyebrow">Apoyan nuestro movimiento de Arte Independiente</p>
          <h2>Querés apoyar y formar parte de esta familia?</h2>
          <a className="button" href={socials.danzaWa}>Contactate Ahora</a>
        </div>
        <div className="sponsors">
          <img src={img('2025/12/Patrocinio-1.webp')} alt="Patrocinio" />
          <img src={img('2025/12/Patrocinio-2.webp')} alt="Patrocinio" />
        </div>
      </section>
    </>
  )
}

function Feature({ title, text, image, href, go }) {
  return (
    <article className="feature">
      <img src={img(image)} alt={title} />
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
        <button className="text-link" onClick={() => go(href)}>Más Info..</button>
      </div>
    </article>
  )
}

function DanzaTeatro({ go }) {
  const cards = [
    ['Anónimas', 'Primera Función', '2025/11/49-anonimas.webp', '/anonimas'],
    ['Anónimas', 'Segunda Función', '2025/11/25-anonimas_2.webp', '/anonimas-segunda-funcion'],
    ['La Pausa', 'Memoria, nostalgia y cuerpo en escena', '2025/08/Obra-La-Pausa-07-1-1.webp', '/la-pausa'],
    ["Ñat'i", 'Una vidala encarnada desde lo más profundo', '2025/07/IMG_0816.jpg', '/nati']
  ]
  return (
    <>
      <Hero
        title="Danza Teatro"
        eyebrow="Bailamos historias"
        copy="Andamos la vida con el cuerpo y con la voz. Somos raíz que habla, memoria en movimiento y folklore vivo."
        media="2025/09/portada-danzateatro-07.webp"
      />
      <section className="narrative narrow">
        <p>Tejemos escenarios con el pulso del folklore vivo, con la nostalgia de la vidala y la urgencia de un presente que respira.</p>
        <p>Danza y teatro se conjugan en nuestro andar: Vida Le Ando es andar amando, bailar habitando y volvernos ronda, encuentro, ritual, obras.</p>
      </section>
      <section className="work-grid">
        {cards.map(([title, subtitle, image, href]) => (
          <article className="work-card" key={href} onClick={() => go(href)}>
            <img src={img(image)} alt={title} />
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

function Talleres() {
  const talleres = [
    ['El pañuelo, mi sentir...', 'Uso del pañuelo en la zamba', '4 encuentros de 1 hora 15 min.', '2025/08/Mi-panuelo-mi-sentir.pdf'],
    ['Remedios que curan las penas', 'Abordaje de danzas tradicionales', '4 encuentros de 1 hora 15 min.', '2025/08/Remedios-Taller.pdf'],
    ['Taller Creativo', 'Profundizar en movimiento, percepción y comunicación corporal', '4 encuentros de 1 hora 30 min.', '2025/11/Taller-creativo.pdf']
  ]
  return (
    <>
      <Hero
        title="Talleres de Danzas Folklóricas Argentinas"
        eyebrow="Animate a bailar tu historia"
        copy="Celebramos nuestras raíces a través del movimiento, la emoción y la expresión."
        media="2025/08/Talleres_1.webp"
      />
      <section className="narrow narrative">
        <p>Ofrecemos talleres de danzas folklóricas tradicionales argentinas, donde el cuerpo aprende desde la historia, el ritmo y el alma.</p>
      </section>
      <section className="lesson-grid">
        {talleres.map(([title, text, duration, pdf]) => (
          <article className="lesson" key={title}>
            <h2>{title}</h2>
            <p>{text}</p>
            <span>Modalidad Presencial</span>
            <strong>Duración: {duration}</strong>
            <div className="actions">
              <a className="button" href={img(pdf)} target="_blank">Descargá ficha</a>
              <a className="button ghost" href={socials.danzaWa}>Contacto</a>
            </div>
          </article>
        ))}
      </section>
      <section className="band split">
        <div>
          <p className="eyebrow">Talleres Itinerantes</p>
          <h2>Todos los talleres también pueden viajar.</h2>
        </div>
        <p>Si alguno de ellos podría sumar a tu ciudad, grupo, comunidad o espacio, estamos abiertos a llevarlo y compartirlo. Podemos conversar fechas, requisitos técnicos, modalidad y honorarios.</p>
      </section>
      <Gallery title="Postales de nuestros encuentros" media={tallerGallery} />
    </>
  )
}

function Pena() {
  const editions = [
    ['Circo Criollo - Raly Barrionuevo', ['Raly Barrionuevo', 'Juan Manuel Martinez', 'Felipe Bornis', 'La volada', 'Pareja de Danza: Sergio Strubia, Camila Cabrera', 'Cuerpo Municipal de Danzas de Pergamino']],
    ['Patio Santiagueño - Peteco y Demi Carabajal', ['Peteco Carabajal', 'Demi Carabajal', 'Facu Troilo', 'Tomi Vazquez', 'Por Unas Pocas Monedas', 'Ballet Arte & Estilo']],
    ['Ritual Salamanquero - El Vislumbre del Esteko', ['El Vislumbre del Esteko', 'Vermu Folk', 'Facu Troilo', 'Grupo De Danzas El Ombú', 'Feli Bornis', 'Vidaleando', 'Bombonautas']],
    ['Peña en el Campo De Tito', ['Leo Sanabria', 'Juan Manuel Martinez', 'Fernando Basanta', 'Patricio Bucas', 'Ulises Sanabria', 'Omar Navarro']],
    ['Peña Dominguera - José Luis Aguirre', ['José Luis Aguirre', 'Leo Sanabria', 'Ulises Sanabria', 'Grupo De Danzas El Ombú', 'Bombonautas', 'Facu Troilo']]
  ]
  return (
    <>
      <Hero
        title="Peña de Amigxs"
        eyebrow="Vidalita del alma"
        copy="Una ronda abierta con pinceladas de color, donde el arte se hace encuentro entre danzas y cantores."
        video="2025/11/Portada_1_1.mp4"
      />
      <section className="narrative narrow">
        <p>Es un refugio donde entre cuadros y coplas se cruzan miradas que crean. Un fogón que no apaga su llama, un rincón donde caben todas las voces.</p>
        <p>Aquí no hay escenario, hay abrazo. No hay espectadores, hay comunidad.</p>
      </section>
      <section className="editions">
        <h2>Reviví algunas de nuestras ediciones</h2>
        {editions.map(([title, artists]) => (
          <article key={title}>
            <h3>{title}</h3>
            <ul>{artists.map((artist) => <li key={artist}>{artist}</li>)}</ul>
          </article>
        ))}
      </section>
      <section className="contact-band">
        <img src={img('2025/12/02-768x768.png')} alt="Peña de Amigxs" />
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

function Tienda() {
  return (
    <>
      <Hero
        title="Tienda Vidalera"
        eyebrow="Movimiento que se viste"
        copy="Prendas con identidad vidalera para llevar la danza, la peña y la memoria en el cuerpo."
        media="2025/12/portada-ropa.webp"
      />
      <section className="product-grid">
        {products.map(([name, price, text, front, back]) => (
          <article className="product" key={name}>
            <div className="product-images">
              <img src={img(front)} alt={name} />
              <img src={img(back)} alt={`${name} reverso`} />
            </div>
            <h2>{name}</h2>
            <strong>{price}</strong>
            <p>{text}</p>
            <a className="button" href={`${socials.danzaWa}?text=${encodeURIComponent(`Hola, quiero consultar por ${name}`)}`}>Consultar por WhatsApp</a>
          </article>
        ))}
      </section>
    </>
  )
}

function Obra({ obra }) {
  return (
    <>
      <Hero title={obra.title} eyebrow="Danza Teatro" copy={obra.quote} media={obra.media.find((m) => !m.endsWith('.mp4'))} video={obra.media[0].endsWith('.mp4') ? obra.media[0] : null} />
      <section className="obra-layout">
        <div className="narrative">
          {obra.body.map((p) => <p key={p}>{p}</p>)}
        </div>
        <aside>
          <h2>Créditos</h2>
          <ul>{obra.credits.map((credit) => <li key={credit}>{credit}</li>)}</ul>
        </aside>
      </section>
      <Gallery title={`Galería ${obra.title}`} media={obra.media.filter((m) => !m.endsWith('.mp4'))} />
    </>
  )
}

function Gallery({ title, media }) {
  return (
    <section className="gallery-section">
      <h2>{title}</h2>
      <div className="gallery">
        {media.map((item) => (
          <img key={item} src={img(item)} alt="" loading="lazy" />
        ))}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer>
      <div>
        <img src={img('2025/07/logo-20.png')} alt="Vida Le Ando" />
        <p>FOLKLORE EN MOVIMIENTO</p>
      </div>
      <div>
        <h3>Contacto Danza</h3>
        <a href={socials.danzaWa}>Yamila Aguilar</a>
        <a href={socials.danzaWa2}>Melina Murri</a>
        <a href={socials.danzaIg}>Vida Le Ando</a>
      </div>
      <div>
        <h3>Contacto Peña de Amigxs</h3>
        <a href={socials.penaWa}>Juan Cruz Martinez</a>
        <a href={socials.penaIg}>Peña de Amigxs</a>
      </div>
      <small>© 2026 Vida Le Ando. Sitio desarrollado por Marcos Giménez</small>
    </footer>
  )
}

function WhatsAppFloat() {
  return <a className="wa-float" href={socials.danzaWa} aria-label="WhatsApp"><img src={img('2025/08/WhatsApp.png')} alt="" /></a>
}

createRoot(document.getElementById('root')).render(<App />)
