'use client';

import { useState } from 'react';
import { BudgetInput, calculateCombinations, Combination } from '@/lib/calculator';
import BudgetForm from '@/components/BudgetForm';
import ResultsDisplay from '@/components/ResultsDisplay';
import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {
  const [results, setResults] = useState<Combination[]>([]);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleCalculate = (input: BudgetInput) => {
    setIsCalculating(true);
    // Simulate calculation (in case it takes time)
    setTimeout(() => {
      const combinations = calculateCombinations(input);
      setResults(combinations);
      setIsCalculating(false);
    }, 100);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-black dark:via-black dark:to-black">
      <ThemeToggle />
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent mb-3">
            iterations w khushi
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Smart cost estimation for avatar & voice solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
            <BudgetForm onSubmit={handleCalculate} isCalculating={isCalculating} />
          </div>

          <div className="bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 flex flex-col min-h-[600px] max-h-[800px]">
            <ResultsDisplay results={results} isCalculating={isCalculating} />
          </div>
        </div>
      </div>
    </main>
  );
}

