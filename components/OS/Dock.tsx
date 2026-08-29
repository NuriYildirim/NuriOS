import React from 'react'
import { IconType } from 'react-icons';
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

const links = [
  {
    href: "",
    icon: FaGithub,
    bg: '#ffffff',
    fg: 'black'
  },
    {
    href: "",
    icon: FaInstagram,
    bg: '#c13584',
    fg: 'white'
  },
    {
    href: "",
    icon: FaLinkedin,
    bg: '#ffffff',
    fg: '#0077B5'
  }
]

export default function Dock() {
  return (
    <div className='w-full h-full flex absolute justify-center items-end p-6'>
    <nav className='px-8 liquid flex gap-4 p-2'>
      {links.map((item, index) => 
        <div key={index} className='h-16 w-16 p-2 flex justify-center items-center rounded-2xl' style={{backgroundColor: item.bg, color: item.fg}}>
          <item.icon size={48}/>
        </div>
      )}
    </nav>
    </div>
  )
}
