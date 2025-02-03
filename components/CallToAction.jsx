"use client";
import { motion } from "framer-motion"

export default function CallToAction() {
  return (
    (<section className="bg-indigo-700 dark:bg-indigo-900">
      <div
        className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block">Take the First Step Towards Mental Well-being</span>
          <span className="block text-indigo-300">Join EchoLoop today and experience AI-driven emotional support.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <motion.div
            className="inline-flex rounded-md shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
              Try Now
            </a>
          </motion.div>
          <motion.div
            className="ml-3 inline-flex rounded-md shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50">
              Learn More
            </a>
          </motion.div>
        </div>
      </div>
    </section>)
  );
}

