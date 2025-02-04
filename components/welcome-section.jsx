"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"

export default function WelcomeSection() {
  const [mood, setMood] = useState(5)

  return (
    (<section className="bg-white rounded-lg shadow-md p-6">
      <h1 className="text-3xl font-semibold mb-4">Hey [User], how are you feeling today?</h1>
      <div className="flex items-center space-x-4">
        <span role="img" aria-label="Very Sad" className="text-2xl cursor-pointer">
          😢
        </span>
        <Slider
          value={[mood]}
          min={1}
          max={10}
          step={1}
          onValueChange={(value) => setMood(value[0])}
          className="w-64" />
        <span role="img" aria-label="Very Happy" className="text-2xl cursor-pointer">
          😄
        </span>
      </div>
    </section>)
  );
}

