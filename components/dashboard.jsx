"use client"

import { useState } from "react"
import WelcomeSection from "./welcome-section"
import AiSupportPanel from "./ai-support-panel"
import MoodAnalyticsPanel from "./mood-analytics-panel"
import WellnessToolsPanel from "./wellness-tools-panel"
import SupportSection from "./support-section"
import SettingsSidebar from "./settings-sidebar"

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    (<div className="flex h-screen overflow-hidden">
      <SettingsSidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <WelcomeSection />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <AiSupportPanel />
            <MoodAnalyticsPanel />
            <WellnessToolsPanel />
          </div>
          <SupportSection />
        </div>
      </div>
    </div>)
  );
}

