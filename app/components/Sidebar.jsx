import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { Home, BarChart2, Heart, Users, Settings, Menu, X, Moon, Sun } from "lucide-react"

const menuItems = [
  { icon: Home, label: "Dashboard" },
  { icon: BarChart2, label: "Analytics" },
  { icon: Heart, label: "Self-Care" },
  { icon: Users, label: "Community" },
  { icon: Settings, label: "Settings" },
]

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  return (
    (<div
      className={cn(
        "bg-white dark:bg-gray-800 h-screen flex flex-col transition-all duration-300 ease-in-out",
        collapsed ? "w-16" : "w-64"
      )}>
      <div className="flex items-center justify-between p-4">
        {!collapsed && <h2 className="text-xl font-bold text-gray-800 dark:text-white">SoulSync</h2>}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className="hover:bg-gray-200 dark:hover:bg-gray-700">
          {collapsed ? <Menu /> : <X />}
        </Button>
      </div>
      <ScrollArea className="flex-1">
        <nav className="space-y-2 p-2">
          {menuItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className={cn(
                "w-full justify-start text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700",
                !collapsed && "justify-start"
              )}>
              <item.icon className="h-5 w-5" />
              {!collapsed && <span className="ml-2">{item.label}</span>}
            </Button>
          ))}
        </nav>
      </ScrollArea>
      <div className="p-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setDarkMode(!darkMode)}
          className="w-full justify-center hover:bg-gray-200 dark:hover:bg-gray-700">
          {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
      </div>
    </div>)
  );
}

