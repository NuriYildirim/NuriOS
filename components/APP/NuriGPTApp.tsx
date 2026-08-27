"use client"
import React, { useState } from 'react'
import App from '../OS/App'
import Frame from '../OS/Frame';

const TITLE = "Nuri-GPT"
const X = 500, Y = 500;
const APPNAME = "Nuri-GPT"


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
      <App x={X} y={Y} title={APPNAME} onPress={openOnPress} icon="/globe.svg"/>
      <Frame x={0} y={0} title={TITLE} open={open} closeOnPress={closeOnPress}>
        <h1>HALLOOOOOO</h1>
      </Frame>
    </>
  )
}
