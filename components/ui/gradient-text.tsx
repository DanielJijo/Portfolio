"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Ribbon } from "@/components/ui/ribbon"

interface GradientTextProps {
  text: string
  className?: string
  gradient?: string
}

export const GradientText = ({
  text,
  className,
  gradient = "from-blue-600 via-blue-400 to-blue-600"
}: GradientTextProps) => {
  return (
    <motion.div
      className={cn(
        "relative inline-block",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Ribbon className="absolute inset-0 w-full h-full opacity-80 pointer-events-none z-0" isHomePage={false} />
      <span
        className={cn(
          "bg-gradient-to-r bg-clip-text text-transparent",
          gradient
        )}
        style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
      >
        {text}
      </span>
    </motion.div>
  )
} 