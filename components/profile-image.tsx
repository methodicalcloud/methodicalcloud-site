'use client'

import { useEffect, useState } from 'react'

interface ProfileImageProps {
  src: string
  fallbackSrc: string
  alt: string
  width: number
  height: number
  className?: string
}

export default function ProfileImage({
  src,
  fallbackSrc,
  alt,
  width,
  height,
  className = '',
}: ProfileImageProps) {
  const [imgSrc, setImgSrc] = useState<string>(fallbackSrc) // Start with fallback to avoid flash
  const [imgLoaded, setImgLoaded] = useState(false)
  const [imgError, setImgError] = useState(false)

  // Base64 encoded simple avatar as ultimate fallback
  const inlineFallback =
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiMzMzMiLz48Y2lyY2xlIGN4PSIxMDAiIGN5PSI4MCIgcj0iNTAiIGZpbGw9IiM1NTUiLz48Y2lyY2xlIGN4PSIxMDAiIGN5PSIyNDAiIHI9IjEyMCIgZmlsbD0iIzU1NSIvPjwvc3ZnPg=='

  useEffect(() => {
    console.log('Attempting to load profile image from:', src)

    // Check if src is a valid string
    if (!src || typeof src !== 'string') {
      console.error('Invalid image source:', src)
      setImgSrc(fallbackSrc || inlineFallback)
      setImgError(true)
      return
    }

    // Create a new image to test loading
    const img = new Image()

    // Set up event handlers before setting src
    img.onload = () => {
      console.log('Profile image loaded successfully:', src)
      setImgSrc(src)
      setImgLoaded(true)
      setImgError(false)
    }

    img.onerror = () => {
      console.error('Profile image failed to load:', src)

      // Try the fallback
      if (fallbackSrc && fallbackSrc !== src) {
        console.log('Attempting to load fallback image:', fallbackSrc)
        const fallbackImg = new Image()

        fallbackImg.onload = () => {
          console.log('Fallback image loaded successfully:', fallbackSrc)
          setImgSrc(fallbackSrc)
          setImgLoaded(true)
          setImgError(true)
        }

        fallbackImg.onerror = () => {
          console.error('Fallback image also failed to load:', fallbackSrc)
          console.log('Using inline SVG fallback')
          setImgSrc(inlineFallback)
          setImgLoaded(true)
          setImgError(true)
        }

        fallbackImg.src = fallbackSrc
      } else {
        console.log('Using inline SVG fallback')
        setImgSrc(inlineFallback)
        setImgLoaded(true)
        setImgError(true)
      }
    }

    // Set src after setting up event handlers
    img.src = src

    // Clean up
    return () => {
      img.onload = null
      img.onerror = null
    }
  }, [src, fallbackSrc, inlineFallback])

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {!imgLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-navy-800">
          <div className="animate-pulse w-12 h-12 rounded-full bg-navy-700"></div>
        </div>
      )}
      <img
        src={imgSrc || '/placeholders/placeholder.svg'}
        alt={alt}
        width={width}
        height={height}
        className={`rounded-lg ${className}`}
        style={{
          objectFit: 'cover',
          display: imgLoaded ? 'block' : 'none',
        }}
        onLoad={() => setImgLoaded(true)}
        onError={(e) => {
          console.error(
            'Error loading image in render:',
            (e.target as HTMLImageElement).src
          )
          if (imgSrc !== inlineFallback) {
            setImgSrc(inlineFallback)
          }
          setImgError(true)
          setImgLoaded(true)
        }}
      />
    </div>
  )
}
