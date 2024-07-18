'use client'

export default function myImageLoader({ src, width, quality }) {
  const currentHost = `${window.location.protocol}//${window.location.hostname}:${window.location.port}`

  if (src.startsWith('https://images.pexels.com')) return src
  return `${currentHost}/${src}?w=${width}&q=${quality || 75}`
}
