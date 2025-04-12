module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/src/components/CubeInput.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CubeInput)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const FACES = [
    'U',
    'L',
    'F',
    'R',
    'B',
    'D'
];
function CubeInput({ cubeState, onCellClick }) {
    const renderFace = (face)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "face-input",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-lg font-medium text-gray-700 mb-2",
                    children: getFaceName(face)
                }, void 0, false, {
                    fileName: "[project]/src/components/CubeInput.tsx",
                    lineNumber: 13,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-3 gap-1",
                    children: cubeState[face].map((color, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>onCellClick(face, index),
                            className: `
              w-12 h-12 rounded-lg transition-all duration-200
              bg-gradient-to-br
              ${getColorClasses(color)}
              hover:shadow-lg hover:scale-105
              focus:outline-none focus:ring-2 focus:ring-indigo-500
            `,
                            "aria-label": `${getFaceName(face)} face, position ${index + 1}`
                        }, `${face}-${index}`, false, {
                            fileName: "[project]/src/components/CubeInput.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/CubeInput.tsx",
                    lineNumber: 14,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/CubeInput.tsx",
            lineNumber: 12,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white p-8 rounded-xl shadow-lg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-4 gap-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:col-span-4 flex justify-center",
                    children: renderFace('U')
                }, void 0, false, {
                    fileName: "[project]/src/components/CubeInput.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: renderFace('L')
                }, void 0, false, {
                    fileName: "[project]/src/components/CubeInput.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: renderFace('F')
                }, void 0, false, {
                    fileName: "[project]/src/components/CubeInput.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: renderFace('R')
                }, void 0, false, {
                    fileName: "[project]/src/components/CubeInput.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: renderFace('B')
                }, void 0, false, {
                    fileName: "[project]/src/components/CubeInput.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:col-span-4 flex justify-center",
                    children: renderFace('D')
                }, void 0, false, {
                    fileName: "[project]/src/components/CubeInput.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/CubeInput.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/CubeInput.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
function getFaceName(face) {
    const names = {
        U: 'Up',
        D: 'Down',
        L: 'Left',
        R: 'Right',
        F: 'Front',
        B: 'Back'
    };
    return names[face];
}
function getColorClasses(color) {
    const classes = {
        'W': 'from-white to-gray-100 border-2 border-gray-200',
        'Y': 'from-yellow-300 to-yellow-400',
        'R': 'from-red-500 to-red-600',
        'O': 'from-orange-400 to-orange-500',
        'B': 'from-blue-500 to-blue-600',
        'G': 'from-green-500 to-green-600'
    };
    return classes[color] || '';
}
}}),
"[project]/src/components/ColorPicker.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ColorPicker)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const COLORS = [
    {
        color: 'W',
        gradient: 'bg-gradient-to-br from-white to-gray-100 border-2 border-gray-200'
    },
    {
        color: 'Y',
        gradient: 'bg-gradient-to-br from-yellow-300 to-yellow-400'
    },
    {
        color: 'R',
        gradient: 'bg-gradient-to-br from-red-500 to-red-600'
    },
    {
        color: 'O',
        gradient: 'bg-gradient-to-br from-orange-400 to-orange-500'
    },
    {
        color: 'B',
        gradient: 'bg-gradient-to-br from-blue-500 to-blue-600'
    },
    {
        color: 'G',
        gradient: 'bg-gradient-to-br from-green-500 to-green-600'
    }
];
function ColorPicker({ selectedColor, onColorSelect }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white p-8 rounded-xl shadow-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-semibold text-gray-800 mb-4",
                children: "Select Color"
            }, void 0, false, {
                fileName: "[project]/src/components/ColorPicker.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center gap-4 flex-wrap",
                children: COLORS.map(({ color, gradient })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onColorSelect(color),
                        className: `
              w-16 h-16 rounded-xl transition-all duration-200 transform hover:-translate-y-1
              ${gradient}
              ${selectedColor === color ? 'ring-4 ring-indigo-500 ring-offset-2' : ''}
            `,
                        "aria-label": `Select ${color} color`
                    }, color, false, {
                        fileName: "[project]/src/components/ColorPicker.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/ColorPicker.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ColorPicker.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/SolutionDisplay.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>SolutionDisplay)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
function SolutionDisplay({ moves }) {
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const progress = (currentStep + 1) / moves.length * 100;
    const handlePrevStep = ()=>{
        setCurrentStep((prev)=>Math.max(0, prev - 1));
    };
    const handleNextStep = ()=>{
        setCurrentStep((prev)=>Math.min(moves.length - 1, prev + 1));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white p-8 rounded-xl shadow-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-semibold text-gray-800 mb-4",
                children: "Solution Steps"
            }, void 0, false, {
                fileName: "[project]/src/components/SolutionDisplay.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-2 bg-gray-100 rounded-full mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute h-full bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full transition-all duration-300",
                    style: {
                        width: `${progress}%`
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/SolutionDisplay.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/SolutionDisplay.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handlePrevStep,
                        disabled: currentStep === 0,
                        className: `
            px-4 py-2 rounded-lg flex items-center gap-2 transition-colors
            ${currentStep === 0 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'}
          `,
                        children: "← Previous"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SolutionDisplay.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-gray-600 font-medium",
                        children: [
                            "Step ",
                            currentStep + 1,
                            " of ",
                            moves.length
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SolutionDisplay.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleNextStep,
                        disabled: currentStep === moves.length - 1,
                        className: `
            px-4 py-2 rounded-lg flex items-center gap-2 transition-colors
            ${currentStep === moves.length - 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'}
          `,
                        children: "Next →"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SolutionDisplay.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SolutionDisplay.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-50 rounded-lg p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "font-mono text-lg text-center",
                        children: moves[currentStep]
                    }, void 0, false, {
                        fileName: "[project]/src/components/SolutionDisplay.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 text-gray-600 text-center",
                        children: getStepDescription(moves[currentStep])
                    }, void 0, false, {
                        fileName: "[project]/src/components/SolutionDisplay.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SolutionDisplay.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 p-4 bg-gray-50 rounded-lg overflow-x-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2 justify-center flex-wrap",
                    children: moves.map((move, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `
                px-3 py-1 rounded-md font-mono text-sm
                ${index === currentStep ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-100 text-gray-600'}
              `,
                            children: move
                        }, index, false, {
                            fileName: "[project]/src/components/SolutionDisplay.tsx",
                            lineNumber: 80,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/SolutionDisplay.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/SolutionDisplay.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SolutionDisplay.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
function getStepDescription(move) {
    const descriptions = {
        'U': 'Rotate the upper face clockwise',
        'U\'': 'Rotate the upper face counter-clockwise',
        'D': 'Rotate the bottom face clockwise',
        'D\'': 'Rotate the bottom face counter-clockwise',
        'L': 'Rotate the left face clockwise',
        'L\'': 'Rotate the left face counter-clockwise',
        'R': 'Rotate the right face clockwise',
        'R\'': 'Rotate the right face counter-clockwise',
        'F': 'Rotate the front face clockwise',
        'F\'': 'Rotate the front face counter-clockwise',
        'B': 'Rotate the back face clockwise',
        'B\'': 'Rotate the back face counter-clockwise'
    };
    return descriptions[move] || move;
}
}}),
"[project]/src/utils/cubeSolver.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "CubeSolver": (()=>CubeSolver),
    "solveCube": (()=>solveCube)
});
class CubeSolver {
    state;
    solution = [];
    constructor(initialState){
        this.state = {
            ...initialState
        };
    }
    solve() {
        if (!CubeSolver.isValidState(this.state)) {
            throw new Error('Invalid cube state');
        }
        // Check if the cube state is complete (all colors used exactly 9 times)
        const colorCounts = {
            'W': 0,
            'Y': 0,
            'R': 0,
            'O': 0,
            'B': 0,
            'G': 0
        };
        Object.values(this.state).forEach((face)=>{
            face.forEach((color)=>{
                if (colorCounts.hasOwnProperty(color)) {
                    colorCounts[color] = (colorCounts[color] || 0) + 1;
                }
            });
        });
        if (!Object.values(colorCounts).every((count)=>count === 9)) {
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
    solveWhiteCross() {
        // Find and solve white edges
        const edges = this.findEdges('W');
        edges.forEach((edge)=>{
            const moves = this.getEdgeSolutionMoves(edge, 'U');
            this.applyMoves(moves);
        });
    }
    solveWhiteCorners() {
        // Find and solve white corners
        const corners = this.findCorners('W');
        corners.forEach((corner)=>{
            const moves = this.getCornerSolutionMoves(corner, 'U');
            this.applyMoves(moves);
        });
    }
    solveMiddleLayer() {
        // Solve middle layer edges
        const middleEdges = this.findMiddleLayerEdges();
        middleEdges.forEach((edge)=>{
            const moves = this.getMiddleLayerSolutionMoves(edge);
            this.applyMoves(moves);
        });
    }
    solveYellowCross() {
        // Create yellow cross on top
        while(!this.hasYellowCross()){
            this.applyMoves([
                'F',
                'R',
                'U',
                'R\'',
                'U\'',
                'F\''
            ]);
        }
    }
    solveYellowCorners() {
        // Position yellow corners
        while(!this.hasYellowCorners()){
            this.applyMoves([
                'U',
                'R',
                'U\'',
                'L\'',
                'U',
                'R\'',
                'U\'',
                'L'
            ]);
        }
    }
    orientYellowCorners() {
        // Orient yellow corners
        while(!this.areYellowCornersOriented()){
            this.applyMoves([
                'R',
                'U',
                'R\'',
                'U',
                'R',
                'U2',
                'R\''
            ]);
        }
    }
    applyMoves(moves) {
        moves.forEach((move)=>{
            this.applyMove(move);
            this.solution.push(move);
        });
    }
    applyMove(move) {
        const face = move[0];
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
    rotateFace(face, state, counterClockwise = false) {
        // First rotate the edge and corner pieces around the face
        const rotationMap = this.getRotationMap(face);
        const tempState = JSON.parse(JSON.stringify(state));
        rotationMap.forEach((rotation, i)=>{
            const [fromFace, fromIndex] = counterClockwise ? rotation[1] : rotation[0];
            const [toFace, toIndex] = counterClockwise ? rotation[0] : rotation[1];
            state[toFace][toIndex] = tempState[fromFace][fromIndex];
        });
        // Then rotate the face's own stickers
        const faceStickers = [
            ...state[face]
        ];
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
    // Center piece doesn't move
    }
    getRotationMap(face) {
        const rotationMaps = {
            U: [
                [
                    [
                        'F',
                        0
                    ],
                    [
                        'R',
                        0
                    ]
                ],
                [
                    [
                        'F',
                        1
                    ],
                    [
                        'R',
                        1
                    ]
                ],
                [
                    [
                        'F',
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
                        'B',
                        0
                    ]
                ],
                [
                    [
                        'R',
                        1
                    ],
                    [
                        'B',
                        1
                    ]
                ],
                [
                    [
                        'R',
                        2
                    ],
                    [
                        'B',
                        2
                    ]
                ],
                [
                    [
                        'B',
                        0
                    ],
                    [
                        'L',
                        0
                    ]
                ],
                [
                    [
                        'B',
                        1
                    ],
                    [
                        'L',
                        1
                    ]
                ],
                [
                    [
                        'B',
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
                        'F',
                        0
                    ]
                ],
                [
                    [
                        'L',
                        1
                    ],
                    [
                        'F',
                        1
                    ]
                ],
                [
                    [
                        'L',
                        2
                    ],
                    [
                        'F',
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
            L: [
                [
                    [
                        'U',
                        0
                    ],
                    [
                        'F',
                        0
                    ]
                ],
                [
                    [
                        'U',
                        3
                    ],
                    [
                        'F',
                        3
                    ]
                ],
                [
                    [
                        'U',
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
                        'D',
                        0
                    ]
                ],
                [
                    [
                        'F',
                        3
                    ],
                    [
                        'D',
                        3
                    ]
                ],
                [
                    [
                        'F',
                        6
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
                        'B',
                        8
                    ]
                ],
                [
                    [
                        'D',
                        3
                    ],
                    [
                        'B',
                        5
                    ]
                ],
                [
                    [
                        'D',
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
                        'U',
                        0
                    ]
                ],
                [
                    [
                        'B',
                        5
                    ],
                    [
                        'U',
                        3
                    ]
                ],
                [
                    [
                        'B',
                        2
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
                        'B',
                        6
                    ]
                ],
                [
                    [
                        'U',
                        5
                    ],
                    [
                        'B',
                        3
                    ]
                ],
                [
                    [
                        'U',
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
                        'D',
                        2
                    ]
                ],
                [
                    [
                        'B',
                        3
                    ],
                    [
                        'D',
                        5
                    ]
                ],
                [
                    [
                        'B',
                        0
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
                        'F',
                        2
                    ]
                ],
                [
                    [
                        'D',
                        5
                    ],
                    [
                        'F',
                        5
                    ]
                ],
                [
                    [
                        'D',
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
                        'U',
                        2
                    ]
                ],
                [
                    [
                        'F',
                        5
                    ],
                    [
                        'U',
                        5
                    ]
                ],
                [
                    [
                        'F',
                        8
                    ],
                    [
                        'U',
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
                        'R',
                        0
                    ]
                ],
                [
                    [
                        'U',
                        7
                    ],
                    [
                        'R',
                        3
                    ]
                ],
                [
                    [
                        'U',
                        8
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
                        'D',
                        2
                    ]
                ],
                [
                    [
                        'R',
                        3
                    ],
                    [
                        'D',
                        1
                    ]
                ],
                [
                    [
                        'R',
                        6
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
                        'L',
                        8
                    ]
                ],
                [
                    [
                        'D',
                        1
                    ],
                    [
                        'L',
                        5
                    ]
                ],
                [
                    [
                        'D',
                        0
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
                        'U',
                        6
                    ]
                ],
                [
                    [
                        'L',
                        5
                    ],
                    [
                        'U',
                        7
                    ]
                ],
                [
                    [
                        'L',
                        2
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
                        'L',
                        0
                    ]
                ],
                [
                    [
                        'U',
                        1
                    ],
                    [
                        'L',
                        3
                    ]
                ],
                [
                    [
                        'U',
                        2
                    ],
                    [
                        'L',
                        6
                    ]
                ],
                [
                    [
                        'L',
                        0
                    ],
                    [
                        'D',
                        8
                    ]
                ],
                [
                    [
                        'L',
                        3
                    ],
                    [
                        'D',
                        7
                    ]
                ],
                [
                    [
                        'L',
                        6
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
                        'R',
                        2
                    ]
                ],
                [
                    [
                        'D',
                        7
                    ],
                    [
                        'R',
                        5
                    ]
                ],
                [
                    [
                        'D',
                        6
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
                        'U',
                        0
                    ]
                ],
                [
                    [
                        'R',
                        5
                    ],
                    [
                        'U',
                        1
                    ]
                ],
                [
                    [
                        'R',
                        8
                    ],
                    [
                        'U',
                        2
                    ]
                ]
            ]
        };
        return rotationMaps[face] || [];
    }
    // Helper methods for finding pieces
    findEdges(color) {
        const edges = [];
        const faces = [
            'U',
            'D',
            'L',
            'R',
            'F',
            'B'
        ];
        const edgeIndices = [
            1,
            3,
            5,
            7
        ]; // Edge positions on each face
        faces.forEach((face)=>{
            edgeIndices.forEach((index)=>{
                if (this.state[face][index] === color) {
                    edges.push({
                        face,
                        index
                    });
                }
            });
        });
        return edges;
    }
    findCorners(color) {
        const corners = [];
        const faces = [
            'U',
            'D',
            'L',
            'R',
            'F',
            'B'
        ];
        const cornerIndices = [
            0,
            2,
            6,
            8
        ]; // Corner positions on each face
        faces.forEach((face)=>{
            cornerIndices.forEach((index)=>{
                if (this.state[face][index] === color) {
                    corners.push({
                        face,
                        index
                    });
                }
            });
        });
        return corners;
    }
    findMiddleLayerEdges() {
        const edges = [];
        const faces = [
            'F',
            'R',
            'B',
            'L'
        ];
        faces.forEach((face)=>{
            [
                3,
                5
            ].forEach((index)=>{
                const color = this.state[face][index];
                if (color !== 'W' && color !== 'Y') {
                    edges.push({
                        face,
                        index
                    });
                }
            });
        });
        return edges;
    }
    getEdgeSolutionMoves(edge, targetFace) {
        const moves = [];
        const { face, index } = edge;
        // Get the current edge colors
        const firstColor = this.state[face][index];
        let secondFace, secondIndex;
        // Find the connected face and index based on the edge position
        if (index === 1) {
            secondFace = face === 'F' ? 'U' : face === 'B' ? 'U' : face === 'L' ? 'U' : 'U';
            secondIndex = face === 'F' ? 7 : face === 'B' ? 1 : face === 'L' ? 3 : 5;
        } else if (index === 3) {
            secondFace = face === 'F' ? 'L' : face === 'B' ? 'R' : face === 'U' ? 'L' : 'L';
            secondIndex = face === 'F' ? 5 : face === 'B' ? 5 : face === 'U' ? 5 : 5;
        } else if (index === 5) {
            secondFace = face === 'F' ? 'R' : face === 'B' ? 'L' : face === 'U' ? 'R' : 'R';
            secondIndex = face === 'F' ? 3 : face === 'B' ? 3 : face === 'U' ? 3 : 3;
        } else {
            secondFace = face === 'F' ? 'D' : face === 'B' ? 'D' : face === 'L' ? 'D' : 'D';
            secondIndex = face === 'F' ? 1 : face === 'B' ? 7 : face === 'L' ? 5 : 3;
        }
        const secondColor = this.state[secondFace][secondIndex];
        // Determine target position based on the two colors
        let targetPosition;
        if (firstColor === 'W' || secondColor === 'W') {
            targetPosition = 'U';
        } else if (firstColor === 'Y' || secondColor === 'Y') {
            targetPosition = 'D';
        } else {
            // For middle layer edges
            if (firstColor === 'R' && secondColor === 'B' || firstColor === 'B' && secondColor === 'R') {
                targetPosition = 'R';
            } else if (firstColor === 'R' && secondColor === 'G' || firstColor === 'G' && secondColor === 'R') {
                targetPosition = 'R';
            } else if (firstColor === 'O' && secondColor === 'B' || firstColor === 'B' && secondColor === 'O') {
                targetPosition = 'L';
            } else {
                targetPosition = 'L';
            }
        }
        // Generate moves to get the edge piece to its target position
        if (face !== targetPosition) {
            if (face === 'F' && index === 1) {
                moves.push(...[
                    'U',
                    'R',
                    'U\'',
                    'R\'',
                    'U\'',
                    'F\'',
                    'U',
                    'F'
                ]);
            } else if (face === 'R' && index === 1) {
                moves.push(...[
                    'U\'',
                    'F\'',
                    'U',
                    'F',
                    'U',
                    'R',
                    'U\'',
                    'R\''
                ]);
            } else {
                // Add appropriate setup moves based on current position
                if (face === 'B') moves.push(...[
                    'U2'
                ]);
                if (face === 'L') moves.push(...[
                    'U\''
                ]);
                if (face === 'R') moves.push(...[
                    'U'
                ]);
                // Standard algorithm for edge insertion
                moves.push(...[
                    'F',
                    'R',
                    'U',
                    'R\'',
                    'U\'',
                    'F\''
                ]);
            }
        }
        return moves;
    }
    getCornerSolutionMoves(corner, targetFace) {
        const moves = [];
        const { face, index } = corner;
        // Get the current corner colors
        const firstColor = this.state[face][index];
        // Get adjacent faces based on corner position
        const adjacentFaces = this.getCornerAdjacentFaces(face, index);
        const secondColor = this.state[adjacentFaces[0].face][adjacentFaces[0].index];
        const thirdColor = this.state[adjacentFaces[1].face][adjacentFaces[1].index];
        // Determine target position based on corner colors
        let targetPosition;
        if (firstColor === 'W' || secondColor === 'W' || thirdColor === 'W') {
            targetPosition = 'U';
        } else if (firstColor === 'Y' || secondColor === 'Y' || thirdColor === 'Y') {
            targetPosition = 'D';
        } else {
            // For middle layer corners (shouldn't happen in a valid cube)
            targetPosition = face;
        }
        // If corner is not in correct position
        if (face !== targetPosition) {
            if (face === 'D') {
                // If corner is on bottom face, bring it up
                if (index === 0) moves.push(...[
                    'L',
                    'U',
                    'L\''
                ]);
                else if (index === 2) moves.push(...[
                    'R\'',
                    'U\'',
                    'R'
                ]);
                else if (index === 6) moves.push(...[
                    'L\'',
                    'U\'',
                    'L'
                ]);
                else if (index === 8) moves.push(...[
                    'R',
                    'U',
                    'R\''
                ]);
            } else {
                // Setup moves to align corner
                if (face === 'F') {
                    if (index === 0) moves.push(...[
                        'F\'',
                        'U',
                        'F'
                    ]);
                    else if (index === 2) moves.push(...[
                        'F',
                        'U\'',
                        'F\''
                    ]);
                } else if (face === 'B') {
                    if (index === 0) moves.push(...[
                        'B',
                        'U\'',
                        'B\''
                    ]);
                    else if (index === 2) moves.push(...[
                        'B\'',
                        'U',
                        'B'
                    ]);
                }
                // Standard corner insertion algorithm
                moves.push(...[
                    'U',
                    'R',
                    'U\'',
                    'R\''
                ]);
            }
        }
        return moves;
    }
    getCornerAdjacentFaces(face, index) {
        const cornerMap = {
            U: {
                0: [
                    [
                        'B',
                        0
                    ],
                    [
                        'L',
                        0
                    ]
                ],
                2: [
                    [
                        'B',
                        2
                    ],
                    [
                        'R',
                        2
                    ]
                ],
                6: [
                    [
                        'F',
                        0
                    ],
                    [
                        'L',
                        2
                    ]
                ],
                8: [
                    [
                        'F',
                        2
                    ],
                    [
                        'R',
                        0
                    ]
                ]
            },
            D: {
                0: [
                    [
                        'F',
                        6
                    ],
                    [
                        'L',
                        8
                    ]
                ],
                2: [
                    [
                        'F',
                        8
                    ],
                    [
                        'R',
                        6
                    ]
                ],
                6: [
                    [
                        'B',
                        6
                    ],
                    [
                        'L',
                        6
                    ]
                ],
                8: [
                    [
                        'B',
                        8
                    ],
                    [
                        'R',
                        8
                    ]
                ]
            },
            F: {
                0: [
                    [
                        'U',
                        6
                    ],
                    [
                        'L',
                        2
                    ]
                ],
                2: [
                    [
                        'U',
                        8
                    ],
                    [
                        'R',
                        0
                    ]
                ],
                6: [
                    [
                        'D',
                        0
                    ],
                    [
                        'L',
                        8
                    ]
                ],
                8: [
                    [
                        'D',
                        2
                    ],
                    [
                        'R',
                        6
                    ]
                ]
            },
            B: {
                0: [
                    [
                        'U',
                        0
                    ],
                    [
                        'L',
                        0
                    ]
                ],
                2: [
                    [
                        'U',
                        2
                    ],
                    [
                        'R',
                        2
                    ]
                ],
                6: [
                    [
                        'D',
                        6
                    ],
                    [
                        'L',
                        6
                    ]
                ],
                8: [
                    [
                        'D',
                        8
                    ],
                    [
                        'R',
                        8
                    ]
                ]
            },
            L: {
                0: [
                    [
                        'U',
                        0
                    ],
                    [
                        'B',
                        0
                    ]
                ],
                2: [
                    [
                        'U',
                        6
                    ],
                    [
                        'F',
                        0
                    ]
                ],
                6: [
                    [
                        'D',
                        6
                    ],
                    [
                        'B',
                        6
                    ]
                ],
                8: [
                    [
                        'D',
                        0
                    ],
                    [
                        'F',
                        6
                    ]
                ]
            },
            R: {
                0: [
                    [
                        'U',
                        8
                    ],
                    [
                        'F',
                        2
                    ]
                ],
                2: [
                    [
                        'U',
                        2
                    ],
                    [
                        'B',
                        2
                    ]
                ],
                6: [
                    [
                        'D',
                        2
                    ],
                    [
                        'F',
                        8
                    ]
                ],
                8: [
                    [
                        'D',
                        8
                    ],
                    [
                        'B',
                        8
                    ]
                ]
            }
        };
        return cornerMap[face][index].map(([f, i])=>({
                face: f,
                index: i
            }));
    }
    getMiddleLayerSolutionMoves(edge) {
        const { face, index } = edge;
        const moves = [];
        // Get current edge colors
        const faceColor = this.state[face][index];
        const otherFaceColor = this.state[index === 3 ? 'L' : 'R'][index === 3 ? 5 : 3];
        // Determine target position based on colors
        let targetFace;
        if (faceColor === 'R' && otherFaceColor === 'B' || faceColor === 'B' && otherFaceColor === 'R') {
            targetFace = 'R';
        } else if (faceColor === 'R' && otherFaceColor === 'G' || faceColor === 'G' && otherFaceColor === 'R') {
            targetFace = 'R';
        } else if (faceColor === 'O' && otherFaceColor === 'B' || faceColor === 'B' && otherFaceColor === 'O') {
            targetFace = 'L';
        } else {
            targetFace = 'L';
        }
        // If edge is not in correct position or orientation
        if (face !== targetFace) {
            // First, get the edge piece to the U layer if it's not already there
            if (face === 'F') {
                if (index === 3) moves.push(...[
                    'U\'',
                    'L\'',
                    'U',
                    'L',
                    'U',
                    'F',
                    'U\'',
                    'F\''
                ]);
                else moves.push(...[
                    'U',
                    'R',
                    'U\'',
                    'R\'',
                    'U\'',
                    'F\'',
                    'U',
                    'F'
                ]);
            } else if (face === 'R') {
                if (index === 3) moves.push(...[
                    'U\'',
                    'F\'',
                    'U',
                    'F',
                    'U',
                    'R',
                    'U\'',
                    'R\''
                ]);
                else moves.push(...[
                    'U',
                    'B',
                    'U\'',
                    'B\'',
                    'U\'',
                    'R\'',
                    'U',
                    'R'
                ]);
            } else if (face === 'B') {
                if (index === 3) moves.push(...[
                    'U\'',
                    'R\'',
                    'U',
                    'R',
                    'U',
                    'B',
                    'U\'',
                    'B\''
                ]);
                else moves.push(...[
                    'U',
                    'L',
                    'U\'',
                    'L\'',
                    'U\'',
                    'B\'',
                    'U',
                    'B'
                ]);
            } else if (face === 'L') {
                if (index === 3) moves.push(...[
                    'U\'',
                    'B\'',
                    'U',
                    'B',
                    'U',
                    'L',
                    'U\'',
                    'L\''
                ]);
                else moves.push(...[
                    'U',
                    'F',
                    'U\'',
                    'F\'',
                    'U\'',
                    'L\'',
                    'U',
                    'L'
                ]);
            }
            // Then, apply the appropriate algorithm based on the target position
            if (targetFace === 'R') {
                moves.push(...[
                    'U',
                    'R',
                    'U\'',
                    'R\'',
                    'U\'',
                    'F\'',
                    'U',
                    'F'
                ]);
            } else {
                moves.push(...[
                    'U\'',
                    'L\'',
                    'U',
                    'L',
                    'U',
                    'F',
                    'U\'',
                    'F\''
                ]);
            }
        }
        return moves;
    }
    // State checking methods
    hasYellowCross() {
        return this.state.D.filter((color, i)=>color === 'Y' && [
                1,
                3,
                4,
                5,
                7
            ].includes(i)).length === 5;
    }
    hasYellowCorners() {
        return this.state.D.filter((color, i)=>color === 'Y' && [
                0,
                2,
                6,
                8
            ].includes(i)).length === 4;
    }
    areYellowCornersOriented() {
        return this.state.D.every((color)=>color === 'Y');
    }
    // Validation methods
    static isValidCubeConfiguration(state) {
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
        if (centers.U !== 'W' || centers.D !== 'Y' || centers.F !== 'G' || centers.B !== 'B' || centers.L !== 'O' || centers.R !== 'R') {
            console.log('Invalid configuration: centers do not match standard configuration');
            return false;
        }
        // Check edges for valid combinations
        const edges = [
            // U face edges
            [
                [
                    state.U[1],
                    state.B[1]
                ],
                [
                    state.U[3],
                    state.L[1]
                ],
                [
                    state.U[5],
                    state.R[1]
                ],
                [
                    state.U[7],
                    state.F[1]
                ]
            ],
            // D face edges
            [
                [
                    state.D[1],
                    state.F[7]
                ],
                [
                    state.D[3],
                    state.L[7]
                ],
                [
                    state.D[5],
                    state.R[7]
                ],
                [
                    state.D[7],
                    state.B[7]
                ]
            ],
            // Middle layer edges
            [
                [
                    state.F[3],
                    state.L[5]
                ],
                [
                    state.F[5],
                    state.R[3]
                ],
                [
                    state.B[3],
                    state.R[5]
                ],
                [
                    state.B[5],
                    state.L[3]
                ]
            ]
        ];
        // Check for impossible edge color combinations
        const oppositeColors = [
            [
                'W',
                'Y'
            ],
            [
                'R',
                'O'
            ],
            [
                'B',
                'G'
            ]
        ];
        for (const edge of edges.flat()){
            for (const [color1, color2] of oppositeColors){
                if (edge[0] === color1 && edge[1] === color2 || edge[0] === color2 && edge[1] === color1) {
                    console.log('Invalid configuration: impossible edge color combination', edge);
                    return false;
                }
            }
        }
        // Check corners for valid combinations
        const corners = [
            // Upper layer corners
            [
                [
                    state.U[0],
                    state.L[0],
                    state.B[2]
                ],
                [
                    state.U[2],
                    state.B[0],
                    state.R[2]
                ],
                [
                    state.U[6],
                    state.F[0],
                    state.L[2]
                ],
                [
                    state.U[8],
                    state.R[0],
                    state.F[2]
                ]
            ],
            // Lower layer corners
            [
                [
                    state.D[0],
                    state.L[8],
                    state.F[6]
                ],
                [
                    state.D[2],
                    state.F[8],
                    state.R[6]
                ],
                [
                    state.D[6],
                    state.B[6],
                    state.L[6]
                ],
                [
                    state.D[8],
                    state.R[8],
                    state.B[8]
                ]
            ]
        ];
        // Check for impossible corner color combinations
        for (const corner of corners.flat()){
            // A corner can't have the same color twice
            if (corner[0] === corner[1] || corner[1] === corner[2] || corner[0] === corner[2]) {
                console.log('Invalid configuration: corner has duplicate colors', corner);
                return false;
            }
            // A corner can't have opposite colors
            for (const [color1, color2] of oppositeColors){
                const cornerColors = corner;
                if (cornerColors.includes(color1) && cornerColors.includes(color2)) {
                    console.log('Invalid configuration: corner has opposite colors', corner);
                    return false;
                }
            }
        }
        return true;
    }
    static isValidState(state) {
        // First check the basic structure and color counts
        if (!state || typeof state !== 'object') {
            console.log('Invalid state: state is null or not an object');
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
            console.log('Invalid state: missing faces or invalid face length');
            return false;
        }
        // Count occurrences of each color
        const colorCounts = {
            'W': 0,
            'Y': 0,
            'R': 0,
            'O': 0,
            'B': 0,
            'G': 0
        };
        Object.values(state).forEach((face)=>{
            face.forEach((color)=>{
                if (!colorCounts.hasOwnProperty(color)) {
                    console.log('Invalid state: invalid color found:', color);
                    return;
                }
                colorCounts[color] = (colorCounts[color] || 0) + 1;
            });
        });
        console.log('Color counts:', colorCounts);
        // During input, we allow partial completion
        // Each color should not exceed 9 occurrences
        if (!Object.values(colorCounts).every((count)=>count <= 9)) {
            console.log('Invalid state: some colors appear more than 9 times');
            return false;
        }
        // If all colors have exactly 9 occurrences, also check the physical validity
        if (Object.values(colorCounts).every((count)=>count === 9)) {
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
function solveCube(state) {
    const solver = new CubeSolver(state);
    return solver.solve();
}
}}),
"[project]/src/app/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CubeInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CubeInput.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ColorPicker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ColorPicker.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SolutionDisplay$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SolutionDisplay.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cubeSolver$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/cubeSolver.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function Home() {
    const [selectedColor, setSelectedColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('W');
    const [cubeState, setCubeState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        // Initialize with standard color orientation:
        // White on top (U), Yellow on bottom (D)
        // Red on right (R), Orange on left (L)
        // Green on front (F), Blue on back (B)
        U: Array(9).fill('W'),
        D: Array(9).fill('Y'),
        F: Array(9).fill('G'),
        B: Array(9).fill('B'),
        L: Array(9).fill('O'),
        R: Array(9).fill('R') // Red on right
    });
    const [solution, setSolution] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleColorSelect = (color)=>{
        setSelectedColor(color);
    };
    const handleCellClick = (face, index)=>{
        setCubeState((prev)=>({
                ...prev,
                [face]: prev[face].map((c, i)=>i === index ? selectedColor : c)
            }));
    };
    const handleSolve = async ()=>{
        try {
            setError(null);
            const solution = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cubeSolver$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["solveCube"])(cubeState);
            setSolution(solution);
        } catch (error) {
            console.error('Error solving cube:', error);
            setError(error instanceof Error ? error.message : 'An error occurred while solving the cube');
        }
    };
    const handleReset = ()=>{
        setCubeState({
            U: Array(9).fill('W'),
            D: Array(9).fill('Y'),
            F: Array(9).fill('G'),
            B: Array(9).fill('B'),
            L: Array(9).fill('O'),
            R: Array(9).fill('R')
        });
        setSolution([]);
        setError(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-gray-50 py-8 px-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-4xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-600 to-indigo-800 bg-clip-text text-transparent",
                    children: "Rubik's Cube Solver"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ColorPicker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            selectedColor: selectedColor,
                            onColorSelect: handleColorSelect
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CubeInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            cubeState: cubeState,
                            onCellClick: handleCellClick
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-red-50 border-l-4 border-red-500 p-4 rounded-md",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "h-5 w-5 text-red-400",
                                            viewBox: "0 0 20 20",
                                            fill: "currentColor",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                fillRule: "evenodd",
                                                d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
                                                clipRule: "evenodd"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 85,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 84,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 83,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ml-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-red-700",
                                            children: error
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 89,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 88,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 82,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 81,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleReset,
                                    className: "px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors flex items-center gap-2",
                                    children: "Reset Cube"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleSolve,
                                    className: "px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors flex items-center gap-2",
                                    children: "Solve Cube"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this),
                        solution.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SolutionDisplay$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            moves: solution
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 111,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 64,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else {
                "TURBOPACK unreachable";
            }
        } else {
            "TURBOPACK unreachable";
        }
    }
} //# sourceMappingURL=module.compiled.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__a1f43541._.js.map