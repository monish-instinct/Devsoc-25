"use client";
import { motion } from "framer-motion"
import Image from "next/image"

export default function Hero() {
  return (
    (<section
      className="h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          Your Voice, Your Support – Anytime, Anywhere.
        </motion.h1>
        <motion.p
          className="mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl text-gray-500 dark:text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}>
          AI-powered voice-based mental health platform for immediate emotional support and professional guidance.
        </motion.p>
        <motion.div
          className="mt-10 max-w-md mx-auto sm:flex sm:justify-center md:mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}>
          <div className="rounded-md shadow">
            <a
              href="#"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 md:py-4 md:text-lg md:px-10 transition duration-150 ease-in-out transform hover:scale-105">
              Get Started
            </a>
          </div>
        </motion.div>
        {/* <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}>
          <Image
            src="/placeholer.svg?height=400&width=600"
            alt="AI Voice Assistant Illustration"
            width={600}
            height={400}
            className="mx-auto" />
        </motion.div> */}
      </div>
    </section>)
  );
}

