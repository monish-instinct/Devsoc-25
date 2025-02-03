import Hero from "@/components/Hero"
import Features from "@/components/Features"
import HowItWorks from "@/components/HowItWorks"
import Testimonials from "@/components/Testimonials"
import CallToAction from "@/components/CallToAction"
import FloatingMic from "@/components/FloatingMic"
import DarkModeToggle from "@/components/DarkModeToggle"

export default function Home() {
  return (
    (<main
      className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 transition-colors duration-500">
      <DarkModeToggle />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CallToAction />
      <FloatingMic />
    </main>)
  );
}

