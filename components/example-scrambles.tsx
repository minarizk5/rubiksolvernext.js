"use client"

import type { CubeState } from "@/app/page"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, Puzzle, CheckCircle, Dices } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface ExampleScramblesProps {
  setCubeState: (state: CubeState) => void
  setSolution: (solution: any[]) => void
  setError: (error: string | null) => void
}

const EXAMPLE_SCRAMBLES = {
  solved: {
    name: "Solved Cube",
    description: "Perfect solved state",
    icon: <CheckCircle className="w-5 h-5 text-green-400" />,
    state: {
      U: [
        ["W", "W", "W"],
        ["W", "W", "W"],
        ["W", "W", "W"],
      ],
      D: [
        ["Y", "Y", "Y"],
        ["Y", "Y", "Y"],
        ["Y", "Y", "Y"],
      ],
      F: [
        ["R", "R", "R"],
        ["R", "R", "R"],
        ["R", "R", "R"],
      ],
      B: [
        ["O", "O", "O"],
        ["O", "O", "O"],
        ["O", "O", "O"],
      ],
      L: [
        ["G", "G", "G"],
        ["G", "G", "G"],
        ["G", "G", "G"],
      ],
      R: [
        ["B", "B", "B"],
        ["B", "B", "B"],
        ["B", "B", "B"],
      ],
    },
  },
  checkerboard: {
    name: "Checkerboard",
    description: "Classic checkerboard pattern",
    icon: <Puzzle className="w-5 h-5 text-purple-400" />,
    state: {
      U: [
        ["W", "Y", "W"],
        ["Y", "W", "Y"],
        ["W", "Y", "W"],
      ],
      D: [
        ["Y", "W", "Y"],
        ["W", "Y", "W"],
        ["Y", "W", "Y"],
      ],
      F: [
        ["R", "O", "R"],
        ["O", "R", "O"],
        ["R", "O", "R"],
      ],
      B: [
        ["O", "R", "O"],
        ["R", "O", "R"],
        ["O", "R", "O"],
      ],
      L: [
        ["G", "B", "G"],
        ["B", "G", "B"],
        ["G", "B", "G"],
      ],
      R: [
        ["B", "G", "B"],
        ["G", "B", "G"],
        ["B", "G", "B"],
      ],
    },
  },
  simple: {
    name: "Simple Scramble",
    description: "Easy scramble for beginners",
    icon: <Dices className="w-5 h-5 text-cyan-400" />,
    state: {
      U: [
        ["W", "R", "W"],
        ["G", "W", "B"],
        ["W", "O", "W"],
      ],
      D: [
        ["Y", "O", "Y"],
        ["B", "Y", "G"],
        ["Y", "R", "Y"],
      ],
      F: [
        ["R", "W", "R"],
        ["Y", "R", "Y"],
        ["R", "W", "R"],
      ],
      B: [
        ["O", "Y", "O"],
        ["W", "O", "W"],
        ["O", "Y", "O"],
      ],
      L: [
        ["G", "R", "G"],
        ["O", "G", "R"],
        ["G", "B", "G"],
      ],
      R: [
        ["B", "G", "B"],
        ["R", "B", "O"],
        ["B", "G", "B"],
      ],
    },
  },
}

export function ExampleScrambles({ setCubeState, setSolution, setError }: ExampleScramblesProps) {
  const [activeScramble, setActiveScramble] = useState<string | null>(null)

  const loadExample = (key: string, scramble: any) => {
    setActiveScramble(key)
    setCubeState(scramble.state)
    setSolution([])
    setError(null)

    // Reset active state after animation
    setTimeout(() => setActiveScramble(null), 500)
  }

  return (
    <Card className="border-gray-800 bg-gray-900/70 backdrop-blur-md shadow-xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-cyan-500/10 opacity-50"></div>
      <CardHeader className="relative border-b border-gray-800">
        <CardTitle className="flex items-center gap-2 text-gray-100">
          <Sparkles className="w-5 h-5 text-amber-400" />
          Example Scrambles
        </CardTitle>
        <CardDescription className="text-gray-400">
          Try these pre-configured cube states to test the solver
        </CardDescription>
      </CardHeader>
      <CardContent className="relative pt-6">
        <div className="space-y-3">
          {Object.entries(EXAMPLE_SCRAMBLES).map(([key, scramble]) => (
            <div
              key={key}
              className={cn(
                "flex items-center justify-between p-3 rounded-lg transition-all duration-300",
                "border border-gray-800",
                activeScramble === key
                  ? "bg-gradient-to-r from-purple-900/50 to-cyan-900/50 scale-[1.02]"
                  : "bg-gray-800/50 hover:bg-gray-800/80",
              )}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-gray-900/70 border border-gray-700">{scramble.icon}</div>
                <div>
                  <div className="font-medium text-gray-200">{scramble.name}</div>
                  <div className="text-sm text-gray-400">{scramble.description}</div>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => loadExample(key, scramble)}
                className="border-gray-700 hover:bg-gray-700 text-gray-300"
              >
                Load
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
