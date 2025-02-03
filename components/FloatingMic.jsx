"use client";

import { motion } from "framer-motion"

import { Mic } from "lucide-react"

export default function FloatingMic() {
  return (
    (<motion.div
      className="fixed bottom-8 right-8"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}>
      <button className="bg-indigo-600 text-white rounded-full p-4 shadow-lg">
        <Mic className="h-6 w-6" />
      </button>
    </motion.div>)
  );
}

