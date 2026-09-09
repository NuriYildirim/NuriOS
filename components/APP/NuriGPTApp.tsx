"use client"
import React, { useState } from 'react'
import App from '../OS/App'
import Frame from '../OS/Frame';

const TITLE = "Nuri-GPT"
const X = 150, Y = 50;
const APPNAME = "Nuri-GPT"
const PATH="nuri-gpt"


export default function NuriGPTApp() {

  const [open, setOpen] = useState(false);

  function openOnPress() {
    setOpen(true)
  }

  function closeOnPress() {
    setOpen(false)
  }

  return (
    <>
      <App x={X} y={Y} title={APPNAME} path={'int'+PATH} onPress={openOnPress} icon="/globe.svg" order={2}/>
      <Frame path='' x={0} y={0} title={TITLE} open={open} closeOnPress={closeOnPress}>
        <h1>HALLOOOOOO</h1>
      </Frame>
    </>
  )
}
