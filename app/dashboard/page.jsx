"use client"

import { useState } from "react"
import { Sidebar } from "@/components/Sidebar"
import { Header } from "@/components/Header"
import { WelcomeSection } from "@/components/WelcomeSection"
import { AISupport } from "@/components/AISupport"
import { MoodAnalytics } from "@/components/MoodAnalytics"
import { WellnessTools } from "@/components/WellnessTools"
import { SupportCommunity } from "@/components/SupportCommunity"
import { ChatbotOverlay } from "@/components/ChatbotOverlay" // Import the ChatbotOverlay component

export default function Dashboard() {
  const [showChatbot, setShowChatbot] = useState(false)

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            {/* <WelcomeSection /> */}
            <div className="flex flex-col lg:flex-row gap-6 mt-8">
              <AISupport onChatClick={() => setShowChatbot(true)} />
              <MoodAnalytics />
              <WellnessTools />
            </div>
            <SupportCommunity />
          </div>
        </main>
      </div>
      {showChatbot && <ChatbotOverlay onClose={() => setShowChatbot(false)} />}
    </div>
  )
}

