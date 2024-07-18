'use client'

export default function myImageLoader({ src, width, quality }) {
  if (src.startsWith('https://images.pexels.com')) return src
  return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`
}
