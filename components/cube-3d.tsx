"use client"

import { useState, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import type { CubeState } from "@/app/page"
import type * as THREE from "three"

const COLORS = {
  W: "#ffffff", // White
  Y: "#ffd700", // Yellow
  R: "#ff0000", // Red
  O: "#ff8c00", // Orange
  G: "#00ff00", // Green
  B: "#0000ff", // Blue
}

const COLOR_ORDER = ["W", "Y", "R", "O", "G", "B"]

interface Cube3DProps {
  cubeState: CubeState
  setCubeState: (state: CubeState) => void
}

export function Cube3D({ cubeState, setCubeState }: Cube3DProps) {
  const [autoRotate, setAutoRotate] = useState(true)
  const [isInteracting, setIsInteracting] = useState(false)

  const handleSquareClick = (face: keyof CubeState, row: number, col: number) => {
    setAutoRotate(false)
    setIsInteracting(true)

    const currentColor = cubeState[face][row][col]
    const currentIndex = COLOR_ORDER.indexOf(currentColor)
    const nextIndex = (currentIndex + 1) % COLOR_ORDER.length
    const nextColor = COLOR_ORDER[nextIndex]

    const newCubeState = { ...cubeState }
    newCubeState[face] = cubeState[face].map((r, rIndex) =>
      r.map((c, cIndex) => (rIndex === row && cIndex === col ? nextColor : c)),
    )
    setCubeState(newCubeState)

    // Reset auto-rotation after interaction
    setTimeout(() => {
      setIsInteracting(false)
      setAutoRotate(true)
    }, 3000)
  }

  return (
    <div className="w-full h-96 bg-gray-900/50 rounded-lg border border-gray-800 overflow-hidden">
      <Canvas camera={{ position: [4, 4, 4], fov: 50 }} shadows dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} />

        <RubiksCube
          cubeState={cubeState}
          onSquareClick={handleSquareClick}
          autoRotate={autoRotate}
          isInteracting={isInteracting}
        />

        <OrbitControls
          autoRotate={autoRotate}
          autoRotateSpeed={0.5}
          enableDamping
          dampingFactor={0.05}
          minDistance={3}
          maxDistance={8}
          onStart={() => setAutoRotate(false)}
          onEnd={() => setTimeout(() => setAutoRotate(true), 2000)}
        />

        <Environment preset="studio" />

        {/* Floating particles for ambiance */}
        <FloatingParticles />
      </Canvas>
    </div>
  )
}

function RubiksCube({
  cubeState,
  onSquareClick,
  autoRotate,
  isInteracting,
}: {
  cubeState: CubeState
  onSquareClick: (face: keyof CubeState, row: number, col: number) => void
  autoRotate: boolean
  isInteracting: boolean
}) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current && autoRotate && !isInteracting) {
      groupRef.current.rotation.y += 0.003
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
    }
  })

  // Face configurations for positioning and rotation
  const faceConfigs = {
    F: { position: [0, 0, 1.51], rotation: [0, 0, 0] }, // Front
    B: { position: [0, 0, -1.51], rotation: [0, Math.PI, 0] }, // Back
    U: { position: [0, 1.51, 0], rotation: [-Math.PI / 2, 0, 0] }, // Up
    D: { position: [0, -1.51, 0], rotation: [Math.PI / 2, 0, 0] }, // Down
    L: { position: [-1.51, 0, 0], rotation: [0, -Math.PI / 2, 0] }, // Left
    R: { position: [1.51, 0, 0], rotation: [0, Math.PI / 2, 0] }, // Right
  }

  return (
    <group ref={groupRef}>
      {/* Main cube structure */}
      <mesh>
        <boxGeometry args={[3, 3, 3]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>

      {/* Cube faces */}
      {Object.entries(cubeState).map(([faceKey, faceColors]) => {
        const face = faceKey as keyof CubeState
        const config = faceConfigs[face]

        return (
          <group
            key={face}
            position={config.position as [number, number, number]}
            rotation={config.rotation as [number, number, number]}
          >
            {faceColors.map((row, rowIndex) =>
              row.map((color, colIndex) => (
                <CubeSquare
                  key={`${face}-${rowIndex}-${colIndex}`}
                  position={[(colIndex - 1) * 1, (1 - rowIndex) * 1, 0.01]}
                  color={color}
                  onClick={() => onSquareClick(face, rowIndex, colIndex)}
                />
              )),
            )}
          </group>
        )
      })}
    </group>
  )
}

function CubeSquare({
  position,
  color,
  onClick,
}: {
  position: [number, number, number]
  color: string
  onClick: () => void
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.scale.setScalar(hovered ? 1.05 : 1)
    }
  })

  return (
    <mesh
      ref={meshRef}
      position={position}
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      castShadow
      receiveShadow
    >
      <boxGeometry args={[0.9, 0.9, 0.1]} />
      <meshStandardMaterial
        color={COLORS[color as keyof typeof COLORS]}
        metalness={0.1}
        roughness={0.2}
        emissive={hovered ? COLORS[color as keyof typeof COLORS] : "#000000"}
        emissiveIntensity={hovered ? 0.1 : 0}
      />

      {/* Border/outline */}
      <mesh>
        <boxGeometry args={[0.95, 0.95, 0.11]} />
        <meshBasicMaterial color="#000000" transparent opacity={0.8} />
      </mesh>
    </mesh>
  )
}

function FloatingParticles() {
  const particlesRef = useRef<THREE.Points>(null)

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05
      particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
    }
  })

  const particleCount = 100
  const positions = new Float32Array(particleCount * 3)

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particleCount} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#8b5cf6" transparent opacity={0.6} sizeAttenuation />
    </points>
  )
}
