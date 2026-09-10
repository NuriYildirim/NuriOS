"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Boot() {
  const router = useRouter()
  return (
    <div className="flex flex-col font-sans bg-black bios uppercase text-2xl">
    <div className="m-4 bg-background text-foreground h-full">
      <div className="flex w-1/2 flex-row">
        <div className="p-2 flex-1 bg-foreground text-background">
          Booting
        </div>
        <div className="border border-b-0 p-2 flex-1">
          Security
        </div>
        <div className="border border-b-0 p-2 flex-1">
          System
        </div>        
        <div className="border border-b-0 p-2 flex-1">
          Exit
        </div>
      </div>
      <main className="border p-2 flex flex-col h-full gap-2">
        <div className="flex flex-col w-full">
          <h1 className="text-7xl">NURI-OS</h1>
          <h2 className="text-5xl">webentwickler portfolio</h2>
          <div className="border p-2">
            <p>Willkommen auf mein portfolio, diese besondere Webseite soll meine fähigkeiten praktisch unter beweis stellen und zudem mich vorstellen. Das Projekt ist mit Next.js framer-motion und gsap gebaut und open source.</p>
            <a className="text-blue-500" href="https://github.com/NuriYildirim">https://github.com/NuriYildirim</a>
          </div>
        </div>
        <div className="w-full flex flex-col">
          <h2>drücken um system zu booten</h2>
          <Link 
            className="w-full bg-foreground border-2 border-background outline-2 outline-foreground text-background text-5xl text-center"
            href="/home">Boot OS
          </Link>
        </div>
      </main>
    </div>
    </div>
  );
}
