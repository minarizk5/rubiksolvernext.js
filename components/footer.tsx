"use client"

import { Github, ExternalLink, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-900/30 backdrop-blur mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left side - Branding */}
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-pink-500 fill-current animate-pulse" /> by
            </span>
            <span className="font-semibold text-gray-200">© Mina</span>
            <span className="text-xs bg-purple-900/30 text-purple-400 px-2 py-1 rounded-full font-medium border border-purple-800/50">
              v2
            </span>
          </div>

          {/* Right side - Links */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild className="text-gray-300 hover:text-white hover:bg-gray-800">
              <a
                href="https://www.minasoliman.online/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                Portfolio
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild className="text-gray-300 hover:text-white hover:bg-gray-800">
              <a
                href="https://github.com/minarizk5"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </Button>
          </div>
        </div>

        {/* Bottom text */}
        <div className="mt-4 pt-4 border-t border-gray-800/50 text-center text-xs text-gray-500">
          <p>Rubik's Cube Solver - Solving cubes one algorithm at a time 🎲</p>
        </div>
      </div>
    </footer>
  )
}
