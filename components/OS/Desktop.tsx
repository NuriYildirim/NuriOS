import React, { ReactNode } from 'react'

type Props = { children: ReactNode }

export default function Desktop({ children }: Props) {
  return (
    <div className="w-screen lg:h-screen h-[95vh] relative bg-black overflow-hidden">
      <div className="absolute inset-4 overflow-hidden">
        {children}
      </div>
    </div>
  )
}