(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/ColorPicker.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ColorPicker)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const COLORS = [
    {
        color: 'W',
        background: 'bg-cube-white',
        label: 'White'
    },
    {
        color: 'Y',
        background: 'bg-cube-yellow',
        label: 'Yellow'
    },
    {
        color: 'R',
        background: 'bg-cube-red',
        label: 'Red'
    },
    {
        color: 'O',
        background: 'bg-cube-orange',
        label: 'Orange'
    },
    {
        color: 'B',
        background: 'bg-cube-blue',
        label: 'Blue'
    },
    {
        color: 'G',
        background: 'bg-cube-green',
        label: 'Green'
    }
];
function ColorPicker({ selectedColor, onColorSelect }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-black p-6 rounded-xl shadow-lg border border-gray-800",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-lg font-medium text-white mb-4 flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        className: "text-primary",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "13.5",
                                cy: "6.5",
                                r: "2.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ColorPicker.tsx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "17.5",
                                cy: "10.5",
                                r: "2.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ColorPicker.tsx",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "8.5",
                                cy: "7.5",
                                r: "2.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ColorPicker.tsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "6.5",
                                cy: "12.5",
                                r: "2.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ColorPicker.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ColorPicker.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    "Select a Color"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ColorPicker.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-3 gap-4",
                children: COLORS.map(({ color, background, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onColorSelect(color),
                        className: "relative group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black",
                        "aria-label": `Select ${label} color`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `
                aspect-square rounded-lg transition-all duration-200 
                ${background} border-2 border-gray-800
                ${selectedColor === color ? 'ring-4 ring-primary ring-offset-4 scale-110 shadow-lg' : 'hover:scale-105 hover:shadow-md'}
              `,
                                style: {
                                    width: '50px',
                                    height: '50px'
                                },
                                children: selectedColor === color && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "h-8 w-8 text-white drop-shadow-md",
                                        viewBox: "0 0 20 20",
                                        fill: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            fillRule: "evenodd",
                                            d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                            clipRule: "evenodd"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ColorPicker.tsx",
                                            lineNumber: 51,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ColorPicker.tsx",
                                        lineNumber: 50,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ColorPicker.tsx",
                                    lineNumber: 49,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ColorPicker.tsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block text-sm font-medium text-center mt-2 text-white",
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/src/components/ColorPicker.tsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this)
                        ]
                    }, color, true, {
                        fileName: "[project]/src/components/ColorPicker.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/ColorPicker.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ColorPicker.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c = ColorPicker;
var _c;
__turbopack_context__.k.register(_c, "ColorPicker");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/utils/cube.worker.ts (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/cube.worker.4b1f5e32.ts");}}),
"[project]/src/utils/cube.worker.ts [app-client] (ecmascript, worker loader)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(__turbopack_context__.b([
  "static/chunks/src_utils_cube_worker_ts_d8550adc._.js",
  "static/chunks/src_utils_cube_worker_ts_4f01422f._.js",
  "static/chunks/src_utils_cube_worker_ts_27d3469c._.js"
]));
}}),
"[project]/src/utils/cubeSolver.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "CubeSolver": (()=>CubeSolver)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cubejs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cubejs/index.js [app-client] (ecmascript)");
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("src/utils/cubeSolver.ts")}`;
    }
};
;
// Define the facelet order expected by cubejs (U, R, F, D, L, B)
const faceletOrder = [
    'U',
    'R',
    'F',
    'D',
    'L',
    'B'
];
const colorToFacelet = {
    W: 'U',
    R: 'R',
    G: 'F',
    Y: 'D',
    O: 'L',
    B: 'B'
};
const faceletToColor = {
    U: 'W',
    R: 'R',
    F: 'G',
    D: 'Y',
    L: 'O',
    B: 'B'
};
// A mapping to convert face letters to more understandable names
const faceToDescription = {
    'U': 'top',
    'D': 'bottom',
    'F': 'front',
    'B': 'back',
    'L': 'left',
    'R': 'right'
};
// A mapping to convert move notation to user-friendly descriptions
const moveToDirection = {
    '': 'clockwise',
    "'": 'counterclockwise',
    '2': 'twice'
};
// Helper to convert our CubeState to cubejs facelet string
function stateToFaceletString(state) {
    let str = '';
    for (const face of faceletOrder){
        for (const color of state[face]){
            str += colorToFacelet[color];
        }
    }
    return str;
}
// Helper to convert cubejs facelet string back to our CubeState
// (Potentially useful, but not strictly needed for solving)
function faceletStringToState(faceletString) {
    const state = {};
    let index = 0;
    for (const face of faceletOrder){
        state[face] = [];
        for(let i = 0; i < 9; i++){
            state[face].push(faceletToColor[faceletString[index++]]);
        }
    }
    return state;
}
class CubeSolver {
    state;
    cubejsInstance = null;
    static solverInitialized = false;
    static solverInitializing = false;
    solution = [];
    // --- Public static getters for initialization status ---
    static isEngineInitialized() {
        return CubeSolver.solverInitialized;
    }
    static isEngineInitializing() {
        return CubeSolver.solverInitializing;
    }
    // --- End of status getters ---
    constructor(initialState){
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
    static async initializeSolver() {
        if (CubeSolver.solverInitialized || CubeSolver.solverInitializing) return;
        console.log("Initializing Kociemba solver tables...");
        CubeSolver.solverInitializing = true;
        return new Promise((resolve, reject)=>{
            // Use requestAnimationFrame to defer the work and avoid freezing the UI
            requestAnimationFrame(()=>{
                try {
                    // Break up the computation with setTimeout to allow UI updates
                    setTimeout(()=>{
                        try {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cubejs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].initSolver();
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
    static async ensureSolverInitialized() {
        if (!CubeSolver.solverInitialized && !CubeSolver.solverInitializing) {
            await CubeSolver.initializeSolver();
        } else if (CubeSolver.solverInitializing) {
            await new Promise((resolve, reject)=>{
                const interval = setInterval(()=>{
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
    initializeCubejsInstance() {
        try {
            const faceletString = stateToFaceletString(this.state);
            this.cubejsInstance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cubejs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromString(faceletString);
        } catch (e) {
            console.error("Failed to create cubejs instance from state:", e);
            console.error("State:", JSON.stringify(this.state));
            // Handle error - perhaps the state is invalid despite passing initial check?
            this.cubejsInstance = null;
        }
    }
    // Solve the cube with improved handling to prevent UI freezing
    async solve() {
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
   */ static getBeginnerFriendlyInstructions(solution) {
        return solution.map((move)=>{
            // Parse the move into face and direction
            const face = move.charAt(0);
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
   */ static getGroupedSolution(solution) {
        const result = [];
        // Group the solution into chunks of 3-4 moves for easier digestion
        for(let i = 0; i < solution.length; i += 3){
            const chunk = solution.slice(i, i + 3);
            result.push({
                moves: chunk,
                description: `Step ${Math.floor(i / 3) + 1}: Apply these ${chunk.length} moves`
            });
        }
        return result;
    }
    // Implementation of solve that breaks computation into chunks to prevent UI freeze
    solveWithChunkedExecution() {
        return new Promise((resolve, reject)=>{
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
            setTimeout(()=>{
                reject(new Error("Solving timed out after 30 seconds. The cube may be too complex or in an invalid state."));
            }, 30000);
        });
    }
    // Solve using a web worker (best option for preventing UI freeze)
    solveWithWebWorker(resolve, reject) {
        try {
            // Use a dynamic import for the worker using the Next.js worker strategy
            if ("TURBOPACK compile-time truthy", 1) {
                // We're in the browser environment
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const worker = new Worker(__turbopack_context__.r("[project]/src/utils/cube.worker.ts [app-client] (ecmascript, worker loader)"));
                // Set up message handler
                worker.onmessage = (e)=>{
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
                worker.onerror = (e)=>{
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
                "TURBOPACK unreachable";
            }
        } catch (e) {
            console.error("Failed to create web worker, falling back to time slicing:", e);
            // Fallback to chunked execution
            this.solveWithTimeSlicing(resolve, reject);
        }
    }
    // Fallback method using time slicing for older browsers
    solveWithTimeSlicing(resolve, reject) {
        // Store the instance for use in callbacks
        const cubeInstance = this.cubejsInstance;
        // Set a flag to indicate we're calculating
        let isSolving = true;
        let attempts = 0;
        const MAX_ATTEMPTS = 20; // Limit the number of solution attempts
        // Function to be executed in small chunks
        const executeChunk = ()=>{
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
                const yieldToUI = ()=>new Promise((resolve)=>{
                        // First yield with setTimeout (macrotask)
                        setTimeout(()=>{
                            // Then with requestAnimationFrame (before next paint)
                            requestAnimationFrame(()=>{
                                resolve(null);
                            });
                        }, 0);
                    });
                // Function to solve in chunks
                const solveWithYield = async ()=>{
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
                        const error = e;
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
                            setTimeout(()=>{
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
                    setTimeout(()=>{
                        executeChunk();
                    }, 100);
                } else {
                    isSolving = false;
                    reject(new Error("Failed to calculate solution: " + error.message));
                }
            }
        };
        // Start the first chunk after a short delay
        setTimeout(()=>{
            executeChunk();
        }, 10);
    }
    /**
   * Formats the solution string returned by cubejs into an array of move notations
   */ formatSolution(solutionString) {
        if (!solutionString) {
            return [];
        }
        // Convert the solution string (e.g., "U F R2 B'") to string array
        return solutionString.trim().split(/\s+/).filter(Boolean);
    }
    // Get the stored solution
    getSolution() {
        return [
            ...this.solution
        ]; // Return a copy
    }
    // Public getter for the current state
    getState() {
        // Return a deep copy to prevent external modification
        return JSON.parse(JSON.stringify(this.state));
    }
    // --- Core Cube State and Manipulation ---
    // (Keep applyMove, rotateFace, getRotationMap, isValidState)
    // Updates the internal state AND the cubejsInstance
    updateState(newState) {
        this.state = newState; // Keep our state representation
        this.initializeCubejsInstance(); // Re-sync cubejs instance
    }
    // Applies a move to both our state and the cubejs instance
    applyMove(move) {
        if (!this.cubejsInstance) {
            console.warn("Cannot apply move: cubejs instance not available.");
            return;
        }
        const face = move[0];
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
    rotateFace(face, state, counterClockwise = false) {
        const faceStickers = [
            ...state[face]
        ];
        if (counterClockwise) {
            state[face][0] = faceStickers[2];
            state[face][1] = faceStickers[5];
            state[face][2] = faceStickers[8];
            state[face][3] = faceStickers[1];
            state[face][5] = faceStickers[7];
            state[face][6] = faceStickers[0];
            state[face][7] = faceStickers[3];
            state[face][8] = faceStickers[6];
        } else {
            state[face][0] = faceStickers[6];
            state[face][1] = faceStickers[3];
            state[face][2] = faceStickers[0];
            state[face][3] = faceStickers[7];
            state[face][5] = faceStickers[1];
            state[face][6] = faceStickers[8];
            state[face][7] = faceStickers[5];
            state[face][8] = faceStickers[2];
        }
        const rotations = this.getRotationMap(face);
        const tempState = JSON.parse(JSON.stringify(state));
        rotations.forEach(([[fromFace, fromIdx], [toFace, toIdx]])=>{
            const [actualFromFace, actualFromIdx] = counterClockwise ? [
                toFace,
                toIdx
            ] : [
                fromFace,
                fromIdx
            ];
            const [actualToFace, actualToIdx] = counterClockwise ? [
                fromFace,
                fromIdx
            ] : [
                toFace,
                toIdx
            ];
            state[actualToFace][actualToIdx] = tempState[actualFromFace][actualFromIdx];
        });
    }
    // Provides the sticker mapping for rotations - Keep this logic
    getRotationMap(face) {
        const maps = {
            U: [
                [
                    [
                        'B',
                        0
                    ],
                    [
                        'R',
                        0
                    ]
                ],
                [
                    [
                        'B',
                        1
                    ],
                    [
                        'R',
                        1
                    ]
                ],
                [
                    [
                        'B',
                        2
                    ],
                    [
                        'R',
                        2
                    ]
                ],
                [
                    [
                        'R',
                        0
                    ],
                    [
                        'F',
                        0
                    ]
                ],
                [
                    [
                        'R',
                        1
                    ],
                    [
                        'F',
                        1
                    ]
                ],
                [
                    [
                        'R',
                        2
                    ],
                    [
                        'F',
                        2
                    ]
                ],
                [
                    [
                        'F',
                        0
                    ],
                    [
                        'L',
                        0
                    ]
                ],
                [
                    [
                        'F',
                        1
                    ],
                    [
                        'L',
                        1
                    ]
                ],
                [
                    [
                        'F',
                        2
                    ],
                    [
                        'L',
                        2
                    ]
                ],
                [
                    [
                        'L',
                        0
                    ],
                    [
                        'B',
                        0
                    ]
                ],
                [
                    [
                        'L',
                        1
                    ],
                    [
                        'B',
                        1
                    ]
                ],
                [
                    [
                        'L',
                        2
                    ],
                    [
                        'B',
                        2
                    ]
                ]
            ],
            D: [
                [
                    [
                        'F',
                        6
                    ],
                    [
                        'L',
                        6
                    ]
                ],
                [
                    [
                        'F',
                        7
                    ],
                    [
                        'L',
                        7
                    ]
                ],
                [
                    [
                        'F',
                        8
                    ],
                    [
                        'L',
                        8
                    ]
                ],
                [
                    [
                        'L',
                        6
                    ],
                    [
                        'B',
                        6
                    ]
                ],
                [
                    [
                        'L',
                        7
                    ],
                    [
                        'B',
                        7
                    ]
                ],
                [
                    [
                        'L',
                        8
                    ],
                    [
                        'B',
                        8
                    ]
                ],
                [
                    [
                        'B',
                        6
                    ],
                    [
                        'R',
                        6
                    ]
                ],
                [
                    [
                        'B',
                        7
                    ],
                    [
                        'R',
                        7
                    ]
                ],
                [
                    [
                        'B',
                        8
                    ],
                    [
                        'R',
                        8
                    ]
                ],
                [
                    [
                        'R',
                        6
                    ],
                    [
                        'F',
                        6
                    ]
                ],
                [
                    [
                        'R',
                        7
                    ],
                    [
                        'F',
                        7
                    ]
                ],
                [
                    [
                        'R',
                        8
                    ],
                    [
                        'F',
                        8
                    ]
                ]
            ],
            F: [
                [
                    [
                        'U',
                        6
                    ],
                    [
                        'L',
                        8
                    ]
                ],
                [
                    [
                        'U',
                        7
                    ],
                    [
                        'L',
                        5
                    ]
                ],
                [
                    [
                        'U',
                        8
                    ],
                    [
                        'L',
                        2
                    ]
                ],
                [
                    [
                        'L',
                        8
                    ],
                    [
                        'D',
                        2
                    ]
                ],
                [
                    [
                        'L',
                        5
                    ],
                    [
                        'D',
                        1
                    ]
                ],
                [
                    [
                        'L',
                        2
                    ],
                    [
                        'D',
                        0
                    ]
                ],
                [
                    [
                        'D',
                        2
                    ],
                    [
                        'R',
                        0
                    ]
                ],
                [
                    [
                        'D',
                        1
                    ],
                    [
                        'R',
                        3
                    ]
                ],
                [
                    [
                        'D',
                        0
                    ],
                    [
                        'R',
                        6
                    ]
                ],
                [
                    [
                        'R',
                        0
                    ],
                    [
                        'U',
                        6
                    ]
                ],
                [
                    [
                        'R',
                        3
                    ],
                    [
                        'U',
                        7
                    ]
                ],
                [
                    [
                        'R',
                        6
                    ],
                    [
                        'U',
                        8
                    ]
                ]
            ],
            B: [
                [
                    [
                        'U',
                        0
                    ],
                    [
                        'R',
                        2
                    ]
                ],
                [
                    [
                        'U',
                        1
                    ],
                    [
                        'R',
                        5
                    ]
                ],
                [
                    [
                        'U',
                        2
                    ],
                    [
                        'R',
                        8
                    ]
                ],
                [
                    [
                        'R',
                        2
                    ],
                    [
                        'D',
                        8
                    ]
                ],
                [
                    [
                        'R',
                        5
                    ],
                    [
                        'D',
                        7
                    ]
                ],
                [
                    [
                        'R',
                        8
                    ],
                    [
                        'D',
                        6
                    ]
                ],
                [
                    [
                        'D',
                        8
                    ],
                    [
                        'L',
                        6
                    ]
                ],
                [
                    [
                        'D',
                        7
                    ],
                    [
                        'L',
                        3
                    ]
                ],
                [
                    [
                        'D',
                        6
                    ],
                    [
                        'L',
                        0
                    ]
                ],
                [
                    [
                        'L',
                        6
                    ],
                    [
                        'U',
                        0
                    ]
                ],
                [
                    [
                        'L',
                        3
                    ],
                    [
                        'U',
                        1
                    ]
                ],
                [
                    [
                        'L',
                        0
                    ],
                    [
                        'U',
                        2
                    ]
                ]
            ],
            L: [
                [
                    [
                        'U',
                        0
                    ],
                    [
                        'B',
                        8
                    ]
                ],
                [
                    [
                        'U',
                        3
                    ],
                    [
                        'B',
                        5
                    ]
                ],
                [
                    [
                        'U',
                        6
                    ],
                    [
                        'B',
                        2
                    ]
                ],
                [
                    [
                        'B',
                        8
                    ],
                    [
                        'D',
                        0
                    ]
                ],
                [
                    [
                        'B',
                        5
                    ],
                    [
                        'D',
                        3
                    ]
                ],
                [
                    [
                        'B',
                        2
                    ],
                    [
                        'D',
                        6
                    ]
                ],
                [
                    [
                        'D',
                        0
                    ],
                    [
                        'F',
                        0
                    ]
                ],
                [
                    [
                        'D',
                        3
                    ],
                    [
                        'F',
                        3
                    ]
                ],
                [
                    [
                        'D',
                        6
                    ],
                    [
                        'F',
                        6
                    ]
                ],
                [
                    [
                        'F',
                        0
                    ],
                    [
                        'U',
                        0
                    ]
                ],
                [
                    [
                        'F',
                        3
                    ],
                    [
                        'U',
                        3
                    ]
                ],
                [
                    [
                        'F',
                        6
                    ],
                    [
                        'U',
                        6
                    ]
                ]
            ],
            R: [
                [
                    [
                        'U',
                        2
                    ],
                    [
                        'F',
                        2
                    ]
                ],
                [
                    [
                        'U',
                        5
                    ],
                    [
                        'F',
                        5
                    ]
                ],
                [
                    [
                        'U',
                        8
                    ],
                    [
                        'F',
                        8
                    ]
                ],
                [
                    [
                        'F',
                        2
                    ],
                    [
                        'D',
                        2
                    ]
                ],
                [
                    [
                        'F',
                        5
                    ],
                    [
                        'D',
                        5
                    ]
                ],
                [
                    [
                        'F',
                        8
                    ],
                    [
                        'D',
                        8
                    ]
                ],
                [
                    [
                        'D',
                        2
                    ],
                    [
                        'B',
                        6
                    ]
                ],
                [
                    [
                        'D',
                        5
                    ],
                    [
                        'B',
                        3
                    ]
                ],
                [
                    [
                        'D',
                        8
                    ],
                    [
                        'B',
                        0
                    ]
                ],
                [
                    [
                        'B',
                        6
                    ],
                    [
                        'U',
                        2
                    ]
                ],
                [
                    [
                        'B',
                        3
                    ],
                    [
                        'U',
                        5
                    ]
                ],
                [
                    [
                        'B',
                        0
                    ],
                    [
                        'U',
                        8
                    ]
                ]
            ]
        };
        // The maps define clockwise rotation [from, to].
        // We need to adjust the indices based on counterClockwise flag during application.
        // The structure returns [[from, to], [from, to], ...] pairs for clockwise rotation.
        return maps[face];
    }
    // Validates the structure and color counts - Keep this logic
    static isValidState(state) {
        // First check basic structure
        if (!state || typeof state !== 'object') {
            console.error("Invalid state: Cube state is null or not an object.");
            return false;
        }
        const requiredFaces = [
            'U',
            'D',
            'L',
            'R',
            'F',
            'B'
        ];
        if (!requiredFaces.every((face)=>Array.isArray(state[face]) && state[face].length === 9)) {
            console.error("Invalid state: Missing faces or incorrect facelet count.");
            return false;
        }
        // Check color counts
        const colorCounts = {
            W: 0,
            Y: 0,
            R: 0,
            O: 0,
            B: 0,
            G: 0
        };
        let totalCount = 0;
        for (const face of requiredFaces){
            for (const color of state[face]){
                if (!(color in colorCounts)) {
                    console.error(`Invalid state: Unknown color '${color}' found on face ${face}.`);
                    return false; // Invalid color found
                }
                colorCounts[color]++;
                totalCount++;
            }
        }
        if (totalCount !== 54) {
            console.error(`Invalid state: Total facelets count is ${totalCount}, expected 54.`);
            return false;
        }
        // Check if each color appears exactly 9 times
        const incorrectColors = Object.entries(colorCounts).filter(([_, count])=>count !== 9);
        if (incorrectColors.length > 0) {
            console.error("Invalid state: Incorrect color counts.", incorrectColors.map(([color, count])=>`${color}: ${count}`).join(', '));
            return false;
        }
        // Now try to create a cubejs instance to validate the state
        try {
            // Attempt to create a Cube instance from the state
            const faceletString = stateToFaceletString(state);
            const cube = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cubejs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromString(faceletString);
            // Additional check: center pieces must be different
            const centers = [
                state.U[4],
                state.D[4],
                state.F[4],
                state.B[4],
                state.L[4],
                state.R[4]
            ];
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
} // Example usage (optional, for testing)
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/CubeInput.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CubeInput)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ColorPicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ColorPicker.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cubeSolver$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/cubeSolver.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function CubeInput({ initialDisplayState, onSubmit, onResetRequest }) {
    _s();
    const [cubeState, setCubeState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialDisplayState);
    const [selectedColor, setSelectedColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('W');
    const [focusedCell, setFocusedCell] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CubeInput.useEffect": ()=>{
            setCubeState(initialDisplayState);
            setError(null);
        }
    }["CubeInput.useEffect"], [
        initialDisplayState
    ]);
    const handleCellClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CubeInput.useCallback[handleCellClick]": (face, index)=>{
            setCubeState({
                "CubeInput.useCallback[handleCellClick]": (prev)=>({
                        ...prev,
                        [face]: [
                            ...prev[face].slice(0, index),
                            selectedColor,
                            ...prev[face].slice(index + 1)
                        ]
                    })
            }["CubeInput.useCallback[handleCellClick]"]);
            setError(null);
        }
    }["CubeInput.useCallback[handleCellClick]"], [
        selectedColor
    ]);
    const handleColorSelect = (color)=>{
        setSelectedColor(color);
    };
    const handleSubmit = ()=>{
        try {
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cubeSolver$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CubeSolver"].isValidState(cubeState)) {
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
    const handleReset = ()=>{
        onResetRequest();
        setSelectedColor('W');
        setError(null);
    };
    const handleKeyNavigation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CubeInput.useCallback[handleKeyNavigation]": (e)=>{
            if (!focusedCell) return;
            const { face, index } = focusedCell;
            const newFace = face;
            let newIndex = index;
            switch(e.key){
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
                    const colors = [
                        'W',
                        'Y',
                        'R',
                        'O',
                        'B',
                        'G'
                    ];
                    setSelectedColor(colors[parseInt(e.key) - 1]);
                    break;
                default:
                    return;
            }
            setFocusedCell({
                face: newFace,
                index: newIndex
            });
            e.preventDefault();
        }
    }["CubeInput.useCallback[handleKeyNavigation]"], [
        focusedCell,
        handleCellClick
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CubeInput.useEffect": ()=>{
            window.addEventListener('keydown', handleKeyNavigation);
            return ({
                "CubeInput.useEffect": ()=>window.removeEventListener('keydown', handleKeyNavigation)
            })["CubeInput.useEffect"];
        }
    }["CubeInput.useEffect"], [
        handleKeyNavigation
    ]);
    const renderFace = (face)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "face-input text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mb-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-base font-medium text-foreground flex items-center gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `w-4 h-4 rounded-full ${getColorClasses(cubeState[face][4])}`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CubeInput.tsx",
                                    lineNumber: 112,
                                    columnNumber: 11
                                }, this),
                                getFaceName(face)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CubeInput.tsx",
                            lineNumber: 111,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs bg-secondary px-2 py-0.5 rounded-md text-secondary-foreground",
                            children: getFacePosition(face)
                        }, void 0, false, {
                            fileName: "[project]/src/components/CubeInput.tsx",
                            lineNumber: 115,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CubeInput.tsx",
                    lineNumber: 110,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-3 gap-1.5",
                    role: "grid",
                    children: cubeState[face].map((color, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>handleCellClick(face, index),
                            onFocus: ()=>setFocusedCell({
                                    face,
                                    index
                                }),
                            onBlur: ()=>setFocusedCell(null),
                            className: `
              aspect-square w-12 h-12 sm:w-16 sm:h-16 rounded-md 
              transition-all duration-200 border-2 border-gray-800
              ${getColorClasses(color)}
              hover:scale-105 hover:shadow-md focus:outline-none
              ${index === 4 ? 'border-white/30' : ''}
              ${focusedCell?.face === face && focusedCell?.index === index ? 'ring-2 ring-primary ring-offset-2 ring-offset-background scale-105' : ''}
            `,
                            "aria-label": `${getFaceName(face)} face, position ${index + 1}, current color: ${color}`,
                            tabIndex: 0
                        }, `${face}-${index}`, false, {
                            fileName: "[project]/src/components/CubeInput.tsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/CubeInput.tsx",
                    lineNumber: 119,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/CubeInput.tsx",
            lineNumber: 109,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ColorPicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                selectedColor: selectedColor,
                onColorSelect: handleColorSelect
            }, void 0, false, {
                fileName: "[project]/src/components/CubeInput.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-black p-5 rounded-xl border border-gray-800 transition-all duration-300",
                children: [
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 p-3 bg-red-500/20 text-red-400 rounded-lg flex items-center gap-2 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "18",
                                height: "18",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CubeInput.tsx",
                                        lineNumber: 152,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M12 9v4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CubeInput.tsx",
                                        lineNumber: 153,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M12 17h.01"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CubeInput.tsx",
                                        lineNumber: 154,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CubeInput.tsx",
                                lineNumber: 151,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/src/components/CubeInput.tsx",
                                lineNumber: 156,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CubeInput.tsx",
                        lineNumber: 150,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center",
                                children: renderFace('U')
                            }, void 0, false, {
                                fileName: "[project]/src/components/CubeInput.tsx",
                                lineNumber: 161,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 place-items-center",
                                children: [
                                    renderFace('L'),
                                    renderFace('F'),
                                    renderFace('R'),
                                    renderFace('B')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CubeInput.tsx",
                                lineNumber: 165,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center",
                                children: renderFace('D')
                            }, void 0, false, {
                                fileName: "[project]/src/components/CubeInput.tsx",
                                lineNumber: 172,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CubeInput.tsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 flex flex-col sm:flex-row justify-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleReset,
                                type: "button",
                                className: "px-6 py-3 bg-secondary hover:bg-secondary/80 text-white rounded-lg  transition-all duration-200 text-base font-medium flex items-center justify-center gap-2",
                                "aria-label": "Reset cube to default state",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "18",
                                        height: "18",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CubeInput.tsx",
                                                lineNumber: 187,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M3 3v5h5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CubeInput.tsx",
                                                lineNumber: 188,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CubeInput.tsx",
                                        lineNumber: 186,
                                        columnNumber: 13
                                    }, this),
                                    "Reset"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CubeInput.tsx",
                                lineNumber: 178,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSubmit,
                                type: "button",
                                className: "px-6 py-3 bg-primary text-white rounded-lg  transition-all duration-200 text-base font-medium flex items-center justify-center gap-2",
                                "aria-label": "Solve the cube with current configuration",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "18",
                                        height: "18",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CubeInput.tsx",
                                            lineNumber: 201,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CubeInput.tsx",
                                        lineNumber: 200,
                                        columnNumber: 13
                                    }, this),
                                    "Solve Cube"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CubeInput.tsx",
                                lineNumber: 192,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CubeInput.tsx",
                        lineNumber: 177,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CubeInput.tsx",
                lineNumber: 148,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CubeInput.tsx",
        lineNumber: 145,
        columnNumber: 5
    }, this);
}
_s(CubeInput, "++yhtXxpiWkCKO0chKsIDtVP5fU=");
_c = CubeInput;
function getFaceName(face) {
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
function getFacePosition(face) {
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
function getColorClasses(color) {
    const colorClasses = {
        'W': 'bg-cube-white',
        'Y': 'bg-cube-yellow',
        'R': 'bg-cube-red',
        'O': 'bg-cube-orange',
        'B': 'bg-cube-blue',
        'G': 'bg-cube-green'
    };
    return colorClasses[color] || '';
}
var _c;
__turbopack_context__.k.register(_c, "CubeInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/SolveGuide.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>SolveGuide)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cubeSolver$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/cubeSolver.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
// Function to get the rotation arrow based on move direction
function getRotationArrow(move) {
    // Determine if it's clockwise, counterclockwise or double
    const modifier = move.slice(1);
    if (modifier === "'") {
        // Counterclockwise arrow
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: "text-blue-400",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                }, void 0, false, {
                    fileName: "[project]/src/components/SolveGuide.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M3 3v5h5"
                }, void 0, false, {
                    fileName: "[project]/src/components/SolveGuide.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SolveGuide.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this);
    } else if (modifier === "2") {
        // Double turn (180 degrees)
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: "text-purple-400",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "m15 15 6 6m-6 0 6-6"
                }, void 0, false, {
                    fileName: "[project]/src/components/SolveGuide.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M14.5 9.5 12 2l-2.5 7.5L2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5z"
                }, void 0, false, {
                    fileName: "[project]/src/components/SolveGuide.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SolveGuide.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this);
    } else {
        // Clockwise arrow
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: "text-green-400",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.85.99 6.62 2.62L21 8"
                }, void 0, false, {
                    fileName: "[project]/src/components/SolveGuide.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M21 3v5h-5"
                }, void 0, false, {
                    fileName: "[project]/src/components/SolveGuide.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SolveGuide.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this);
    }
}
// Function to get a colored face badge for face reference
function getFaceBadge(face) {
    const faceColors = {
        'U': 'bg-white text-gray-800',
        'D': 'bg-yellow-400 text-gray-800',
        'F': 'bg-green-600 text-white',
        'B': 'bg-blue-600 text-white',
        'L': 'bg-orange-500 text-white',
        'R': 'bg-red-600 text-white'
    };
    const faceName = {
        'U': 'Top',
        'D': 'Bottom',
        'F': 'Front',
        'B': 'Back',
        'L': 'Left',
        'R': 'Right'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex items-center gap-1 rounded px-2 py-1 ${faceColors[face]}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-bold",
                children: face
            }, void 0, false, {
                fileName: "[project]/src/components/SolveGuide.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs",
                children: faceName[face]
            }, void 0, false, {
                fileName: "[project]/src/components/SolveGuide.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SolveGuide.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
function SolveGuide({ solutionMoves, isLoading, error }) {
    _s();
    const isSolved = solutionMoves !== null && solutionMoves.length === 0;
    const hasSolution = solutionMoves !== null && solutionMoves.length > 0;
    // New state to toggle between standard notation and beginner mode
    const [showBeginnerMode, setShowBeginnerMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Generate beginner-friendly instructions if we have a solution
    const friendlyInstructions = hasSolution && showBeginnerMode ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cubeSolver$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CubeSolver"].getBeginnerFriendlyInstructions(solutionMoves) : [];
    // Group steps into logical chunks for easier understanding
    const groupedSteps = hasSolution && showBeginnerMode ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cubeSolver$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CubeSolver"].getGroupedSolution(solutionMoves) : [];
    // Track if user wants to see the face reference
    const [showFaceReference, setShowFaceReference] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-5 animate-fade",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gray-900 p-4 rounded-lg border border-gray-800",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mb-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-semibold text-white",
                            children: "Solution Algorithm"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SolveGuide.tsx",
                            lineNumber: 95,
                            columnNumber: 14
                        }, this),
                        hasSolution && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `text-xs px-3 py-1 rounded-md transition ${showBeginnerMode ? 'bg-primary text-white' : 'bg-gray-800 text-gray-400'}`,
                                    onClick: ()=>setShowBeginnerMode(true),
                                    children: "Beginner Mode"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SolveGuide.tsx",
                                    lineNumber: 99,
                                    columnNumber: 18
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `text-xs px-3 py-1 rounded-md transition ${!showBeginnerMode ? 'bg-primary text-white' : 'bg-gray-800 text-gray-400'}`,
                                    onClick: ()=>setShowBeginnerMode(false),
                                    children: "Standard Notation"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SolveGuide.tsx",
                                    lineNumber: 105,
                                    columnNumber: 18
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SolveGuide.tsx",
                            lineNumber: 98,
                            columnNumber: 16
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SolveGuide.tsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 min-h-[60px]",
                    children: [
                        isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center text-gray-400",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "animate-spin -ml-1 mr-3 h-5 w-5 text-white",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            className: "opacity-25",
                                            cx: "12",
                                            cy: "12",
                                            r: "10",
                                            stroke: "currentColor",
                                            strokeWidth: "4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SolveGuide.tsx",
                                            lineNumber: 119,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            className: "opacity-75",
                                            fill: "currentColor",
                                            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SolveGuide.tsx",
                                            lineNumber: 120,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SolveGuide.tsx",
                                    lineNumber: 118,
                                    columnNumber: 21
                                }, this),
                                "Calculating solution..."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SolveGuide.tsx",
                            lineNumber: 117,
                            columnNumber: 17
                        }, this),
                        error && !isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-red-500 text-sm p-3 bg-red-900/30 rounded border border-red-800",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Error:"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SolveGuide.tsx",
                                    lineNumber: 127,
                                    columnNumber: 21
                                }, this),
                                " ",
                                error
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SolveGuide.tsx",
                            lineNumber: 126,
                            columnNumber: 17
                        }, this),
                        !isLoading && !error && (isSolved ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-green-400 font-medium text-center",
                            children: "Cube is already solved!"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SolveGuide.tsx",
                            lineNumber: 132,
                            columnNumber: 22
                        }, this) : hasSolution ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-300",
                                    children: [
                                        "Found solution (",
                                        solutionMoves.length,
                                        " moves):"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SolveGuide.tsx",
                                    lineNumber: 135,
                                    columnNumber: 26
                                }, this),
                                showBeginnerMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2 text-xs",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setShowFaceReference(!showFaceReference),
                                                className: "bg-gray-700 hover:bg-gray-600 text-gray-300 px-2 py-1 rounded flex items-center gap-1",
                                                children: [
                                                    showFaceReference ? 'Hide' : 'Show',
                                                    " Cube Face Reference",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        width: "12",
                                                        height: "12",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                width: "18",
                                                                height: "18",
                                                                x: "3",
                                                                y: "3",
                                                                rx: "2",
                                                                ry: "2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/SolveGuide.tsx",
                                                                lineNumber: 147,
                                                                columnNumber: 36
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M3 9h18"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/SolveGuide.tsx",
                                                                lineNumber: 148,
                                                                columnNumber: 36
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M3 15h18"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/SolveGuide.tsx",
                                                                lineNumber: 149,
                                                                columnNumber: 36
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M9 3v18"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/SolveGuide.tsx",
                                                                lineNumber: 150,
                                                                columnNumber: 36
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M15 3v18"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/SolveGuide.tsx",
                                                                lineNumber: 151,
                                                                columnNumber: 36
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/SolveGuide.tsx",
                                                        lineNumber: 146,
                                                        columnNumber: 34
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/SolveGuide.tsx",
                                                lineNumber: 141,
                                                columnNumber: 32
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SolveGuide.tsx",
                                            lineNumber: 140,
                                            columnNumber: 30
                                        }, this),
                                        showFaceReference && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gray-800 p-3 rounded",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-gray-300 text-xs font-medium mb-2",
                                                    children: "Cube Face Reference:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SolveGuide.tsx",
                                                    lineNumber: 159,
                                                    columnNumber: 34
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 sm:grid-cols-3 gap-2",
                                                    children: [
                                                        'U',
                                                        'D',
                                                        'F',
                                                        'B',
                                                        'L',
                                                        'R'
                                                    ].map((face)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: getFaceBadge(face)
                                                        }, face, false, {
                                                            fileName: "[project]/src/components/SolveGuide.tsx",
                                                            lineNumber: 162,
                                                            columnNumber: 38
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SolveGuide.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 34
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "border border-gray-700 rounded p-2 mt-2 text-xs text-gray-400",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mb-1",
                                                        children: [
                                                            "Hold the cube with the ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-green-500",
                                                                children: "green face"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/SolveGuide.tsx",
                                                                lineNumber: 168,
                                                                columnNumber: 79
                                                            }, this),
                                                            " towards you and ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-white",
                                                                children: "white face"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/SolveGuide.tsx",
                                                                lineNumber: 168,
                                                                columnNumber: 146
                                                            }, this),
                                                            " on top."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/SolveGuide.tsx",
                                                        lineNumber: 168,
                                                        columnNumber: 36
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SolveGuide.tsx",
                                                    lineNumber: 167,
                                                    columnNumber: 34
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SolveGuide.tsx",
                                            lineNumber: 158,
                                            columnNumber: 32
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gray-800 p-2 rounded flex flex-wrap gap-3 text-xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1",
                                                    children: [
                                                        getRotationArrow('R'),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-300",
                                                            children: "Clockwise"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/SolveGuide.tsx",
                                                            lineNumber: 177,
                                                            columnNumber: 34
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/SolveGuide.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 32
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1",
                                                    children: [
                                                        getRotationArrow("R'"),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-300",
                                                            children: "Counterclockwise"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/SolveGuide.tsx",
                                                            lineNumber: 181,
                                                            columnNumber: 34
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/SolveGuide.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 32
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1",
                                                    children: [
                                                        getRotationArrow('R2'),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-300",
                                                            children: "180° Turn"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/SolveGuide.tsx",
                                                            lineNumber: 185,
                                                            columnNumber: 34
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/SolveGuide.tsx",
                                                    lineNumber: 183,
                                                    columnNumber: 32
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SolveGuide.tsx",
                                            lineNumber: 174,
                                            columnNumber: 30
                                        }, this),
                                        groupedSteps.map((group, groupIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gray-800 p-3 rounded",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-primary font-medium mb-2",
                                                        children: group.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SolveGuide.tsx",
                                                        lineNumber: 192,
                                                        columnNumber: 34
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-2",
                                                        children: group.moves.map((move, moveIndex)=>{
                                                            const face = move.charAt(0);
                                                            const instruction = friendlyInstructions.find((i)=>i.move === move);
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "border-l-2 border-gray-700 pl-3 py-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "bg-gray-700 text-white text-xs px-2 py-1 rounded flex items-center gap-1",
                                                                                children: [
                                                                                    move,
                                                                                    getRotationArrow(move)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/SolveGuide.tsx",
                                                                                lineNumber: 200,
                                                                                columnNumber: 44
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-white",
                                                                                children: instruction?.description
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/SolveGuide.tsx",
                                                                                lineNumber: 204,
                                                                                columnNumber: 44
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/SolveGuide.tsx",
                                                                        lineNumber: 199,
                                                                        columnNumber: 42
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-gray-400 text-sm mt-1",
                                                                        children: instruction?.longDescription
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/SolveGuide.tsx",
                                                                        lineNumber: 206,
                                                                        columnNumber: 42
                                                                    }, this)
                                                                ]
                                                            }, moveIndex, true, {
                                                                fileName: "[project]/src/components/SolveGuide.tsx",
                                                                lineNumber: 198,
                                                                columnNumber: 40
                                                            }, this);
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SolveGuide.tsx",
                                                        lineNumber: 193,
                                                        columnNumber: 34
                                                    }, this)
                                                ]
                                            }, groupIndex, true, {
                                                fileName: "[project]/src/components/SolveGuide.tsx",
                                                lineNumber: 191,
                                                columnNumber: 32
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500 mt-2",
                                            children: 'Tip: You can switch to "Standard Notation" above if you\'re comfortable with cube notation.'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SolveGuide.tsx",
                                            lineNumber: 214,
                                            columnNumber: 30
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SolveGuide.tsx",
                                    lineNumber: 138,
                                    columnNumber: 28
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                    className: "block w-full bg-gray-800 p-3 rounded text-white text-sm break-words",
                                    children: solutionMoves.join(' ')
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SolveGuide.tsx",
                                    lineNumber: 219,
                                    columnNumber: 28
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SolveGuide.tsx",
                            lineNumber: 134,
                            columnNumber: 21
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-500 text-sm text-center pt-3",
                            children: "Submit a cube state or run the test solve to see the solution."
                        }, void 0, false, {
                            fileName: "[project]/src/components/SolveGuide.tsx",
                            lineNumber: 225,
                            columnNumber: 21
                        }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SolveGuide.tsx",
                    lineNumber: 115,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SolveGuide.tsx",
            lineNumber: 93,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/SolveGuide.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
_s(SolveGuide, "8vyHVWprn06RUT+etux6ySZUVq8=");
_c = SolveGuide;
var _c;
__turbopack_context__.k.register(_c, "SolveGuide");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/UserGuide.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>UserGuide)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
function UserGuide({ onTestSolve }) {
    _s();
    const [isExpanded, setIsExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-black p-5 rounded-xl border border-gray-800 mb-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsExpanded((prev)=>!prev),
                className: "w-full flex items-center justify-between text-white font-semibold text-lg py-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "20",
                                height: "20",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "12",
                                        cy: "12",
                                        r: "10"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/UserGuide.tsx",
                                        lineNumber: 19,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M12 16v-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/UserGuide.tsx",
                                        lineNumber: 20,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M12 8h.01"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/UserGuide.tsx",
                                        lineNumber: 21,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/UserGuide.tsx",
                                lineNumber: 18,
                                columnNumber: 11
                            }, this),
                            "How to Use This Solver"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/UserGuide.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "20",
                        height: "20",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        className: `transform transition-transform ${isExpanded ? 'rotate-180' : ''}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m6 9 6 6 6-6"
                        }, void 0, false, {
                            fileName: "[project]/src/components/UserGuide.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/UserGuide.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/UserGuide.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 text-gray-300 space-y-4 animate-fade-down animate-duration-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-primary font-medium mb-2",
                                children: "Input Your Cube State"
                            }, void 0, false, {
                                fileName: "[project]/src/components/UserGuide.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm",
                                children: "Click on the cube faces and use the color selector to match your physical cube. Make sure to enter the colors exactly as they appear on your cube."
                            }, void 0, false, {
                                fileName: "[project]/src/components/UserGuide.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/UserGuide.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-primary font-medium mb-2",
                                children: "Orientation Matters"
                            }, void 0, false, {
                                fileName: "[project]/src/components/UserGuide.tsx",
                                lineNumber: 52,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm",
                                children: "When entering your cube, hold it with white (or the lightest color) on top and green (or your front color) facing you. Each center piece defines its face color."
                            }, void 0, false, {
                                fileName: "[project]/src/components/UserGuide.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-3 gap-3 my-3 bg-gray-900 p-3 rounded-md",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-10 h-10 bg-cube-white mb-1 rounded-md"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/UserGuide.tsx",
                                                lineNumber: 59,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs",
                                                children: "Top (U)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/UserGuide.tsx",
                                                lineNumber: 60,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/UserGuide.tsx",
                                        lineNumber: 58,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-10 h-10 bg-cube-yellow mb-1 rounded-md"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/UserGuide.tsx",
                                                lineNumber: 63,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs",
                                                children: "Bottom (D)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/UserGuide.tsx",
                                                lineNumber: 64,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/UserGuide.tsx",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-10 h-10 bg-cube-green mb-1 rounded-md"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/UserGuide.tsx",
                                                lineNumber: 67,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs",
                                                children: "Front (F)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/UserGuide.tsx",
                                                lineNumber: 68,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/UserGuide.tsx",
                                        lineNumber: 66,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-10 h-10 bg-cube-blue mb-1 rounded-md"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/UserGuide.tsx",
                                                lineNumber: 71,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs",
                                                children: "Back (B)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/UserGuide.tsx",
                                                lineNumber: 72,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/UserGuide.tsx",
                                        lineNumber: 70,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-10 h-10 bg-cube-orange mb-1 rounded-md"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/UserGuide.tsx",
                                                lineNumber: 75,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs",
                                                children: "Left (L)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/UserGuide.tsx",
                                                lineNumber: 76,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/UserGuide.tsx",
                                        lineNumber: 74,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-10 h-10 bg-cube-red mb-1 rounded-md"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/UserGuide.tsx",
                                                lineNumber: 79,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs",
                                                children: "Right (R)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/UserGuide.tsx",
                                                lineNumber: 80,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/UserGuide.tsx",
                                        lineNumber: 78,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/UserGuide.tsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/UserGuide.tsx",
                        lineNumber: 51,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-primary font-medium mb-2",
                                children: "Common Errors"
                            }, void 0, false, {
                                fileName: "[project]/src/components/UserGuide.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "text-sm list-disc list-inside ml-1 space-y-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Incorrect Color Count"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/UserGuide.tsx",
                                                lineNumber: 89,
                                                columnNumber: 17
                                            }, this),
                                            ": Each color must appear exactly 9 times"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/UserGuide.tsx",
                                        lineNumber: 88,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Center Pieces"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/UserGuide.tsx",
                                                lineNumber: 92,
                                                columnNumber: 17
                                            }, this),
                                            ": All 6 center pieces must be different colors"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/UserGuide.tsx",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Unsolvable State"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/UserGuide.tsx",
                                                lineNumber: 95,
                                                columnNumber: 17
                                            }, this),
                                            ": Some combinations of colors are physically impossible"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/UserGuide.tsx",
                                        lineNumber: 94,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Inconsistent Edges/Corners"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/UserGuide.tsx",
                                                lineNumber: 98,
                                                columnNumber: 17
                                            }, this),
                                            ": Each edge or corner piece should be consistent with a real cube"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/UserGuide.tsx",
                                        lineNumber: 97,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/UserGuide.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/UserGuide.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-primary font-medium mb-2",
                                children: "Reading the Solution"
                            }, void 0, false, {
                                fileName: "[project]/src/components/UserGuide.tsx",
                                lineNumber: 104,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm",
                                children: "Once solved, the algorithm provides a sequence of moves using standard notation:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/UserGuide.tsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gray-900 p-3 rounded-md text-sm mt-2 overflow-x-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-primary",
                                            children: "U"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/UserGuide.tsx",
                                            lineNumber: 110,
                                            columnNumber: 17
                                        }, this),
                                        ": Top face clockwise •",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-primary",
                                            children: " U'"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/UserGuide.tsx",
                                            lineNumber: 111,
                                            columnNumber: 17
                                        }, this),
                                        ": Top face counter-clockwise •",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-primary",
                                            children: " U2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/UserGuide.tsx",
                                            lineNumber: 112,
                                            columnNumber: 17
                                        }, this),
                                        ": Top face twice",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/src/components/UserGuide.tsx",
                                            lineNumber: 113,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-primary",
                                            children: "R"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/UserGuide.tsx",
                                            lineNumber: 114,
                                            columnNumber: 17
                                        }, this),
                                        ": Right face clockwise •",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-primary",
                                            children: " F"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/UserGuide.tsx",
                                            lineNumber: 115,
                                            columnNumber: 17
                                        }, this),
                                        ": Front face clockwise •",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-primary",
                                            children: " D"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/UserGuide.tsx",
                                            lineNumber: 116,
                                            columnNumber: 17
                                        }, this),
                                        ": Bottom face clockwise",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/src/components/UserGuide.tsx",
                                            lineNumber: 117,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-primary",
                                            children: "L"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/UserGuide.tsx",
                                            lineNumber: 118,
                                            columnNumber: 17
                                        }, this),
                                        ": Left face clockwise •",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-primary",
                                            children: " B"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/UserGuide.tsx",
                                            lineNumber: 119,
                                            columnNumber: 17
                                        }, this),
                                        ": Back face clockwise"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/UserGuide.tsx",
                                    lineNumber: 109,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/UserGuide.tsx",
                                lineNumber: 108,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/UserGuide.tsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-primary font-medium mb-2",
                                children: "Tips for Success"
                            }, void 0, false, {
                                fileName: "[project]/src/components/UserGuide.tsx",
                                lineNumber: 125,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "text-sm list-disc list-inside ml-1 space-y-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Double-check your input before submitting"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/UserGuide.tsx",
                                        lineNumber: 127,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Keep your cube in the same orientation while entering colors"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/UserGuide.tsx",
                                        lineNumber: 128,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "If you're getting errors, try resetting and re-entering your cube state"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/UserGuide.tsx",
                                        lineNumber: 129,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "This solver uses the powerful Kociemba algorithm and can solve any valid cube state"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/UserGuide.tsx",
                                        lineNumber: 130,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/UserGuide.tsx",
                                lineNumber: 126,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/UserGuide.tsx",
                        lineNumber: 124,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-2 border-t border-gray-700 mt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onTestSolve,
                                className: "w-full flex items-center justify-center gap-2 px-4 py-2 mt-2 rounded-lg text-sm font-medium transition-all bg-secondary hover:bg-secondary/80 text-white",
                                "aria-label": "Run a test solve with a predefined scramble",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "16",
                                        height: "16",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "m12 14 4-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/UserGuide.tsx",
                                                lineNumber: 142,
                                                columnNumber: 18
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M3.34 19a10 10 0 1 1 17.32 0"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/UserGuide.tsx",
                                                lineNumber: 142,
                                                columnNumber: 40
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/UserGuide.tsx",
                                        lineNumber: 141,
                                        columnNumber: 16
                                    }, this),
                                    "Run Test Solve"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/UserGuide.tsx",
                                lineNumber: 136,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-500 text-center mt-2",
                                children: "See how the solver handles a sample scramble."
                            }, void 0, false, {
                                fileName: "[project]/src/components/UserGuide.tsx",
                                lineNumber: 146,
                                columnNumber: 14
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/UserGuide.tsx",
                        lineNumber: 135,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/UserGuide.tsx",
                lineNumber: 42,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/UserGuide.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_s(UserGuide, "FPNvbbHVlWWR4LKxxNntSxiIS38=");
_c = UserGuide;
var _c;
__turbopack_context__.k.register(_c, "UserGuide");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CubeInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CubeInput.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SolveGuide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SolveGuide.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UserGuide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UserGuide.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cubeSolver$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/cubeSolver.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
// Initial solved state constant
const solvedState = {
    U: Array(9).fill('W'),
    D: Array(9).fill('Y'),
    L: Array(9).fill('O'),
    R: Array(9).fill('R'),
    F: Array(9).fill('G'),
    B: Array(9).fill('B')
};
// Define a standard test scramble
const testScramble = [
    "F",
    "R",
    "U",
    "R'",
    "U'",
    "F'",
    "B",
    "L",
    "D",
    "L'",
    "D'",
    "B'" // Another sequence
];
function Home() {
    _s();
    // Keep solver instance if needed for other operations, otherwise could be removed
    // const [solver, setSolver] = useState<CubeSolver | null>(null); 
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null); // For creation/validation errors
    const [displayState, setDisplayState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(solvedState);
    // State specific to the solution process
    const [solutionMoves, setSolutionMoves] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoadingSolution, setIsLoadingSolution] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [solveError, setSolveError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null); // For solving errors
    // Add state to track if the core solver is ready
    const [isSolverEngineReady, setIsSolverEngineReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cubeSolver$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CubeSolver"].isEngineInitialized());
    // --- Proactive Solver Initialization --- 
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            // Use the new public static getters
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cubeSolver$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CubeSolver"].isEngineInitialized() && !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cubeSolver$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CubeSolver"].isEngineInitializing()) {
                console.log("Home component mounted, initializing solver engine...");
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cubeSolver$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CubeSolver"].initializeSolver().then({
                    "Home.useEffect": ()=>{
                        console.log("Solver engine initialized successfully.");
                        setIsSolverEngineReady(true);
                    }
                }["Home.useEffect"]).catch({
                    "Home.useEffect": (err)=>{
                        console.error("Solver engine initialization failed:", err);
                        setError("Critical error: Could not initialize the cube solving engine.");
                    }
                }["Home.useEffect"]);
            } else if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cubeSolver$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CubeSolver"].isEngineInitializing()) {
                console.log("Solver engine is already initializing, waiting...");
                const checkInterval = setInterval({
                    "Home.useEffect.checkInterval": ()=>{
                        if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cubeSolver$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CubeSolver"].isEngineInitialized()) {
                            console.log("Detected solver engine finished initializing.");
                            setIsSolverEngineReady(true);
                            clearInterval(checkInterval);
                        } else if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cubeSolver$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CubeSolver"].isEngineInitializing()) {
                            console.error("Detected solver engine initialization failed elsewhere.");
                            setError("Critical error: Could not initialize the cube solving engine.");
                            clearInterval(checkInterval);
                        }
                    }
                }["Home.useEffect.checkInterval"], 200);
                return ({
                    "Home.useEffect": ()=>clearInterval(checkInterval)
                })["Home.useEffect"];
            }
        }
    }["Home.useEffect"], []);
    // Triggered by CubeInput onSubmit or handleTestSolve
    const handleCubeInput = async (state)=>{
        setError(null); // Clear previous creation errors
        setSolveError(null);
        setSolutionMoves(null);
        setDisplayState(state); // Update display
        setIsLoadingSolution(true); // Start loading indicator
        try {
            // Create the solver instance - validation happens inside constructor
            const newSolver = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cubeSolver$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CubeSolver"](state);
            // setSolver(newSolver); // Store solver instance if needed elsewhere
            // --- Automatically trigger solve --- 
            console.log("Solver created, attempting to solve...");
            const moves = await newSolver.solve(); // Call solve directly
            if (moves.length === 0 && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cubeSolver$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CubeSolver"].isValidState(newSolver.getState())) {
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
                setSolutionMoves(moves);
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
        } finally{
            setIsLoadingSolution(false); // Stop loading indicator
        }
    };
    // Called when the "Test Solve" button is clicked
    const handleTestSolve = async ()=>{
        setError(null);
        setSolveError(null);
        setSolutionMoves(null);
        // setSolver(null); 
        setIsLoadingSolution(true); // Start loading early for test setup
        try {
            // Apply scramble to a temporary solver to get the state
            // Use solvedState constant directly
            const tempSolver = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cubeSolver$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CubeSolver"](solvedState);
            testScramble.forEach((move)=>tempSolver.applyMove(move));
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
    const handleResetRequest = ()=>{
        setError(null);
        setSolveError(null);
        setSolutionMoves(null);
        // setSolver(null);
        setDisplayState(solvedState);
        setIsLoadingSolution(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto py-6 px-4 animate-fade",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-bold text-white mb-2",
                            children: "Rubik's Cube Solver"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 160,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-400 max-w-2xl mx-auto",
                            children: "Enter your scrambled cube state and get an optimal solution using the Kociemba algorithm"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 163,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 159,
                    columnNumber: 9
                }, this),
                !isSolverEngineReady && !error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6 p-4 bg-blue-900/30 border border-blue-700 rounded-lg text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-blue-300 flex items-center justify-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "animate-spin h-5 w-5 text-white",
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        className: "opacity-25",
                                        cx: "12",
                                        cy: "12",
                                        r: "10",
                                        stroke: "currentColor",
                                        strokeWidth: "4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 172,
                                        columnNumber: 132
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        className: "opacity-75",
                                        fill: "currentColor",
                                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 172,
                                        columnNumber: 233
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 172,
                                columnNumber: 16
                            }, this),
                            "Initializing solving engine (this may take a few seconds)..."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 171,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 170,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UserGuide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    onTestSolve: handleTestSolve
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 178,
                    columnNumber: 9
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6 p-4 bg-red-500/20 border border-red-700 rounded-lg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-red-400 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "20",
                                height: "20",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "12",
                                        cy: "12",
                                        r: "10"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 184,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "12",
                                        y1: "8",
                                        x2: "12",
                                        y2: "12"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 185,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "12",
                                        y1: "16",
                                        x2: "12.01",
                                        y2: "16"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 186,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 183,
                                columnNumber: 15
                            }, this),
                            error
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 182,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 181,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-12 gap-6 items-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-7",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CubeInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                initialDisplayState: displayState,
                                onSubmit: handleCubeInput,
                                onResetRequest: handleResetRequest
                            }, JSON.stringify(displayState), false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 195,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 194,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-5 lg:sticky lg:top-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-black p-6 rounded-xl border border-gray-800 shadow-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-semibold mb-6 flex items-center gap-2 text-white",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-primary",
                                                children: "2."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 206,
                                                columnNumber: 17
                                            }, this),
                                            " Solution"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 205,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SolveGuide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        solutionMoves: solutionMoves,
                                        isLoading: isLoadingSolution,
                                        error: solveError
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 209,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 204,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 203,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 193,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 158,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 157,
        columnNumber: 5
    }, this);
}
_s(Home, "oWHiRqnCxIQIkhKmIGg+OeF49Y0=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_4ce50551._.js.map