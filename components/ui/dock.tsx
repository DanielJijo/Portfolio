"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"

interface DockItem {
  name: string
  icon: string
  onClick: () => void
}

interface DockProps {
  items: DockItem[]
}

export function Dock({ items }: DockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full p-2 shadow-lg"
    >
      <div className="flex items-center gap-2">
        {items.map((item, index) => (
          <motion.button
            key={item.name}
            onClick={item.onClick}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="relative group"
          >
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors">
              <Image
                src={item.icon}
                alt={item.name}
                width={24}
                height={24}
                className="transition-transform group-hover:scale-110"
              />
            </div>
            <div
              className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/80 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:-top-10 transition-all duration-200"
            >
              {item.name}
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  )
} 