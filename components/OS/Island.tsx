"use client"
import React, { useEffect, useState } from 'react'

const TARGET_DATE = "2006-06-13T00:36:00"

function getElapsed() {
  const now = new Date()
  const target = new Date(TARGET_DATE)

  let years = now.getFullYear() - target.getFullYear()
  let months = now.getMonth() - target.getMonth()
  let days = now.getDate() - target.getDate()
  let hours = now.getHours() - target.getHours()
  let minutes = now.getMinutes() - target.getMinutes()

  if (minutes < 0) {
    hours -= 1
    minutes += 60
  }

  if (hours < 0) {
    days -= 1
    hours += 24
  }

  if (days < 0) {
    months -= 1
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0)
    days += prevMonth.getDate()
  }

  if (months < 0) {
    years -= 1
    months += 12
  }

  return `${years}y:${months}m:${days}d:${hours}h:${minutes}m`
}

export default function Island() {
  const [elapsed, setElapsed] = useState(getElapsed)

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsed(getElapsed())
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='w-full h-full absolute flex items-start justify-center'>
      <div className='w-60 h-7 bg-black rounded-b-2xl text-white px-8 flex items-center justify-center'>
        <h2 className=''>{elapsed}</h2>
      </div>
    </div>
  )
}