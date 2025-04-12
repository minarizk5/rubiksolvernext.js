import { useState } from 'react';
import { Move } from '@/types/cube';

interface SolutionDisplayProps {
  moves: Move[];
}

export default function SolutionDisplay({ moves }: SolutionDisplayProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const progress = ((currentStep + 1) / moves.length) * 100;

  const handlePrevStep = () => {
    setCurrentStep(prev => Math.max(0, prev - 1));
  };

  const handleNextStep = () => {
    setCurrentStep(prev => Math.min(moves.length - 1, prev + 1));
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Solution Steps</h2>
      
      <div className="relative h-2 bg-gray-100 rounded-full mb-6">
        <div 
          className="absolute h-full bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex justify-between items-center mb-6">
        <button
          onClick={handlePrevStep}
          disabled={currentStep === 0}
          className={`
            px-4 py-2 rounded-lg flex items-center gap-2 transition-colors
            ${currentStep === 0 
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
              : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
            }
          `}
        >
          ←
          Previous
        </button>

        <span className="text-gray-600 font-medium">
          Step {currentStep + 1} of {moves.length}
        </span>

        <button
          onClick={handleNextStep}
          disabled={currentStep === moves.length - 1}
          className={`
            px-4 py-2 rounded-lg flex items-center gap-2 transition-colors
            ${currentStep === moves.length - 1
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
            }
          `}
        >
          Next
          →
        </button>
      </div>

      <div className="bg-gray-50 rounded-lg p-6">
        <div className="font-mono text-lg text-center">
          {moves[currentStep]}
        </div>
        <div className="mt-4 text-gray-600 text-center">
          {getStepDescription(moves[currentStep])}
        </div>
      </div>

      <div className="mt-6 p-4 bg-gray-50 rounded-lg overflow-x-auto">
        <div className="flex gap-2 justify-center flex-wrap">
          {moves.map((move, index) => (
            <span
              key={index}
              className={`
                px-3 py-1 rounded-md font-mono text-sm
                ${index === currentStep
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'bg-gray-100 text-gray-600'
                }
              `}
            >
              {move}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function getStepDescription(move: Move): string {
  const descriptions: Record<Move, string> = {
    'U': 'Rotate the upper face clockwise',
    'U\'': 'Rotate the upper face counter-clockwise',
    'U2': 'Rotate the upper face twice',
    'D': 'Rotate the bottom face clockwise',
    'D\'': 'Rotate the bottom face counter-clockwise',
    'D2': 'Rotate the bottom face twice',
    'L': 'Rotate the left face clockwise',
    'L\'': 'Rotate the left face counter-clockwise',
    'L2': 'Rotate the left face twice',
    'R': 'Rotate the right face clockwise',
    'R\'': 'Rotate the right face counter-clockwise',
    'R2': 'Rotate the right face twice',
    'F': 'Rotate the front face clockwise',
    'F\'': 'Rotate the front face counter-clockwise',
    'F2': 'Rotate the front face twice',
    'B': 'Rotate the back face clockwise',
    'B\'': 'Rotate the back face counter-clockwise',
    'B2': 'Rotate the back face twice'
  };
  return descriptions[move];
}