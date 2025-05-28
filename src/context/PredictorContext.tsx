import React, { createContext, useContext, useState } from 'react';
import { SubjectGrade, Program, UserGrades, PredictionResult } from '../types';
import { calculateAdmissionLikelihood } from '../utils/calculator';

interface PredictorContextType {
  userGrades: UserGrades;
  selectedPrograms: Program[];
  predictionResults: PredictionResult[];
  updateUserGrades: (grades: UserGrades) => void;
  updateSelectedPrograms: (programs: Program[]) => void;
  calculateResults: () => void;
  setPriorityMode: (mode: boolean) => void;
  clearPredictionResults: () => void;
}

const defaultContext: PredictorContextType = {
  userGrades: { grades: [], selfAssessment: 'accurate' },
  selectedPrograms: [],
  predictionResults: [],
  updateUserGrades: () => {},
  updateSelectedPrograms: () => {},
  calculateResults: () => {},
  setPriorityMode: () => {},
  clearPredictionResults: () => {},
};

const PredictorContext = createContext<PredictorContextType>(defaultContext);

export const usePredictor = () => useContext(PredictorContext);

export const PredictorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userGrades, setUserGrades] = useState<UserGrades>({ grades: [], selfAssessment: 'accurate' });
  const [selectedPrograms, setSelectedPrograms] = useState<Program[]>([]);
  const [predictionResults, setPredictionResults] = useState<PredictionResult[]>([]);
  const [isFirstPriority, setIsFirstPriority] = useState(false);

  const updateUserGrades = (grades: UserGrades) => {
    setUserGrades(grades);
  };

  const updateSelectedPrograms = (programs: Program[]) => {
    setSelectedPrograms(programs);
  };

  const setPriorityMode = (mode: boolean) => {
    setIsFirstPriority(mode);
  };

  const clearPredictionResults = () => {
    setPredictionResults([]);
  };

  const calculateResults = () => {
    const results = selectedPrograms.map(program => 
      calculateAdmissionLikelihood(userGrades, program, isFirstPriority)
    );
    setPredictionResults(results);
  };

  return (
    <PredictorContext.Provider
      value={{
        userGrades,
        selectedPrograms,
        predictionResults,
        updateUserGrades,
        updateSelectedPrograms,
        calculateResults,
        setPriorityMode,
        clearPredictionResults,
      }}
    >
      {children}
    </PredictorContext.Provider>
  );
};