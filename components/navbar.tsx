"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 shadow-lg backdrop-blur-sm"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-start items-center py-4">
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            className="text-2xl font-bold text-white cursor-pointer"
          >
            DANIEL JIJO P P
          </motion.div>
        </div>
      </div>
    </motion.nav>
  )
}
