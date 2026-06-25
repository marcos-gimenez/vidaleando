import React, { useMemo } from 'react'
import { Footer, WhatsAppFloat } from './components/Footer'
import { Header } from './components/Header'
import { Seo } from './components/Seo'
import { obras } from './data/siteData'
import { usePath } from './hooks/usePath'
import { DanzaTeatro } from './pages/DanzaTeatro'
import { Home } from './pages/Home'
import { Obra } from './pages/Obra'
import { Pena } from './pages/Pena'
import { Talleres } from './pages/Talleres'
import { Tienda } from './pages/Tienda'

export function App() {
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
      <Seo path={path} />
      <Header path={path} go={go} />
      <main>{page}</main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
