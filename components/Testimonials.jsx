"use client";
import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    content:
      "EchoLoop has been a game-changer for my mental health. It's like having a supportive friend available 24/7.",
    author: "Sarah K.",
  },
  {
    id: 2,
    content: "The voice-based interface makes it so easy to express my feelings. I feel heard and understood.",
    author: "Michael R.",
  },
  {
    id: 3,
    content: "As someone who struggles with anxiety, having EchoLoop's instant support has been incredibly reassuring.",
    author: "Emily T.",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    (<section className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-8">What Our Users Say</h2>
        <div className="relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 shadow-xl rounded-lg p-6 md:p-10 text-center">
            <p
              className="text-xl md:text-2xl font-medium text-gray-900 dark:text-white mb-4">
              "{testimonials[currentIndex].content}"
            </p>
            <p className="text-base md:text-lg font-semibold text-indigo-600">- {testimonials[currentIndex].author}</p>
          </motion.div>
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md">
            <ChevronLeft className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md">
            <ChevronRight className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          </button>
        </div>
      </div>
    </section>)
  );
}

