import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PhoneCall, Users } from "lucide-react"

export function SupportCommunity() {
  return (
    (<Card className="mt-8">
      <CardHeader>
        <CardTitle>Support & Community</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="flex-1" variant="outline">
            <PhoneCall className="mr-2 h-4 w-4" /> Connect to a Professional
          </Button>
          <Button className="flex-1" variant="outline">
            <Users className="mr-2 h-4 w-4" /> Join Community Forum
          </Button>
        </div>
      </CardContent>
    </Card>)
  );
}

