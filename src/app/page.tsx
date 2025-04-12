'use client';

import CubeInput from '@/components/CubeInput';
import SolveGuide from '@/components/SolveGuide';
import { CubeSolver } from '@/utils/cubeSolver';
import { CubeState } from '@/types/cube';
import { useState } from 'react';

export default function Home() {
  const [solver, setSolver] = useState<CubeSolver | null>(null);

  const handleCubeInput = (state: CubeState) => {
    const newSolver = new CubeSolver(state);
    setSolver(newSolver);
  };

  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
            <span role="img" aria-label="Rubik's Cube">🎲</span>
            Rubik&apos;s Cube Solver
          </h1>
          <p className="text-secondary-foreground text-lg max-w-2xl mx-auto">
            Input your cube&apos;s colors using the interface below, and follow our step-by-step guide to solve it.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <CubeInput onSubmit={handleCubeInput} />
          </div>
          <div className="lg:sticky lg:top-8">
            {solver ? (
              <SolveGuide solver={solver} />
            ) : (
              <div className="bg-secondary p-8 rounded-2xl shadow-lg border border-border">
                <div className="flex items-center justify-center space-x-4 text-secondary-foreground">
                  <span role="img" aria-label="Point Left" className="text-2xl">👈</span>
                  <p className="text-lg">
                    Start by selecting colors and clicking on the cube faces
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
