"use client"

import { LineChart } from "@/components/ui/chart"

export default function MoodAnalyticsPanel() {
  const data = [
    { name: "Mon", mood: 6 },
    { name: "Tue", mood: 7 },
    { name: "Wed", mood: 5 },
    { name: "Thu", mood: 8 },
    { name: "Fri", mood: 9 },
    { name: "Sat", mood: 8 },
    { name: "Sun", mood: 7 },
  ]

  return (
    (<div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-4">Mood & Sentiment Analytics</h2>
      <LineChart
        data={data}
        index="name"
        categories={["mood"]}
        colors={["blue"]}
        yAxisWidth={30}
        className="h-64" />
      <p className="mt-4">You seem happiest on Fridays! Keep up the positive energy!</p>
    </div>)
  );
}

