"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Download, Eye, Briefcase, GraduationCap } from "lucide-react"

export default function Resume() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const experiences = [
    {
      company: "Brinary Spot Technology",
      role: "Web Development Intern",
      period: "Jan - Feb 2025",
      type: "Internship",
    },
    {
      company: "Appin Institution of Technology",
      role: "Web Design Intern",
      period: "July 2024",
      type: "Internship",
    },
    {
      company: "Ether Infotech",
      role: "Data Science Intern",
      period: "July 2023",
      type: "Internship",
    },
  ]

  const education = [
    {
      institution: "KIT-Kalaignarkarunanithi Institute of Technology",
      degree: "Bachelor of Engineering (B.E) in Computer Science",
      period: "2022 - 2026",
      grade: "CGPA: 6.78/10",
    },
    {
      institution: "Trinity Matriculation Higher Secondary School",
      degree: "Higher Secondary Certificate",
      period: "2010 - 2022",
      grade: "HSC: 70%, SSLC: 67%",
    },
  ]

  return (
    <section id="resume" className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-blue-400">Resume</span>
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(96, 165, 250, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 justify-center"
            >
              <Download size={20} />
              Download Resume
            </motion.button>
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 justify-center"
            >
              <Eye size={20} />
              View Online
            </motion.a>

          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="text-blue-400" size={24} />
              <h3 className="text-2xl font-bold text-white">Experience</h3>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="bg-gray-800 p-6 rounded-lg border-l-4 border-blue-400 hover:bg-gray-700 transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-white">{exp.role}</h4>
                    <span className="bg-blue-600/20 text-blue-400 px-2 py-1 rounded text-xs">{exp.type}</span>
                  </div>
                  <p className="text-blue-400 font-medium mb-1">{exp.company}</p>
                  <p className="text-gray-400 text-sm">{exp.period}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-blue-400" size={24} />
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.institution}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="bg-gray-800 p-6 rounded-lg border-l-4 border-purple-400 hover:bg-gray-700 transition-colors"
                >
                  <h4 className="text-lg font-semibold text-white mb-2">{edu.degree}</h4>
                  <p className="text-purple-400 font-medium mb-1">{edu.institution}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-400 text-sm">{edu.period}</p>
                    <p className="text-green-400 text-sm font-medium">{edu.grade}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
