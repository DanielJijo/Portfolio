"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const projects = [
    {
      title: "Netflix Clone",
      description:
        "Streaming UI with React: Built responsive frontend using React and styled-components with modern design patterns.",
      tech: ["React", "Styled Components", "JavaScript", "Responsive Design"],
      date: "Jan - Feb 2025",
      color: "from-neutral-900 to-neutral-800",
      image: "/images/netflix-signin.jpg",
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      title: "HabitSync",
      description: "Daily habit tracker web app: Led full-stack development including UI, logic, and storage systems.",
      tech: ["React", "Node.js", "Database", "Full Stack"],
      date: "2024",
      color: "from-neutral-900 to-neutral-800",
      image: "/images/habitsync-signin.jpg",
      links: {
        github: "#",
        demo: "https://habitsync-gold.vercel.app/"
      }
    },
    {
      title: "E-Commerce API",
      description:
        "Product management backend: Developed RESTful APIs with authentication and CRUD features for scalable commerce.",
      tech: ["Node.js", "REST API", "Authentication", "CRUD"],
      date: "2024",
      color: "from-blue-500 to-purple-500",
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      title: "AI Skill-Sharing Platform",
      description:
        "Contributed to frontend and backend, integrated AI for intelligent user matching and skill recommendations.",
      tech: ["AI Integration", "Full Stack", "User Matching", "React"],
      date: "2024",
      color: "from-purple-500 to-indigo-500",
      links: {
        github: "#",
        demo: "#"
      }
    },
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl group"
            >
              <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="opacity-90 hover:opacity-100 transition-opacity duration-300"
                  />
                )}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-white/80 text-sm">{project.date}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 px-4 py-2 rounded-lg transition-all"
                  >
                    <ExternalLink size={16} />
                    VIEW
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
