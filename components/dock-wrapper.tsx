"use client"

import { Dock } from "./ui/dock"
import { useRouter } from "next/navigation"

export function DockWrapper() {
  const router = useRouter()

  const dockItems = [
    {
      name: "Home",
      icon: "/icons/home.svg",
      onClick: () => router.push("/#home"),
    },
    {
      name: "About",
      icon: "/icons/about.svg",
      onClick: () => router.push("/#about"),
    },
    {
      name: "Skills",
      icon: "/icons/skills.svg",
      onClick: () => router.push("/#skills"),
    },
    {
      name: "Projects",
      icon: "/icons/projects.svg",
      onClick: () => router.push("/#projects"),
    },
    {
      name: "Resume",
      icon: "/icons/resume.svg",
      onClick: () => router.push("/#resume"),
    },
    {
      name: "Contact",
      icon: "/icons/contact.svg",
      onClick: () => router.push("/#contact"),
    },
  ]

  return (
    <div className="fixed bottom-8 left-0 right-0 flex justify-center items-end">
      <Dock items={dockItems} />
    </div>
  )
} 