"use client"

import { motion } from "framer-motion"
import { ScrollVelocity } from "./ui/scroll-velocity"
import SplitText from "./SplitText"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function Hero() {
  const handleAnimationComplete = () => {
    console.log('Text animation completed!');
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center py-64 px-4 overflow-hidden"
    >
      <motion.div 
        variants={containerVariants} 
        initial="hidden" 
        animate="visible" 
        className="text-center z-10 w-full"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 flex flex-col md:flex-row items-center justify-center gap-2">
            <SplitText
              text="DANIEL"
              className="text-white"
              delay={50}
              duration={0.8}
              ease="power4.out"
              splitType="chars"
              from={{ opacity: 0, y: 50 }}
              to={{ opacity: 1, y: 0 }}
            />
            <SplitText
              text="JIJO P P"
              className="text-sky-400"
              delay={50}
              duration={0.8}
              ease="power4.out"
              splitType="chars"
              from={{ opacity: 0, y: 50 }}
              to={{ opacity: 1, y: 0 }}
            />
          </h1>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-8">
          <SplitText
            text="Computer Science Engineering Student"
            className="text-xl md:text-2xl text-gray-300 font-light"
            delay={30}
            duration={0.6}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 30 }}
            to={{ opacity: 1, y: 0 }}
            onLetterAnimationComplete={handleAnimationComplete}
          />
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(96, 165, 250, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
          >
            Get In Touch
          </motion.a>
        </motion.div>

        <div className="mt-auto w-full pb-56">
          <ScrollVelocity 
            text="PROGRESS, NOT PERFECTION"
            className="mt-20 mb-4 text-4xl md:text-6xl text-gray-300 whitespace-nowrap pl-56"
            velocity={200}
          />
          <ScrollVelocity 
            text="START NOW, IMPROVE LATER"
            className="mb-20 text-4xl md:text-6xl text-gray-300 whitespace-nowrap"
            velocity={-200}
          />
        </div>
      </motion.div>
    </section>
  )
}
