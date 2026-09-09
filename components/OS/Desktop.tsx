import React, { ReactNode } from 'react'
import App from './App'
import Frame from './Frame'
import TestApp from '../APP/NukeApp'
import CVApp from '../APP/CVApp'
import NuriGPTApp from '../APP/NuriGPTApp'

type Props = { children: ReactNode }

export default function Desktop({ children }: Props) {
  return (
    <div className="w-screen md:h-[200vh] h-screen relative bg-black no-scrollbar">
      <div className="fixed inset-4 overflow-hidden">
        {children}
      </div>
    </div>
  )
}