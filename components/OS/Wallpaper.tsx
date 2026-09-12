import React from 'react'
import Image from 'next/image'

export default function Wallpaper() {
  return (
    <div className="absolute inset-0">
        <Image
          src="/wallpaper-dark.jpg"
          alt="Wallpaper"
          fill
          loading="eager"
          className="object-cover"
        />
    </div>
  )
}