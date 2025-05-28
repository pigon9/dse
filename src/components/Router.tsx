import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import GradeInputForm from './GradeInputForm';
import ProgramSelection from './ProgramSelection';
import ResultsPage from './ResultsPage';
import { GraduationCap, FileText, CheckCircle } from 'lucide-react';
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

  const steps = [
    { id: 'grades', name: 'Enter Grades', icon: FileText, status: currentRoute === 'grades' ? 'current' : (currentRoute === 'programs' || currentRoute === 'results' ? 'complete' : 'upcoming') },
    { id: 'programs', name: 'Select Programs', icon: GraduationCap, status: currentRoute === 'programs' ? 'current' : (currentRoute === 'results' ? 'complete' : 'upcoming') },
    { id: 'results', name: 'View Results', icon: CheckCircle, status: currentRoute === 'results' ? 'current' : 'upcoming' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-6">
        {/* Progress Steps */}
        <nav aria-label="Progress" className="mb-8">
          <ol className="flex items-center justify-center">
            {steps.map((step, stepIdx) => (
              <li key={step.id} className={`relative ${stepIdx !== steps.length - 1 ? 'pr-8 sm:pr-20' : ''}`}>
                {stepIdx !== steps.length - 1 && (
                  <div className="absolute top-4 left-7 -ml-px mt-0.5 h-0.5 w-full sm:w-20 bg-gray-300\" aria-hidden="true">
                    <div 
                      className="h-0.5 bg-blue-600 transition-all duration-500" 
                      style={{ width: step.status === 'upcoming' ? '0%' : (step.status === 'current' ? '50%' : '100%') }}
                    />
                  </div>
                )}
                <div className="relative flex items-center group">
                  <span className="h-9 flex items-center">
                    <span className={`relative z-10 w-8 h-8 flex items-center justify-center rounded-full ${
                      step.status === 'complete' ? 'bg-blue-600 text-white' : 
                      step.status === 'current' ? 'border-2 border-blue-600 bg-white text-blue-600' : 
                      'border-2 border-gray-300 bg-white text-gray-500'
                    } transition-all duration-300`}>
                      {step.status === 'complete' ? (
                        <step.icon className="w-5 h-5\" aria-hidden="true" />
                      ) : (
                        <span>{stepIdx + 1}</span>
                      )}
                    </span>
                  </span>
                  <span className="ml-2 text-sm font-medium text-gray-600">
                    {step.name}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </nav>
        
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