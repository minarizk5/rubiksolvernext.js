import { useState, useEffect, useCallback } from 'react';
import { CubeState, Face, Color } from '@/types/cube';
import ColorPicker from './ColorPicker';
import { Tooltip } from 'react-tooltip';

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
  const [selectedColor, setSelectedColor] = useState<Color>('W');
  const [focusedCell, setFocusedCell] = useState<{face: Face, index: number} | null>(null);
  const [isValid, setIsValid] = useState(true);

  const handleCellClick = (face: Face, index: number) => {
    setCubeState(prev => ({
      ...prev,
      [face]: [
        ...prev[face].slice(0, index),
        selectedColor,
        ...prev[face].slice(index + 1)
      ]
    }));
  };

  const handleColorSelect = (color: Color) => {
    setSelectedColor(color);
  };

  const handleSubmit = () => {
    onSubmit(cubeState);
  };

  const handleReset = () => {
    setCubeState(initialCubeState);
    setSelectedColor('W');
  };

  const handleKeyNavigation = useCallback((e: KeyboardEvent) => {
    if (!focusedCell) return;

    const { face, index } = focusedCell;
    let newFace = face;
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
  }, [focusedCell]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyNavigation);
    return () => window.removeEventListener('keydown', handleKeyNavigation);
  }, [handleKeyNavigation]);

  useEffect(() => {
    const isValidState = 
      cubeState.U[4] === 'W' &&
      cubeState.D[4] === 'Y' &&
      cubeState.F[4] === 'G' &&
      cubeState.B[4] === 'B' &&
      cubeState.L[4] === 'O' &&
      cubeState.R[4] === 'R';
    
    setIsValid(isValidState);
  }, [cubeState]);

  const renderFace = (face: Face) => (
    <div className="face-input">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-medium text-foreground">{getFaceName(face)}</h3>
        <span className="text-sm text-secondary-foreground px-2 py-1 bg-accent rounded-md">
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
              w-14 h-14 rounded-lg transition-all duration-200
              bg-gradient-to-br relative
              ${getColorClasses(color)}
              hover:shadow-lg hover:scale-105
              focus:outline-none focus:ring-2 focus:ring-primary
              ${color === selectedColor ? 'ring-2 ring-primary ring-offset-2' : ''}
              ${focusedCell?.face === face && focusedCell?.index === index 
                ? 'ring-4 ring-primary ring-offset-4' 
                : ''}
              transform perspective-500 hover:rotate-3
            `}
            aria-label={`${getFaceName(face)} face, position ${index + 1}, current color: ${color}`}
            data-tooltip-id="cube-cell-tooltip"
            data-tooltip-content={`Position ${index + 1} (${getFacePosition(face)})`}
            tabIndex={0}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      <ColorPicker selectedColor={selectedColor} onColorSelect={handleColorSelect} />
      
      <div className={`
        bg-secondary p-6 rounded-2xl shadow-lg border transition-all duration-300
        ${isValid ? 'border-border hover:shadow-xl' : 'border-red-500'}
      `}>
        {!isValid && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg flex items-center gap-2">
            <span role="img" aria-label="Warning">⚠️</span>
            <p>Center pieces must match standard configuration</p>
          </div>
        )}
        
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

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={handleReset}
            className="px-6 py-3 bg-accent text-accent-foreground rounded-lg 
                     hover:bg-accent/80 transition-all duration-300 font-medium
                     flex items-center justify-center gap-2
                     hover:shadow-md active:scale-95"
          >
            <span role="img" aria-label="Reset">🔄</span>
            Reset Cube
          </button>
          <button
            onClick={handleSubmit}
            disabled={!isValid}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg 
                     transition-all duration-300 font-medium
                     flex items-center justify-center gap-2
                     hover:shadow-md active:scale-95
                     disabled:opacity-50 disabled:cursor-not-allowed
                     disabled:hover:shadow-none disabled:active:scale-100"
          >
            <span role="img" aria-label="Start">▶️</span>
            Start Solving
          </button>
        </div>

        <div className="mt-6 p-4 bg-accent/30 rounded-lg">
          <h4 className="font-medium text-foreground mb-2">Keyboard Controls:</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-secondary-foreground">
            <li>⬆️ ⬇️ ⬅️ ➡️ - Navigate cells</li>
            <li>Space/Enter - Apply selected color</li>
            <li>1-6 - Quick select colors</li>
            <li>Tab - Move between faces</li>
          </ul>
        </div>
      </div>

      <Tooltip
        id="cube-cell-tooltip"
        place="top"
        className="z-50 !bg-foreground/90 !px-3 !py-2 !rounded-lg !text-sm !shadow-xl"
        classNameArrow="!bg-foreground/90"
      />
    </div>
  );
}

function getFaceName(face: Face): string {
  const names: Record<Face, string> = {
    U: 'Top',
    D: 'Bottom',
    L: 'Left',
    R: 'Right',
    F: 'Front',
    B: 'Back'
  };
  return names[face];
}

function getFacePosition(face: Face): string {
  const positions: Record<Face, string> = {
    U: 'Upper',
    D: 'Lower',
    L: 'Left Side',
    R: 'Right Side',
    F: 'Front Side',
    B: 'Back Side'
  };
  return positions[face];
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