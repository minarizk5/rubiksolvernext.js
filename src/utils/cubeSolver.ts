import { CubeState, Move, Face, Color } from '@/types/cube';

export class CubeSolver {
  private state: CubeState;
  private solution: Move[] = [];
  private cornerAttempts: number = 0;

  constructor(initialState: CubeState) {
    this.state = { ...initialState };
  }

  solve(): Move[] {
    if (!CubeSolver.isValidState(this.state)) {
      throw new Error('Invalid cube state');
    }

    // Check if the cube state is complete (all colors used exactly 9 times)
    const colorCounts: Record<Color, number> = {
      'W': 0, 'Y': 0, 'R': 0, 'O': 0, 'B': 0, 'G': 0
    };
    
    Object.values(this.state).forEach(face => {
      face.forEach((color: Color) => {
        colorCounts[color] = (colorCounts[color] || 0) + 1;
      });
    });

    if (!Object.values(colorCounts).every(count => count === 9)) {
      throw new Error('Incomplete cube state - each color must appear exactly 9 times');
    }

    this.solution = [];
    
    // Basic solving algorithm implementation (Layer by Layer method)
    this.solveWhiteCross();
    this.solveWhiteCorners();
    this.solveMiddleLayer();
    this.solveYellowCross();
    this.solveYellowCorners();
    this.orientYellowCorners();
    
    return this.solution;
  }

  private solveWhiteCross() {
    // Find and solve white edges
    const edges = this.findEdges('W');
    edges.forEach(edge => {
      const moves = this.getEdgeSolutionMoves(edge, 'U');
      this.applyMoves(moves);
    });
  }

  private solveWhiteCorners() {
    // Find and solve white corners
    const corners = this.findCorners('W');
    corners.forEach(corner => {
      const moves = this.getCornerSolutionMoves(corner, 'U');
      this.applyMoves(moves);
    });
  }

  private solveMiddleLayer() {
    // First check for parity case (odd number of edge flips)
    const middleEdges = this.findMiddleLayerEdges();
    let attempts = 0;
    const maxAttempts = 4; // Prevent infinite loops
    
    while (middleEdges.length > 0 && attempts < maxAttempts) {
      const edge = middleEdges[0];
      const moves = this.getMiddleLayerSolutionMoves(edge);
      
      // If we can't solve the edge directly, it might be in a parity state
      if (moves.length === 0 && attempts > 0) {
        // Apply parity fix algorithm
        this.applyMoves([
          'R', 'U', 'R\'', 'U\'', // Setup
          'R\'', 'F', 'R2', 'U\'', // Edge flip
          'R\'', 'U\'', 'R', 'U', // Restore
          'R\'', 'F\'', 'R' // Final fix
        ]);
      }
      
      this.applyMoves(moves);
      attempts++;
      
      // Refresh the list of unsolved edges
      const remainingEdges = this.findMiddleLayerEdges();
      if (remainingEdges.length === middleEdges.length) {
        // If no progress was made, try the next edge
        middleEdges.push(middleEdges.shift()!);
      } else {
        // Reset attempts if we made progress
        attempts = 0;
        middleEdges.length = 0;
        middleEdges.push(...remainingEdges);
      }
    }
  }

  private solveYellowCross() {
    // First get yellow edges to top face regardless of orientation
    while (!this.hasYellowEdgesOnTop()) {
      this.applyMoves(['F', 'R', 'U', 'R\'', 'U\'', 'F\'']);
    }

    // Then orient the edges correctly
    let attempts = 0;
    while (!this.hasYellowCross() && attempts < 4) {
      // Try different algorithms based on the pattern
      if (this.hasYellowLine()) {
        this.applyMoves(['F', 'R', 'U', 'R\'', 'U\'', 'F\'']);
      } else if (this.hasYellowL()) {
        this.applyMoves(['F', 'U', 'R', 'U\'', 'R\'', 'F\'']);
      } else {
        this.applyMoves(['U']);
      }
      attempts++;
    }
  }

  private hasYellowEdgesOnTop(): boolean {
    const edges = [1, 3, 5, 7];
    return edges.every(i => this.state.D[i] === 'Y');
  }

  private hasYellowLine(): boolean {
    return (this.state.D[1] === 'Y' && this.state.D[7] === 'Y') ||
           (this.state.D[3] === 'Y' && this.state.D[5] === 'Y');
  }

  private hasYellowL(): boolean {
    return (this.state.D[1] === 'Y' && this.state.D[3] === 'Y') ||
           (this.state.D[3] === 'Y' && this.state.D[7] === 'Y') ||
           (this.state.D[7] === 'Y' && this.state.D[5] === 'Y') ||
           (this.state.D[5] === 'Y' && this.state.D[1] === 'Y');
  }

  private solveYellowCorners() {
    // First get yellow corners to the bottom face regardless of orientation
    while (!this.hasYellowCornersOnBottom()) {
      // Sune algorithm for corner permutation
      this.applyMoves(['R', 'U', 'R\'', 'U', 'R', 'U2', 'R\'']);
      
      // If no progress after Sune, try bringing corners up and repositioning
      if (!this.hasYellowCornersOnBottom()) {
        this.applyMoves(['U', 'R', 'U\'', 'L\'', 'U', 'R\'', 'U\'', 'L']);
      }
    }

    // Then position the corners correctly
    let attempts = 0;
    while (!this.hasYellowCorners() && attempts < 4) {
      if (this.hasTwoAdjacent()) {
        // Position two adjacent corners
        this.applyMoves(['U', 'R', 'U\'', 'L\'', 'U', 'R\'', 'U\'', 'L']);
      } else {
        this.applyMoves(['U']);
      }
      attempts++;
    }
  }

  private orientYellowCorners() {
    // Orient each corner one at a time
    for (let i = 0; i < 4; i++) {
      // Repeat until current corner is oriented correctly
      while (!this.isCornerOriented(i)) {
        // Right sexy move for clockwise rotation
        this.applyMoves(['R', 'U', 'R\'', 'U\'']);
        
        // If corner not oriented after 3 attempts, try counter-clockwise
        if (!this.isCornerOriented(i) && this.cornerAttempts > 2) {
          this.applyMoves(['U', 'R', 'U2', 'R\'', 'U', 'R', 'U\'', 'R\'']);
        }
      }
      // Move to next corner
      if (i < 3) this.applyMoves(['U']);
    }
  }

  private applyMoves(moves: Move[]) {
    moves.forEach(move => {
      this.applyMove(move);
      this.solution.push(move);
    });
  }

  private applyMove(move: Move) {
    const face = move[0] as Face;
    const isCounterClockwise = move.includes('\'');
    const isDouble = move.includes('2');
    
    // Create a copy of the current state
    const newState = JSON.parse(JSON.stringify(this.state));
    
    // Apply the move
    if (isDouble) {
      this.rotateFace(face, newState);
      this.rotateFace(face, newState);
    } else {
      this.rotateFace(face, newState, isCounterClockwise);
    }
    
    this.state = newState;
  }

  private rotateFace(face: Face, state: CubeState, counterClockwise: boolean = false) {
    // First rotate the edge and corner pieces around the face
    const rotationMap = this.getRotationMap(face);
    const tempState = JSON.parse(JSON.stringify(state));
    
    rotationMap.forEach(rotation => {
      const [fromFace, fromIndex] = counterClockwise ? rotation[1] : rotation[0];
      const [toFace, toIndex] = counterClockwise ? rotation[0] : rotation[1];
      state[toFace][toIndex] = tempState[fromFace][fromIndex];
    });

    // Then rotate the face's own stickers
    const faceStickers = [...state[face]];
    if (counterClockwise) {
      // Rotate counterclockwise
      state[face][0] = faceStickers[2];
      state[face][1] = faceStickers[5];
      state[face][2] = faceStickers[8];
      state[face][3] = faceStickers[1];
      state[face][5] = faceStickers[7];
      state[face][6] = faceStickers[0];
      state[face][7] = faceStickers[3];
      state[face][8] = faceStickers[6];
    } else {
      // Rotate clockwise
      state[face][0] = faceStickers[6];
      state[face][1] = faceStickers[3];
      state[face][2] = faceStickers[0];
      state[face][3] = faceStickers[7];
      state[face][5] = faceStickers[1];
      state[face][6] = faceStickers[8];
      state[face][7] = faceStickers[5];
      state[face][8] = faceStickers[2];
    }
  }

  private getRotationMap(face: Face): [Face, number][][] {
    const rotationMaps: Record<Face, [Face, number][][]> = {
      U: [
        [['F', 0], ['R', 0]], [['F', 1], ['R', 1]], [['F', 2], ['R', 2]],
        [['R', 0], ['B', 0]], [['R', 1], ['B', 1]], [['R', 2], ['B', 2]],
        [['B', 0], ['L', 0]], [['B', 1], ['L', 1]], [['B', 2], ['L', 2]],
        [['L', 0], ['F', 0]], [['L', 1], ['F', 1]], [['L', 2], ['F', 2]]
      ],
      D: [
        [['F', 6], ['L', 6]], [['F', 7], ['L', 7]], [['F', 8], ['L', 8]],
        [['L', 6], ['B', 6]], [['L', 7], ['B', 7]], [['L', 8], ['B', 8]],
        [['B', 6], ['R', 6]], [['B', 7], ['R', 7]], [['B', 8], ['R', 8]],
        [['R', 6], ['F', 6]], [['R', 7], ['F', 7]], [['R', 8], ['F', 8]]
      ],
      L: [
        [['U', 0], ['F', 0]], [['U', 3], ['F', 3]], [['U', 6], ['F', 6]],
        [['F', 0], ['D', 0]], [['F', 3], ['D', 3]], [['F', 6], ['D', 6]],
        [['D', 0], ['B', 8]], [['D', 3], ['B', 5]], [['D', 6], ['B', 2]],
        [['B', 8], ['U', 0]], [['B', 5], ['U', 3]], [['B', 2], ['U', 6]]
      ],
      R: [
        [['U', 2], ['B', 6]], [['U', 5], ['B', 3]], [['U', 8], ['B', 0]],
        [['B', 6], ['D', 2]], [['B', 3], ['D', 5]], [['B', 0], ['D', 8]],
        [['D', 2], ['F', 2]], [['D', 5], ['F', 5]], [['D', 8], ['F', 8]],
        [['F', 2], ['U', 2]], [['F', 5], ['U', 5]], [['F', 8], ['U', 8]]
      ],
      F: [
        [['U', 6], ['R', 0]], [['U', 7], ['R', 3]], [['U', 8], ['R', 6]],
        [['R', 0], ['D', 2]], [['R', 3], ['D', 1]], [['R', 6], ['D', 0]],
        [['D', 2], ['L', 8]], [['D', 1], ['L', 5]], [['D', 0], ['L', 2]],
        [['L', 8], ['U', 6]], [['L', 5], ['U', 7]], [['L', 2], ['U', 8]]
      ],
      B: [
        [['U', 0], ['L', 0]], [['U', 1], ['L', 3]], [['U', 2], ['L', 6]],
        [['L', 0], ['D', 8]], [['L', 3], ['D', 7]], [['L', 6], ['D', 6]],
        [['D', 8], ['R', 2]], [['D', 7], ['R', 5]], [['D', 6], ['R', 8]],
        [['R', 2], ['U', 0]], [['R', 5], ['U', 1]], [['R', 8], ['U', 2]]
      ]
    };
    return rotationMaps[face] || [];
  }

  // Common algorithm patterns
  private applySexyMove(): void {
    // R U R' U'
    this.applyMoves(['R', 'U', 'R\'', 'U\'']);
  }

  private applySledgehammer(): void {
    // R' F R F'
    this.applyMoves(['R\'', 'F', 'R', 'F\'']);
  }

  private applySune(): void {
    // R U R' U R U2 R'
    this.applyMoves(['R', 'U', 'R\'', 'U', 'R', 'U2', 'R\'']);
  }

  private applyAntiSune(): void {
    // R U2 R' U' R U' R'
    this.applyMoves(['R', 'U2', 'R\'', 'U\'', 'R', 'U\'', 'R\'']);
  }

  // Helper methods for finding pieces
  private findEdges(color: Color): { face: Face; index: number }[] {
    const edges: { face: Face; index: number }[] = [];
    const faces: Face[] = ['U', 'D', 'L', 'R', 'F', 'B'];
    const edgeIndices = [1, 3, 5, 7]; // Edge positions on each face

    faces.forEach(face => {
      edgeIndices.forEach(index => {
        if (this.state[face][index] === color) {
          edges.push({ face, index });
        }
      });
    });

    return edges;
  }

  private findCorners(color: Color): { face: Face; index: number }[] {
    const corners: { face: Face; index: number }[] = [];
    const faces: Face[] = ['U', 'D', 'L', 'R', 'F', 'B'];
    const cornerIndices = [0, 2, 6, 8]; // Corner positions on each face

    faces.forEach(face => {
      cornerIndices.forEach(index => {
        if (this.state[face][index] === color) {
          corners.push({ face, index });
        }
      });
    });

    return corners;
  }

  private findMiddleLayerEdges(): { face: Face; index: number }[] {
    const edges: { face: Face; index: number }[] = [];
    const faces: Face[] = ['F', 'R', 'B', 'L'];
    
    faces.forEach(face => {
      [3, 5].forEach(index => { // Middle layer edge positions
        const color = this.state[face][index];
        if (color !== 'W' && color !== 'Y') {
          edges.push({ face, index });
        }
      });
    });

    return edges;
  }

  private getEdgeSolutionMoves(edge: { face: Face; index: number }, targetFace: Face): Move[] {
    const moves: Move[] = [];
    const { face, index } = edge;

    // Get the current edge colors
    const firstColor = this.state[face][index];
    let secondFace: Face, secondIndex: number;

    // Find the connected face and index based on the edge position
    if (index === 1) { // Top edge
      secondFace = face === 'F' ? 'U' : face === 'B' ? 'U' : face === 'L' ? 'U' : 'U';
      secondIndex = face === 'F' ? 7 : face === 'B' ? 1 : face === 'L' ? 3 : 5;
    } else if (index === 3) { // Left edge
      secondFace = face === 'F' ? 'L' : face === 'B' ? 'R' : face === 'U' ? 'L' : 'L';
      secondIndex = face === 'F' ? 5 : face === 'B' ? 5 : face === 'U' ? 5 : 5;
    } else if (index === 5) { // Right edge
      secondFace = face === 'F' ? 'R' : face === 'B' ? 'L' : face === 'U' ? 'R' : 'R';
      secondIndex = face === 'F' ? 3 : face === 'B' ? 3 : face === 'U' ? 3 : 3;
    } else { // Bottom edge
      secondFace = face === 'F' ? 'D' : face === 'B' ? 'D' : face === 'L' ? 'D' : 'D';
      secondIndex = face === 'F' ? 1 : face === 'B' ? 7 : face === 'L' ? 5 : 3;
    }

    const secondColor = this.state[secondFace][secondIndex];

    // Use targetFace instead of determining it from colors if it's a valid target
    let targetPosition: Face = targetFace;
    if (targetFace === 'U' || targetFace === 'D') {
      // Keep the specified target face
      targetPosition = targetFace;
    } else {
      // Determine target position based on the two colors
      if (firstColor === 'W' || secondColor === 'W') {
        targetPosition = 'U';
      } else if (firstColor === 'Y' || secondColor === 'Y') {
        targetPosition = 'D';
      } else {
        // For middle layer edges
        if ((firstColor === 'R' && secondColor === 'B') || (firstColor === 'B' && secondColor === 'R')) {
          targetPosition = 'R';
        } else if ((firstColor === 'R' && secondColor === 'G') || (firstColor === 'G' && secondColor === 'R')) {
          targetPosition = 'R';
        } else if ((firstColor === 'O' && secondColor === 'B') || (firstColor === 'B' && secondColor === 'O')) {
          targetPosition = 'L';
        } else {
          targetPosition = 'L';
        }
      }
    }

    // Generate moves to get the edge piece to its target position
    if (face !== targetPosition) {
      if (face === 'F' && index === 1) {
        moves.push(...['U', 'R', 'U\'', 'R\'', 'U\'', 'F\'', 'U', 'F'] as Move[]);
      } else if (face === 'R' && index === 1) {
        moves.push(...['U\'', 'F\'', 'U', 'F', 'U', 'R', 'U\'', 'R\''] as Move[]);
      } else {
        // Add appropriate setup moves based on current position
        if (face === 'B') moves.push(...['U2'] as Move[]);
        if (face === 'L') moves.push(...['U\''] as Move[]);
        if (face === 'R') moves.push(...['U'] as Move[]);
        
        // Standard algorithm for edge insertion
        moves.push(...['F', 'R', 'U', 'R\'', 'U\'', 'F\''] as Move[]);
      }
    }

    return moves;
  }

  private getCornerSolutionMoves(corner: { face: Face; index: number }, targetFace: Face): Move[] {
    const moves: Move[] = [];
    const { face, index } = corner;

    // Get the current corner colors
    const firstColor = this.state[face][index];
    
    // Get adjacent faces based on corner position
    const adjacentFaces = this.getCornerAdjacentFaces(face, index);
    const secondColor = this.state[adjacentFaces[0].face][adjacentFaces[0].index];
    const thirdColor = this.state[adjacentFaces[1].face][adjacentFaces[1].index];

    // Use targetFace if it's U or D, otherwise determine from colors
    let targetPosition: Face = targetFace;
    if (targetFace === 'U' || targetFace === 'D') {
      // Keep the specified target face
      targetPosition = targetFace;
    } else {
      // Determine target position based on corner colors
      if (firstColor === 'W' || secondColor === 'W' || thirdColor === 'W') {
        targetPosition = 'U';
      } else if (firstColor === 'Y' || secondColor === 'Y' || thirdColor === 'Y') {
        targetPosition = 'D';
      } else {
        // For middle layer corners (shouldn't happen in a valid cube)
        targetPosition = face;
      }
    }

    // If corner is not in correct position
    if (face !== targetPosition) {
      if (face === 'D') {
        // If corner is on bottom face, bring it up
        if (index === 0) moves.push(...['L', 'U', 'L\''] as Move[]);
        else if (index === 2) moves.push(...['R\'', 'U\'', 'R'] as Move[]);
        else if (index === 6) moves.push(...['L\'', 'U\'', 'L'] as Move[]);
        else if (index === 8) moves.push(...['R', 'U', 'R\''] as Move[]);
      } else {
        // Setup moves to align corner
        if (face === 'F') {
          if (index === 0) moves.push(...['F\'', 'U', 'F'] as Move[]);
          else if (index === 2) moves.push(...['F', 'U\'', 'F\''] as Move[]);
        } else if (face === 'B') {
          if (index === 0) moves.push(...['B', 'U\'', 'B\''] as Move[]);
          else if (index === 2) moves.push(...['B\'', 'U', 'B'] as Move[]);
        }
        
        // Standard corner insertion algorithm
        moves.push(...['U', 'R', 'U\'', 'R\''] as Move[]);
      }
    }

    return moves;
  }

  private getCornerAdjacentFaces(face: Face, index: number): { face: Face; index: number }[] {
    const cornerMap: Record<Face, Record<number, [Face, number][]>> = {
      U: {
        0: [['B', 0], ['L', 0]],
        2: [['B', 2], ['R', 2]],
        6: [['F', 0], ['L', 2]],
        8: [['F', 2], ['R', 0]]
      },
      D: {
        0: [['F', 6], ['L', 8]],
        2: [['F', 8], ['R', 6]],
        6: [['B', 6], ['L', 6]],
        8: [['B', 8], ['R', 8]]
      },
      F: {
        0: [['U', 6], ['L', 2]],
        2: [['U', 8], ['R', 0]],
        6: [['D', 0], ['L', 8]],
        8: [['D', 2], ['R', 6]]
      },
      B: {
        0: [['U', 0], ['L', 0]],
        2: [['U', 2], ['R', 2]],
        6: [['D', 6], ['L', 6]],
        8: [['D', 8], ['R', 8]]
      },
      L: {
        0: [['U', 0], ['B', 0]],
        2: [['U', 6], ['F', 0]],
        6: [['D', 6], ['B', 6]],
        8: [['D', 0], ['F', 6]]
      },
      R: {
        0: [['U', 8], ['F', 2]],
        2: [['U', 2], ['B', 2]],
        6: [['D', 2], ['F', 8]],
        8: [['D', 8], ['B', 8]]
      }
    };

    return cornerMap[face][index].map(([f, i]) => ({ face: f, index: i }));
  }

  private getMiddleLayerSolutionMoves(edge: { face: Face; index: number }): Move[] {
    const { face, index } = edge;
    const moves: Move[] = [];

    // Get current edge colors
    const faceColor = this.state[face][index];
    const otherFaceColor = this.state[index === 3 ? 'L' : 'R'][index === 3 ? 5 : 3];

    // Determine target position based on colors
    let targetFace: Face;
    if ((faceColor === 'R' && otherFaceColor === 'B') || (faceColor === 'B' && otherFaceColor === 'R')) {
      targetFace = 'R';
    } else if ((faceColor === 'R' && otherFaceColor === 'G') || (faceColor === 'G' && otherFaceColor === 'R')) {
      targetFace = 'R';
    } else if ((faceColor === 'O' && otherFaceColor === 'B') || (faceColor === 'B' && otherFaceColor === 'O')) {
      targetFace = 'L';
    } else {
      targetFace = 'L';
    }

    // If edge is not in correct position or orientation
    if (face !== targetFace) {
      // First, get the edge piece to the U layer if it's not already there
      if (face === 'F') {
        if (index === 3) moves.push(...['U\'', 'L\'', 'U', 'L', 'U', 'F', 'U\'', 'F\''] as Move[]);
        else moves.push(...['U', 'R', 'U\'', 'R\'', 'U\'', 'F\'', 'U', 'F'] as Move[]);
      } else if (face === 'R') {
        if (index === 3) moves.push(...['U\'', 'F\'', 'U', 'F', 'U', 'R', 'U\'', 'R\''] as Move[]);
        else moves.push(...['U', 'B', 'U\'', 'B\'', 'U\'', 'R\'', 'U', 'R'] as Move[]);
      } else if (face === 'B') {
        if (index === 3) moves.push(...['U\'', 'R\'', 'U', 'R', 'U', 'B', 'U\'', 'B\''] as Move[]);
        else moves.push(...['U', 'L', 'U\'', 'L\'', 'U\'', 'B\'', 'U', 'B'] as Move[]);
      } else if (face === 'L') {
        if (index === 3) moves.push(...['U\'', 'B\'', 'U', 'B', 'U', 'L', 'U\'', 'L\''] as Move[]);
        else moves.push(...['U', 'F', 'U\'', 'F\'', 'U\'', 'L\'', 'U', 'L'] as Move[]);
      }

      // Then, apply the appropriate algorithm based on the target position
      if (targetFace === 'R') {
        moves.push(...['U', 'R', 'U\'', 'R\'', 'U\'', 'F\'', 'U', 'F'] as Move[]);
      } else {
        moves.push(...['U\'', 'L\'', 'U', 'L', 'U', 'F', 'U\'', 'F\''] as Move[]);
      }
    }

    return moves;
  }

  // State checking methods
  private hasYellowCross(): boolean {
    return this.state.D.filter((color, i) => 
      color === 'Y' && [1, 3, 4, 5, 7].includes(i)
    ).length === 5;
  }

  private hasYellowCorners(): boolean {
    return this.state.D.filter((color, i) => 
      color === 'Y' && [0, 2, 6, 8].includes(i)
    ).length === 4;
  }

  private areYellowCornersOriented(): boolean {
    return this.state.D.every(color => color === 'Y');
  }

  private hasYellowCornersOnBottom(): boolean {
    const corners = [0, 2, 6, 8];
    return corners.every(i => {
      const color = this.state.D[i];
      return color === 'Y' || this.getCornerColors(i).includes('Y');
    });
  }

  private hasTwoAdjacent(): boolean {
    const corners = [[0,2], [2,8], [8,6], [6,0]];
    return corners.some(([c1, c2]) => 
      this.state.D[c1] === 'Y' && this.state.D[c2] === 'Y'
    );
  }

  private isCornerOriented(cornerIndex: number): boolean {
    const cornerPositions = [0, 2, 8, 6];
    return this.state.D[cornerPositions[cornerIndex]] === 'Y';
  }

  private getCornerColors(cornerIndex: number): Color[] {
    const cornerMap: Record<number, [Face, number][]> = {
      0: [['F', 6], ['L', 8]],
      2: [['F', 8], ['R', 6]],
      6: [['B', 6], ['L', 6]],
      8: [['B', 8], ['R', 8]]
    };

    return cornerMap[cornerIndex].map(([face, index]) => this.state[face][index]);
  }

  // Validation methods
  static isValidCubeConfiguration(state: CubeState): boolean {
    // Check if centers match the standard configuration
    const centers = {
      U: state.U[4],
      D: state.D[4],
      F: state.F[4],
      B: state.B[4],
      L: state.L[4],
      R: state.R[4]
    };

    console.log('Centers:', centers);

    // Centers must match standard configuration
    if (centers.U !== 'W' || centers.D !== 'Y' ||
        centers.F !== 'G' || centers.B !== 'B' ||
        centers.L !== 'O' || centers.R !== 'R') {
      console.log('Invalid configuration: centers do not match standard configuration');
      return false;
    }

    // Check edges for valid combinations
    const edges = [
      // U face edges
      [[state.U[1], state.B[1]], [state.U[3], state.L[1]], [state.U[5], state.R[1]], [state.U[7], state.F[1]]],
      // D face edges
      [[state.D[1], state.F[7]], [state.D[3], state.L[7]], [state.D[5], state.R[7]], [state.D[7], state.B[7]]],
      // Middle layer edges
      [[state.F[3], state.L[5]], [state.F[5], state.R[3]], [state.B[3], state.R[5]], [state.B[5], state.L[3]]]
    ];

    // Check for impossible edge color combinations
    const oppositeColors: [Color, Color][] = [['W', 'Y'], ['R', 'O'], ['B', 'G']];
    for (const edge of edges.flat()) {
      for (const [color1, color2] of oppositeColors) {
        if ((edge[0] === color1 && edge[1] === color2) || (edge[0] === color2 && edge[1] === color1)) {
          console.log('Invalid configuration: impossible edge color combination', edge);
          return false;
        }
      }
    }

    // Check corners for valid combinations
    const corners = [
      // Upper layer corners
      [[state.U[0], state.L[0], state.B[2]], [state.U[2], state.B[0], state.R[2]], 
       [state.U[6], state.F[0], state.L[2]], [state.U[8], state.R[0], state.F[2]]],
      // Lower layer corners
      [[state.D[0], state.L[8], state.F[6]], [state.D[2], state.F[8], state.R[6]], 
       [state.D[6], state.B[6], state.L[6]], [state.D[8], state.R[8], state.B[8]]]
    ];

    // Check for impossible corner color combinations
    for (const corner of corners.flat()) {
      // A corner can't have the same color twice
      if (corner[0] === corner[1] || corner[1] === corner[2] || corner[0] === corner[2]) {
        console.log('Invalid configuration: corner has duplicate colors', corner);
        return false;
      }
      // A corner can't have opposite colors
      for (const [color1, color2] of oppositeColors) {
        const cornerColors = corner as Color[];
        if (cornerColors.includes(color1) && cornerColors.includes(color2)) {
          console.log('Invalid configuration: corner has opposite colors', corner);
          return false;
        }
      }
    }

    return true;
  }

  static isValidState(state: CubeState): boolean {
    // First check the basic structure and color counts
    if (!state || typeof state !== 'object') {
      console.log('Invalid state: state is null or not an object');
      return false;
    }
    
    const requiredFaces: Face[] = ['U', 'D', 'L', 'R', 'F', 'B'];
    if (!requiredFaces.every(face => Array.isArray(state[face]) && state[face].length === 9)) {
      console.log('Invalid state: missing faces or invalid face length');
      return false;
    }

    // Check center pieces - they should not be changed
    const centers = {
      U: state.U[4],
      D: state.D[4],
      F: state.F[4],
      B: state.B[4],
      L: state.L[4],
      R: state.R[4]
    };

    if (centers.U !== 'W' || centers.D !== 'Y' ||
        centers.F !== 'G' || centers.B !== 'B' ||
        centers.L !== 'O' || centers.R !== 'R') {
      console.log('Invalid state: centers have been changed from standard configuration', centers);
      console.log('Expected: W Y G B O R');
      console.log('Got:', centers.U, centers.D, centers.F, centers.B, centers.L, centers.R);
      return false;
    }

    // Count occurrences of each color
    const colorCounts: Record<Color, number> = {
      'W': 0, 'Y': 0, 'R': 0, 'O': 0, 'B': 0, 'G': 0
    };
    
    Object.values(state).forEach(face => {
      face.forEach((color: Color) => {
        if (!colorCounts.hasOwnProperty(color)) {
          console.log('Invalid state: invalid color found:', color);
          return false;
        }
        colorCounts[color] = (colorCounts[color] || 0) + 1;
      });
    });

    console.log('Color counts:', colorCounts);

    // Each color should appear exactly 9 times
    for (const [color, count] of Object.entries(colorCounts)) {
      if (count > 9) {
        console.log(`Invalid state: color ${color} appears ${count} times (max allowed is 9)`);
        return false;
      }
    }

    // If all colors have exactly 9 occurrences, also check the physical validity
    if (Object.values(colorCounts).every(count => count === 9)) {
      console.log('Checking physical validity...');
      const isValid = CubeSolver.isValidCubeConfiguration(state);
      if (!isValid) {
        console.log('Invalid state: failed physical validity check');
      }
      return isValid;
    }

    return true;
  }
}

export function solveCube(state: CubeState): Move[] {
  const solver = new CubeSolver(state);
  return solver.solve();
}