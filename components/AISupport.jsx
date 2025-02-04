import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageSquare } from "lucide-react"

export function AISupport({ onChatClick }) {
  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle>AI Support</CardTitle>
      </CardHeader>
      <CardContent>
        <Button className="w-full" size="lg" onClick={onChatClick}>
          <MessageSquare className="mr-2 h-4 w-4" /> Talk to SoulSync
        </Button>
        <div className="mt-4">
          <h4 className="font-semibold">Today's Mindful Thought</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            "Embrace the present moment, for it is the only time where life exists."
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

