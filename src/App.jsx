import React, { lazy, Suspense, useMemo } from 'react'
import { Footer, WhatsAppFloat } from './components/Footer'
import { Header } from './components/Header'
import { Seo } from './components/Seo'
import { obras } from './data/siteData'
import { usePath } from './hooks/usePath'

const DanzaTeatro = lazy(() => import('./pages/DanzaTeatro').then((module) => ({ default: module.DanzaTeatro })))
const Home = lazy(() => import('./pages/Home').then((module) => ({ default: module.Home })))
const Obra = lazy(() => import('./pages/Obra').then((module) => ({ default: module.Obra })))
const Pena = lazy(() => import('./pages/Pena').then((module) => ({ default: module.Pena })))
const Talleres = lazy(() => import('./pages/Talleres').then((module) => ({ default: module.Talleres })))
const Tienda = lazy(() => import('./pages/Tienda').then((module) => ({ default: module.Tienda })))

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
      <main>
        <Suspense fallback={<div className="page-loading" aria-live="polite">Cargando...</div>}>
          {page}
        </Suspense>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
