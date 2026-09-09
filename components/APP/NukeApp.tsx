"use client"
import React, { useState } from 'react'
import App from '../OS/App'
import Frame from '../OS/Frame';
import { useRouter } from 'next/navigation';

const TITLE = "NuKe Digital"
const X = 300, Y = 50;
const APPNAME = "NuKe Digital"
const PATH="https://www.nuke-digital.com"


export default function NukeApp() {

  const [open, setOpen] = useState(false);

  const router = useRouter();

  function openOnPress() {
    router.replace(PATH)
  }

  function closeOnPress() {
    setOpen(false)
  }

  return (
    <>
      <App x={X} y={Y} title={APPNAME} path={'ext'+PATH} onPress={openOnPress} icon="/nuke.png" order={1}/>
    </>
  )
}
