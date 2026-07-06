import React, { useEffect, useState } from 'react'
import { nav } from '../data/siteData'
import { asset } from '../utils/assets'
import { imageAttrs } from '../utils/imageMeta'

export function Header({ path, go }) {
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [atTop, setAtTop] = useState(true)

  useEffect(() => {
    let lastY = window.scrollY
    const onScroll = () => {
      const currentY = window.scrollY
      setAtTop(currentY < 12)
      setHidden(currentY > 120 && currentY > lastY && !open)
      lastY = currentY
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [open])

  return (
    <header className={`site-header ${hidden ? 'header-hidden' : ''} ${atTop ? 'at-top' : ''}`}>
      <button className="brand" onClick={() => go('/')} aria-label="Inicio">
        <img src={asset('2025/07/logo-20.png')} alt="Vida Le Ando" decoding="async" fetchPriority="high" {...imageAttrs('2025/07/logo-20.png')} />
      </button>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="site-nav" aria-label={open ? 'Cerrar menu' : 'Abrir menu'}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav id="site-nav" className={open ? 'open' : ''}>
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
