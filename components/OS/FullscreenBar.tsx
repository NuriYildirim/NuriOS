"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

export default function FullscreenBar({title}: {title: string}) {

  const router = useRouter()

  function closeWindow() {
    router.replace("/home");
  }

  return (
        <div className="fixed top-0 left-0 w-full h-8 flex flex-row liquid rounded-b-none z-50"
        >
          <div className='flex-1 flex items-center px-2'
          >
            <h2 className='text-background text-sm'>{title}</h2>
          </div>
          <div className='h-full w-16 right-0 flex justify-end items-center px-2 gap-2'>
            <button onClick={() => {}}>
                <div className='h-3 w-3 rounded-full bg-green-500 z-50'/>
            </button>
            <button onClick={closeWindow}>
                <div className='h-3 w-3 rounded-full bg-red-500 z-50'/>
            </button>
          </div>
        </div>
  )
}
