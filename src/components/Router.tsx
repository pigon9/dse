import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import GradeInputForm from './GradeInputForm';
import ProgramSelection from './ProgramSelection';
import ResultsPage from './ResultsPage';
import { usePredictor } from '../context/PredictorContext';

type Route = 'grades' | 'programs' | 'results';

const routes: Record<Route, React.ReactNode> = {
  grades: <GradeInputForm />,
  programs: <ProgramSelection />,
  results: <ResultsPage />
};

export const RouterProvider: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<Route>('grades');
  const { clearPredictionResults } = usePredictor();

  const handleNext = (route: Route) => {
    if (currentRoute === 'results' && route === 'programs') {
      clearPredictionResults();
    }
    setCurrentRoute(route);
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-6">
        {/* Current Route Content */}
        <div className="animation-fade-in">
          {routes[currentRoute]}
        </div>

        {/* Navigation Buttons */}
        <div className="mt-8 flex justify-between">
          {currentRoute !== 'grades' && (
            <button
              type="button"
              onClick={() => handleNext(currentRoute === 'results' ? 'programs' : 'grades')}
              className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors"
            >
              Back
            </button>
          )}
          
          {currentRoute !== 'results' && (
            <button
              type="button"
              onClick={() => handleNext(currentRoute === 'grades' ? 'programs' : 'results')}
              className="ml-auto px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              {currentRoute === 'programs' ? 'View Results' : 'Next: Select Programs'}
            </button>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};