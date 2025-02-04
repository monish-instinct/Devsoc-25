"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export default function AiSupportPanel() {
  return (
    (<div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-4">Real-Time AI Support</h2>
      <Button className="w-full mb-4">
        <MessageCircle className="mr-2 h-4 w-4" /> Talk to SoulSync
      </Button>
      <div className="mb-4">
        <h3 className="font-medium mb-2">AI Suggestions:</h3>
        <p>Try a 5-minute deep breathing exercise to reduce stress.</p>
      </div>
      <div>
        <h3 className="font-medium mb-2">Today's Mindful Thought:</h3>
        <p className="italic">"Embrace the present moment, for it is where life unfolds."</p>
      </div>
    </div>)
  );
}

