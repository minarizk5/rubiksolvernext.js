"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shuffle, Zap, RotateCcw, Lightbulb, Sparkles } from "lucide-react"
import { CubeInterface } from "@/components/cube-interface"
import { SolutionDisplay } from "@/components/solution-display"
import { ExampleScrambles } from "@/components/example-scrambles"
import { Footer } from "@/components/footer"
import { cn } from "@/lib/utils"
import { Cube3D } from "@/components/cube-3d"
import { ViewToggle } from "@/components/view-toggle"

export type CubeState = {
  U: string[][] // Up (White)
  D: string[][] // Down (Yellow)
  F: string[][] // Front (Red)
  B: string[][] // Back (Orange)
  L: string[][] // Left (Green)
  R: string[][] // Right (Blue)
}

export type SolutionStep = {
  move: string
  description: string
  algorithm?: string
  moveCount?: number
}

const SOLVED_CUBE: CubeState = {
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
}

export default function RubiksCubeSolver() {
  const [cubeState, setCubeState] = useState<CubeState>(SOLVED_CUBE)
  const [solution, setSolution] = useState<SolutionStep[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [animateBackground, setAnimateBackground] = useState(false)
  const [view, setView] = useState<"2d" | "3d">("3d") // Default to 3D for the wow factor

  useEffect(() => {
    // Add entrance animation
    const timer = setTimeout(() => {
      setAnimateBackground(true)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  const handleSolve = async () => {
    setIsLoading(true)
    setError(null)
    setSolution([])

    // Add timeout protection
    const timeoutId = setTimeout(() => {
      setIsLoading(false)
      setError("Solving is taking too long. Please try a simpler cube configuration.")
    }, 15000) // 15 second timeout

    try {
      const response = await fetch("/api/solve", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cubeState }),
      })

      clearTimeout(timeoutId)

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to solve cube")
      }

      const data = await response.json()

      // Add algorithm info to solution steps
      const solutionWithAlgorithm = data.solution.map((step) => ({
        ...step,
        algorithm: data.algorithm,
        moveCount: data.moveCount,
      }))

      setSolution(solutionWithAlgorithm)
    } catch (err) {
      clearTimeout(timeoutId)
      setError(err.message || "Failed to solve the cube. Please check your cube configuration.")
      console.error("Solve error:", err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleReset = () => {
    setCubeState(SOLVED_CUBE)
    setSolution([])
    setError(null)
  }

  const handleRandomScramble = () => {
    const colors = ["W", "Y", "R", "O", "G", "B"]
    const scrambledCube: CubeState = {
      U: [],
      D: [],
      F: [],
      B: [],
      L: [],
      R: [],
    }

    Object.keys(scrambledCube).forEach((face) => {
      scrambledCube[face as keyof CubeState] = Array(3)
        .fill(null)
        .map(() =>
          Array(3)
            .fill(null)
            .map(() => colors[Math.floor(Math.random() * colors.length)]),
        )
    })

    setCubeState(scrambledCube)
    setSolution([])
    setError(null)
  }

  return (
    <div
      className={cn(
        "min-h-screen bg-black transition-all duration-1000 ease-in-out overflow-hidden",
        animateBackground ? "bg-gradient-to-br from-gray-900 via-purple-950 to-gray-950" : "",
      )}
    >
      {/* Animated background elements */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-[80px] animate-blob"></div>
          <div className="absolute top-3/4 left-1/3 w-96 h-96 bg-cyan-600 rounded-full mix-blend-screen filter blur-[80px] animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-600 rounded-full mix-blend-screen filter blur-[80px] animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto p-4">
        {/* Header */}
        <div className="text-center mb-12 mt-8">
          <div className="inline-block relative">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4 tracking-tight">
              Rubik's Cube Solver
            </h1>
            <div className="absolute -top-6 -right-6">
              <Badge
                variant="outline"
                className="bg-black/50 backdrop-blur-sm border-purple-500 text-purple-300 px-3 py-1"
              >
                <Sparkles className="w-3 h-3 mr-1" />
                v2
              </Badge>
            </div>
          </div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-4 opacity-90">
            Configure your cube state using the visual interface below, then let our AI solve it step by step!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Cube Interface */}
          <div className="space-y-6 transform transition-all duration-500 hover:scale-[1.01]">
            <Card className="border-gray-800 bg-gray-900/70 backdrop-blur-md shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 opacity-50"></div>
              <CardHeader className="relative border-b border-gray-800">
                <CardTitle className="flex items-center gap-2 text-gray-100">
                  <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-blue-500 rounded shadow-glow-sm"></div>
                  Cube Configuration
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Click on any square to change its color. Set up your cube exactly as it appears in real life.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative pt-6">
                <div className="flex justify-center mb-6">
                  <ViewToggle view={view} onViewChange={setView} />
                </div>

                {view === "2d" ? (
                  <CubeInterface cubeState={cubeState} setCubeState={setCubeState} />
                ) : (
                  <div className="space-y-4">
                    <Cube3D cubeState={cubeState} setCubeState={setCubeState} />
                    <div className="text-center text-sm text-gray-400 bg-gray-900/30 backdrop-blur-sm p-3 rounded-lg border border-gray-800">
                      <p className="flex items-center justify-center gap-2">
                        <span className="text-purple-400">🎮</span>
                        Interactive 3D Cube - Click any square to change its color!
                        <span className="text-cyan-400">✨</span>
                      </p>
                      <p className="text-xs mt-1 text-gray-500">
                        Drag to rotate • Scroll to zoom • Auto-rotates when idle
                      </p>
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mt-8">
                  <Button
                    onClick={handleSolve}
                    disabled={isLoading}
                    className="flex-1 min-w-[120px] bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white shadow-glow-md border-0"
                  >
                    <Zap className="w-4 h-4 mr-2" />
                    {isLoading ? "Solving..." : "Solve Cube"}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleReset}
                    className="border-gray-700 hover:bg-gray-800 text-gray-300"
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Reset
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleRandomScramble}
                    className="border-gray-700 hover:bg-gray-800 text-gray-300"
                  >
                    <Shuffle className="w-4 h-4 mr-2" />
                    Random
                  </Button>
                </div>
              </CardContent>
            </Card>

            <ExampleScrambles setCubeState={setCubeState} setSolution={setSolution} setError={setError} />
          </div>

          {/* Right Column - Solution */}
          <div className="space-y-6 transform transition-all duration-500 hover:scale-[1.01]">
            <Card className="border-gray-800 bg-gray-900/70 backdrop-blur-md shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-50"></div>
              <CardHeader className="relative border-b border-gray-800">
                <CardTitle className="flex items-center gap-2 text-gray-100">
                  <Lightbulb className="w-5 h-5 text-amber-400" />
                  Solution Steps
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Follow these moves to solve your cube. Each step is explained clearly.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative pt-6">
                {error && (
                  <div className="bg-red-900/30 border border-red-800 rounded-lg p-4 mb-4">
                    <p className="text-red-300">{error}</p>
                  </div>
                )}

                {isLoading && (
                  <div className="flex items-center justify-center py-12">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full border-2 border-t-purple-500 border-r-cyan-500 border-b-pink-500 border-l-transparent animate-spin"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full border-2 border-t-transparent border-r-purple-500 border-b-cyan-500 border-l-pink-500 animate-spin animation-delay-500"></div>
                      </div>
                    </div>
                    <span className="ml-3 text-gray-400">Analyzing cube...</span>
                  </div>
                )}

                {solution.length > 0 && <SolutionDisplay solution={solution} />}

                {!isLoading && solution.length === 0 && !error && (
                  <div className="text-center py-12 text-gray-500">
                    <Lightbulb className="w-16 h-16 mx-auto mb-4 opacity-30 text-amber-500/50" />
                    <p>Configure your cube and click "Solve Cube" to see the solution steps.</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Notation Guide */}
            <Card className="border-gray-800 bg-gray-900/70 backdrop-blur-md shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-cyan-500/10 opacity-50"></div>
              <CardHeader className="relative border-b border-gray-800">
                <CardTitle className="text-gray-100">Notation Guide</CardTitle>
              </CardHeader>
              <CardContent className="relative pt-6">
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex justify-between items-center">
                    <Badge variant="outline" className="border-cyan-800 bg-cyan-900/30 text-cyan-400">
                      R
                    </Badge>
                    <span className="text-gray-300">Right clockwise</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <Badge variant="outline" className="border-cyan-800 bg-cyan-900/30 text-cyan-400">
                      R'
                    </Badge>
                    <span className="text-gray-300">Right counter-clockwise</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <Badge variant="outline" className="border-purple-800 bg-purple-900/30 text-purple-400">
                      U
                    </Badge>
                    <span className="text-gray-300">Up clockwise</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <Badge variant="outline" className="border-purple-800 bg-purple-900/30 text-purple-400">
                      U'
                    </Badge>
                    <span className="text-gray-300">Up counter-clockwise</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <Badge variant="outline" className="border-pink-800 bg-pink-900/30 text-pink-400">
                      F
                    </Badge>
                    <span className="text-gray-300">Front clockwise</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <Badge variant="outline" className="border-pink-800 bg-pink-900/30 text-pink-400">
                      F'
                    </Badge>
                    <span className="text-gray-300">Front counter-clockwise</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
