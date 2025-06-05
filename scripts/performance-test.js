import { solveCube } from "../lib/cube-solver.js"

console.log("⚡ Performance Testing Rubik's Cube Solver...")

// Test 1: Solved cube (should be instant)
console.log("\n📋 Test 1: Solved Cube Performance")
const solvedCube = {
  U: [
    ["W", "W", "W"],
    ["W", "W", "W"],
    ["W", "W", "W"],
  ],
  D: [
    ["Y", "Y", "Y"],
    ["Y", "Y", "Y"],
    ["Y", "Y", "Y"],
  ],
  F: [
    ["R", "R", "R"],
    ["R", "R", "R"],
    ["R", "R", "R"],
  ],
  B: [
    ["O", "O", "O"],
    ["O", "O", "O"],
    ["O", "O", "O"],
  ],
  L: [
    ["G", "G", "G"],
    ["G", "G", "G"],
    ["G", "G", "G"],
  ],
  R: [
    ["B", "B", "B"],
    ["B", "B", "B"],
    ["B", "B", "B"],
  ],
}

const start1 = Date.now()
const result1 = solveCube(solvedCube)
const time1 = Date.now() - start1
console.log(`✅ Solved in ${time1}ms - ${result1.success ? "SUCCESS" : "FAILED"}`)

// Test 2: Simple scramble performance
console.log("\n📋 Test 2: Simple Scramble Performance")
const simpleScramble = {
  U: [
    ["W", "R", "W"],
    ["G", "W", "B"],
    ["W", "O", "W"],
  ],
  D: [
    ["Y", "O", "Y"],
    ["B", "Y", "G"],
    ["Y", "R", "Y"],
  ],
  F: [
    ["R", "W", "R"],
    ["Y", "R", "Y"],
    ["R", "W", "R"],
  ],
  B: [
    ["O", "Y", "O"],
    ["W", "O", "W"],
    ["O", "Y", "O"],
  ],
  L: [
    ["G", "R", "G"],
    ["O", "G", "R"],
    ["G", "B", "G"],
  ],
  R: [
    ["B", "G", "B"],
    ["R", "B", "O"],
    ["B", "G", "B"],
  ],
}

const start2 = Date.now()
const result2 = solveCube(simpleScramble)
const time2 = Date.now() - start2
console.log(`✅ Solved in ${time2}ms - ${result2.success ? "SUCCESS" : "FAILED"}`)
console.log(`📊 Solution: ${result2.moveCount} moves using ${result2.algorithm}`)

// Test 3: Stress test - multiple solves
console.log("\n📋 Test 3: Stress Test (10 consecutive solves)")
const stressStart = Date.now()
let successCount = 0

for (let i = 0; i < 10; i++) {
  const result = solveCube(simpleScramble)
  if (result.success) successCount++
}

const stressTime = Date.now() - stressStart
console.log(`✅ Completed 10 solves in ${stressTime}ms`)
console.log(`📊 Success rate: ${successCount}/10 (${(successCount / 10) * 100}%)`)
console.log(`⚡ Average time per solve: ${stressTime / 10}ms`)

// Test 4: Complex scramble
console.log("\n📋 Test 4: Complex Scramble Performance")
const complexScramble = {
  U: [
    ["Y", "R", "G"],
    ["B", "W", "O"],
    ["R", "Y", "B"],
  ],
  D: [
    ["W", "G", "R"],
    ["O", "Y", "W"],
    ["B", "R", "G"],
  ],
  F: [
    ["O", "B", "Y"],
    ["R", "R", "G"],
    ["W", "O", "Y"],
  ],
  B: [
    ["G", "W", "B"],
    ["Y", "O", "R"],
    ["O", "G", "W"],
  ],
  L: [
    ["R", "Y", "O"],
    ["W", "G", "B"],
    ["Y", "W", "R"],
  ],
  R: [
    ["B", "O", "W"],
    ["G", "B", "Y"],
    ["G", "R", "O"],
  ],
}

const start4 = Date.now()
const result4 = solveCube(complexScramble)
const time4 = Date.now() - start4
console.log(`✅ Solved in ${time4}ms - ${result4.success ? "SUCCESS" : "FAILED"}`)
console.log(`📊 Solution: ${result4.moveCount} moves using ${result4.algorithm}`)

// Performance summary
console.log("\n🎯 Performance Summary:")
console.log(`• Solved cube: ${time1}ms`)
console.log(`• Simple scramble: ${time2}ms`)
console.log(`• Complex scramble: ${time4}ms`)
console.log(`• Average per solve: ${stressTime / 10}ms`)
console.log(`• All tests under 100ms: ${Math.max(time1, time2, time4, stressTime / 10) < 100 ? "✅ YES" : "❌ NO"}`)

console.log("\n✅ Performance testing complete!")
