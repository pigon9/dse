import React, { useEffect } from 'react';
import { usePredictor } from '../context/PredictorContext';
import { getSubjectNameById } from '../data/subjects';
import { AlertTriangle, CheckCircle, XCircle, TrendingUp, Info, Shield } from 'lucide-react';

const ResultsPage: React.FC = () => {
  const { predictionResults, userGrades, calculateResults } = usePredictor();
  
  useEffect(() => {
    if (predictionResults.length === 0) {
      calculateResults();
    }
  }, [calculateResults, predictionResults.length]);

  // Helper function to round to 4 significant figures
  const roundToSigFigs = (num: number): number => {
    if (num === 0) return 0;
    const magnitude = Math.floor(Math.log10(Math.abs(num))) + 1;
    const scale = Math.pow(10, 4 - magnitude);
    return Math.round(num * scale) / scale;
  };
  
  if (predictionResults.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-12 w-12 bg-blue-100 rounded-full mb-4"></div>
          <div className="h-4 w-32 bg-blue-100 rounded"></div>
        </div>
      </div>
    );
  }
  
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Likely':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'Borderline':
        return <AlertTriangle className="h-5 w-5 text-amber-500" />;
      case 'Unlikely':
        return <XCircle className="h-5 w-5 text-red-500" />;
      default:
        return <Info className="h-5 w-5 text-gray-500" />;
    }
  };
  
  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Likely':
        return 'bg-green-50 border-green-200 text-green-700';
      case 'Borderline':
        return 'bg-amber-50 border-amber-200 text-amber-700';
      case 'Unlikely':
        return 'bg-red-50 border-red-200 text-red-700';
      default:
        return 'bg-gray-50 border-gray-200 text-gray-700';
    }
  };
  
  return (
    <div>
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
          <Shield className="mr-2 h-6 w-6 text-blue-600" />
          Your Admission Predictions
        </h2>
        <p className="text-gray-600 mb-4">
          Based on your HKDSE grades and program requirements, here are your admission predictions:
        </p>
        
        <div className="grid grid-cols-1 gap-4 mt-6">
          {predictionResults.map((result, index) => (
            <div 
              key={index}
              className={`border rounded-lg p-5 ${getStatusClass(result.status)}`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center">
                    <h3 className="font-semibold text-gray-900">{result.program.name}</h3>
                    <div className={`ml-3 px-2.5 py-0.5 rounded-full text-xs font-medium flex items-center ${
                      result.status === 'Likely' ? 'bg-green-100 text-green-800' :
                      result.status === 'Borderline' ? 'bg-amber-100 text-amber-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {getStatusIcon(result.status)}
                      <span className="ml-1">{result.status}</span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    {result.program.university} · {result.program.jupasCode}
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-xl font-bold flex items-center justify-end">
                    {roundToSigFigs(result.probability)}%
                    <span className="text-xs ml-1">chance</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    estimated probability
                  </div>
                </div>
              </div>
              
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium mb-2 flex items-center">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    Score Analysis
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Your Score (Best 5):</span>
                      <span className="font-medium">{roundToSigFigs(result.userBest5Score)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Program Median:</span>
                      <span className="font-medium">{roundToSigFigs(result.program.medianBest5)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Program lower quarter:</span>
                      <span className="font-medium">{roundToSigFigs(result.program.minBest5)}</span>
                      </div>
                    <div className="flex justify-between">
                      <span>Program upper quarter:</span>
                      <span className="font-medium">{roundToSigFigs(result.program.maxBest5)}</span>
                    </div>
                    <div className="flex justify-between border-t pt-1">
                      <span>Score Gap:</span>
                      <span className={`font-medium ${
                        result.scoreGap > 0 ? 'text-green-600' : 
                        result.scoreGap < 0 ? 'text-red-600' : ''
                      }`}>
                        {result.scoreGap > 0 ? '+' : ''}{roundToSigFigs(result.scoreGap)}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium mb-2">Best Subject Combination</h4>
                  <div className="space-y-1 text-sm">
                    {result.bestSubjectsCombination.map((subject, idx) => (
                      <div key={idx} className="flex justify-between">
                        <span>{getSubjectNameById(subject.subjectId)}</span>
                        <span className="font-medium">{subject.grade}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {result.missingRequirements.length > 0 && (
                <div className="mt-4 px-3 py-2 bg-red-50 border border-red-200 rounded-md">
                  <h4 className="text-sm font-medium text-red-800 mb-1">Missing Requirements:</h4>
                  <ul className="list-disc list-inside text-xs text-red-700">
                    {result.missingRequirements.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                  <p className="text-xs text-red-700 mt-2">
                    Note: A 10% grade deduction has been applied due to missing requirements.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
        <h3 className="text-sm font-medium text-blue-800 mb-1 flex items-center">
          <Info className="h-4 w-4 mr-1" />
          Important Notes:
        </h3>
        <ul className="list-disc list-inside text-xs text-blue-700 space-y-1">
          <li>These predictions are based on historical data and should be used as a guide only.</li>
          <li>Admission criteria may change year to year, and special considerations may apply.</li>
          <li>Meeting minimum requirements doesn't guarantee admission.</li>
          <li>Consider other factors like interviews, portfolios, and extracurricular activities.</li>
          <li>A 10% grade deduction is applied when program requirements are not met.</li>
        </ul>
      </div>
    </div>
  );
};

export default ResultsPage;