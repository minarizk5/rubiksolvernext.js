import { CubeState, Move, Face, Color } from '@/types/cube';
import Cube from 'cubejs';

// Define the facelet order expected by cubejs (U, R, F, D, L, B)
const faceletOrder: Face[] = ['U', 'R', 'F', 'D', 'L', 'B'];
const colorToFacelet: Record<Color, string> = {
  W: 'U', R: 'R', G: 'F', Y: 'D', O: 'L', B: 'B'
};
const faceletToColor: Record<string, Color> = {
  U: 'W', R: 'R', F: 'G', D: 'Y', L: 'O', B: 'B'
};

// A mapping to convert face letters to more understandable names
const faceToDescription: Record<string, string> = {
  'U': 'top',
  'D': 'bottom',
  'F': 'front',
  'B': 'back',
  'L': 'left',
  'R': 'right'
};

// A mapping to convert move notation to user-friendly descriptions
const moveToDirection: Record<string, string> = {
  '': 'clockwise',
  "'": 'counterclockwise',
  '2': 'twice'
};

// Helper to convert our CubeState to cubejs facelet string
function stateToFaceletString(state: CubeState): string {
  let str = '';
  for (const face of faceletOrder) {
    for (const color of state[face]) {
      str += colorToFacelet[color];
    }
  }
  return str;
}

// Helper to convert cubejs facelet string back to our CubeState
// Not used in the current implementation
/* 
function faceletStringToState(faceletString: string): CubeState {
    const state: Partial<Record<Face, Color[]>> = {};
    let index = 0;
    for (const face of faceletOrder) {
        state[face] = [];
        for (let i = 0; i < 9; i++) {
            state[face]!.push(faceletToColor[faceletString[index++]]);
        }
    }
    return state as CubeState;
}
*/

export class CubeSolver {
  private state: CubeState;
  private cubejsInstance: typeof Cube | null = null;
  private static solverInitialized: boolean = false;
  private static solverInitializing: boolean = false;
  private solution: Move[] = []; // Stores the full solution sequence

  // --- Public static getters for initialization status ---
  public static isEngineInitialized(): boolean {
    return CubeSolver.solverInitialized;
  }

  public static isEngineInitializing(): boolean {
    return CubeSolver.solverInitializing;
  }
  // --- End of status getters ---

  constructor(initialState: CubeState) {
    if (!CubeSolver.isValidState(initialState)) {
      throw new Error("Invalid or unsolvable cube state provided.");
    }
    
    this.state = JSON.parse(JSON.stringify(initialState)); // Deep copy
    
    try {
      this.initializeCubejsInstance();
      if (!this.cubejsInstance) {
        throw new Error("Failed to initialize cube solver instance");
      }
    } catch (error) {
      console.error("Failed to create cube solver:", error);
      throw new Error("The cube state appears invalid or unsolvable. Please check your input.");
    }

    // Don't call ensureSolverInitialized here
    // Instead, ensure it's called before solve operation
  }

  // Static method to initialize Kociemba tables (can take a few seconds)
  static async initializeSolver(): Promise<void> {
    if (CubeSolver.solverInitialized || CubeSolver.solverInitializing) return;

    console.log("Initializing Kociemba solver tables...");
    CubeSolver.solverInitializing = true;
    
    return new Promise<void>((resolve, reject) => {
      // Use requestAnimationFrame to defer the work and avoid freezing the UI
      requestAnimationFrame(() => {
        try {
          // Break up the computation with setTimeout to allow UI updates
          setTimeout(() => {
            try {
              Cube.initSolver();
              console.log("Solver initialized.");
              CubeSolver.solverInitialized = true;
              CubeSolver.solverInitializing = false;
              resolve();
            } catch (e) {
              console.error("Failed to initialize solver:", e);
              CubeSolver.solverInitializing = false;
              reject(new Error("Solver initialization failed"));
            }
          }, 0);
        } catch (e) {
          console.error("Failed to schedule solver initialization:", e);
          CubeSolver.solverInitializing = false;
          reject(new Error("Failed to schedule solver initialization"));
        }
      });
    });
  }

  // Ensure solver is initialized before solving
  static async ensureSolverInitialized(): Promise<void> {
    if (!CubeSolver.solverInitialized && !CubeSolver.solverInitializing) {
      await CubeSolver.initializeSolver();
    } else if (CubeSolver.solverInitializing) {
      await new Promise<void>((resolve, reject) => {
        const interval = setInterval(() => {
          if (CubeSolver.solverInitialized) {
            clearInterval(interval);
            resolve();
          } else if (!CubeSolver.solverInitializing) {
              // Check if it stopped initializing without becoming initialized (error)
              clearInterval(interval);
              reject(new Error("Solver initialization failed while waiting."));
          }
        }, 100);
      });
    }
  }

  private initializeCubejsInstance() {
      try {
          const faceletString = stateToFaceletString(this.state);
          this.cubejsInstance = Cube.fromString(faceletString);
      } catch(e) {
          console.error("Failed to create cubejs instance from state:", e);
          console.error("State:", JSON.stringify(this.state));
          // Handle error - perhaps the state is invalid despite passing initial check?
          this.cubejsInstance = null;
      }
  }

  // Solve the cube with improved handling to prevent UI freezing
  async solve(): Promise<string[]> {
    // First ensure solver is initialized
    await CubeSolver.ensureSolverInitialized();
    
    if (!this.cubejsInstance) {
      throw new Error("Cube solver not properly initialized");
    }

    // This uses Web Workers if available, otherwise falls back to chunked execution
    return this.solveWithChunkedExecution();
  }

  /**
   * NEW METHOD: Converts a solution to beginner-friendly instructions
   * @param solution Array of standard cube notation moves
   * @returns Array of user-friendly instruction objects with descriptions and visuals
   */
  static getBeginnerFriendlyInstructions(solution: string[]): { 
    move: string; 
    description: string;
    longDescription: string;
  }[] {
    return solution.map(move => {
      // Parse the move into face and direction
      const face = move.charAt(0) as Face;
      const modifier = move.slice(1); // '', "'", or "2"
      
      // Create user-friendly descriptions
      const faceName = faceToDescription[face];
      const direction = moveToDirection[modifier];
      
      // Short description (e.g., "Turn Right clockwise")
      const description = `Turn ${faceName} ${direction}`;
      
      // Longer description with more guidance
      let longDescription = ``;
      
      // Add more detailed instructions based on the face
      if (face === 'U') {
        longDescription = `Hold the cube so you can see the top face. Rotate the top face ${direction}.`;
      } else if (face === 'D') {
        longDescription = `Hold the cube so you can see the bottom face. Rotate the bottom face ${direction}.`;
      } else if (face === 'F') {
        longDescription = `Looking at the front of the cube, rotate the front face ${direction}.`;
      } else if (face === 'B') {
        longDescription = `Turn the cube around so the back face is facing you, then rotate it ${direction}.`;
      } else if (face === 'L') {
        longDescription = `Looking at the front of the cube, rotate the left face ${direction}.`;
      } else if (face === 'R') {
        longDescription = `Looking at the front of the cube, rotate the right face ${direction}.`;
      }
      
      // Handle "twice" direction with clearer instructions
      if (modifier === '2') {
        longDescription += " This means turning it 180 degrees (a half-turn).";
      }
      
      return {
        move,
        description,
        longDescription
      };
    });
  }

  /**
   * Groups solution moves into logical chunks for easier understanding
   * @param solution Array of standard cube notation moves
   * @returns Array of move groups with descriptions
   */
  static getGroupedSolution(solution: string[]): {
    moves: string[];
    description: string;
  }[] {
    const result = [];
    
    // Group the solution into chunks of 3-4 moves for easier digestion
    for (let i = 0; i < solution.length; i += 3) {
      const chunk = solution.slice(i, i + 3);
      result.push({
        moves: chunk,
        description: `Step ${Math.floor(i/3) + 1}: Apply these ${chunk.length} moves`
      });
    }
    
    return result;
  }

  // Implementation of solve that breaks computation into chunks to prevent UI freeze
  private solveWithChunkedExecution(): Promise<string[]> {
    return new Promise<string[]>((resolve, reject) => {
      console.log("Starting solution calculation...");
      
      // Check if Web Workers are available (modern browsers)
      if (typeof Worker !== 'undefined') {
        // Use a worker to offload the calculation entirely
        this.solveWithWebWorker(resolve, reject);
      } else {
        // Fallback to chunked execution with very small work batches
        this.solveWithTimeSlicing(resolve, reject);
      }
      
      // Set a maximum timeout to prevent infinite loops (30 seconds)
      setTimeout(() => {
        reject(new Error("Solving timed out after 30 seconds. The cube may be too complex or in an invalid state."));
      }, 30000);
    });
  }
  
  // Solve using a web worker (best option for preventing UI freeze)
  private solveWithWebWorker(resolve: (value: string[]) => void, reject: (reason: Error) => void): void {
    try {
      // Use a dynamic import for the worker using the Next.js worker strategy
      if (typeof window !== 'undefined') {
        // We're in the browser environment
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const worker = new Worker(new URL('./cube.worker.ts', import.meta.url) as any);
        
        // Set up message handler
        worker.onmessage = (e) => {
          if (e.data.type === 'status') {
            console.log('Worker status:', e.data.message);
            return;
          }
          
          if (e.data.type === 'solution') {
            // Clean up
            worker.terminate();
            
            if (e.data.success) {
              console.log("Solution found in web worker");
              resolve(this.formatSolution(e.data.solution));
            } else {
              console.error("Worker error:", e.data.error);
              reject(new Error(e.data.error));
            }
          }
          
          if (e.data.type === 'error') {
            // Clean up
            worker.terminate();
            
            console.error("Worker error:", e.data.error);
            reject(new Error(e.data.error));
          }
        };
        
        // Set up error handler
        worker.onerror = (e) => {
          // Clean up
          worker.terminate();
          
          console.error("Worker error:", e);
          reject(new Error("Worker failed: " + e.message));
        };
        
        // Send the cube state to the worker
        worker.postMessage({
          cubeState: stateToFaceletString(this.state)
        });
      } else {
        // We're in a server-side rendering context, fall back to the non-worker implementation
        this.solveWithTimeSlicing(resolve, reject);
      }
    } catch (e) {
      console.error("Failed to create web worker, falling back to time slicing:", e);
      // Fallback to chunked execution
      this.solveWithTimeSlicing(resolve, reject);
    }
  }
  
  // Fallback method using time slicing for older browsers
  private solveWithTimeSlicing(resolve: (value: string[]) => void, reject: (reason: Error) => void): void {
    // Store the instance for use in callbacks
    const cubeInstance = this.cubejsInstance;
    
    // Check if cube instance is available
    if (!cubeInstance) {
      reject(new Error("Cube solver not properly initialized"));
      return;
    }
    
    // Set a flag to indicate we're calculating
    let isSolving = true;
    let attempts = 0;
    const MAX_ATTEMPTS = 20; // Limit the number of solution attempts
    
    // Function to be executed in small chunks
    const executeChunk = () => {
      if (!isSolving || attempts >= MAX_ATTEMPTS) {
        if (attempts >= MAX_ATTEMPTS) {
          isSolving = false;
          reject(new Error("Failed to solve after maximum attempts. The cube may be too complex."));
        }
        return;
      }
      
      attempts++;
      
      try {
        // Only give a very small time slice to the calculation
        // Then yield back to the UI thread
        console.log(`Attempting solution calculation: attempt ${attempts}/${MAX_ATTEMPTS}`);
        
        // We need to wrap the synchronous solve() call in a way that doesn't block UI
        // Use a minimal approach: try to solve quickly, then yield to UI
        
        // Set up a promise that resolves after a UI frame
        const yieldToUI = () => new Promise(resolve => {
          // First yield with setTimeout (macrotask)
          setTimeout(() => {
            // Then with requestAnimationFrame (before next paint)
            requestAnimationFrame(() => {
              resolve(null);
            });
          }, 0);
        });
        
        // Function to solve in chunks
        const solveWithYield = async () => {
          if (!isSolving) return;
          
          try {
            // Try to solve with current settings
            const startTime = performance.now();
            const solution = cubeInstance.solve();
            const elapsed = performance.now() - startTime;
            
            console.log(`Solution found in ${elapsed.toFixed(2)}ms on attempt ${attempts}`);
            isSolving = false;
            resolve(this.formatSolution(solution));
          } catch (e) {
            const error = e as Error;
            
            // If it's a genuine error, reject
            if (error.message && error.message.includes("unsolvable")) {
              console.error("Cube appears to be unsolvable:", error);
              isSolving = false;
              reject(new Error("The cube state appears to be invalid or unsolvable."));
              return;
            }
            
            // Otherwise yield to UI and try again
            await yieldToUI();
            
            if (isSolving && attempts < MAX_ATTEMPTS) {
              // Schedule next attempt with a longer delay as attempts increase
              // This gives UI more time to be responsive between attempts
              const delay = Math.min(50 * attempts, 500);
              setTimeout(() => {
                executeChunk();
              }, delay);
            }
          }
        };
        
        // Start the solve process
        solveWithYield();
      } catch (error) {
        // Handle any synchronous errors
        console.error("Error in solution chunk:", error);
        
        if (isSolving && attempts < MAX_ATTEMPTS) {
          // Try again after a delay
          setTimeout(() => {
            executeChunk();
          }, 100);
        } else {
          isSolving = false;
          reject(new Error("Failed to calculate solution: " + (error as Error).message));
        }
      }
    };
    
    // Start the first chunk after a short delay
    setTimeout(() => {
      executeChunk();
    }, 10);
  }

  /**
   * Formats the solution string returned by cubejs into an array of move notations
   */
  private formatSolution(solutionString: string): string[] {
    if (!solutionString) {
      return [];
    }
    
    // Convert the solution string (e.g., "U F R2 B'") to string array
    return solutionString.trim().split(/\s+/).filter(Boolean);
  }

  // Get the stored solution
  getSolution(): Move[] {
    return [...this.solution]; // Return a copy
  }

  // Public getter for the current state
  getState(): CubeState {
    // Return a deep copy to prevent external modification
    return JSON.parse(JSON.stringify(this.state));
  }

  // --- Core Cube State and Manipulation ---
  // (Keep applyMove, rotateFace, getRotationMap, isValidState)

  // Updates the internal state AND the cubejsInstance
  private updateState(newState: CubeState) {
    this.state = newState; // Keep our state representation
    this.initializeCubejsInstance(); // Re-sync cubejs instance
  }

  // Applies a move to both our state and the cubejs instance
  applyMove(move: Move) {
    if (!this.cubejsInstance) {
      console.warn("Cannot apply move: cubejs instance not available.");
      return;
    }

    const face = move[0] as Face;
    const isCounterClockwise = move.includes("'");
    const isDouble = move.includes("2");
    
    // Apply to our state representation (for potential display/validation)
    const newState = JSON.parse(JSON.stringify(this.state));
    if (isDouble) {
      this.rotateFace(face, newState);
      this.rotateFace(face, newState);
    } else {
      this.rotateFace(face, newState, isCounterClockwise);
    }
    this.state = newState; // Update our state directly


    // Apply to cubejs instance (important for subsequent solves)
    try {
        this.cubejsInstance.move(move);
    } catch (e) {
        console.error(`Error applying move "${move}" to cubejs instance:`, e);
        // Attempt to resync cubejs instance from our state
        this.initializeCubejsInstance();
    }
  }

  // Rotates a single face (Helper for applyMove) - Keep this logic
  private rotateFace(face: Face, state: CubeState, counterClockwise: boolean = false) {
    const faceStickers = [...state[face]];
    if (counterClockwise) {
      state[face][0] = faceStickers[2]; state[face][1] = faceStickers[5]; state[face][2] = faceStickers[8];
      state[face][3] = faceStickers[1]; state[face][5] = faceStickers[7];
      state[face][6] = faceStickers[0]; state[face][7] = faceStickers[3]; state[face][8] = faceStickers[6];
    } else {
      state[face][0] = faceStickers[6]; state[face][1] = faceStickers[3]; state[face][2] = faceStickers[0];
      state[face][3] = faceStickers[7]; state[face][5] = faceStickers[1];
      state[face][6] = faceStickers[8]; state[face][7] = faceStickers[5]; state[face][8] = faceStickers[2];
    }

    const rotations = this.getRotationMap(face);
    const tempState = JSON.parse(JSON.stringify(state));

    rotations.forEach(([[fromFace, fromIdx], [toFace, toIdx]]) => {
      const [actualFromFace, actualFromIdx] = counterClockwise ? [toFace, toIdx] : [fromFace, fromIdx];
      const [actualToFace, actualToIdx]    = counterClockwise ? [fromFace, fromIdx] : [toFace, toIdx];
      state[actualToFace][actualToIdx] = tempState[actualFromFace][actualFromIdx];
    });
  }

  // Provides the sticker mapping for rotations - Keep this logic
  private getRotationMap(face: Face): [Face, number][][] {
     const maps: Record<Face, [[Face, number], [Face, number]][]> = {
            U: [
                [['B', 0], ['R', 0]], [['B', 1], ['R', 1]], [['B', 2], ['R', 2]], // B012 -> R012
                [['R', 0], ['F', 0]], [['R', 1], ['F', 1]], [['R', 2], ['F', 2]], // R012 -> F012
                [['F', 0], ['L', 0]], [['F', 1], ['L', 1]], [['F', 2], ['L', 2]], // F012 -> L012
                [['L', 0], ['B', 0]], [['L', 1], ['B', 1]], [['L', 2], ['B', 2]], // L012 -> B012
            ],
            D: [ // Note: D affects indices 6, 7, 8
                [['F', 6], ['L', 6]], [['F', 7], ['L', 7]], [['F', 8], ['L', 8]], // F678 -> L678
                [['L', 6], ['B', 6]], [['L', 7], ['B', 7]], [['L', 8], ['B', 8]], // L678 -> B678
                [['B', 6], ['R', 6]], [['B', 7], ['R', 7]], [['B', 8], ['R', 8]], // B678 -> R678
                [['R', 6], ['F', 6]], [['R', 7], ['F', 7]], [['R', 8], ['F', 8]], // R678 -> F678
      ],
      F: [
                [['U', 6], ['L', 8]], [['U', 7], ['L', 5]], [['U', 8], ['L', 2]], // U678 -> L852 (rev)
                [['L', 8], ['D', 2]], [['L', 5], ['D', 1]], [['L', 2], ['D', 0]], // L852 -> D210 (rev)
                [['D', 2], ['R', 0]], [['D', 1], ['R', 3]], [['D', 0], ['R', 6]], // D210 -> R036
                [['R', 0], ['U', 6]], [['R', 3], ['U', 7]], [['R', 6], ['U', 8]], // R036 -> U678
            ],
            B: [ // Affects U012, R258, D876, L630
                [['U', 0], ['R', 2]], [['U', 1], ['R', 5]], [['U', 2], ['R', 8]], // U012 -> R258
                [['R', 2], ['D', 8]], [['R', 5], ['D', 7]], [['R', 8], ['D', 6]], // R258 -> D876 (rev)
                [['D', 8], ['L', 6]], [['D', 7], ['L', 3]], [['D', 6], ['L', 0]], // D876 -> L630 (rev)
                [['L', 6], ['U', 0]], [['L', 3], ['U', 1]], [['L', 0], ['U', 2]], // L630 -> U012
            ],
            L: [ // Affects U036, B852, D036, F036
                [['U', 0], ['B', 8]], [['U', 3], ['B', 5]], [['U', 6], ['B', 2]], // U036 -> B852 (rev)
                [['B', 8], ['D', 0]], [['B', 5], ['D', 3]], [['B', 2], ['D', 6]], // B852 -> D036
                [['D', 0], ['F', 0]], [['D', 3], ['F', 3]], [['D', 6], ['F', 6]], // D036 -> F036
                [['F', 0], ['U', 0]], [['F', 3], ['U', 3]], [['F', 6], ['U', 6]], // F036 -> U036
            ],
            R: [ // Affects U852, F852, D852, B036
                [['U', 2], ['F', 2]], [['U', 5], ['F', 5]], [['U', 8], ['F', 8]], // U258 -> F258
                [['F', 2], ['D', 2]], [['F', 5], ['D', 5]], [['F', 8], ['D', 8]], // F258 -> D258
                [['D', 2], ['B', 6]], [['D', 5], ['B', 3]], [['D', 8], ['B', 0]], // D258 -> B630 (rev)
                [['B', 6], ['U', 2]], [['B', 3], ['U', 5]], [['B', 0], ['U', 8]], // B630 -> U258
            ],
        };
    // The maps define clockwise rotation [from, to].
    // We need to adjust the indices based on counterClockwise flag during application.
    // The structure returns [[from, to], [from, to], ...] pairs for clockwise rotation.
    return maps[face];
  }


  // Validates the structure and color counts - Keep this logic
  static isValidState(state: CubeState): boolean {
    // First check basic structure
    if (!state || typeof state !== 'object') {
      console.error("Invalid state: Cube state is null or not an object.");
      return false;
    }
    
    const requiredFaces: Face[] = ['U', 'D', 'L', 'R', 'F', 'B'];
    if (!requiredFaces.every(face => Array.isArray(state[face]) && state[face].length === 9)) {
      console.error("Invalid state: Missing faces or incorrect facelet count.");
      return false;
    }

    // Check color counts
    const colorCounts: Record<Color, number> = { W: 0, Y: 0, R: 0, O: 0, B: 0, G: 0 };
    let totalCount = 0;
    
    for (const face of requiredFaces) {
      for (const color of state[face]) {
        if (!(color in colorCounts)) {
          console.error(`Invalid state: Unknown color '${color}' found on face ${face}.`);
          return false; // Invalid color found
        }
        colorCounts[color as Color]++;
        totalCount++;
      }
    }

    if (totalCount !== 54) {
      console.error(`Invalid state: Total facelets count is ${totalCount}, expected 54.`);
      return false;
    }

    // Check if each color appears exactly 9 times
    const incorrectColors = Object.entries(colorCounts)
      .filter(([, count]) => count !== 9);
    
    if (incorrectColors.length > 0) {
      console.error("Invalid state: Incorrect color counts.", 
        incorrectColors.map(([color, count]) => `${color}: ${count}`).join(', '));
      return false;
    }

    // Now try to create a cubejs instance to validate the state
    try {
      // Attempt to create a Cube instance from the state
      const faceletString = stateToFaceletString(state);
      
      // Just check if the string is valid by trying to create a Cube instance
      Cube.fromString(faceletString);
      
      // Additional check: center pieces must be different
      const centers = [state.U[4], state.D[4], state.F[4], state.B[4], state.L[4], state.R[4]];
      const uniqueCenters = new Set(centers);
      
      if (uniqueCenters.size !== 6) {
        console.error("Invalid state: Not all center pieces are different colors.");
        return false;
      }
      
      return true;
    } catch (error) {
      console.error("Invalid state: The cube configuration is not solvable.", error);
      return false;
    }
  }

  // --- Removed Methods ---
  // Removed analyzeCubeAndCreateSteps, solveSteps, all get...Tips,
  // describe...Locations, findEdges, findCorners, findMiddleLayerEdges,
  // isEdgeYellow, isEdgeCorrectlyPlaced, isCornerCorrectlyPlaced,
  // getAdjacent..., getCenterColor, getOppositeEdgeIndex, getFaceName,
  // all hasYellow..., areAdjacentCorners, isCornerOriented,
  // isMiddleLayerComplete, areYellowCornersOriented, getCornerColors,
  // getTargetCornerColors, getAdjacentCornerFaces, solveWhiteCross,
  // solveWhiteCorners, solveMiddleLayer, solveYellowCross, solveYellowCorners,
  // getOptimal..., getTarget..., getYellowPattern, areYellowCornersPositioned,
  // getCorrectlyPositionedCornerCount, getSolveProgress, getCurrentStep,
  // getCurrentProgress, getNextStep, getPreviousStep, isEdgeFlipped.

  static createScrambledCube() {
    try {
      // Generate a random cube state
      const state = Cube.random();
      const stateString = state.asString();
      
      // Convert the cubejs state string to our internal format
      // The rest of this code would set up the proper 'state' object
      // Similar to how we convert a user input state
      
      return { success: true };
    } catch (error) {
      console.error("Error creating scrambled cube:", error);
      return { success: false, error: "Failed to generate scrambled cube" };
    }
  }
}

// Example usage (optional, for testing)
/*
async function testSolver() {
    // Standard solved state
    const solvedState: CubeState = {
        U: ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'], // White
        R: ['R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R'], // Red
        F: ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], // Green
        D: ['Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y'], // Yellow
        L: ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'], // Orange
        B: ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B'], // Blue
    };

    try {
        const solver = new CubeSolver(solvedState);

        // Apply a scramble
        const scramble: Move[] = ["F", "R", "U", "R'", "U'", "F'"]; // Sexy move
        scramble.forEach(move => solver.applyMove(move));
        console.log("State after scramble:", solver.state);


        // Solve the scrambled cube
        const solution = await solver.solve();
        console.log(`Solution (${solution.length} moves):`, solution.join(' '));

        // Verify by applying the solution
        const verifier = new CubeSolver(solver.state); // Start from scrambled state
        solution.forEach(move => verifier.applyMove(move));
        console.log("State after applying solution:", verifier.state);

        if (CubeSolver.isValidState(verifier.state) && JSON.stringify(verifier.state) === JSON.stringify(solvedState)) {
             console.log("Verification successful: Cube is solved!");
        } else {
             console.error("Verification failed: Cube is not solved.");
        }

    } catch (error) {
        console.error("Error during testing:", error);
    }
}

// Run the test
// testSolver();
*/