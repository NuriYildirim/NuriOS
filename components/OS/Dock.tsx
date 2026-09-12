"use client"
import { motion } from 'motion/react';
import React from 'react'
import { IconType } from 'react-icons';
import { FaGithub, FaInstagram, FaLinkedin, FaMessage} from "react-icons/fa6";
import { GithubIcon } from '../ui/github';
import { InstagramIcon } from '../ui/instagram';
import { SendIcon } from '../ui/send';
import { LinkedinIcon } from '../ui/linkedin';
import Nuke from "@/public/nuke.png"

const links = [
  {
    href: "https://github.com/NuriYildirim",
    icon: GithubIcon,
    bg: '#ffffff',
    fg: 'black'
  },
    {
    href: "https://www.instagram.com/nuri.yldm/",
    icon: InstagramIcon,
    bg: '#c13584',
    fg: 'white'
  },
  {
    href: "https://www.linkedin.com/in/nuri-yildirim-0b64a0330/",
    icon: LinkedinIcon,
    bg: '#ffffff',
    fg: '#0077B5'
  },
  {
    href: "mailto:yildirim.nuri@icloud.com",
    icon: SendIcon,
    bg: '#0c57ad',
    fg: '#ffffff'
  },
]

export default function Dock() {
  return (
    <div className='w-full h-full flex absolute justify-center items-end p-6'>
    <nav className='px-4 liquid flex gap-4 p-2'>
      {links.map((item, index) => 
        <motion.a 
          initial={{rotate: 0, scale:1}}
          whileHover={{rotate: index%2==0?5:-5, scale:1.1}}
          href={item.href}
          key={index} className='h-16 w-16 p-2 flex justify-center items-center rounded-2xl' style={{backgroundColor: item.bg, color: item.fg}}>
          <item.icon size={50}/>
        </motion.a>
      )}
    </nav>
    </div>
  )
}
