"use client"

import gsap from "gsap"
import { useEffect, useRef } from "react"
import Image from "next/image"
import { usePathname } from "next/navigation"

const Cursor = () => {
  const path = usePathname()
  const isHome = path === "/home"

  const cursorDefaultRef = useRef<HTMLDivElement | null>(null)
  const cursorHoldRef = useRef<HTMLDivElement | null>(null)
  const mousePos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    document.body.classList.toggle('cursor-hidden', isHome)
    return () => {
      document.body.classList.remove('cursor-hidden')
    }
  }, [isHome])

  useEffect(() => {
    const cursorDefault = cursorDefaultRef.current
    const cursorHold = cursorHoldRef.current
    if (!cursorDefault || !cursorHold) return;

    gsap.set(cursorDefault, { xPercent: -50, yPercent: -50, opacity: 1 });
    gsap.set(cursorHold, { xPercent: -50, yPercent: -50, opacity: 0 });

    const moveCursor = (e: MouseEvent): void => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      gsap.to(cursorDefault, { x: e.clientX, y: e.clientY, duration: 0.1 });
      gsap.to(cursorHold, { x: e.clientX, y: e.clientY, duration: 0.1 });
    };

    const handleMouseDown = (e: MouseEvent): void => {
      if (e.button !== 0) return;
      gsap.to(cursorDefault, { opacity: 0, duration: 0.15 });
      gsap.to(cursorHold, { opacity: 1, duration: 0.15 });
    };

    const handleMouseUp = (e: MouseEvent): void => {
      if (e.button !== 0) return;
      gsap.to(cursorDefault, { opacity: 1, duration: 0.15 });
      gsap.to(cursorHold, { opacity: 0, duration: 0.15 });
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);
  useEffect(() => {
    if (!isHome) return;
    const cursorDefault = cursorDefaultRef.current
    const cursorHold = cursorHoldRef.current
    if (!cursorDefault || !cursorHold) return;

    gsap.set([cursorDefault, cursorHold], {
      x: mousePos.current.x,
      y: mousePos.current.y,
    });
  }, [isHome]);

  return (
    <div className={`max-lg:hidden z-10 ${isHome ? '' : 'opacity-0 pointer-events-none'}`}>
      <div
        ref={cursorDefaultRef}
        className="cursorDefault w-10 h-10 items-end justify-end flex fixed z-50 pointer-events-none"
      >
        <Image src="/cursor.png" width={24} height={24} alt="Cursor" className="-rotate-15 object-contain" />
      </div>
      <div
        ref={cursorHoldRef}
        className="cursorHold w-10 h-10 items-end justify-end flex fixed z-50 pointer-events-none"
      >
        <Image src="/cursor_hold.png" width={24} height={24} alt="Cursor" className="-rotate-15 object-contain" />
      </div>
    </div>
  );
}

export default Cursor;