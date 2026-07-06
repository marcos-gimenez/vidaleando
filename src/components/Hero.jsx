import React, { useEffect, useRef, useState } from 'react'
import { asset } from '../utils/assets'
import { imageAttrs } from '../utils/imageMeta'

export function Hero({ title, eyebrow, copy, media, video }) {
  const slides = Array.isArray(media) ? media : media ? [media] : []
  const [slide, setSlide] = useState(0)
  const [previousSlide, setPreviousSlide] = useState(null)
  const [muted, setMuted] = useState(true)
  const videoRef = useRef(null)

  useEffect(() => {
    if (video || slides.length < 2) return undefined
    const id = window.setInterval(() => {
      setSlide((current) => {
        setPreviousSlide(current)
        return (current + 1) % slides.length
      })
    }, 4200)
    return () => window.clearInterval(id)
  }, [video, slides.length])

  useEffect(() => {
    if (video || slides.length < 2) return
    const nextImage = new Image()
    nextImage.src = asset(slides[(slide + 1) % slides.length])
  }, [slide, slides, video])

  const toggleAudio = async () => {
    const nextMuted = !muted
    setMuted(nextMuted)
    if (videoRef.current) {
      videoRef.current.muted = nextMuted
      videoRef.current.playsInline = true
      try {
        await videoRef.current.play()
      } catch {
        setMuted(true)
      }
    }
  }

  return (
    <section className="hero">
      {video ? (
        <>
          <video
            ref={videoRef}
            src={asset(video)}
            autoPlay
            muted={muted}
            loop
            playsInline
            preload="auto"
            controls={false}
            onCanPlay={() => videoRef.current?.play().catch(() => {})}
          />
          <button
            className="audio-toggle"
            onClick={toggleAudio}
            aria-label={muted ? 'Activar audio' : 'Silenciar audio'}
          >
            {muted ? <SpeakerOffIcon /> : <SpeakerIcon />}
          </button>
        </>
      ) : (
        <div className="hero-carousel" aria-hidden="true">
          {[...new Set([previousSlide, slide].filter((index) => index !== null))].map((index) => {
            const item = slides[index]
            return (
              <img
                className={index === slide ? 'active' : ''}
                key={item}
                src={asset(item)}
                alt=""
                decoding="async"
                loading={index === 0 ? 'eager' : 'lazy'}
                fetchPriority={index === 0 ? 'high' : 'auto'}
                {...imageAttrs(item)}
              />
            )
          })}
        </div>
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

function SpeakerIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 9v6h4l5 4V5L8 9H4Z" />
      <path d="M16 8.5c1.2 1 2 2.2 2 3.5s-.8 2.5-2 3.5" />
      <path d="M18.5 6c1.9 1.7 3 3.7 3 6s-1.1 4.3-3 6" />
    </svg>
  )
}

function SpeakerOffIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 9v6h4l5 4V5L8 9H4Z" />
      <path d="M17 9l4 6" />
      <path d="M21 9l-4 6" />
    </svg>
  )
}
