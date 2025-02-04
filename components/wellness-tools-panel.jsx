"use client"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Music, VolumeX } from "lucide-react"

export default function WellnessToolsPanel() {
  return (
    (<div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-4">Self-Care & Wellness Tools</h2>
      <div className="space-y-4">
        <Button className="w-full">
          <Music className="mr-2 h-4 w-4" /> Start Guided Meditation
        </Button>
        <div>
          <h3 className="font-medium mb-2">Journal Entry:</h3>
          <Textarea placeholder="Write your thoughts here..." />
        </div>
        <div>
          <h3 className="font-medium mb-2">Gratitude Tracker:</h3>
          <Textarea placeholder="What are you grateful for today?" />
        </div>
        <Button variant="outline" className="w-full">
          <VolumeX className="mr-2 h-4 w-4" /> Toggle ASMR/Nature Sounds
        </Button>
        <div>
          <h3 className="font-medium mb-2">Daily Challenge:</h3>
          <p>Try a 5-minute gratitude exercise today.</p>
        </div>
      </div>
    </div>)
  );
}

