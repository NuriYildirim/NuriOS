import CVApp from "@/components/APP/CVApp";
import NuriGPTApp from "@/components/APP/NuriGPTApp";
import TestApp from "@/components/APP/TestApp";
import Desktop from "@/components/OS/Desktop";
import Dock from "@/components/OS/Dock";
import Wallpaper from "@/components/OS/Wallpaper";

export default function Home() {
  return (
  <Desktop>
    <Wallpaper/>
    <Dock/>
    <TestApp/>
    <CVApp/>
    <NuriGPTApp/>
  </Desktop>
  );
}