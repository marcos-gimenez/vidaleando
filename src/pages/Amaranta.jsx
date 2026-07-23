import React, { useCallback } from 'react'
import { AmarantaFinalCta } from '../components/amaranta/AmarantaFinalCta'
import { AmarantaGallery } from '../components/amaranta/AmarantaGallery'
import { AmarantaHeader } from '../components/amaranta/AmarantaHeader'
import { AmarantaHero } from '../components/amaranta/AmarantaHero'
import { AmarantaManifesto } from '../components/amaranta/AmarantaManifesto'
import { AmarantaSchema } from '../components/amaranta/AmarantaSchema'
import { AmarantaShows } from '../components/amaranta/AmarantaShows'
import { AmarantaTeam } from '../components/amaranta/AmarantaTeam'
import { amaranta } from '../data/amaranta'
import '../components/amaranta/amarantaButton.css'
import './amaranta.css'

export function Amaranta() {
  const firstShow = amaranta.shows[0]

  const scrollTo = useCallback((id) => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    document.getElementById(id)?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
  }, [])

  const navigateSection = useCallback((event, id) => {
    event.preventDefault()
    scrollTo(id)
  }, [scrollTo])

  return (
    <div className="amaranta-page" id="amaranta-inicio">
      <AmarantaSchema data={amaranta} />
      <AmarantaHeader bookingUrl={firstShow.bookingUrl} whatsapp={amaranta.contact.whatsapp} onNavigate={navigateSection} />
      <AmarantaHero data={amaranta} onTickets={() => scrollTo('amaranta-funciones')} />
      <AmarantaManifesto content={amaranta.central} />
      <AmarantaGallery gallery={amaranta.gallery} />
      <AmarantaShows shows={amaranta.shows} whatsapp={amaranta.contact.whatsapp} />
      <AmarantaTeam team={amaranta.team} />
      <AmarantaFinalCta title={amaranta.title} subtitle={amaranta.subtitle} whatsapp={amaranta.contact.whatsapp} />
    </div>
  )
}
