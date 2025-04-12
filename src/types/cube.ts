export type Color = 'W' | 'Y' | 'R' | 'O' | 'B' | 'G';

export type Face = 'U' | 'D' | 'L' | 'R' | 'F' | 'B';

export interface CubeState {
  U: Color[];  // Up face
  D: Color[];  // Down face
  L: Color[];  // Left face
  R: Color[];  // Right face
  F: Color[];  // Front face
  B: Color[];  // Back face
}

export type Move = 'U' | 'U\'' | 'D' | 'D\'' | 'L' | 'L\'' | 'R' | 'R\'' | 'F' | 'F\'' | 'B' | 'B\'' |
                  'U2' | 'D2' | 'L2' | 'R2' | 'F2' | 'B2';