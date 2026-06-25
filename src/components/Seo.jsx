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

export function Seo({ path }) {
  useEffect(() => {
    const seo = seoByPath[path] || defaultSeo
    const canonical = `${siteUrl}${path === '/' ? '/' : path}`
    const image = absoluteUrl(seo.image || defaultSeo.image)

    document.title = seo.title
    setMeta('meta[name="description"]', 'content', seo.description)
    setMeta('meta[property="og:title"]', 'content', seo.title)
    setMeta('meta[property="og:description"]', 'content', seo.description)
    setMeta('meta[property="og:url"]', 'content', canonical)
    setMeta('meta[property="og:image"]', 'content', image)
    setMeta('meta[name="twitter:title"]', 'content', seo.title)
    setMeta('meta[name="twitter:description"]', 'content', seo.description)
    setMeta('meta[name="twitter:image"]', 'content', image)
    setLink('canonical', canonical)
  }, [path])

  return null
}
