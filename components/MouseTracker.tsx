"use client"

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useDockHover } from '@/context/DockHoverContext'

export default function MouseTracker() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { isHoveringDock } = useDockHover()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <motion.div
      className="fixed pointer-events-none z-50"
      style={{
        left: mousePosition.x,
        top: mousePosition.y,
        transform: 'translate(-50%, -50%)',
        opacity: isHoveringDock ? 0 : 1,
        transition: 'opacity 0.2s ease-in-out',
      }}
    >
      <motion.div
        className="relative"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="absolute inset-0 bg-white/20 blur-lg rounded-full" />
        <div className="w-8 h-8 bg-gradient-to-r from-white/30 to-black/30 rounded-full backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-black/40 rounded-full animate-pulse" style={{ animationDuration: '1.5s' }} />
      </motion.div>
    </motion.div>
  )
} 