"use client"

import gsap from "gsap"
import { useEffect } from "react"
import Image from "next/image"

const Cursor = () => {
  useEffect(() => {
    const cursorDefault = document.querySelector('.cursorDefault') as HTMLDivElement | null;
    const cursorHold = document.querySelector('.cursorHold') as HTMLDivElement | null;

    const moveCursor = (e: MouseEvent): void => {
      gsap.to(cursorDefault, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1
      });

      gsap.to(cursorHold, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1
      });
    };

    const handleMouseDown = (e: MouseEvent): void => {
      if (e.button !== 0) return; // only react to the left mouse button
      gsap.to(cursorDefault, { opacity: 0, duration: 0.15 });
      gsap.to(cursorHold, { opacity: 1, duration: 0.15 });
    };

    const handleMouseUp = (e: MouseEvent): void => {
      if (e.button !== 0) return;
      gsap.to(cursorDefault, { opacity: 1, duration: 0.15 });
      gsap.to(cursorHold, { opacity: 0, duration: 0.15 });
    };

    gsap.set(cursorDefault, {
      xPercent: -50,
      yPercent: -50,
      opacity: 1
    });

    gsap.set(cursorHold, {
      xPercent: -50,
      yPercent: -50,
      opacity: 0
    });

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div className="max-lg:hidden z-10">
      <div className="cursorDefault w-10 h-10 items-end justify-end flex fixed z-50 pointer-events-none">
        <Image
          src={"/cursor.png"}
          width={24}
          height={24}
          alt={"Cursor"}
          className="-rotate-15 object-contain"
        />
      </div>
      <div className="cursorHold w-10 h-10 items-end justify-end flex fixed z-50 pointer-events-none">
        <Image
          src={"/cursor_hold.png"}
          width={24}
          height={24}
          alt={"Cursor"}
          className="-rotate-15 object-contain"
        />
      </div>
    </div>
  );
}

export default Cursor;