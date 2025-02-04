import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Smile, Meh, Frown } from "lucide-react"

export function WelcomeSection() {
  return (
    (<Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Hey Sarah, how are you feeling today?</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center space-x-4">
          <Button variant="outline" size="lg" className="flex flex-col items-center">
            <Smile className="h-8 w-8 text-green-500" />
            <span>Happy</span>
          </Button>
          <Button variant="outline" size="lg" className="flex flex-col items-center">
            <Meh className="h-8 w-8 text-yellow-500" />
            <span>Neutral</span>
          </Button>
          <Button variant="outline" size="lg" className="flex flex-col items-center">
            <Frown className="h-8 w-8 text-red-500" />
            <span>Sad</span>
          </Button>
        </div>
      </CardContent>
    </Card>)
  );
}

