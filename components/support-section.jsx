"use client"

import { Button } from "@/components/ui/button"
import { Phone, Users, AlertTriangle } from "lucide-react"

export default function SupportSection() {
  return (
    (<section className="bg-white rounded-lg shadow-md p-6 mt-6">
      <h2 className="text-2xl font-semibold mb-4">Support & Community</h2>
      <div className="flex flex-wrap gap-4">
        <Button>
          <Phone className="mr-2 h-4 w-4" /> Connect to a Professional
        </Button>
        <Button variant="outline">
          <Users className="mr-2 h-4 w-4" /> Join Community Forum
        </Button>
        <Button variant="destructive">
          <AlertTriangle className="mr-2 h-4 w-4" /> Emergency Help
        </Button>
      </div>
    </section>)
  );
}

