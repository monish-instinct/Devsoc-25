"use client";
import { useState, useEffect } from "react"
import { Sun, Moon } from "lucide-react"

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  return (
    (<button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors duration-200">
      {darkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
    </button>)
  );
}

