"use client"
import React, { useState } from 'react'
import App from '../OS/App'
import Frame from '../OS/Frame';
import { motion, useMotionValueEvent, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';

const TITLE = "Curriculum Vitae"
const X = 200, Y = 150;
const APPNAME = "CV"


export default function CVApp() {

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (current) => {
    console.log(current)
  })

  const [open, setOpen] = useState(false);

  function openOnPress() {
    setOpen(true)
  }

  function closeOnPress() {
    setOpen(false)
  }

  return (
    <>
      <App x={X} y={Y} title={APPNAME} onPress={openOnPress} icon="/nuri_peace.png"/>
      <Frame x={0} y={0} title={TITLE} open={open} closeOnPress={closeOnPress}>
        <motion.div className='w-full h-[200vh] flex bg-background p-8'>
          <section className='flex flex-col'>
            <div className='flex flex-row flex-1 h-full'>
              <div className='flex-1'>
                <div className='flex flex-row'>
                    <div className='bg-foreground/10 w-40 h-40 relative rounded-full'>
                        <Image
                        src={"/nuri_peace.png"}
                        alt='Nuri als Memoji'
                        fill
                        className='p-4 object-contain'
                        />
                    </div>
                    <div>
                    <h1 className='text-5xl'>Hey, ich bin Nuri</h1>
                    </div>
                </div>
                <p>
Ich studiere derzeit Computer Science an der Technischen Universität Hamburg. Parallel dazu habe ich mich mit der Entwicklung von Webseiten selbstständig gemacht und konnte so bereits umfassende praktische Erfahrung sowohl in der Frontend- als auch in der Backendentwicklung sammeln.
Ich war schon immer technikaffin und habe meine Programmierkenntnisse kontinuierlich an anspruchsvollen Projekten unter Beweis gestellt. So habe ich mich bereits sowohl in der App- als auch in der Spieleentwicklung ausprobiert. Neben meinem Studium und meiner Selbstständigkeit arbeite ich fortlaufend an eigenen Projekten, die ich entwickle und veröffentliche. Genau wie dieses.
                </p>
              </div>
              <div className='flex-1'>
                <div className='flex flex-col h-full w-full'>
                  <div className='h-full self-end min-w-60 flex flex-col'>
                    <h2>Skills</h2>
                    <div className='flex flex-col'>
                        <h2>VITE</h2>
                        <div className='w-full h-4 bg-foreground/10 rounded-2xl p-1 flex items-start'>
                          <span className='h-full bg-foreground w-[87%] rounded-full'/>
                        </div>
                        <h2>NEXT.js</h2>
                        <div className='w-full h-4 bg-foreground/10 rounded-2xl p-1 flex items-start'>
                          <span className='h-full bg-foreground w-[85%] rounded-full'/>
                        </div>
                        <h2>TypeScript / JavaScript</h2>
                        <div className='w-full h-4 bg-foreground/10 rounded-2xl p-1 flex items-start'>
                          <span className='h-full bg-foreground w-[99%] rounded-full'/>
                        </div>
                        <h2>Git</h2>
                        <div className='w-full h-4 bg-foreground/10 rounded-2xl p-1 flex items-start'>
                          <span className='h-full bg-foreground w-[70%] rounded-full'/>
                        </div>
                        <h2>C++</h2>
                        <div className='w-full h-4 bg-foreground/10 rounded-2xl p-1 flex items-start'>
                          <span className='h-full bg-foreground w-[65%] rounded-full'/>
                        </div>
                        <h2>SQL</h2>
                        <div className='w-full h-4 bg-foreground/10 rounded-2xl p-1 flex items-start'>
                          <span className='h-full bg-foreground w-[80%] rounded-full'/>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </motion.div>
      </Frame>
    </>
  )
}