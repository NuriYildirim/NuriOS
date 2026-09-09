import FullscreenBar from "@/components/OS/FullscreenBar"

export default function CVLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  <section className="">
    <FullscreenBar title={"CV"}/>
    <div className="mt-6">
        {children}
    </div>
  </section>
  )
}