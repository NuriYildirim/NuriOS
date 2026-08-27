"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Boot() {
  const router = useRouter()
  return (
    <div className="flex flex-col flex-1 items-center justify-center items-center bg-zinc-50 font-sans dark:bg-black">
      <main>
        <Link 
          className=""
          href="/home">Boot OS
        </Link>
      </main>
    </div>
  );
}
