import React from 'react'
import Image from 'next/image'

export default function Wallpaper() {
  return (
    <div className="absolute inset-0">
        <Image
          src="/wallpaper-4.jpg"
          alt="Wallpaper"
          fill
          loading="eager"
          className="object-cover"
        />
    </div>
  )
}