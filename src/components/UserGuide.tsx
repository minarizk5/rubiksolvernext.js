import React, { useState } from 'react';

// Add props interface
interface UserGuideProps {
  onTestSolve: () => void;
}

export default function UserGuide({ onTestSolve }: UserGuideProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-black p-5 rounded-xl border border-gray-800 mb-8">
      <button 
        onClick={() => setIsExpanded(prev => !prev)}
        className="w-full flex items-center justify-between text-white font-semibold text-lg py-2"
      >
        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 16v-4"/>
            <path d="M12 8h.01"/>
          </svg>
          How to Use This Solver
        </div>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className={`transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}
        >
          <path d="m6 9 6 6 6-6"/>
        </svg>
      </button>
      
      {isExpanded && (
        <div className="mt-4 text-gray-300 space-y-4 animate-fade-down animate-duration-300">
          <div>
            <h3 className="text-primary font-medium mb-2">Input Your Cube State</h3>
            <p className="text-sm">
              Click on the cube faces and use the color selector to match your physical cube. 
              Make sure to enter the colors exactly as they appear on your cube.
            </p>
          </div>
          
          <div>
            <h3 className="text-primary font-medium mb-2">Orientation Matters</h3>
            <p className="text-sm">
              When entering your cube, hold it with white (or the lightest color) on top and 
              green (or your front color) facing you. Each center piece defines its face color.
            </p>
            <div className="grid grid-cols-3 gap-3 my-3 bg-gray-900 p-3 rounded-md">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-cube-white mb-1 rounded-md"></div>
                <span className="text-xs">Top (U)</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-cube-yellow mb-1 rounded-md"></div>
                <span className="text-xs">Bottom (D)</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-cube-green mb-1 rounded-md"></div>
                <span className="text-xs">Front (F)</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-cube-blue mb-1 rounded-md"></div>
                <span className="text-xs">Back (B)</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-cube-orange mb-1 rounded-md"></div>
                <span className="text-xs">Left (L)</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-cube-red mb-1 rounded-md"></div>
                <span className="text-xs">Right (R)</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-primary font-medium mb-2">Common Errors</h3>
            <ul className="text-sm list-disc list-inside ml-1 space-y-1.5">
              <li>
                <strong>Incorrect Color Count</strong>: Each color must appear exactly 9 times
              </li>
              <li>
                <strong>Center Pieces</strong>: All 6 center pieces must be different colors
              </li>
              <li>
                <strong>Unsolvable State</strong>: Some combinations of colors are physically impossible
              </li>
              <li>
                <strong>Inconsistent Edges/Corners</strong>: Each edge or corner piece should be consistent with a real cube
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-primary font-medium mb-2">Reading the Solution</h3>
            <p className="text-sm">
              Once solved, the algorithm provides a sequence of moves using standard notation:
            </p>
            <div className="bg-gray-900 p-3 rounded-md text-sm mt-2 overflow-x-auto">
              <code>
                <span className="text-primary">U</span>: Top face clockwise • 
                <span className="text-primary"> U&apos;</span>: Top face counter-clockwise • 
                <span className="text-primary"> U2</span>: Top face twice
                <br />
                <span className="text-primary">R</span>: Right face clockwise • 
                <span className="text-primary"> F</span>: Front face clockwise • 
                <span className="text-primary"> D</span>: Bottom face clockwise
                <br />
                <span className="text-primary">L</span>: Left face clockwise • 
                <span className="text-primary"> B</span>: Back face clockwise
              </code>
            </div>
          </div>
          
          <div>
            <h3 className="text-primary font-medium mb-2">Tips for Success</h3>
            <ul className="text-sm list-disc list-inside ml-1 space-y-1.5">
              <li>Double-check your input before submitting</li>
              <li>Keep your cube in the same orientation while entering colors</li>
              <li>If you're getting errors, try resetting and re-entering your cube state</li>
              <li>This solver uses the powerful Kociemba algorithm and can solve any valid cube state</li>
            </ul>
          </div>

          {/* Add Test Solve Button */}
          <div className="pt-2 border-t border-gray-700 mt-4">
            <button
              onClick={onTestSolve}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 mt-2 rounded-lg text-sm font-medium transition-all bg-secondary hover:bg-secondary/80 text-white"
              aria-label="Run a test solve with a predefined scramble"
            >
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                 <path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/>
               </svg>
               Run Test Solve
            </button>
             <p className="text-xs text-gray-500 text-center mt-2">
               See how the solver handles a sample scramble.
             </p>
          </div>

        </div>
      )}
    </div>
  );
} 