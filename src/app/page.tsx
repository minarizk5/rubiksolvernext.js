'use client';

import CubeInput from '@/components/CubeInput';
import SolveGuide from '@/components/SolveGuide';
import { CubeSolver } from '@/utils/cubeSolver';
import { useState } from 'react';

export default function Home() {
  const [solver, setSolver] = useState<CubeSolver | null>(null);

  const handleCubeInput = (state: any) => {
    const newSolver = new CubeSolver(state);
    setSolver(newSolver);
  };

  return (
    <main className="min-h-screen p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Rubik's Cube Solver Guide</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <CubeInput onSubmit={handleCubeInput} />
          </div>
          <div>
            {solver && <SolveGuide solver={solver} />}
            {!solver && (
              <div className="p-4 bg-white rounded-lg shadow-md">
                <p className="text-gray-600">
                  Enter your cube's colors to get started with the step-by-step solving guide.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
