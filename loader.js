'use client'

export default function myImageLoader({ src, width, quality }) {
  const currentHost = `${window.location.protocol}//${window.location.hostname}`

  if (src.startsWith('https://images.pexels.com')) return src
  return `${currentHost}/${src}?w=${width}&q=${quality || 75}`
}
