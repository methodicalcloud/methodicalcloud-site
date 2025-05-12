'use client'

import { useState } from 'react'
import Image, { type ImageProps } from 'next/image'

type ImageWithFallbackProps = ImageProps & {
  fallbackSrc?: string
  isLogo?: boolean
  isProfile?: boolean
}

export default function ImageWithFallback({
  src,
  fallbackSrc = '/images/placeholders/placeholder-profile.png',
  alt,
  isLogo = false,
  isProfile = false,
  ...rest
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src)

  // For logos, use a specific fallback
  const logoFallback = '/images/logos/methodicalcloud_default_logo.png'
  // For profile images, use a specific fallback
  const profileFallback = '/images/placeholders/placeholder-profile.png'

  // Determine which fallback to use
  let actualFallback = fallbackSrc
  if (isLogo) actualFallback = logoFallback
  if (isProfile) actualFallback = profileFallback

  return (
    <Image
      {...rest}
      src={imgSrc || actualFallback}
      alt={alt}
      onError={() => {
        console.log(`Image error for ${src}, using fallback: ${actualFallback}`)
        setImgSrc(actualFallback)
      }}
      unoptimized={isLogo || isProfile ? true : rest.unoptimized}
    />
  )
}
