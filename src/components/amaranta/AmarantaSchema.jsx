import { useEffect } from 'react'

export function AmarantaSchema({ data }) {
  useEffect(() => {
    const show = data.shows[0]
    if (!show.dateTime || !show.venue) return undefined

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Event',
      name: `${data.title} — ${data.subtitle}`,
      description: data.seo.description,
      startDate: show.dateTime,
      ...(show.endDate ? { endDate: show.endDate } : {}),
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      location: {
        '@type': 'Place',
        name: show.venue,
        ...(show.address || show.city || show.region || show.postalCode || show.country ? {
          address: {
            '@type': 'PostalAddress',
            ...(show.address ? { streetAddress: show.address } : {}),
            ...(show.city ? { addressLocality: show.city } : {}),
            ...(show.region ? { addressRegion: show.region } : {}),
            ...(show.postalCode ? { postalCode: show.postalCode } : {}),
            ...(show.country ? { addressCountry: show.country } : {})
          }
        } : {})
      },
      organizer: {
        '@type': 'Organization',
        name: 'Vida le Ando',
        url: 'https://vidaleando.com.ar/'
      },
      performer: [
        { '@type': 'PerformingGroup', name: 'Compañía de Danza-Teatro Vida le Ando' },
        ...data.team.flatMap((credit) => credit.names).map((name) => ({ '@type': 'Person', name }))
      ],
      ...(data.seo.image ? { image: [`https://vidaleando.com.ar${data.seo.image}`] } : {}),
      ...(show.bookingUrl ? {
        offers: {
          '@type': 'Offer',
          url: show.bookingUrl,
          price: show.advancePrice.replace(/[^0-9]/g, ''),
          priceCurrency: 'ARS',
          availability: 'https://schema.org/InStock'
        }
      } : {})
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = 'amaranta-event-schema'
    script.textContent = JSON.stringify(schema)
    document.head.appendChild(script)
    return () => script.remove()
  }, [data])

  return null
}
