"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mic, X } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"

export function ChatbotOverlay({ onClose }) {
  const [text, setText] = useState("")
  const [response, setResponse] = useState("")
  const [isListening, setIsListening] = useState(false)
  const [history, setHistory] = useState([])
  const chatEndRef = useRef(null)

  const speechSynth = window.speechSynthesis
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)()

  recognition.continuous = false
  recognition.interimResults = false
  recognition.lang = "en-US"

  recognition.onresult = async (event) => {
    stopSpeaking()
    const transcript = event.results[0][0].transcript
    setText(transcript)

    const aiResponse = await getGeminiResponse(transcript)
    setResponse(aiResponse)

    setHistory((prev) => [...prev, { user: transcript, ai: aiResponse }])
    speakText(aiResponse)
  }

  recognition.onend = () => setIsListening(false)

  const startListening = () => {
    stopSpeaking()
    setIsListening(true)
    recognition.start()
  }

  const getGeminiResponse = async (question) => {
    try {
      const apiKey = "AIzaSyAtuAlUP3HgsubFnfa1w6I1KC24e79UbOc"
      const response = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" + apiKey,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `You are a mental health support assistant. Keep responses short (max 1-2 sentences). Give calm and supportive answers. Here's the conversation history: ${history
                      .map((h) => `User: ${h.user} AI: ${h.ai}`)
                      .join(" \n ")}. Now, the user asked: "${question}".`,
                  },
                ],
              },
            ],
          }),
        },
      )
      const data = await response.json()
      return data.candidates?.[0]?.content?.parts?.[0]?.text || "I'm here for you. Take a deep breath."
    } catch (error) {
      console.error("Error fetching Gemini response:", error)
      return "I'm here for you. Stay strong."
    }
  }

  const speakText = (textToSpeak) => {
    if (!textToSpeak.trim()) return
    stopSpeaking()
    const speech = new SpeechSynthesisUtterance(textToSpeak)
    speech.lang = "en-US"
    speech.rate = 0.9
    speechSynth.speak(speech)
  }

  const stopSpeaking = () => {
    if (speechSynth.speaking) {
      speechSynth.cancel()
    }
  }

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [chatEndRef])

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl h-[80vh] flex flex-col">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>🧘 Talk to SoulSync</CardTitle>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col">
          <ScrollArea className="flex-grow mb-4 p-4 border rounded-md">
            {history.map((entry, index) => (
              <div key={index} className="mb-4">
                <p className="bg-blue-100 p-2 rounded-lg inline-block">
                  <strong>You:</strong> {entry.user}
                </p>
                <p className="bg-green-100 p-2 rounded-lg inline-block mt-2">
                  <strong>SoulSync:</strong> {entry.ai}
                </p>
              </div>
            ))}
            <div ref={chatEndRef} />
          </ScrollArea>
          <div className="flex items-center space-x-2">
            <Button
              onClick={startListening}
              disabled={isListening}
              className={`flex-grow ${isListening ? "bg-red-500" : "bg-blue-500"} hover:bg-blue-600 text-white`}
            >
              <Mic className="mr-2 h-4 w-4" />
              {isListening ? "Listening..." : "Start Speaking"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

