"use client"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Box, Grid3X3 } from "lucide-react"
import { cn } from "@/lib/utils"

interface ViewToggleProps {
  view: "2d" | "3d"
  onViewChange: (view: "2d" | "3d") => void
}

export function ViewToggle({ view, onViewChange }: ViewToggleProps) {
  return (
    <div className="flex items-center gap-2 bg-gray-900/50 backdrop-blur-sm p-1 rounded-lg border border-gray-800">
      <Button
        variant={view === "2d" ? "default" : "ghost"}
        size="sm"
        onClick={() => onViewChange("2d")}
        className={cn(
          "flex items-center gap-2 transition-all",
          view === "2d"
            ? "bg-gradient-to-r from-cyan-600 to-purple-600 text-white shadow-glow-sm"
            : "text-gray-400 hover:text-gray-200 hover:bg-gray-800",
        )}
      >
        <Grid3X3 className="w-4 h-4" />
        2D View
      </Button>
      <Button
        variant={view === "3d" ? "default" : "ghost"}
        size="sm"
        onClick={() => onViewChange("3d")}
        className={cn(
          "flex items-center gap-2 transition-all",
          view === "3d"
            ? "bg-gradient-to-r from-cyan-600 to-purple-600 text-white shadow-glow-sm"
            : "text-gray-400 hover:text-gray-200 hover:bg-gray-800",
        )}
      >
        <Box className="w-4 h-4" />
        3D View
        <Badge variant="outline" className="bg-purple-900/30 border-purple-800 text-purple-400 text-xs">
          NEW
        </Badge>
      </Button>
    </div>
  )
}
