"use client"
import React, { useState } from 'react'
import App from '../OS/App'
import Frame from '../OS/Frame';
import { motion, useMotionValueEvent, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import ParallaxText from '../ParallaxText';

const TITLE = "Curriculum Vitae"
const X = 50, Y = 50;
const APPNAME = "CV"
const PATH="cv"


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
      <App x={X} y={Y} title={APPNAME} path={'int'+PATH} onPress={openOnPress} icon="/nuri_peace.png" order={0}/>
      <Frame x={0} y={0} title={TITLE} path={PATH} open={open} closeOnPress={closeOnPress}>
        <CVContent/>
      </Frame>
    </>
  )
}

export function CVContent() {
  return (
    <div className='no-scrollbar tracking-tight'>
        <motion.div className='w-full h-screen flex flex-col bg-white text-black justify-center items-center'>
          <section className='flex flex-col w-full h-full gap-6 justify-start items-center md:p-24 p-4 pt-24'>
              <div className='bg-black/10 w-40 h-40 relative rounded-full'>
                  <Image
                  src={"/nuri_peace.png"}
                  alt='Nuri als Memoji'
                  fill
                  className='p-4 object-contain'
                  />
              </div>
              <div className='md:w-lg w-full text-center'>
                <h1 className='text-5xl font-semibold'>Hey, ich bin Nuri</h1>
                <h2 className='text-5xl font-semibold text-black/50'>Ich drücke Tasten und es entstehen Webseiten</h2>
              </div>
          <div className='items-center justify-center w-full text-4xl flex flex-col gap-4 mask-[linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]'>
            <ParallaxText baseVelocity={2} className={'w-full'}>
              <div className='flex flex-row gap-7.5 items-center'>
                <div className="py-2 px-6 bg-red-500 rounded-full">Frontend Dev</div>
                <div className="py-2 px-6 bg-blue-500 rounded-full">React Experte</div>
                <div className="py-2 px-6 bg-yellow-500 rounded-full">UX/UI Fokus</div>
              </div>
            </ParallaxText>
            <ParallaxText baseVelocity={-2} className={'w-full'}>
              <div className='flex flex-row gap-7.5'>
                <div className="py-2 px-6 bg-green-500 rounded-full">Student</div>
                <div className="py-2 px-6 bg-purple-500 rounded-full">Freelancer</div>
                <div className="py-2 px-6 bg-linear-to-br from-red-500 via-blue-500 to-yellow-500 rounded-full">Kreativ</div>
              </div>
            </ParallaxText>
          </div>
          </section>
        </motion.div>
        <div className='min-h-screen w-full bg-white flex md:flex-row flex-col md:px-24 p-4 gap-24 pb-50'>
          <div className='flex-1 w-full'>
            <div className='flex justify-center items-center flex-col w-full'>
              <h3 className='text-xl font-semibold text-black/50'>Fähigkeiten</h3>
              <h1 className='text-5xl font-semibold text-black pb-8'>Skills</h1>
                <div className='flex flex-col text-black p-4 min-h-100 w-full'>
                    <h2>VITE</h2>
                    <div className='w-full h-6 bg-black/10 rounded-2xl p-2 flex items-start'>
                      <span className='h-full bg-black w-[87%] rounded-full'/>
                    </div>
                    <h2>NEXT.js</h2>
                    <div className='w-full h-6 bg-black/10 rounded-2xl p-2 flex items-start'>
                      <span className='h-full bg-black w-[85%] rounded-full'/>
                    </div>
                    <h2>TypeScript / JavaScript</h2>
                    <div className='w-full h-6 bg-black/10 rounded-2xl p-2 flex items-start'>
                      <span className='h-full bg-black w-[99%] rounded-full'/>
                    </div>
                    <h2>Git</h2>
                    <div className='w-full h-6 bg-black/10 rounded-2xl p-2 flex items-start'>
                      <span className='h-full bg-black w-[70%] rounded-full'/>
                    </div>
                    <h2>C++</h2>
                    <div className='w-full h-6 bg-black/10 rounded-2xl p-2 flex items-start'>
                      <span className='h-full bg-black w-[65%] rounded-full'/>
                    </div>
                    <h2>SQL</h2>
                    <div className='w-full h-6 bg-black/10 rounded-2xl p-2 flex items-start'>
                      <span className='h-full bg-black w-[80%] rounded-full'/>
                    </div>
                </div>
            </div>
          </div>
          <div className='flex-2'>
            <div className=''>
              <h3 className='text-xl font-semibold text-black/50'>Infos</h3>
              <h1 className='text-5xl font-semibold text-black pb-8'>Wer ich bin</h1>
            </div>
            <div className="flex flex-col min-h-100 gap-2 ">
              <div className='bg-black/10 rounded-2xl p-4'>
                <p className='text-black'>Ich studiere derzeit Computer Science an der <span className='text-blue-500 font-semibold'>Technischen Universität Hamburg</span>. Parallel dazu habe ich mich mit der <span className='text-blue-500 font-semibold'>Entwicklung von Webseiten</span> selbstständig gemacht und konnte so bereits umfassende praktische Erfahrung sowohl in der Frontend- als auch in der Backendentwicklung sammeln.

                Ich war schon immer technikaffin und habe meine Programmierkenntnisse kontinuierlich an anspruchsvollen Projekten unter Beweis gestellt. So habe ich mich bereits sowohl in der App- als auch in der Spieleentwicklung ausprobiert. Neben meinem Studium und meiner Selbstständigkeit arbeite ich fortlaufend an eigenen Projekten, die ich entwickle und veröffentliche. 
                </p>
              </div>
              <div className='bg-black/10 rounded-2xl p-4 h-full flex-1 flex lg:flex-row flex-col gap-16'>
                <div className='flex-1 flex flex-col'>
                  <div>
                    <h2 className='text-black text-4xl font-semibold'>Webentwickler</h2>
                    <h3 className='text-blue-500 text-md font-semibold'>NuKe Digital - Selbstständig</h3>
                    <h3 className='text-black/40 text-md font-semibold'>02/26 - Heute</h3>
                  </div>
                  <div>
                    <h2 className='text-black text-4xl font-semibold'>Barkeeper</h2>
                    <h3 className='text-blue-500 text-md font-semibold'>Beerpongbar Hamburg</h3>
                    <h3 className='text-black/40 text-md font-semibold'>09/25 - Heute</h3>
                  </div>
                  <div>
                    <h2 className='text-black text-4xl font-semibold'>PKW-Lascher</h2>
                    <h3 className='text-blue-500 text-md font-semibold'>GHBG Bremerhaven</h3>
                    <h3 className='text-black/40 text-md font-semibold'>07/24 - Heute</h3>
                  </div>
                 <div>
                    <h2 className='text-black text-4xl font-semibold'>Praktikum Full-Stack Development</h2>
                    <h3 className='text-blue-500 text-md font-semibold'>Sideklick GmbH</h3>
                    <h3 className='text-black/40 text-md font-semibold'>2 Wochen</h3>
                  </div>
                </div>
                <div className='flex-1 relative h-60 w-60 lg:self-end self-center'>
                  <Image
                    fill
                    src={"/nuri_wink.png"}
                    alt='Nuri peace'
                    className='object-contain'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}



              {/*
              <div className='flex-1'>
                <div className='flex flex-col h-full w-full'>
                  <div className='h-full self-end min-w-60 flex flex-col'>
                    <h2>Skills</h2>
                    <div className='flex flex-col'>
                        <h2>VITE</h2>
                        <div className='w-full h-4 bg-black/10 rounded-2xl p-1 flex items-start'>
                          <span className='h-full bg-black w-[87%] rounded-full'/>
                        </div>
                        <h2>NEXT.js</h2>
                        <div className='w-full h-4 bg-black/10 rounded-2xl p-1 flex items-start'>
                          <span className='h-full bg-black w-[85%] rounded-full'/>
                        </div>
                        <h2>TypeScript / JavaScript</h2>
                        <div className='w-full h-4 bg-black/10 rounded-2xl p-1 flex items-start'>
                          <span className='h-full bg-black w-[99%] rounded-full'/>
                        </div>
                        <h2>Git</h2>
                        <div className='w-full h-4 bg-black/10 rounded-2xl p-1 flex items-start'>
                          <span className='h-full bg-black w-[70%] rounded-full'/>
                        </div>
                        <h2>C++</h2>
                        <div className='w-full h-4 bg-black/10 rounded-2xl p-1 flex items-start'>
                          <span className='h-full bg-black w-[65%] rounded-full'/>
                        </div>
                        <h2>SQL</h2>
                        <div className='w-full h-4 bg-black/10 rounded-2xl p-1 flex items-start'>
                          <span className='h-full bg-black w-[80%] rounded-full'/>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              */}