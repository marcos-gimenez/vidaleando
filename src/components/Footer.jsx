import React from 'react'
import { socials } from '../data/siteData'
import { asset } from '../utils/assets'

function ContactLink({ href, icon, children }) {
  return (
    <a className="footer-link" href={href} target="_blank" rel="noopener noreferrer">
      <img src={asset(icon)} alt="" />
      <span>{children}</span>
    </a>
  )
}

export function Footer() {
  return (
    <footer>
      <div>
        <img className="footer-logo" src={asset('2025/07/logo-20.png')} alt="Vida Le Ando" />
        <p>FOLKLORE EN MOVIMIENTO</p>
      </div>
      <div>
        <h3>Contacto Danza</h3>
        <ContactLink href={socials.danzaWa} icon="2025/08/WhatsApp.png" target="_blank">Yamila Aguilar</ContactLink>
        <ContactLink href={socials.danzaWa2} icon="2025/08/WhatsApp.png" target="_blank">Melina Murri</ContactLink>
        <ContactLink href={socials.danzaIg} icon="2025/11/instagram.png" target="_blank">Vida Le Ando</ContactLink>
      </div>
      <div>
        <h3>Contacto Peña de Amigxs</h3>
        <ContactLink href={socials.penaWa} icon="2025/08/WhatsApp.png" target="_blank">Juan Cruz Martinez</ContactLink>
        <ContactLink href={socials.penaIg} icon="2025/11/instagram.png" target="_blank">Peña de Amigxs</ContactLink>
      </div>
      <small>© 2026 Vida Le Ando. Sitio desarrollado por <a href="https://caucedigital.com.ar/" target="_blank">Cauce Digital</a></small>
    </footer>
  )
}

export function WhatsAppFloat() {
  return (
    <a className="wa-float" href={socials.danzaWa} target="_blank" aria-label="WhatsApp">
      <img src={asset('2025/08/WhatsApp.png')} alt="" />
    </a>
  )
}
