import { useState } from 'react';
import { Move } from '@/types/cube';

interface SolutionStep {
  phase: string;
  moves: Move[];
  description: string;
  tips: string[];
}

interface SolutionDisplayProps {
  moves: Move[];
}

const PHASES = [
  {
    id: 'white-cross',
    name: 'White Cross',
    description: 'Create the white cross on the top face',
  },
  {
    id: 'white-corners',
    name: 'White Corners',
    description: 'Place the white corners correctly',
  },
  {
    id: 'middle-layer',
    name: 'Middle Layer',
    description: 'Solve the middle layer edges',
  },
  {
    id: 'yellow-cross',
    name: 'Yellow Cross',
    description: 'Create the yellow cross on the bottom',
  },
  {
    id: 'yellow-corners',
    name: 'Yellow Corners',
    description: 'Position and orient yellow corners',
  }
];

function groupMovesIntoPhases(moves: Move[]): SolutionStep[] {
  const steps: SolutionStep[] = [];
  let currentPhase = 0;
  let currentMoves: Move[] = [];
  let moveCount = 0;

  moves.forEach((move, index) => {
    currentMoves.push(move);
    moveCount++;

    // Detect phase changes based on move patterns and count
    if (
      (currentPhase === 0 && moveCount >= 8 && isWhiteCrossComplete(currentMoves)) ||
      (currentPhase === 1 && moveCount >= 12 && isWhiteCornersComplete(currentMoves)) ||
      (currentPhase === 2 && moveCount >= 16 && isMiddleLayerComplete(currentMoves)) ||
      (currentPhase === 3 && moveCount >= 8 && isYellowCrossComplete(currentMoves)) ||
      index === moves.length - 1
    ) {
      steps.push({
        phase: PHASES[currentPhase].name,
        moves: [...currentMoves],
        description: PHASES[currentPhase].description,
        tips: getPhaseSpecificTips(PHASES[currentPhase].id, currentMoves)
      });
      currentMoves = [];
      moveCount = 0;
      currentPhase++;
    }
  });

  return steps;
}

function isWhiteCrossComplete(moves: Move[]): boolean {
  // Pattern detection for white cross completion
  const pattern = moves.slice(-4).join('');
  return pattern.includes('U') && pattern.includes('F') && !pattern.includes('D');
}

function isWhiteCornersComplete(moves: Move[]): boolean {
  // Pattern detection for white corners completion
  const pattern = moves.slice(-6).join('');
  return pattern.includes('R U R\'') && !pattern.includes('D');
}

function isMiddleLayerComplete(moves: Move[]): boolean {
  // Pattern detection for middle layer completion
  const pattern = moves.slice(-8).join('');
  return pattern.includes('U R U\' R\'') || pattern.includes('U\' L\' U L');
}

function isYellowCrossComplete(moves: Move[]): boolean {
  // Pattern detection for yellow cross completion
  const pattern = moves.slice(-6).join('');
  return pattern.includes('F R U R\' U\' F\'');
}

function getPhaseSpecificTips(phaseId: string, moves: Move[]): string[] {
  const tips: Record<string, string[]> = {
    'white-cross': [
      'Look for white edge pieces',
      'Match edge colors with center colors',
      'Use F U\' R U to flip edges if needed'
    ],
    'white-corners': [
      'Find white corner pieces',
      'Position corners above their correct spot',
      'Use R U R\' U\' to insert corners'
    ],
    'middle-layer': [
      'Look for edge pieces without yellow',
      'Match edge colors with centers',
      'Use U R U\' R\' U\' F\' U F for right inserts',
      'Use U\' L\' U L U F U\' F\' for left inserts'
    ],
    'yellow-cross': [
      'Keep yellow center on bottom',
      'Use F R U R\' U\' F\' for yellow cross',
      'Repeat algorithm if needed'
    ],
    'yellow-corners': [
      'Keep yellow on bottom',
      'Use R U R\' U\' repeatedly for each corner',
      'Be patient, this step requires practice'
    ]
  };
  return tips[phaseId] || [];
}

export default function SolutionDisplay({ moves }: SolutionDisplayProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = groupMovesIntoPhases(moves);
  const currentPhase = steps[Math.floor(currentStep / 8)];
  const progress = ((currentStep + 1) / moves.length) * 100;

  const handlePrevStep = () => {
    setCurrentStep(prev => Math.max(0, prev - 1));
  };

  const handleNextStep = () => {
    setCurrentStep(prev => Math.min(moves.length - 1, prev + 1));
  };

  return (
    <div className="bg-secondary/40 backdrop-blur-sm p-5 rounded-xl border border-border">
      <div className="mb-5">
        <div className="flex items-center gap-3 mb-3">
          <div className="flex items-center justify-center w-8 h-8 bg-primary/20 text-primary rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"/>
              <path d="M12 8c1-.67 2.38-2 4.5-2a2.5 2.5 0 0 1 2.5 2.72c0 2.25-2 5.28-2 5.28"/>
              <path d="M12 8c-1-.67-2.38-2-4.5-2A2.5 2.5 0 0 0 5 8.72c0 2.25 2 5.28 2 5.28"/>
            </svg>
          </div>
          <h3 className="font-semibold text-foreground">{currentPhase.phase}</h3>
          <div className="ml-auto flex items-center gap-2">
            <span className="text-xs bg-accent/30 px-2 py-0.5 rounded-md text-secondary-foreground">Phase {Math.floor(currentStep / 8) + 1}/{steps.length}</span>
          </div>
        </div>
        <p className="text-sm text-secondary-foreground">{currentPhase.description}</p>
      </div>

      <div className="relative h-1.5 bg-secondary rounded-full mb-5">
        <div 
          className="absolute h-full bg-primary transition-all duration-300 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mb-5">
        <div className="flex gap-2">
          <button
            onClick={handlePrevStep}
            disabled={currentStep === 0}
            className={`
              p-2 rounded-lg flex items-center transition-colors
              ${currentStep === 0 
                ? 'bg-secondary/50 text-secondary-foreground/50 cursor-not-allowed' 
                : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground hover:text-foreground'
              }
            `}
            aria-label="Previous move"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m12 19-7-7 7-7"/>
              <path d="M19 12H5"/>
            </svg>
          </button>

          <button
            onClick={handleNextStep}
            disabled={currentStep === moves.length - 1}
            className={`
              p-2 rounded-lg flex items-center transition-colors
              ${currentStep === moves.length - 1
                ? 'bg-secondary/50 text-secondary-foreground/50 cursor-not-allowed'
                : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground hover:text-foreground'
              }
            `}
            aria-label="Next move"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"/>
              <path d="m12 5 7 7-7 7"/>
            </svg>
          </button>
        </div>

        <span className="text-sm text-secondary-foreground font-medium">
          Move {currentStep + 1} of {moves.length}
        </span>

        <div className="flex gap-2">
          <button
            onClick={() => setCurrentStep(0)}
            disabled={currentStep === 0}
            className={`
              px-3 py-1 rounded-lg text-xs font-medium transition-colors
              ${currentStep === 0
                ? 'bg-secondary/50 text-secondary-foreground/50 cursor-not-allowed'
                : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground'
              }
            `}
            aria-label="Go to first move"
          >
            First
          </button>
          <button
            onClick={() => setCurrentStep(moves.length - 1)}
            disabled={currentStep === moves.length - 1}
            className={`
              px-3 py-1 rounded-lg text-xs font-medium transition-colors
              ${currentStep === moves.length - 1
                ? 'bg-secondary/50 text-secondary-foreground/50 cursor-not-allowed'
                : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground'
              }
            `}
            aria-label="Go to last move"
          >
            Last
          </button>
        </div>
      </div>

      <div className="bg-accent/10 rounded-lg p-4 mb-4">
        <div className="font-mono text-xl text-center mb-2 font-bold text-primary">
          {moves[currentStep]}
        </div>
        <div className="text-secondary-foreground text-center text-sm">
          {getStepDescription(moves[currentStep])}
        </div>
      </div>

      <div className="grid grid-cols-6 gap-2 mb-4">
        {moves.slice(Math.max(0, currentStep - 2), Math.min(moves.length, currentStep + 4)).map((move, index) => {
          const actualIndex = Math.max(0, currentStep - 2) + index;
          return (
            <button
              key={actualIndex}
              onClick={() => setCurrentStep(actualIndex)}
              className={`
                p-2 text-center text-xs rounded transition-all
                ${actualIndex === currentStep 
                  ? 'bg-primary text-primary-foreground font-medium' 
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}
              `}
              aria-label={`Go to move ${actualIndex + 1}: ${move}`}
            >
              {move}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function getStepDescription(move: Move): string {
  const descriptions: Record<string, string> = {
    "U": "Turn the top face clockwise",
    "U'": "Turn the top face counter-clockwise",
    "U2": "Turn the top face twice",
    "D": "Turn the bottom face clockwise",
    "D'": "Turn the bottom face counter-clockwise",
    "D2": "Turn the bottom face twice",
    "L": "Turn the left face clockwise",
    "L'": "Turn the left face counter-clockwise",
    "L2": "Turn the left face twice",
    "R": "Turn the right face clockwise",
    "R'": "Turn the right face counter-clockwise",
    "R2": "Turn the right face twice",
    "F": "Turn the front face clockwise",
    "F'": "Turn the front face counter-clockwise",
    "F2": "Turn the front face twice",
    "B": "Turn the back face clockwise",
    "B'": "Turn the back face counter-clockwise",
    "B2": "Turn the back face twice",
  };
  return descriptions[move] || "Move the cube as shown";
}