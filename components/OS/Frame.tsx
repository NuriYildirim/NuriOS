"use client"
import { motion, useMotionValue } from 'motion/react'
import React, { ReactNode, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

interface Frame {
  x: number,
  y: number,
  title: string,
  path: string,
  open: boolean,
  closeOnPress: () => void,
  children: ReactNode
}

export default function Frame({x, y, title, path, open, closeOnPress, children}: Frame) {

  const router = useRouter();

  const dragging = useRef(false)
  const dragOffset = useRef({ x: 0, y: 0 })

  const [width, setWidth] = useState(1000)
  const [height, setHeight] = useState(width*9/16)

  const posX = useMotionValue(x)
  const posY = useMotionValue(y)

  const frameRef = useRef<HTMLDivElement>(null)

  function handlePointerDown(e: React.PointerEvent<HTMLDivElement>) {
    dragging.current = true
    dragOffset.current = {
      x: e.clientX - posX.get(),
      y: e.clientY - posY.get(),
    }
    e.currentTarget.setPointerCapture(e.pointerId)
  }

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (!dragging.current) return

    const container = frameRef.current?.offsetParent as HTMLElement | null
    const bounds = container?.getBoundingClientRect()

    let newX = e.clientX - dragOffset.current.x
    let newY = e.clientY - dragOffset.current.y

    if (bounds) {
      const maxX = Math.max(bounds.width - width, 0)
      const maxY = Math.max((bounds.height - height) - 88, 0)
      newX = Math.min(Math.max(newX, 0), maxX)
      newY = Math.min(Math.max(newY, 0), maxY)
    }

    posX.set(newX)
    posY.set(newY)
  }

  function handlePointerUp() {
    dragging.current = false
  }

  function maximize() {
    router.push('/home/'+path)
  }

  return (
    <motion.div ref={frameRef} className='absolute aspect-video flex top-0 left-0 z-50'
      style={{ x: posX, y: posY, width: width, height: height}}
      initial={{opacity: 0, display: "none"}}
      animate={{opacity: open ? 1:0, display: open ? "block":"none"}}
      >
      <motion.div className="w-full h-full relative liquid"
        >
        <motion.div className="absolute top-0 left-0 w-full h-8 flex flex-row liquid rounded-b-none z-50"
        >
          <div className='flex-1 flex items-center px-2'
            onDoubleClick={maximize}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
          >
            <h2 className='text-background text-sm'>{title}</h2>
          </div>
          <div className='h-full w-16 right-0 flex justify-end items-center px-2 gap-2'>
            <button onClick={maximize}>
                <div className='h-3 w-3 rounded-full bg-green-500 z-50'/>
            </button>
            <button onClick={closeOnPress}>
                <div className='h-3 w-3 rounded-full bg-red-500 z-50'/>
            </button>
          </div>
        </motion.div>
        <div className='w-full h-full mt-8 px-2 overflow-y-scroll overflow-x-hidden no-scrollbar'
          style={{width: width, height: height}}
        >
          {children}
        </div>
      </motion.div>
    </motion.div>
  )
}
