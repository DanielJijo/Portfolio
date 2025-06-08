"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-blue-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center p-2">
                <div className="w-full h-full relative overflow-hidden rounded-full">
                  <Image
                    src="/images/profile.jpg"
                    alt="Daniel Jijo P P"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                    className="rounded-full"
                  />
                </div>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-0 border-4 border-dashed border-blue-400/30 rounded-full"
              ></motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-blue-400">Personal Profile</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              I am a dedicated Computer Science Engineering student with a strong foundation in programming,
              problem-solving, and software development. Focused on continuous learning and seeking opportunities to
              contribute to innovative projects in a collaborative environment.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="text-blue-400 font-semibold mb-2">Education</h4>
                <p className="text-gray-300 text-sm">B.E Computer Science</p>
                <p className="text-gray-400 text-xs">KIT - 2022-2026</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="text-blue-400 font-semibold mb-2">CGPA</h4>
                <p className="text-gray-300 text-sm">6.78/10</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              {["Team Collaboration", "Quick Adaptation", "Clear Communication"].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(96, 165, 250, 0.3)' }}
                  className="bg-blue-600/30 text-white px-6 py-3 rounded-lg text-lg font-semibold flex items-center gap-2 shadow-lg shadow-blue-600/10"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
