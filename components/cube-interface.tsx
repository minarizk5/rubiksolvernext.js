"use client"

import { useState } from "react"
import type { CubeState } from "@/app/page"
import { cn } from "@/lib/utils"

const COLORS = {
  W: { bg: "bg-white", border: "border-gray-300", name: "White", glow: "shadow-white/30" },
  Y: { bg: "bg-yellow-400", border: "border-yellow-500", name: "Yellow", glow: "shadow-yellow-400/30" },
  R: { bg: "bg-red-500", border: "border-red-600", name: "Red", glow: "shadow-red-500/30" },
  O: { bg: "bg-orange-500", border: "border-orange-600", name: "Orange", glow: "shadow-orange-500/30" },
  G: { bg: "bg-green-500", border: "border-green-600", name: "Green", glow: "shadow-green-500/30" },
  B: { bg: "bg-blue-500", border: "border-blue-600", name: "Blue", glow: "shadow-blue-500/30" },
}

const COLOR_ORDER = ["W", "Y", "R", "O", "G", "B"]

interface CubeInterfaceProps {
  cubeState: CubeState
  setCubeState: (state: CubeState) => void
}

export function CubeInterface({ cubeState, setCubeState }: CubeInterfaceProps) {
  const [activeSquare, setActiveSquare] = useState<string | null>(null)

  const handleSquareClick = (face: keyof CubeState, row: number, col: number) => {
    const currentColor = cubeState[face][row][col]
    const currentIndex = COLOR_ORDER.indexOf(currentColor)
    const nextIndex = (currentIndex + 1) % COLOR_ORDER.length
    const nextColor = COLOR_ORDER[nextIndex]

    const newCubeState = { ...cubeState }
    newCubeState[face] = cubeState[face].map((r, rIndex) =>
      r.map((c, cIndex) => (rIndex === row && cIndex === col ? nextColor : c)),
    )
    setCubeState(newCubeState)

    // Set active square for animation
    setActiveSquare(`${face}-${row}-${col}`)
    setTimeout(() => setActiveSquare(null), 300)
  }

  const renderFace = (face: keyof CubeState, label: string) => (
    <div className="flex flex-col items-center transform transition-all duration-300 hover:scale-105">
      <div className="text-xs font-semibold mb-1 text-gray-400">{label}</div>
      <div className="grid grid-cols-3 gap-1 p-2 bg-gray-900 rounded-lg border border-gray-800 shadow-lg">
        {cubeState[face].map((row, rowIndex) =>
          row.map((color, colIndex) => {
            const squareId = `${face}-${rowIndex}-${colIndex}`
            const isActive = activeSquare === squareId

            return (
              <button
                key={squareId}
                className={cn(
                  "w-8 h-8 md:w-10 md:h-10 border-2 rounded-sm transition-all",
                  "transform hover:scale-110 hover:rotate-3",
                  "shadow-lg",
                  COLORS[color as keyof typeof COLORS].bg,
                  COLORS[color as keyof typeof COLORS].border,
                  isActive ? `${COLORS[color as keyof typeof COLORS].glow} animate-pulse scale-110` : "",
                )}
                onClick={() => handleSquareClick(face, rowIndex, colIndex)}
                title={`${label} face - ${COLORS[color as keyof typeof COLORS].name}`}
              />
            )
          }),
        )}
      </div>
    </div>
  )

  return (
    <div className="flex flex-col items-center space-y-6">
      {/* Cube Layout */}
      <div className="grid grid-cols-4 gap-4 items-center justify-items-center">
        {/* Top row */}
        <div></div>
        {renderFace("U", "UP")}
        <div></div>
        <div></div>

        {/* Middle row */}
        {renderFace("L", "LEFT")}
        {renderFace("F", "FRONT")}
        {renderFace("R", "RIGHT")}
        {renderFace("B", "BACK")}

        {/* Bottom row */}
        <div></div>
        {renderFace("D", "DOWN")}
        <div></div>
        <div></div>
      </div>

      {/* Color Legend */}
      <div className="flex flex-wrap gap-3 justify-center mt-4 bg-gray-900/50 backdrop-blur-sm p-3 rounded-lg border border-gray-800">
        {COLOR_ORDER.map((color) => (
          <div key={color} className="flex items-center gap-2 text-xs bg-gray-800/80 px-2 py-1 rounded-md">
            <div
              className={cn(
                "w-4 h-4 border rounded shadow-md",
                COLORS[color as keyof typeof COLORS].bg,
                COLORS[color as keyof typeof COLORS].border,
              )}
            ></div>
            <span className="text-gray-300">{COLORS[color as keyof typeof COLORS].name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
