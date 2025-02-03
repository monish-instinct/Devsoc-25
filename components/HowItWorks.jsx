"use client";
import { motion } from "framer-motion"
import { Mic, Brain, Heart } from "lucide-react"

const steps = [
  { name: "Speak Your Feelings", description: "Talk to EchoLoop via voice.", icon: Mic },
  { name: "AI Processes & Understands", description: "Sentiment analysis and suggestions.", icon: Brain },
  {
    name: "Receive Support",
    description: "Self-help recommendations or instant connection to a therapist.",
    icon: Heart,
  },
]

export default function HowItWorks() {
  return (
    (<section className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2
            className="text-base text-indigo-600 font-semibold tracking-wide uppercase">How It Works</h2>
          <p
            className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Simple steps to better mental health
          </p>
          <p
            className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
            EchoLoop makes it easy to get the support you need, when you need it.
          </p>
        </div>

        <div className="mt-10">
          <dl
            className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.name}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}>
                <dt>
                  <div
                    className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <step.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p
                    className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">{step.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">{step.description}</dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>)
  );
}

