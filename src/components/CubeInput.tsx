import { useState, useEffect, useCallback } from 'react';
import { CubeState, Face, Color } from '@/types/cube';
import ColorPicker from './ColorPicker';
import { CubeSolver } from '@/utils/cubeSolver';

interface CubeInputProps {
  initialDisplayState: CubeState;
  onSubmit: (state: CubeState) => void;
  onResetRequest: () => void;
}

export default function CubeInput({ initialDisplayState, onSubmit, onResetRequest }: CubeInputProps) {
  const [cubeState, setCubeState] = useState<CubeState>(initialDisplayState);
  const [selectedColor, setSelectedColor] = useState<Color>('W');
  const [focusedCell, setFocusedCell] = useState<{face: Face, index: number} | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setCubeState(initialDisplayState);
    setError(null);
  }, [initialDisplayState]);

  const handleCellClick = useCallback((face: Face, index: number) => {
    setCubeState(prev => ({
      ...prev,
      [face]: [
        ...prev[face].slice(0, index),
        selectedColor,
        ...prev[face].slice(index + 1)
      ]
    }));
    setError(null);
  }, [selectedColor]);

  const handleColorSelect = (color: Color) => {
    setSelectedColor(color);
  };

  const handleSubmit = () => {
    try {
      if (!CubeSolver.isValidState(cubeState)) {
        setError("Invalid cube state. Check console for details (e.g., color counts, solvability).");
        return;
      }
      
      onSubmit(cubeState);
      setError(null);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An unknown error occurred";
      console.error("Error submitting cube:", errorMessage);
      setError(errorMessage);
    }
  };

  const handleReset = () => {
    onResetRequest();
    setSelectedColor('W');
    setError(null);
  };

  const handleKeyNavigation = useCallback((e: KeyboardEvent) => {
    if (!focusedCell) return;

    const { face, index } = focusedCell;
    const newFace = face;
    let newIndex = index;

    switch (e.key) {
      case 'ArrowUp':
        newIndex = Math.max(0, index - 3);
        break;
      case 'ArrowDown':
        newIndex = Math.min(8, index + 3);
        break;
      case 'ArrowLeft':
        newIndex = index % 3 === 0 ? index : index - 1;
        break;
      case 'ArrowRight':
        newIndex = index % 3 === 2 ? index : index + 1;
        break;
      case ' ':
      case 'Enter':
        handleCellClick(face, index);
        break;
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
        const colors: Color[] = ['W', 'Y', 'R', 'O', 'B', 'G'];
        setSelectedColor(colors[parseInt(e.key) - 1]);
        break;
      default:
        return;
    }

    setFocusedCell({ face: newFace, index: newIndex });
    e.preventDefault();
  }, [focusedCell, handleCellClick]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyNavigation);
    return () => window.removeEventListener('keydown', handleKeyNavigation);
  }, [handleKeyNavigation]);

  const renderFace = (face: Face) => (
    <div className="face-input text-center">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-base font-medium text-foreground flex items-center gap-1.5">
          <div className={`w-4 h-4 rounded-full ${getColorClasses(cubeState[face][4])}`}></div>
          {getFaceName(face)}
        </h3>
        <span className="text-xs bg-secondary px-2 py-0.5 rounded-md text-secondary-foreground">
          {getFacePosition(face)}
        </span>
      </div>
      <div className="grid grid-cols-3 gap-1.5" role="grid">
        {cubeState[face].map((color, index) => (
          <button
            key={`${face}-${index}`}
            onClick={() => handleCellClick(face, index)}
            onFocus={() => setFocusedCell({ face, index })}
            onBlur={() => setFocusedCell(null)}
            className={`
              aspect-square w-12 h-12 sm:w-16 sm:h-16 rounded-md 
              transition-all duration-200 border-2 border-gray-800
              ${getColorClasses(color)}
              hover:scale-105 hover:shadow-md focus:outline-none
              ${index === 4 ? 'border-white/30' : ''}
              ${focusedCell?.face === face && focusedCell?.index === index 
                ? 'ring-2 ring-primary ring-offset-2 ring-offset-background scale-105' 
                : ''}
            `}
            aria-label={`${getFaceName(face)} face, position ${index + 1}, current color: ${color}`}
            tabIndex={0}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <ColorPicker selectedColor={selectedColor} onColorSelect={handleColorSelect} />
      
      <div className="bg-black p-5 rounded-xl border border-gray-800 transition-all duration-300">
        {error && (
          <div className="mb-4 p-3 bg-red-500/20 text-red-400 rounded-lg flex items-center gap-2 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
              <path d="M12 9v4"/>
              <path d="M12 17h.01"/>
            </svg>
            <p>{error}</p>
          </div>
        )}
        
        <div className="grid gap-6">
          <div className="flex justify-center">
            {renderFace('U')}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 place-items-center">
            {renderFace('L')}
            {renderFace('F')}
            {renderFace('R')}
            {renderFace('B')}
          </div>
          
          <div className="flex justify-center">
            {renderFace('D')}
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={handleReset}
            type="button"
            className="px-6 py-3 bg-secondary hover:bg-secondary/80 text-white rounded-lg 
                     transition-all duration-200 text-base font-medium
                     flex items-center justify-center gap-2"
            aria-label="Reset cube to default state"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
              <path d="M3 3v5h5"/>
            </svg>
            Reset
          </button>
          <button
            onClick={handleSubmit}
            type="button"
            className="px-6 py-3 bg-primary text-white rounded-lg 
                     transition-all duration-200 text-base font-medium
                     flex items-center justify-center gap-2"
            aria-label="Solve the cube with current configuration"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>
            </svg>
            Solve Cube
          </button>
        </div>
      </div>
    </div>
  );
}

function getFaceName(face: Face): string {
  const faceNames = {
    U: 'Top',
    D: 'Bottom',
    L: 'Left',
    R: 'Right',
    F: 'Front',
    B: 'Back'
  };
  return faceNames[face];
}

function getFacePosition(face: Face): string {
  const facePositions = {
    U: 'Top',
    D: 'Bottom',
    L: 'Left',
    R: 'Right',
    F: 'Front',
    B: 'Back'
  };
  return facePositions[face];
}

function getColorClasses(color: string): string {
  const colorClasses = {
    'W': 'bg-cube-white',
    'Y': 'bg-cube-yellow',
    'R': 'bg-cube-red',
    'O': 'bg-cube-orange',
    'B': 'bg-cube-blue',
    'G': 'bg-cube-green'
  };
  
  return colorClasses[color as keyof typeof colorClasses] || '';
}