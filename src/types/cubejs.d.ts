declare module 'cubejs' {
    // Basic declaration to allow import without type errors.
    interface CubeType {
        asyncInit: () => Promise<void>;
        initSolver: () => void;
        solve: (cubeState?: string) => string;
        random: () => CubeType;
        asString: () => string;
        move: (notation: string) => CubeType;
        // Add the missing methods
        fromString: (notation: string) => CubeType;
    }
    const Cube: CubeType & {
        fromString: (notation: string) => CubeType;
    };
    export default Cube;
} 