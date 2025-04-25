'use client';

import CubeInput from '@/components/CubeInput';
import SolveGuide from '@/components/SolveGuide';
import UserGuide from '@/components/UserGuide';
import { CubeSolver } from '@/utils/cubeSolver';
import { CubeState, Move } from '@/types/cube';
import { useState, useEffect } from 'react';

// Initial solved state constant
const solvedState: CubeState = {
  U: Array(9).fill('W'), D: Array(9).fill('Y'), L: Array(9).fill('O'),
  R: Array(9).fill('R'), F: Array(9).fill('G'), B: Array(9).fill('B')
};

// Define a standard test scramble
const testScramble: Move[] = [
  "F", "R", "U", "R'", "U'", "F'", // Sexy Move
  "B", "L", "D", "L'", "D'", "B'"  // Another sequence
];

export default function Home() {
  // Keep solver instance if needed for other operations, otherwise could be removed
  // const [solver, setSolver] = useState<CubeSolver | null>(null); 
  const [error, setError] = useState<string | null>(null); // For creation/validation errors
  const [displayState, setDisplayState] = useState<CubeState>(solvedState);

  // State specific to the solution process
  const [solutionMoves, setSolutionMoves] = useState<Move[] | null>(null);
  const [isLoadingSolution, setIsLoadingSolution] = useState(false);
  const [solveError, setSolveError] = useState<string | null>(null); // For solving errors

  // Add state to track if the core solver is ready
  const [isSolverEngineReady, setIsSolverEngineReady] = useState(CubeSolver.isEngineInitialized());

  // --- Proactive Solver Initialization --- 
  useEffect(() => {
    // Use the new public static getters
    if (!CubeSolver.isEngineInitialized() && !CubeSolver.isEngineInitializing()) {
        console.log("Home component mounted, initializing solver engine...");
        CubeSolver.initializeSolver().then(() => {
            console.log("Solver engine initialized successfully.");
            setIsSolverEngineReady(true);
        }).catch(err => {
            console.error("Solver engine initialization failed:", err);
            setError("Critical error: Could not initialize the cube solving engine.");
        });
    } else if (CubeSolver.isEngineInitializing()) {
        console.log("Solver engine is already initializing, waiting...");
        const checkInterval = setInterval(() => {
            if (CubeSolver.isEngineInitialized()) {
                console.log("Detected solver engine finished initializing.");
                setIsSolverEngineReady(true);
                clearInterval(checkInterval);
            } else if (!CubeSolver.isEngineInitializing()) {
                 console.error("Detected solver engine initialization failed elsewhere.");
                 setError("Critical error: Could not initialize the cube solving engine.");
                 clearInterval(checkInterval);
            }
        }, 200);
        return () => clearInterval(checkInterval);
    }
  }, []); 

  // Triggered by CubeInput onSubmit or handleTestSolve
  const handleCubeInput = async (state: CubeState) => {
    setError(null); // Clear previous creation errors
    setSolveError(null);
    setSolutionMoves(null);
    setDisplayState(state); // Update display
    setIsLoadingSolution(true); // Start loading indicator

    try {
      // Create the solver instance - validation happens inside constructor
      const newSolver = new CubeSolver(state);
      // setSolver(newSolver); // Store solver instance if needed elsewhere

      // --- Automatically trigger solve --- 
      console.log("Solver created, attempting to solve...");
      const moves = await newSolver.solve(); // Call solve directly
      
      if (moves.length === 0 && CubeSolver.isValidState(newSolver.getState())) {
         // Check if it was already solved
         if (JSON.stringify(newSolver.getState()) === JSON.stringify(solvedState)) {
             console.log("Cube is already solved.");
             setSolutionMoves([]); // Indicate solved
         } else {
             console.error("Solver returned empty moves for a non-solved state.");
             setSolveError("Failed to find a solution. The cube might be unsolvable or solver failed.");
             setSolutionMoves(null);
         }
      } else if (moves.length > 0) {
         console.log(`Solution found with ${moves.length} moves.`);
         setSolutionMoves(moves as Move[]);
      } else {
         // This case might occur if isValidState failed subtly after constructor?
         console.error("Solver returned empty moves, state might be invalid despite checks.");
         setSolveError("Could not solve the cube. State might be invalid.");
         setSolutionMoves(null);
      }
      // --- Solve attempt finished --- 

    } catch (err) {
      // Errors from CubeSolver constructor (validation) or newSolver.solve()
      console.error("Error during cube processing or solving:", err);
      const message = err instanceof Error ? err.message : "Failed to process or solve cube state";
      setError(message); // Show error at the top level
      setSolutionMoves(null);
      setSolveError(null);
      // setSolver(null);
    } finally {
       setIsLoadingSolution(false); // Stop loading indicator
    }
  };

  // Called when the "Test Solve" button is clicked
  const handleTestSolve = async () => { // Make async
    setError(null);
    setSolveError(null);
    setSolutionMoves(null);
    // setSolver(null); 
    setIsLoadingSolution(true); // Start loading early for test setup

    try {
      // Apply scramble to a temporary solver to get the state
      // Use solvedState constant directly
      const tempSolver = new CubeSolver(solvedState); 
      testScramble.forEach(move => tempSolver.applyMove(move));
      const scrambledState = tempSolver.getState();
      
      // Trigger the input handler which will create solver and solve
      await handleCubeInput(scrambledState); 
      
    } catch (err) {
       console.error("Error during test solve setup:", err);
       setError("Failed to set up the test scramble.");
       setDisplayState(solvedState); // Reset display on error
       setSolutionMoves(null);
       setSolveError(null);
       // setSolver(null);
       setIsLoadingSolution(false);
    }
    // Loading state is handled within handleCubeInput
  };
  
  // Called when CubeInput requests a reset
  const handleResetRequest = () => {
      setError(null);
      setSolveError(null); 
      setSolutionMoves(null);
      // setSolver(null);
      setDisplayState(solvedState);
      setIsLoadingSolution(false);
  };

  return (
    <div className="container mx-auto py-6 px-4 animate-fade">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-white mb-2">
            Rubik&apos;s Cube Solver
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Enter your scrambled cube state and get an optimal solution using the Kociemba algorithm
          </p>
        </div>

        {/* Show loading indicator while solver initializes */}
        {!isSolverEngineReady && !error && (
          <div className="mb-6 p-4 bg-blue-900/30 border border-blue-700 rounded-lg text-center">
            <p className="text-blue-300 flex items-center justify-center gap-2">
               <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
              Initializing solving engine (this may take a few seconds)... 
            </p>
          </div>
        )}

        <UserGuide onTestSolve={handleTestSolve} />

        {error && (
          <div className="mb-6 p-4 bg-red-500/20 border border-red-700 rounded-lg">
            <p className="text-red-400 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              {error}
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-7">
            <CubeInput 
              key={JSON.stringify(displayState)}
              initialDisplayState={displayState} 
              onSubmit={handleCubeInput} 
              onResetRequest={handleResetRequest} 
            />
          </div>
          
          <div className="lg:col-span-5 lg:sticky lg:top-8">
            <div className="bg-black p-6 rounded-xl border border-gray-800 shadow-lg">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 text-white">
                <span className="text-primary">2.</span> Solution
              </h2>
              {/* Pass solution state down to SolveGuide */}
              <SolveGuide 
                 solutionMoves={solutionMoves} 
                 isLoading={isLoadingSolution} 
                 error={solveError} 
               />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
