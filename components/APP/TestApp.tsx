"use client"
import React, { useState } from 'react'
import App from '../OS/App'
import Frame from '../OS/Frame';

const TITLE = "Das ist ein Test"
const X = 100, Y = 100;
const APPNAME = "Test"


export default function TestApp() {

  const [open, setOpen] = useState(false);

  function openOnPress() {
    setOpen(true)
  }

  function closeOnPress() {
    setOpen(false)
  }

  return (
    <>
      <App x={100} y={100} title={APPNAME} onPress={openOnPress} icon="/globe.svg"/>
      <Frame x={0} y={0} title={TITLE} path='' open={open} closeOnPress={closeOnPress}>
        <h1>HALLOOOOOO</h1>
      </Frame>
    </>
  )
}
