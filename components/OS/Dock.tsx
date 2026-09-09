"use client"
import { motion } from 'motion/react';
import React from 'react'
import { IconType } from 'react-icons';
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import Nuke from "@/public/nuke.png"

const links = [
  {
    href: "https://github.com/NuriYildirim",
    icon: FaGithub,
    bg: '#ffffff',
    fg: 'black'
  },
    {
    href: "https://www.instagram.com/nuri.yldm/",
    icon: FaInstagram,
    bg: '#c13584',
    fg: 'white'
  },
  {
    href: "https://www.linkedin.com/in/nuri-yildirim-0b64a0330/",
    icon: FaLinkedin,
    bg: '#ffffff',
    fg: '#0077B5'
  },
]

export default function Dock() {
  return (
    <div className='w-full h-full flex absolute justify-center items-end p-6'>
    <nav className='px-8 liquid flex gap-4 p-2'>
      {links.map((item, index) => 
        <motion.a 
          initial={{rotate: 0, scale:1}}
          whileHover={{rotate: index%2==0?10:-10, scale:1.1}}
          href={item.href}
          key={index} className='h-16 w-16 p-2 flex justify-center items-center rounded-2xl' style={{backgroundColor: item.bg, color: item.fg}}>
          <item.icon size={48}/>
        </motion.a>
      )}
    </nav>
    </div>
  )
}
