"use client";
import { Button } from "@/components/ui/button"
import { Settings, Moon, ChevronLeft, ChevronRight } from "lucide-react"

export default function SettingsSidebar({
  open,
  setOpen
}) {
  return (<>
    <aside
      className={`bg-white h-screen p-6 shadow-md transition-all duration-300 ${open ? "w-64" : "w-0"} overflow-hidden`}>
      <h2 className="text-2xl font-semibold mb-6">Settings</h2>
      <div className="space-y-4">
        <div>
          <h3 className="font-medium mb-2">Voice Tone:</h3>
          <select className="w-full p-2 border rounded">
            <option>Calming</option>
            <option>Motivational</option>
            <option>Friendly</option>
          </select>
        </div>
        <div>
          <h3 className="font-medium mb-2">Theme:</h3>
          <Button variant="outline" className="w-full">
            <Moon className="mr-2 h-4 w-4" /> Dark Mode
          </Button>
        </div>
        <div>
          <h3 className="font-medium mb-2">Font Size:</h3>
          <input type="range" min="1" max="3" className="w-full" />
        </div>
        <Button variant="outline" className="w-full">
          <Settings className="mr-2 h-4 w-4" /> Privacy & Data Controls
        </Button>
      </div>
    </aside>
    <Button
      variant="outline"
      size="icon"
      className="fixed top-4 left-4 z-50"
      onClick={() => setOpen(!open)}>
      {open ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
    </Button>
  </>);
}

