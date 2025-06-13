"use client"

import { useScroll, motion, useTransform, useSpring } from "framer-motion"
import { useRef } from "react"

interface ScrollVelocityProps {
  text: string
  className?: string
}

export function ScrollVelocity({ text, className = "" }: ScrollVelocityProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
  const y = useSpring(
    useTransform(scrollYProgress, [0, 1], [100, -100]),
    springConfig
  )

  return (
    <div ref={ref} className={`overflow-hidden py-4 ${className}`}>
      <motion.div
        style={{ y }}
        className="text-lg md:text-xl text-gray-400 font-medium"
      >
        {text}
      </motion.div>
    </div>
  )
} 