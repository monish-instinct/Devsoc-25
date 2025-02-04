import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Headphones, BookOpen, Smile } from "lucide-react"

export function WellnessTools() {
  return (
    (<Card className="flex-1">
      <CardHeader>
        <CardTitle>Wellness Tools</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Button variant="outline" className="w-full justify-start">
            <Headphones className="mr-2 h-4 w-4" /> Guided Meditation
          </Button>
          <Button variant="outline" className="w-full justify-start">
            <BookOpen className="mr-2 h-4 w-4" /> Journal Entry
          </Button>
          <Button variant="outline" className="w-full justify-start">
            <Smile className="mr-2 h-4 w-4" /> Gratitude Exercise
          </Button>
        </div>
      </CardContent>
    </Card>)
  );
}

