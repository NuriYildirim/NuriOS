"use client"
import { motion, useMotionValue } from "motion/react"
import { useRef, useState } from "react"
import Image from "next/image"

export default function App({ x, y, title, onPress, icon}: { x: number, y: number, title: string, onPress: () => void, icon: string}) {
  const dragging = useRef(false)
  const dragOffset = useRef({ x: 0, y: 0 })

  const [selected, setSelected] = useState(false)

  const posX = useMotionValue(x)
  const posY = useMotionValue(y)

  const appRef = useRef<HTMLDivElement>(null)

  function handlePointerDown(e: React.PointerEvent<HTMLDivElement>) {
    setSelected(true)
    dragging.current = true
    dragOffset.current = {
      x: e.clientX - posX.get(),
      y: e.clientY - posY.get(),
    }
    e.currentTarget.setPointerCapture(e.pointerId)
  }

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (!dragging.current) return

    const container = appRef.current?.offsetParent as HTMLElement | null
    const containerBounds = container?.getBoundingClientRect()
    const elBounds = appRef.current?.getBoundingClientRect()

    let newX = e.clientX - dragOffset.current.x
    let newY = e.clientY - dragOffset.current.y

    if (containerBounds && elBounds) {
      const maxX = Math.max(containerBounds.width - elBounds.width, 0)
      const maxY = Math.max((containerBounds.height - elBounds.height) - 94, 0)
      newX = Math.min(Math.max(newX, 0), maxX)
      newY = Math.min(Math.max(newY, 0), maxY)
    }

    posX.set(newX)
    posY.set(newY)
  }

  function handlePointerUp() {
    dragging.current = false
    setSelected(false)
  }

  return (
      <motion.div
        ref={appRef}
        className='absolute top-0 left-0 m-2 flex flex-col items-center'
        style={{ x: posX, y: posY, opacity: selected ? 0.5 : 1 }}
        onDoubleClick={onPress}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        <div className="w-16 h-16 liquid bg-white/20">
          <Image
            alt={title}
            fill
            src={icon}
            draggable="false"
            className="p-2 object-contain"
          />
        </div>
        <h2 className="text-white">{title}</h2>
      </motion.div>
  )
}