import CVApp from "@/components/APP/CVApp";
import NuriGPTApp from "@/components/APP/NuriGPTApp";
import TestApp from "@/components/APP/NukeApp";
import Desktop from "@/components/OS/Desktop";
import Dock from "@/components/OS/Dock";
import Wallpaper from "@/components/OS/Wallpaper";
import Island from "@/components/OS/Island";

export default function Home() {
  return (
  <>
  <Desktop>
    <Wallpaper/>
    <Island/>
    <Dock/>
    <TestApp/>
    <CVApp/>
  </Desktop>
  </>
  );
}