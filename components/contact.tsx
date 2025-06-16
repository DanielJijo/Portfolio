"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "danieljijopp@gmail.com",
      href: "mailto:danieljijopp@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7539969460",
      href: "tel:+917539969460",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Tamil Nadu, India",
      href: "#",
    },
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/daniel-jijo-p-p-847b982a2/",
      color: "hover:text-blue-500",
    },
    {
      icon: Github,
      name: "GitHub",
      href: "https://github.com/DanielJijo",
      color: "hover:text-gray-400",
    },
    {
      icon: Phone,
      name: "Mobile",
      href: "tel:+917539969460",
      value: "+91 7539969460",
      color: "hover:text-green-500",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-blue-400">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-white text-xl md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and
            innovation.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/30 transition-colors">
                      <info.icon className="text-blue-400" size={20} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:bg-gray-700`}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16 pt-8 border-t border-gray-700"
        >
          <p className="text-black font-medium">© 2025 Daniel Jijo P P. All rights reserved. Built with React & Tailwind CSS.</p>
        </motion.div>
      </div>
    </section>
  )
}
