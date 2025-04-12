import { useState } from 'react';
import { CubeState, Face, Color } from '@/types/cube';

interface CubeInputProps {
  onSubmit: (state: CubeState) => void;
}

const initialCubeState: CubeState = {
  U: Array(9).fill('W'),
  D: Array(9).fill('Y'),
  L: Array(9).fill('O'),
  R: Array(9).fill('R'),
  F: Array(9).fill('G'),
  B: Array(9).fill('B')
};

export default function CubeInput({ onSubmit }: CubeInputProps) {
  const [cubeState, setCubeState] = useState<CubeState>(initialCubeState);

  const handleCellClick = (face: Face, index: number) => {
    const colors: Color[] = ['W', 'Y', 'R', 'O', 'B', 'G'];
    const currentColor = cubeState[face][index];
    const currentIndex = colors.indexOf(currentColor);
    const nextColor = colors[(currentIndex + 1) % colors.length];
    
    setCubeState(prev => ({
      ...prev,
      [face]: [
        ...prev[face].slice(0, index),
        nextColor,
        ...prev[face].slice(index + 1)
      ]
    }));
  };

  const handleSubmit = () => {
    onSubmit(cubeState);
  };

  const renderFace = (face: Face) => (
    <div className="face-input">
      <h3 className="text-lg font-medium text-gray-700 mb-2">{getFaceName(face)}</h3>
      <div className="grid grid-cols-3 gap-1">
        {cubeState[face].map((color, index) => (
          <button
            key={`${face}-${index}`}
            onClick={() => handleCellClick(face, index)}
            className={`
              w-12 h-12 rounded-lg transition-all duration-200
              bg-gradient-to-br
              ${getColorClasses(color)}
              hover:shadow-lg hover:scale-105
              focus:outline-none focus:ring-2 focus:ring-indigo-500
            `}
            aria-label={`${getFaceName(face)} face, position ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-4 flex justify-center">
          {renderFace('U')}
        </div>
        <div>
          {renderFace('L')}
        </div>
        <div>
          {renderFace('F')}
        </div>
        <div>
          {renderFace('R')}
        </div>
        <div>
          {renderFace('B')}
        </div>
        <div className="md:col-span-4 flex justify-center">
          {renderFace('D')}
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        <button
          onClick={handleSubmit}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Start Solving
        </button>
      </div>
    </div>
  );
}

function getFaceName(face: Face): string {
  const names: Record<Face, string> = {
    U: 'Up',
    D: 'Down',
    L: 'Left',
    R: 'Right',
    F: 'Front',
    B: 'Back'
  };
  return names[face];
}

function getColorClasses(color: string): string {
  const classes: Record<string, string> = {
    'W': 'from-white to-gray-100 border-2 border-gray-200',
    'Y': 'from-yellow-300 to-yellow-400',
    'R': 'from-red-500 to-red-600',
    'O': 'from-orange-400 to-orange-500',
    'B': 'from-blue-500 to-blue-600',
    'G': 'from-green-500 to-green-600'
  };
  return classes[color] || '';
}