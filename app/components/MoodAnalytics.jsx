import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { name: "Mon", mood: 3 },
  { name: "Tue", mood: 4 },
  { name: "Wed", mood: 3 },
  { name: "Thu", mood: 5 },
  { name: "Fri", mood: 4 },
  { name: "Sat", mood: 5 },
  { name: "Sun", mood: 4 },
]

export function MoodAnalytics() {
  return (
    (<Card className="flex-1">
      <CardHeader>
        <CardTitle>Mood Analytics</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="mood" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
          You seem happiest on Fridays! Keep up the positive energy.
        </p>
      </CardContent>
    </Card>)
  );
}

