import { CubeState, Move, Face, Color } from '@/types/cube';

export class CubeSolver {
  private state: CubeState;
  private solution: Move[] = [];
  private cornerAttempts: number = 0;
  private currentStep: number = 0;
  private solveSteps: {
    id: string;
    name: string;
    description: string;
    tips: string[];
  }[] = [];

  constructor(initialState: CubeState) {
    this.state = { ...initialState };
    this.currentStep = 0;
    this.analyzeCubeAndCreateSteps();
  }

  private analyzeCubeAndCreateSteps() {
    this.solveSteps = [];
    
    // Check white cross
    const whiteEdges = this.findEdges('W');
    const whiteCrossComplete = whiteEdges.every(edge => {
      const { face, index } = edge;
      if (face === 'U' && [1, 3, 5, 7].includes(index)) {
        // Check if adjacent colors match
        const adjacentColor = this.getAdjacentEdgeColor(face, index);
        return adjacentColor === this.getCenterColor(this.getAdjacentFace(face, index));
      }
      return false;
    });

    if (!whiteCrossComplete) {
      this.solveSteps.push({
        id: 'white-cross',
        name: 'White Cross',
        description: 'Create a white cross on the top face by aligning white edge pieces with their center colors.',
        tips: this.getWhiteCrossTips(whiteEdges)
      });
    }

    // Check white corners
    const whiteCorners = this.findCorners('W');
    const whiteCornersComplete = whiteCorners.every(corner => {
      const { face, index } = corner;
      if (face === 'U' && [0, 2, 6, 8].includes(index)) {
        return this.isCornerCorrectlyPlaced(face, index);
      }
      return false;
    });

    if (!whiteCornersComplete) {
      this.solveSteps.push({
        id: 'white-corners',
        name: 'White Corners',
        description: 'Place the white corner pieces in their correct positions on the top layer.',
        tips: this.getWhiteCornerTips(whiteCorners)
      });
    }

    // Check middle layer
    const middleLayerComplete = this.isMiddleLayerComplete();
    if (!middleLayerComplete) {
      this.solveSteps.push({
        id: 'middle-layer',
        name: 'Middle Layer',
        description: 'Solve the middle layer by inserting edge pieces in their correct positions.',
        tips: this.getMiddleLayerTips()
      });
    }

    // Check yellow cross
    const yellowCrossComplete = this.hasYellowCross();
    if (!yellowCrossComplete) {
      this.solveSteps.push({
        id: 'yellow-cross',
        name: 'Yellow Cross',
        description: 'Create a yellow cross on the bottom face.',
        tips: this.getYellowCrossTips()
      });
    }

    // Check yellow corners position
    const yellowCornersPositioned = this.hasYellowCorners();
    if (!yellowCornersPositioned) {
      this.solveSteps.push({
        id: 'yellow-corners',
        name: 'Yellow Corners',
        description: 'Position yellow corners in their correct spots.',
        tips: this.getYellowCornerTips()
      });
    }

    // Check yellow corners orientation
    const yellowCornersOriented = this.areYellowCornersOriented();
    if (!yellowCornersOriented) {
      this.solveSteps.push({
        id: 'orient-corners',
        name: 'Orient Yellow Corners',
        description: 'Orient the yellow corners to complete the cube.',
        tips: this.getYellowCornerOrientationTips()
      });
    }
  }

  private getWhiteCrossTips(whiteEdges: { face: Face; index: number }[]): string[] {
    const tips: string[] = [];
    const misplacedEdges = whiteEdges.filter(edge => {
      const { face, index } = edge;
      return face !== 'U' || ![1, 3, 5, 7].includes(index);
    });

    if (misplacedEdges.length > 0) {
      tips.push(`Found ${misplacedEdges.length} white edge(s) to move: ${this.describeEdgeLocations(misplacedEdges)}`);
    }

    const incorrectlyOrientedEdges = whiteEdges.filter(edge => {
      const { face, index } = edge;
      if (face === 'U' && [1, 3, 5, 7].includes(index)) {
        const adjacentColor = this.getAdjacentEdgeColor(face, index);
        return adjacentColor !== this.getCenterColor(this.getAdjacentFace(face, index));
      }
      return false;
    });

    if (incorrectlyOrientedEdges.length > 0) {
      tips.push(`${incorrectlyOrientedEdges.length} edge(s) need reorienting`);
      tips.push('Use F U\' R U to flip edges');
    }

    tips.push('Align white edges with matching center colors');
    return tips;
  }

  private getWhiteCornerTips(whiteCorners: { face: Face; index: number }[]): string[] {
    const tips: string[] = [];
    const misplacedCorners = whiteCorners.filter(corner => {
      const { face, index } = corner;
      return face !== 'U' || ![0, 2, 6, 8].includes(index);
    });

    if (misplacedCorners.length > 0) {
      tips.push(`Found ${misplacedCorners.length} white corner(s) to place: ${this.describeCornerLocations(misplacedCorners)}`);
      tips.push('Use R U R\' U\' to insert corners');
    }

    const incorrectlyOrientedCorners = whiteCorners.filter(corner => {
      const { face, index } = corner;
      if (face === 'U' && [0, 2, 6, 8].includes(index)) {
        return !this.isCornerCorrectlyPlaced(face, index);
      }
      return false;
    });

    if (incorrectlyOrientedCorners.length > 0) {
      tips.push(`${incorrectlyOrientedCorners.length} corner(s) need reorienting`);
      tips.push('Use R U R\' U\' until corner is correctly oriented');
    }

    return tips;
  }

  private getMiddleLayerTips(): string[] {
    const tips: string[] = [];
    const edges = this.findMiddleLayerEdges();
    const misplacedEdges = edges.filter(edge => !this.isEdgeCorrectlyPlaced(edge.face, edge.index));

    if (misplacedEdges.length > 0) {
      tips.push(`Found ${misplacedEdges.length} edge(s) to insert into middle layer`);
      tips.push('For right insertion: U R U\' R\' U\' F\' U F');
      tips.push('For left insertion: U\' L\' U L U F U\' F\'');
    }

    return tips;
  }

  private getYellowCrossTips(): string[] {
    const tips: string[] = ['Hold yellow center on bottom'];
    
    if (!this.hasYellowEdgesOnTop()) {
      tips.push('No yellow edges on bottom - use F R U R\' U\' F\'');
    } else if (this.hasYellowLine()) {
      tips.push('Line pattern detected - use F R U R\' U\' F\'');
    } else if (this.hasYellowL()) {
      tips.push('L pattern detected - use F U R U\' R\' F\'');
    }

    return tips;
  }

  private getYellowCornerTips(): string[] {
    const tips: string[] = ['Hold yellow center on bottom'];
    
    if (!this.hasYellowCornersOnBottom()) {
      tips.push('Use R U R\' U R U2 R\' to get yellow corners to bottom');
    } else if (this.hasTwoAdjacent()) {
      tips.push('Two adjacent corners found - use R U R\' U R U2 R\'');
    }

    return tips;
  }

  private getYellowCornerOrientationTips(): string[] {
    const tips: string[] = ['Keep yellow on bottom'];
    const unorientedCorners = [0, 2, 6, 8].filter(i => !this.isCornerOriented(i));
    
    tips.push(`${unorientedCorners.length} corner(s) need orienting`);
    tips.push('For each corner: R U R\' U\' (repeat until corner solved)');
    tips.push('Move to next corner with U');

    return tips;
  }

  private describeEdgeLocations(edges: { face: Face; index: number }[]): string {
    return edges.map(({ face, index }) => {
      const position = index === 1 ? 'top' : index === 3 ? 'left' : index === 5 ? 'right' : 'bottom';
      return `${position} of ${this.getFaceName(face)} face`;
    }).join(', ');
  }

  private describeCornerLocations(corners: { face: Face; index: number }[]): string {
    return corners.map(({ face, index }) => {
      const position = index === 0 ? 'top-left' : index === 2 ? 'top-right' : 
                      index === 6 ? 'bottom-left' : 'bottom-right';
      return `${position} of ${this.getFaceName(face)} face`;
    }).join(', ');
  }

  private getFaceName(face: Face): string {
    const names: Record<Face, string> = {
      U: 'Upper', D: 'Bottom', F: 'Front', 
      B: 'Back', L: 'Left', R: 'Right'
    };
    return names[face];
  }

  private getAdjacentFace(face: Face, index: number): Face {
    const adjacentMap: Record<Face, Record<number, Face>> = {
      U: { 1: 'B', 3: 'L', 5: 'R', 7: 'F' },
      D: { 1: 'F', 3: 'L', 5: 'R', 7: 'B' },
      F: { 1: 'U', 3: 'L', 5: 'R', 7: 'D' },
      B: { 1: 'U', 3: 'R', 5: 'L', 7: 'D' },
      L: { 1: 'U', 3: 'B', 5: 'F', 7: 'D' },
      R: { 1: 'U', 3: 'F', 5: 'B', 7: 'D' }
    };
    return adjacentMap[face][index];
  }

  private getAdjacentEdgeColor(face: Face, index: number): Color {
    const adjacentFace = this.getAdjacentFace(face, index);
    const adjacentIndex = this.getOppositeEdgeIndex(index);
    return this.state[adjacentFace][adjacentIndex];
  }

  private getOppositeEdgeIndex(index: number): number {
    const oppositeMap: Record<number, number> = {
      1: 7, 3: 5, 5: 3, 7: 1
    };
    return oppositeMap[index];
  }

  private getCenterColor(face: Face): Color {
    return this.state[face][4];
  }

  private findEdges(color: Color): Array<{ face: Face; index: number }> {
    const edges: Array<{ face: Face; index: number }> = [];
    const faces: Face[] = ['U', 'D', 'L', 'R', 'F', 'B'];
    const edgeIndices = [1, 3, 5, 7];

    faces.forEach(face => {
      edgeIndices.forEach(index => {
        if (this.state[face][index] === color) {
          edges.push({ face, index });
        }
      });
    });

    return edges;
  }

  private findCorners(color: Color): Array<{ face: Face; index: number }> {
    const corners: Array<{ face: Face; index: number }> = [];
    const faces: Face[] = ['U', 'D', 'L', 'R', 'F', 'B'];
    const cornerIndices = [0, 2, 6, 8];

    faces.forEach(face => {
      cornerIndices.forEach(index => {
        if (this.state[face][index] === color) {
          corners.push({ face, index });
        }
      });
    });

    return corners;
  }

  private findMiddleLayerEdges(): Array<{ face: Face; index: number }> {
    const edges: Array<{ face: Face; index: number }> = [];
    const faces: Face[] = ['F', 'B', 'L', 'R'];
    const edgeIndices = [3, 5];

    faces.forEach(face => {
      edgeIndices.forEach(index => {
        if (!this.isEdgeYellow(face, index)) {
          edges.push({ face, index });
        }
      });
    });

    return edges;
  }

  private isEdgeYellow(face: Face, index: number): boolean {
    const edgeColors = this.getEdgeColors(face, index);
    return edgeColors.includes('Y');
  }

  private getEdgeColors(face: Face, index: number): Color[] {
    const colors: Color[] = [this.state[face][index]];
    const adjacentFace = this.getAdjacentFace(face, index);
    const adjacentIndex = this.getOppositeEdgeIndex(index);
    colors.push(this.state[adjacentFace][adjacentIndex]);
    return colors;
  }

  private isEdgeCorrectlyPlaced(face: Face, index: number): boolean {
    const edgeColors = this.getEdgeColors(face, index);
    const targetColors = [
      this.state[face][4],
      this.state[this.getAdjacentFace(face, index)][4]
    ];
    return edgeColors.every((color, i) => color === targetColors[i]);
  }

  private hasYellowCross(): boolean {
    return [1, 3, 5, 7].every(i => this.state.D[i] === 'Y');
  }

  private hasYellowEdgesOnTop(): boolean {
    return [1, 3, 5, 7].some(i => this.state.D[i] === 'Y');
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

  private hasYellowCorners(): boolean {
    return [0, 2, 6, 8].every(i => this.state.D[i] === 'Y');
  }

  private hasYellowCornersOnBottom(): boolean {
    return [0, 2, 6, 8].filter(i => this.state.D[i] === 'Y').length >= 2;
  }

  private hasTwoAdjacent(): boolean {
    const corners = [0, 2, 6, 8];
    return corners.some((c1, i) => 
      corners.some((c2, j) => 
        i !== j && 
        this.state.D[c1] === 'Y' && 
        this.state.D[c2] === 'Y' && 
        this.areAdjacentCorners(c1, c2)
      )
    );
  }

  private areAdjacentCorners(corner1: number, corner2: number): boolean {
    const adjacentPairs = [[0, 2], [2, 8], [8, 6], [6, 0]];
    return adjacentPairs.some(([c1, c2]) => 
      (corner1 === c1 && corner2 === c2) || 
      (corner1 === c2 && corner2 === c1)
    );
  }

  private isCornerOriented(index: number): boolean {
    return this.state.D[index] === 'Y';
  }

  private isMiddleLayerComplete(): boolean {
    const faces: Face[] = ['F', 'B', 'L', 'R'];
    return faces.every(face => 
      [3, 5].every(index => this.isEdgeCorrectlyPlaced(face, index))
    );
  }

  private areYellowCornersOriented(): boolean {
    return [0, 2, 6, 8].every(i => this.state.D[i] === 'Y');
  }

  private isCornerCorrectlyPlaced(face: Face, index: number): boolean {
    const cornerColors = this.getCornerColors(face, index);
    const targetColors = this.getTargetCornerColors(face, index);
    return cornerColors.every((color, i) => color === targetColors[i]);
  }

  private getCornerColors(face: Face, index: number): Color[] {
    const colors: Color[] = [this.state[face][index]];
    const adjacentFaces = this.getAdjacentCornerFaces(face, index);
    adjacentFaces.forEach(({ face: adjFace, index: adjIndex }) => {
      colors.push(this.state[adjFace][adjIndex]);
    });
    return colors;
  }

  private getTargetCornerColors(face: Face, index: number): Color[] {
    const centerColors: Color[] = [this.state[face][4]];
    const adjacentFaces = this.getAdjacentCornerFaces(face, index);
    adjacentFaces.forEach(({ face: adjFace }) => {
      centerColors.push(this.state[adjFace][4]);
    });
    return centerColors;
  }

  private getAdjacentCornerFaces(face: Face, index: number): Array<{ face: Face; index: number }> {
    const cornerMap: Record<Face, Record<number, Array<{ face: Face; index: number }>>> = {
      U: {
        0: [{ face: 'L', index: 2 }, { face: 'B', index: 2 }],
        2: [{ face: 'B', index: 0 }, { face: 'R', index: 2 }],
        6: [{ face: 'L', index: 0 }, { face: 'F', index: 0 }],
        8: [{ face: 'F', index: 2 }, { face: 'R', index: 0 }]
      },
      D: {
        0: [{ face: 'L', index: 8 }, { face: 'F', index: 6 }],
        2: [{ face: 'F', index: 8 }, { face: 'R', index: 6 }],
        6: [{ face: 'L', index: 6 }, { face: 'B', index: 8 }],
        8: [{ face: 'B', index: 6 }, { face: 'R', index: 8 }]
      },
      F: {
        0: [{ face: 'U', index: 6 }, { face: 'L', index: 2 }],
        2: [{ face: 'U', index: 8 }, { face: 'R', index: 0 }],
        6: [{ face: 'D', index: 0 }, { face: 'L', index: 8 }],
        8: [{ face: 'D', index: 2 }, { face: 'R', index: 6 }]
      },
      B: {
        0: [{ face: 'U', index: 2 }, { face: 'R', index: 2 }],
        2: [{ face: 'U', index: 0 }, { face: 'L', index: 2 }],
        6: [{ face: 'D', index: 8 }, { face: 'R', index: 8 }],
        8: [{ face: 'D', index: 6 }, { face: 'L', index: 6 }]
      },
      L: {
        0: [{ face: 'U', index: 0 }, { face: 'B', index: 2 }],
        2: [{ face: 'U', index: 6 }, { face: 'F', index: 0 }],
        6: [{ face: 'D', index: 6 }, { face: 'B', index: 8 }],
        8: [{ face: 'D', index: 0 }, { face: 'F', index: 6 }]
      },
      R: {
        0: [{ face: 'U', index: 8 }, { face: 'F', index: 2 }],
        2: [{ face: 'U', index: 2 }, { face: 'B', index: 0 }],
        6: [{ face: 'D', index: 2 }, { face: 'F', index: 8 }],
        8: [{ face: 'D', index: 8 }, { face: 'B', index: 6 }]
      }
    };
    return cornerMap[face][index];
  }

  private updateState(newState: CubeState) {
    this.state = { ...newState };
    this.analyzeCubeAndCreateSteps();
  }

  applyMove(move: Move) {
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
    
    this.updateState(newState);
  }

  private rotateFace(face: Face, state: CubeState, counterClockwise: boolean = false) {
    // First rotate the stickers on the face itself
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

    // Then rotate the adjacent face stickers
    const rotations = this.getRotationMap(face);
    const tempState = JSON.parse(JSON.stringify(state));

    rotations.forEach(rotation => {
      const [fromFace, fromIndex] = counterClockwise ? rotation[1] : rotation[0];
      const [toFace, toIndex] = counterClockwise ? rotation[0] : rotation[1];
      state[toFace][toIndex] = tempState[fromFace][fromIndex];
    });
  }

  private getRotationMap(face: Face): [Face, number][][] {
    const maps: Record<Face, [Face, number][][]> = {
      U: [
        [['B', 2], ['R', 2]], [['B', 1], ['R', 1]], [['B', 0], ['R', 0]],
        [['R', 2], ['F', 2]], [['R', 1], ['F', 1]], [['R', 0], ['F', 0]],
        [['F', 2], ['L', 2]], [['F', 1], ['L', 1]], [['F', 0], ['L', 0]],
        [['L', 2], ['B', 2]], [['L', 1], ['B', 1]], [['L', 0], ['B', 0]]
      ],
      D: [
        [['F', 6], ['R', 6]], [['F', 7], ['R', 7]], [['F', 8], ['R', 8]],
        [['R', 6], ['B', 6]], [['R', 7], ['B', 7]], [['R', 8], ['B', 8]],
        [['B', 6], ['L', 6]], [['B', 7], ['L', 7]], [['B', 8], ['L', 8]],
        [['L', 6], ['F', 6]], [['L', 7], ['F', 7]], [['L', 8], ['F', 8]]
      ],
      F: [
        [['U', 6], ['R', 0]], [['U', 7], ['R', 3]], [['U', 8], ['R', 6]],
        [['R', 0], ['D', 2]], [['R', 3], ['D', 1]], [['R', 6], ['D', 0]],
        [['D', 2], ['L', 8]], [['D', 1], ['L', 5]], [['D', 0], ['L', 2]],
        [['L', 8], ['U', 6]], [['L', 5], ['U', 7]], [['L', 2], ['U', 8]]
      ],
      B: [
        [['U', 2], ['L', 0]], [['U', 1], ['L', 3]], [['U', 0], ['L', 6]],
        [['L', 0], ['D', 6]], [['L', 3], ['D', 7]], [['L', 6], ['D', 8]],
        [['D', 6], ['R', 8]], [['D', 7], ['R', 5]], [['D', 8], ['R', 2]],
        [['R', 8], ['U', 2]], [['R', 5], ['U', 1]], [['R', 2], ['U', 0]]
      ],
      L: [
        [['U', 0], ['F', 0]], [['U', 3], ['F', 3]], [['U', 6], ['F', 6]],
        [['F', 0], ['D', 0]], [['F', 3], ['D', 3]], [['F', 6], ['D', 6]],
        [['D', 0], ['B', 8]], [['D', 3], ['B', 5]], [['D', 6], ['B', 2]],
        [['B', 8], ['U', 0]], [['B', 5], ['U', 3]], [['B', 2], ['U', 6]]
      ],
      R: [
        [['U', 8], ['B', 0]], [['U', 5], ['B', 3]], [['U', 2], ['B', 6]],
        [['B', 0], ['D', 8]], [['B', 3], ['D', 5]], [['B', 6], ['D', 2]],
        [['D', 8], ['F', 8]], [['D', 5], ['F', 5]], [['D', 2], ['F', 2]],
        [['F', 8], ['U', 8]], [['F', 5], ['U', 5]], [['F', 2], ['U', 2]]
      ]
    };
    return maps[face];
  }

  static isValidState(state: CubeState): boolean {
    // First check the basic structure
    if (!state || typeof state !== 'object') return false;
    
    const requiredFaces: Face[] = ['U', 'D', 'L', 'R', 'F', 'B'];
    if (!requiredFaces.every(face => Array.isArray(state[face]) && state[face].length === 9)) {
      return false;
    }

    // Check center pieces - they should match standard configuration
    const centerChecks = {
      U: 'W', D: 'Y', F: 'G',
      B: 'B', L: 'O', R: 'R'
    };

    for (const [face, color] of Object.entries(centerChecks) as [Face, Color][]) {
      if (state[face][4] !== color) return false;
    }

    // Count colors to ensure each appears exactly 9 times
    const colorCounts: Record<Color, number> = { W: 0, Y: 0, R: 0, O: 0, B: 0, G: 0 };
    for (const face of requiredFaces) {
      for (const color of state[face]) {
        if (color in colorCounts) {
          colorCounts[color as Color]++;
        } else {
          return false; // Invalid color found
        }
      }
    }

    return Object.values(colorCounts).every(count => count === 9);
  }

  private solveWhiteCross(): Move[] {
    const moves: Move[] = [];
    const whiteEdges = this.findEdges('W');
    
    // First get all white edges to the top face
    whiteEdges.forEach(edge => {
      const { face, index } = edge;
      if (face === 'D') {
        // If on bottom, bring directly to top
        if (index === 1) moves.push(...['F', 'F'] as Move[]);
        else if (index === 3) moves.push(...['L', 'L'] as Move[]);
        else if (index === 5) moves.push(...['R', 'R'] as Move[]);
        else if (index === 7) moves.push(...['B', 'B'] as Move[]);
      } else if (face === 'F' || face === 'B' || face === 'L' || face === 'R') {
        // If on middle layer, bring to top with appropriate algorithm
        if (index === 3 || index === 5) {
          if (face === 'F') moves.push(...['F', 'R', 'U\'', 'R\'', 'F\''] as Move[]);
          else if (face === 'B') moves.push(...['B', 'L', 'U\'', 'L\'', 'B\''] as Move[]);
          else if (face === 'L') moves.push(...['L', 'F', 'U\'', 'F\'', 'L\''] as Move[]);
          else if (face === 'R') moves.push(...['R', 'B', 'U\'', 'B\'', 'R\''] as Move[]);
        }
      }
    });

    // Then orient and position each edge correctly
    for (let i = 0; i < 4; i++) {
      // Keep rotating top until we find a white edge that needs fixing
      while (!this.isEdgeCorrectlyPlaced('U', [1, 3, 5, 7][i])) {
        moves.push('U' as Move);
      }

      // Once found, apply appropriate algorithm based on position
      const targetFace = ['B', 'L', 'R', 'F'][i];
      const currentEdge = this.findEdges('W').find(e => e.face === 'U' && e.index === [1, 3, 5, 7][i]);
      
      if (currentEdge) {
        // If edge is flipped, apply flip algorithm
        if (!this.isEdgeCorrectlyPlaced('U', currentEdge.index)) {
          if (targetFace === 'F') moves.push(...['F', 'U', 'R', 'U\'', 'R\'', 'F\''] as Move[]);
          else if (targetFace === 'R') moves.push(...['R', 'U', 'B', 'U\'', 'B\'', 'R\''] as Move[]);
          else if (targetFace === 'B') moves.push(...['B', 'U', 'L', 'U\'', 'L\'', 'B\''] as Move[]);
          else if (targetFace === 'L') moves.push(...['L', 'U', 'F', 'U\'', 'F\'', 'L\''] as Move[]);
        }
      }
    }

    this.solution.push(...moves);
    return moves;
  }

  private solveWhiteCorners(): Move[] {
    const moves: Move[] = [];
    const whiteCorners = this.findCorners('W');
    
    // First get all white corners to the top face
    whiteCorners.forEach(corner => {
      const { face, index } = corner;
      if (face === 'D') {
        // If on bottom, bring up with sexy move
        if (index === 0) moves.push(...['L', 'U', 'L\''] as Move[]);
        else if (index === 2) moves.push(...['R\'', 'U\'', 'R'] as Move[]);
        else if (index === 6) moves.push(...['B', 'U', 'B\''] as Move[]);
        else if (index === 8) moves.push(...['F\'', 'U\'', 'F'] as Move[]);
      }
    });

    // Then position and orient each corner correctly
    for (let i = 0; i < 4; i++) {
      const cornerIndex = [0, 2, 6, 8][i];
      
      // Keep applying algorithm until corner is correct
      while (!this.isCornerCorrectlyPlaced('U', cornerIndex)) {
        const corner = this.findCorners('W').find(c => c.face === 'U' && c.index === cornerIndex);
        if (corner) {
          // Apply sexy move until corner is oriented correctly
          moves.push(...['R', 'U', 'R\'', 'U\''] as Move[]);
        } else {
          // If corner is not in position, bring it up from wherever it is
          const misplacedCorner = this.findCorners('W').find(c => !this.isCornerCorrectlyPlaced(c.face, c.index));
          if (misplacedCorner) {
            moves.push(...['R', 'U', 'R\'', 'U\''] as Move[]);
          }
        }
      }
      
      // Move to next corner
      if (i < 3) moves.push('U' as Move);
    }

    this.solution.push(...moves);
    return moves;
  }

  private solveMiddleLayer(): Move[] {
    const moves: Move[] = [];
    const middleEdges = this.findMiddleLayerEdges();

    while (!this.isMiddleLayerComplete()) {
      for (const edge of middleEdges) {
        if (!this.isEdgeCorrectlyPlaced(edge.face, edge.index)) {
          // Get the edge colors
          const colors = this.getEdgeColors(edge.face, edge.index);
          const targetFace = this.getFaceForColors(colors[0], colors[1]);

          if (targetFace) {
            // If edge needs to go to the right
            if (edge.index === 5) {
              moves.push(...['U', 'R', 'U\'', 'R\'', 'U\'', 'F\'', 'U', 'F'] as Move[]);
            }
            // If edge needs to go to the left
            else if (edge.index === 3) {
              moves.push(...['U\'', 'L\'', 'U', 'L', 'U', 'F', 'U\'', 'F\''] as Move[]);
            }
          }
        }
      }
      // If we can't make progress, move an edge out and try again
      if (!this.isMiddleLayerComplete()) {
        moves.push(...['R', 'U', 'R\'', 'U\'', 'F\'', 'U', 'F'] as Move[]);
      }
    }

    this.solution.push(...moves);
    return moves;
  }

  private solveYellowCross(): Move[] {
    const moves: Move[] = [];

    while (!this.hasYellowCross()) {
      if (this.hasYellowL()) {
        moves.push(...['F', 'R', 'U', 'R\'', 'U\'', 'F\''] as Move[]);
      } else if (this.hasYellowLine()) {
        moves.push(...['F', 'R', 'U', 'R\'', 'U\'', 'F\''] as Move[]);
        moves.push('U' as Move);
      } else {
        moves.push(...['F', 'R', 'U', 'R\'', 'U\'', 'F\''] as Move[]);
      }
    }

    // Orient the cross
    while (!this.areYellowEdgesOriented()) {
      moves.push(...['R', 'U', 'R\'', 'U', 'R', 'U2', 'R\''] as Move[]);
      moves.push('U' as Move);
    }

    this.solution.push(...moves);
    return moves;
  }

  private solveYellowCorners(): Move[] {
    const moves: Move[] = [];

    // First get all yellow corners to bottom face
    while (!this.hasYellowCornersOnBottom()) {
      moves.push(...['R', 'U', 'R\'', 'U', 'R', 'U2', 'R\''] as Move[]);
    }

    // Then permute corners until they're in correct positions
    while (!this.hasYellowCorners()) {
      if (this.hasTwoAdjacent()) {
        moves.push(...['R', 'U', 'R\'', 'U', 'R', 'U2', 'R\''] as Move[]);
      } else {
        moves.push('U' as Move);
      }
    }

    this.solution.push(...moves);
    return moves;
  }

  private orientYellowCorners(): Move[] {
    const moves: Move[] = [];
    
    // Orient each corner one at a time
    for (let i = 0; i < 4; i++) {
      while (!this.isCornerOriented(i)) {
        moves.push(...['R', 'U', 'R\'', 'U\''] as Move[]);
      }
      if (i < 3) moves.push('U' as Move);
    }

    this.solution.push(...moves);
    return moves;
  }

  private getFaceForColors(color1: Color, color2: Color): Face | null {
    const colorPairs: Record<string, Face> = {
      'RG': 'F', 'GR': 'F',
      'RB': 'B', 'BR': 'B',
      'OG': 'F', 'GO': 'F',
      'OB': 'B', 'BO': 'B'
    };
    return colorPairs[`${color1}${color2}`] || null;
  }

  private areYellowEdgesOriented(): boolean {
    return this.hasYellowCross() && 
           ['F', 'R', 'B', 'L'].every(face => 
             this.state[face as Face][7] === this.state[face as Face][4]
           );
  }
}