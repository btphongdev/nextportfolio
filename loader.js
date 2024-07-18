'use client'

import { useState, useEffect } from 'react'

export default function myImageLoader({ src, width, quality }) {
  const [currentHost, setCurrentHost] = useState('')
  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const host = `${window.location.protocol}//${window.location.hostname}:${window.location.port}`

      setCurrentHost(host)
    }
  }, [currentHost])
  // const currentHost = `${window.location.protocol}//${window.location.hostname}:${window.location.port}`

  if (src.startsWith('https://images.pexels.com')) return src
  return `${currentHost}/${src}?w=${width}&q=${quality || 75}`
}
