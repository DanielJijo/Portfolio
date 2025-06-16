"use client"

import { useScroll, motion, useTransform, useSpring } from "framer-motion"
import { useRef } from "react"

interface ScrollVelocityProps {
  text: string
  className?: string
  velocity?: number
}

export function ScrollVelocity({ text, className = "", velocity = 50 }: ScrollVelocityProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
  const x = useSpring(
    useTransform(scrollYProgress, [0, 1], [velocity, -velocity]),
    springConfig
  )

  return (
    <div ref={ref} className={`overflow-hidden py-4 w-full`}>
      <motion.div
        style={{ x }}
        className={`text-gray-400 font-medium ${className} min-w-max text-center`}
      >
        {text}
      </motion.div>
    </div>
  )
} 