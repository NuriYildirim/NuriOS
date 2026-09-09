"use client"
import { motion, useMotionValue } from "motion/react"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

const MOBILE_WIDTH = 768;
const SIZE = 96

export default function App({ x, y, title, onPress, icon, path, order}: { x: number, y: number, title: string, onPress: () => void, icon: string, path:string, order:number}) {
  const dragging = useRef(false)
  const dragOffset = useRef({ x: 0, y: 0 })

  const [selected, setSelected] = useState(false)

  const posX = useMotionValue(x)
  const posY = useMotionValue(y)

  const router = useRouter();

  const appRef = useRef<HTMLDivElement>(null)

  const [width, setWidth] = useState(0);

  const isMobile = width <= MOBILE_WIDTH;

  const MOBILE_COLUMNS = 3;
  const MOBILE_ROW_HEIGHT = 100;

  const column = order % MOBILE_COLUMNS;
  const row = Math.floor(order / MOBILE_COLUMNS);

  const mobileY = row * MOBILE_ROW_HEIGHT + 32

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);


  function handlePointerDown(e: React.PointerEvent<HTMLDivElement>) {
    setSelected(true)
    if(!isMobile) {
      dragging.current = true
      dragOffset.current = {
        x: e.clientX - posX.get(),
        y: e.clientY - posY.get(),
      }
      e.currentTarget.setPointerCapture(e.pointerId)
    }
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
    setSelected(false)
    if(!isMobile)
      dragging.current = false
  }

  return (
    <motion.div
      ref={appRef}
      className="absolute top-0 left-0 flex w-24 flex-col items-center"
      style={{
        left: isMobile
          ? `calc(${column} * (100% / 3) + (100% / 3 - 96px) / 2)`
          : 0,
        x: isMobile ? 0 : posX,
        y: isMobile ? mobileY : posY,
        opacity: selected ? 0.5 : 1,
      }}
        initial={{scale:1}}
        whileHover={{scale:1.1}}
        onClick={() => {
          if(isMobile) {
            path.slice(0, 3) === 'int'
              ? router.push('home/'+path.slice(3))
              : router.replace(path.slice(3))
          }
        }}  
        onDoubleClick={() => !isMobile ? onPress:{}}
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
            className="p-1 object-contain"
          />
        </div>
        <h2 className="text-white line-clamp-1 text-center">{title}</h2>
      </motion.div>
  )
}