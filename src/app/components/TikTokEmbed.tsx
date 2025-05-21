'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    TikTokEmbed: {
      reload: () => void
    }
  }
}

export default function TikTokEmbed() {
  useEffect(() => {
    // Load TikTok embed script
    const script = document.createElement('script')
    script.src = 'https://www.tiktok.com/embed.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup
      document.body.removeChild(script)
    }
  }, [])

  return null
} 