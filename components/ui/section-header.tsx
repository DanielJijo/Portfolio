"use client"

import { motion } from "framer-motion"
import { GradientText } from "./gradient-text"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  className?: string
}

export const SectionHeader = ({
  title,
  subtitle,
  className = ""
}: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`text-center mb-12 ${className}`}
    >
      <GradientText
        text={title}
        className="text-4xl md:text-5xl font-bold mb-4"
        gradient="from-blue-400 via-blue-500 to-blue-400"
      />
      {subtitle && (
        <p className="text-gray-400 text-lg md:text-xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
} 