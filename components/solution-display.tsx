"use client"

import { useState, useEffect } from "react"
import type { SolutionStep } from "@/app/page"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import { cn } from "@/lib/utils"

interface SolutionDisplayProps {
  solution: (SolutionStep & { algorithm?: string })[]
}

export function SolutionDisplay({ solution }: SolutionDisplayProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [playbackSpeed, setPlaybackSpeed] = useState(1500) // ms between steps
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null

    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev < solution.length - 1) {
            return prev + 1
          } else {
            setIsPlaying(false)
            return prev
          }
        })
      }, playbackSpeed)
    }

    return () => {
      if (timer) clearInterval(timer)
    }
  }, [isPlaying, playbackSpeed, solution.length])

  const nextStep = () => {
    if (currentStep < solution.length - 1) {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentStep(currentStep + 1)
        setIsAnimating(false)
      }, 150)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentStep(currentStep - 1)
        setIsAnimating(false)
      }, 150)
    }
  }

  const togglePlayback = () => {
    setIsPlaying(!isPlaying)
  }

  if (solution.length === 0) return null

  const progressPercentage = ((currentStep + 1) / solution.length) * 100

  return (
    <div className="space-y-5">
      {/* Progress */}
      <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
        <span>
          Step {currentStep + 1} of {solution.length}
        </span>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="bg-gray-800/70 border-gray-700 text-cyan-400">
            {Math.round(progressPercentage)}% Complete
          </Badge>
        </div>
      </div>

      {/* Algorithm info */}
      <div className="text-center mb-4">
        <Badge variant="outline" className="bg-purple-900/30 border-purple-800 text-purple-400">
          Algorithm: {solution.algorithm || "Layer-by-Layer"}
        </Badge>
        <span className="text-xs text-gray-500 ml-2">{solution.length} moves</span>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
        <div
          className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full transition-all duration-500"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>

      {/* Current Step */}
      <div
        className={cn(
          "bg-gray-800/50 border border-gray-700 rounded-lg p-5 transition-all duration-300",
          isAnimating ? "opacity-0 transform scale-95" : "opacity-100 transform scale-100",
          "shadow-lg backdrop-blur-sm",
        )}
      >
        <div className="flex items-center gap-3 mb-3">
          <Badge className="text-lg px-4 py-1.5 bg-gradient-to-r from-cyan-500 to-purple-500 border-0 shadow-glow-sm">
            {solution[currentStep].move}
          </Badge>
          <span className="font-medium text-gray-200">Move {currentStep + 1}</span>
        </div>
        <p className="text-gray-300">{solution[currentStep].description}</p>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-3 my-4">
        <Button
          variant="outline"
          size="sm"
          onClick={prevStep}
          disabled={currentStep === 0}
          className="border-gray-700 bg-gray-800/50 hover:bg-gray-700 text-gray-300 disabled:opacity-30"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={togglePlayback}
          className={cn(
            "border-gray-700 bg-gray-800/50 hover:bg-gray-700 text-gray-300 min-w-[80px]",
            isPlaying ? "border-purple-700 bg-purple-900/30 text-purple-300" : "",
          )}
        >
          {isPlaying ? (
            <>
              <Pause className="w-4 h-4 mr-1" /> Pause
            </>
          ) : (
            <>
              <Play className="w-4 h-4 mr-1" /> Play
            </>
          )}
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={nextStep}
          disabled={currentStep === solution.length - 1}
          className="border-gray-700 bg-gray-800/50 hover:bg-gray-700 text-gray-300 disabled:opacity-30"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      {/* All Steps Overview */}
      <div className="border-t border-gray-800 pt-4">
        <h4 className="font-medium mb-3 text-gray-300">Complete Solution:</h4>
        <div className="flex flex-wrap gap-1.5">
          {solution.map((step, index) => (
            <button
              key={index}
              onClick={() => setCurrentStep(index)}
              className={cn(
                "px-2.5 py-1.5 text-sm rounded transition-all duration-300",
                index === currentStep
                  ? "bg-gradient-to-r from-cyan-600 to-purple-600 text-white shadow-glow-sm"
                  : index < currentStep
                    ? "bg-gray-800 text-cyan-400 border border-cyan-900/50"
                    : "bg-gray-800 text-gray-400 border border-gray-700",
              )}
            >
              {step.move}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
