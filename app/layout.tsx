import type { Metadata } from "next";
import { Geist, Geist_Mono, VT323} from "next/font/google";
import "./globals.css";
import 'lenis/dist/lenis.css'
import LenisProvider from "@/components/LenisProvider";
import Cursor from "@/components/Cursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const vt323 = VT323({
  variable: "--font-vt323",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Nuri Yildirim",
  description: "Portfolio von Nuri Yildirim, Webentwickler und Student.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} ${vt323.variable} h-full antialiased`}
    >
      <body className="no-scrollbar">
        <Cursor/>
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
