"use client"
import { motion } from 'motion/react'
import React from 'react'
import { ViewTransition } from 'react'
import Image from 'next/image'
import { CVContent } from '@/components/APP/CVApp'

export default function CV() {
  return (
    <ViewTransition
    enter={{
        'nav-forward': 'nav-forward',
        'nav-back': 'nav-back',
        default: 'none',
    }}
    exit={{
        'nav-forward': 'nav-forward',
        'nav-back': 'nav-back',
        default: 'none',
    }}
    default="none"
    >
      <CVContent/>
    </ViewTransition>
  )
}
