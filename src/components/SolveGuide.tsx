import React, { useState } from 'react';
import { Move } from '@/types/cube';
import { CubeSolver } from '@/utils/cubeSolver';

interface SolveGuideProps {
  solutionMoves: Move[] | null;
  isLoading: boolean;
  error: string | null;
}

// Function to get the rotation arrow based on move direction
function getRotationArrow(move: string): React.ReactNode {
  // Determine if it's clockwise, counterclockwise or double
  const modifier = move.slice(1);
  
  if (modifier === "'") {
    // Counterclockwise arrow
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
        <path d="M3 3v5h5"/>
      </svg>
    );
  } else if (modifier === "2") {
    // Double turn (180 degrees)
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400">
        <path d="m15 15 6 6m-6 0 6-6"/>
        <path d="M14.5 9.5 12 2l-2.5 7.5L2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5z"/>
      </svg>
    );
  } else {
    // Clockwise arrow
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400">
        <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.85.99 6.62 2.62L21 8"/>
        <path d="M21 3v5h-5"/>
      </svg>
    );
  }
}

// Function to get a colored face badge for face reference
function getFaceBadge(face: string): React.ReactNode {
  const faceColors: Record<string, string> = {
    'U': 'bg-white text-gray-800',      // White for Up
    'D': 'bg-yellow-400 text-gray-800', // Yellow for Down
    'F': 'bg-green-600 text-white',     // Green for Front
    'B': 'bg-blue-600 text-white',      // Blue for Back
    'L': 'bg-orange-500 text-white',    // Orange for Left
    'R': 'bg-red-600 text-white',       // Red for Right
  };
  
  const faceName: Record<string, string> = {
    'U': 'Top',
    'D': 'Bottom',
    'F': 'Front',
    'B': 'Back',
    'L': 'Left',
    'R': 'Right',
  };
  
  return (
    <div className={`flex items-center gap-1 rounded px-2 py-1 ${faceColors[face]}`}>
      <span className="font-bold">{face}</span>
      <span className="text-xs">{faceName[face]}</span>
    </div>
  );
}

export default function SolveGuide({ solutionMoves, isLoading, error }: SolveGuideProps) {
  const isSolved = solutionMoves !== null && solutionMoves.length === 0;
  const hasSolution = solutionMoves !== null && solutionMoves.length > 0;
  
  // New state to toggle between standard notation and beginner mode
  const [showBeginnerMode, setShowBeginnerMode] = useState(true);
  
  // Generate beginner-friendly instructions if we have a solution
  const friendlyInstructions = hasSolution && showBeginnerMode 
    ? CubeSolver.getBeginnerFriendlyInstructions(solutionMoves as string[])
    : [];
    
  // Group steps into logical chunks for easier understanding
  const groupedSteps = hasSolution && showBeginnerMode
    ? CubeSolver.getGroupedSolution(solutionMoves as string[])
    : [];
    
  // Track if user wants to see the face reference
  const [showFaceReference, setShowFaceReference] = useState(false);

  return (
    <div className="space-y-5 animate-fade">
      <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
        <div className="flex items-center justify-between mb-3">
             <h3 className="font-semibold text-white">Solution Algorithm</h3>
             
             {hasSolution && (
               <div className="flex items-center gap-2">
                 <button 
                   className={`text-xs px-3 py-1 rounded-md transition ${showBeginnerMode ? 'bg-primary text-white' : 'bg-gray-800 text-gray-400'}`}
                   onClick={() => setShowBeginnerMode(true)}
                 >
                   Beginner Mode
                 </button>
                 <button 
                   className={`text-xs px-3 py-1 rounded-md transition ${!showBeginnerMode ? 'bg-primary text-white' : 'bg-gray-800 text-gray-400'}`}
                   onClick={() => setShowBeginnerMode(false)}
                 >
                   Standard Notation
                 </button>
               </div>
             )}
        </div>

        <div className="mt-4 min-h-[60px]">
            {isLoading && (
                <div className="flex items-center justify-center text-gray-400">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Calculating solution...
                </div>
            )}
            {error && !isLoading && (
                <div className="text-red-500 text-sm p-3 bg-red-900/30 rounded border border-red-800">
                    <strong>Error:</strong> {error}
                </div>
            )}
            {!isLoading && !error && (
                 isSolved ? (
                     <p className="text-green-400 font-medium text-center">Cube is already solved!</p>
                 ) : hasSolution ? (
                    <div className="space-y-2">
                         <p className="text-sm text-gray-300">Found solution ({solutionMoves.length} moves):</p>
                         
                         {showBeginnerMode ? (
                           <div className="space-y-4">
                             {/* Add buttons for legend visibility */}
                             <div className="flex flex-wrap gap-2 text-xs">
                               <button
                                 onClick={() => setShowFaceReference(!showFaceReference)}
                                 className="bg-gray-700 hover:bg-gray-600 text-gray-300 px-2 py-1 rounded flex items-center gap-1"
                               >
                                 {showFaceReference ? 'Hide' : 'Show'} Cube Face Reference
                                 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                   <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                                   <path d="M3 9h18" />
                                   <path d="M3 15h18" />
                                   <path d="M9 3v18" />
                                   <path d="M15 3v18" />
                                 </svg>
                               </button>
                             </div>
                           
                             {/* Face legend */}
                             {showFaceReference && (
                               <div className="bg-gray-800 p-3 rounded">
                                 <h4 className="text-gray-300 text-xs font-medium mb-2">Cube Face Reference:</h4>
                                 <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                                   {['U', 'D', 'F', 'B', 'L', 'R'].map(face => (
                                     <div key={face} className="flex items-center gap-2">
                                       {getFaceBadge(face)}
                                     </div>
                                   ))}
                                 </div>
                                 <div className="border border-gray-700 rounded p-2 mt-2 text-xs text-gray-400">
                                   <p className="mb-1">Hold the cube with the <span className="text-green-500">green face</span> towards you and <span className="text-white">white face</span> on top.</p>
                                 </div>
                               </div>
                             )}
                           
                             {/* Add a simple legend for the arrows */}
                             <div className="bg-gray-800 p-2 rounded flex flex-wrap gap-3 text-xs">
                               <div className="flex items-center gap-1">
                                 {getRotationArrow('R')}
                                 <span className="text-gray-300">Clockwise</span>
                               </div>
                               <div className="flex items-center gap-1">
                                 {getRotationArrow("R'")}
                                 <span className="text-gray-300">Counterclockwise</span>
                               </div>
                               <div className="flex items-center gap-1">
                                 {getRotationArrow('R2')}
                                 <span className="text-gray-300">180° Turn</span>
                               </div>
                             </div>
                             
                             {/* Grouped steps for easier understanding */}
                             {groupedSteps.map((group, groupIndex) => (
                               <div key={groupIndex} className="bg-gray-800 p-3 rounded">
                                 <h4 className="text-primary font-medium mb-2">{group.description}</h4>
                                 <div className="space-y-2">
                                   {group.moves.map((move, moveIndex) => {
                                     const instruction = friendlyInstructions.find(i => i.move === move);
                                     return (
                                       <div key={moveIndex} className="border-l-2 border-gray-700 pl-3 py-1">
                                         <div className="flex items-center gap-2">
                                           <span className="bg-gray-700 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                                             {move}
                                             {getRotationArrow(move as string)}
                                           </span>
                                           <span className="text-white">{instruction?.description}</span>
                                         </div>
                                         <p className="text-gray-400 text-sm mt-1">{instruction?.longDescription}</p>
                                       </div>
                                     );
                                   })}
                                 </div>
                               </div>
                             ))}
                             
                             <p className="text-xs text-gray-500 mt-2">
                               Tip: You can switch to &quot;Standard Notation&quot; above if you&apos;re comfortable with cube notation.
                             </p>
                           </div>
                         ) : (
                           <code className="block w-full bg-gray-800 p-3 rounded text-white text-sm break-words">
                             {solutionMoves.join(' ')}
                           </code>
                         )}
                    </div>
                 ) : (
                    <p className="text-gray-500 text-sm text-center pt-3">Submit a cube state or run the test solve to see the solution.</p>
                 )
            )}
        </div>
      </div>
    </div>
  );
}