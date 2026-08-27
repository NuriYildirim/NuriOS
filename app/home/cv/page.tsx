import React from 'react'
import { ViewTransition } from 'react'

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
      <div>
        <h1>HALLLO</h1>
      </div>
    </ViewTransition>
  )
}
