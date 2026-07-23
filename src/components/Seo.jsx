import { useEffect } from 'react'
import { defaultSeo, seoByPath, siteUrl } from '../data/seoData'

const absoluteUrl = (value) => {
  if (!value) return ''
  if (value.startsWith('http')) return value
  return `${siteUrl}${value}`
}

const setMeta = (selector, attr, value) => {
  let element = document.head.querySelector(selector)
  if (!element) {
    element = document.createElement('meta')
    if (selector.includes('property=')) {
      element.setAttribute('property', selector.match(/property="([^"]+)"/)?.[1] || '')
    } else {
      element.setAttribute('name', selector.match(/name="([^"]+)"/)?.[1] || '')
    }
    document.head.appendChild(element)
  }
  element.setAttribute(attr, value)
}

const setLink = (rel, href) => {
  let element = document.head.querySelector(`link[rel="${rel}"]`)
  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    document.head.appendChild(element)
  }
  element.setAttribute('href', href)
}

const removeMeta = (selector) => {
  document.head.querySelector(selector)?.remove()
}

export function Seo({ path }) {
  useEffect(() => {
    const seo = seoByPath[path] || defaultSeo
    const canonical = seo.canonical || `${siteUrl}${path === '/' ? '/' : path}`
    const image = seo.image === null ? '' : absoluteUrl(seo.image || defaultSeo.image)
    const socialTitle = seo.ogTitle || seo.title
    const socialDescription = seo.ogDescription || seo.description

    document.title = seo.title
    setMeta('meta[name="description"]', 'content', seo.description)
    setMeta('meta[property="og:title"]', 'content', socialTitle)
    setMeta('meta[property="og:description"]', 'content', socialDescription)
    setMeta('meta[property="og:type"]', 'content', seo.type || 'website')
    setMeta('meta[property="og:url"]', 'content', canonical)
    setMeta('meta[name="twitter:title"]', 'content', socialTitle)
    setMeta('meta[name="twitter:description"]', 'content', socialDescription)
    if (image) {
      setMeta('meta[property="og:image"]', 'content', image)
      setMeta('meta[name="twitter:image"]', 'content', image)
    } else {
      removeMeta('meta[property="og:image"]')
      removeMeta('meta[name="twitter:image"]')
    }
    setLink('canonical', canonical)
  }, [path])

  return null
}
