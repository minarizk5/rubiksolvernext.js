'use client';

import { useState } from 'react';
import CubeInput from '../components/CubeInput';
import ColorPicker from '../components/ColorPicker';
import SolutionDisplay from '../components/SolutionDisplay';
import { CubeState, Color, Move, Face } from '../types/cube';
import { solveCube } from '../utils/cubeSolver';

export default function Home() {
  const [selectedColor, setSelectedColor] = useState<Color>('W');
  const [cubeState, setCubeState] = useState<CubeState>({
    U: Array(9).fill('W'),  // White on top
    D: Array(9).fill('Y'),  // Yellow on bottom
    F: Array(9).fill('G'),  // Green on front
    B: Array(9).fill('B'),  // Blue on back
    L: Array(9).fill('O'),  // Orange on left
    R: Array(9).fill('R')   // Red on right
  });
  const [solution, setSolution] = useState<Move[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleColorSelect = (color: Color) => {
    setSelectedColor(color);
  };

  const handleCellClick = (face: Face, index: number) => {
    setCubeState((prev: CubeState) => ({
      ...prev,
      [face]: prev[face].map((c: Color, i: number) => i === index ? selectedColor : c)
    }));
  };

  const handleSolve = async () => {
    try {
      setError(null);
      const solution = solveCube(cubeState);
      setSolution(solution);
    } catch (error) {
      console.error('Error solving cube:', error);
      setError(error instanceof Error ? error.message : 'An error occurred while solving the cube');
    }
  };

  const handleReset = () => {
    setCubeState({
      U: Array(9).fill('W'),
      D: Array(9).fill('Y'),
      F: Array(9).fill('G'),
      B: Array(9).fill('B'),
      L: Array(9).fill('O'),
      R: Array(9).fill('R')
    });
    setSolution([]);
    setError(null);
  };

  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-600 to-indigo-800 bg-clip-text text-transparent">
          Rubik&apos;s Cube Solver
        </h1>
        
        <div className="space-y-8">
          <ColorPicker 
            selectedColor={selectedColor} 
            onColorSelect={handleColorSelect} 
          />
          
          <CubeInput 
            cubeState={cubeState} 
            onCellClick={handleCellClick} 
          />
          
          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              </div>
            </div>
          )}
          
          <div className="flex justify-center gap-4">
            <button
              onClick={handleReset}
              className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors flex items-center gap-2"
            >
              Reset Cube
            </button>
            <button
              onClick={handleSolve}
              className="px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors flex items-center gap-2"
            >
              Solve Cube
            </button>
          </div>

          {solution.length > 0 && (
            <SolutionDisplay moves={solution} />
          )}
        </div>
      </div>
    </main>
  );
}
