import { useEffect, useState } from 'react'

const normalizePath = () => window.location.pathname.replace(/\/$/, '') || '/'

export function usePath() {
  const [path, setPath] = useState(normalizePath)

  useEffect(() => {
    const onPop = () => setPath(normalizePath())
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
