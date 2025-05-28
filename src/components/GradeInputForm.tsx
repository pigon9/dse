import React, { useState, useEffect } from 'react';
import { usePredictor } from '../context/PredictorContext';
import { SubjectGrade, GradeValue, SelfAssessment } from '../types';
import { subjects, getCoreSubjects } from '../data/subjects';
import { BookOpen, Plus, Trash2, Info, Scale, AlertTriangle } from 'lucide-react';

const GradeInputForm: React.FC = () => {
  const { updateUserGrades } = usePredictor();
  const [gradesInput, setGradesInput] = useState<SubjectGrade[]>([]);
  const [selfAssessment, setSelfAssessment] = useState<SelfAssessment>('accurate');
  const [error, setError] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  
  // Initialize with core subjects
  useEffect(() => {
    const initialGrades = getCoreSubjects().map(subject => ({
      subjectId: subject.id,
      grade: null as GradeValue | null
    }));
    setGradesInput(initialGrades);
  }, []);
  
  // Handle grade change
  const handleGradeChange = (index: number, grade: GradeValue | null) => {
    const newGrades = [...gradesInput];
    newGrades[index].grade = grade;
    setGradesInput(newGrades);
    setHasUnsavedChanges(true);
  };
  
  // Handle subject change
  const handleSubjectChange = (index: number, subjectId: string) => {
    const newGrades = [...gradesInput];
    newGrades[index].subjectId = subjectId;
    setGradesInput(newGrades);
    setHasUnsavedChanges(true);
  };
  
  // Add a new subject
  const addSubject = () => {
    if (gradesInput.length >= 8) {
      setError('Maximum 8 subjects allowed');
      setTimeout(() => setError(''), 3000);
      return;
    }
    
    const selectedSubjects = gradesInput.map(g => g.subjectId);
    const availableSubject = subjects.find(s => !selectedSubjects.includes(s.id));
    
    if (availableSubject) {
      setGradesInput([...gradesInput, { subjectId: availableSubject.id, grade: null }]);
      setHasUnsavedChanges(true);
    }
  };
  
  // Remove a subject
  const removeSubject = (index: number) => {
    const coreSubjectIds = getCoreSubjects().map(s => s.id);
    if (coreSubjectIds.includes(gradesInput[index].subjectId)) {
      setError('Core subjects cannot be removed');
      setTimeout(() => setError(''), 3000);
      return;
    }
    
    const newGrades = [...gradesInput];
    newGrades.splice(index, 1);
    setGradesInput(newGrades);
    setHasUnsavedChanges(true);
  };
  
  // Save grades
  const handleToggle = () => {
    const coreSubjectIds = getCoreSubjects().map(s => s.id);
    const missingCores = gradesInput
      .filter(g => coreSubjectIds.includes(g.subjectId) && g.grade === null)
      .length;
    
    if (missingCores > 0) {
      setError('Please provide grades for all core subjects');
      setTimeout(() => setError(''), 3000);
      setIsEnabled(false);
      return;
    }
    
    setIsEnabled(!isEnabled);
    if (!isEnabled) {
      updateUserGrades({
        grades: gradesInput,
        selfAssessment
      });
      setHasUnsavedChanges(false);
    }
  };
  
  // Get available subjects
  const getAvailableSubjects = (currentSubjectId: string) => {
    const selectedSubjects = gradesInput.map(g => g.subjectId);
    return subjects.filter(
      s => s.id === currentSubjectId || !selectedSubjects.includes(s.id)
    );
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto">
      <div className="mb-6 border-b pb-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
          <BookOpen className="mr-2 h-6 w-6 text-blue-600" />
          Enter Your HKDSE Grades
        </h2>
        <p className="text-gray-600">
          Please enter your HKDSE subject grades. All core subjects are required.
        </p>
      </div>
      
      {error && (
        <div className="bg-red-50 text-red-700 p-3 rounded-md mb-4 flex items-center">
          <Info className="h-5 w-5 mr-2" />
          {error}
        </div>
      )}

      {hasUnsavedChanges && (
        <div className="bg-amber-50 text-amber-700 p-3 rounded-md mb-4 flex items-center">
          <AlertTriangle className="h-5 w-5 mr-2" />
          You have unsaved changes. Please click "Save & Continue" before proceeding.
        </div>
      )}
      
      <div className="space-y-4">
        {gradesInput.map((grade, index) => {
          const availableSubjects = getAvailableSubjects(grade.subjectId);
          const isCore = getCoreSubjects().map(s => s.id).includes(grade.subjectId);
          
          return (
            <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-md transition-all hover:bg-gray-100">
              <div className="flex-grow">
                <select
                  value={grade.subjectId}
                  onChange={(e) => handleSubjectChange(index, e.target.value)}
                  disabled={isCore}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                >
                  {availableSubjects.map(subject => (
                    <option key={subject.id} value={subject.id}>
                      {subject.name} {isCore ? '(Core)' : ''}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="w-32">
                <select
                  value={grade.grade || ''}
                  onChange={(e) => {
                    const value = e.target.value === '' ? null : e.target.value as GradeValue;
                    handleGradeChange(index, value);
                  }}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select Grade</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="5*">5*</option>
                  <option value="5**">5**</option>
                </select>
              </div>
              
              <button
                type="button"
                onClick={() => removeSubject(index)}
                disabled={isCore}
                className="p-2 text-red-500 hover:text-red-700 disabled:text-gray-400 transition-colors"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          );
        })}
        
        <div className="mt-4">
          <button
            type="button"
            onClick={addSubject}
            disabled={gradesInput.length >= 8}
            className="flex items-center text-blue-600 hover:text-blue-800 disabled:text-gray-400 p-2 transition-colors"
          >
            <Plus className="h-5 w-5 mr-1" />
            Add Elective Subject
          </button>
        </div>
      </div>
      
      {/* Self-Assessment Section */}
      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
        <h3 className="text-lg font-medium text-gray-900 mb-2 flex items-center">
          <Scale className="h-5 w-5 mr-2 text-blue-600" />
          Grade Confidence
        </h3>
        <p className="text-sm text-gray-600 mb-3">
          How confident are you about your grade predictions?
        </p>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="confidence"
              value="overrated"
              checked={selfAssessment === 'overrated'}
              onChange={(e) => {
                setSelfAssessment(e.target.value as SelfAssessment);
                setHasUnsavedChanges(true);
              }}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
            />
            <span className="ml-2 text-sm text-gray-700">
              I may be overestimating my grades
            </span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="confidence"
              value="accurate"
              checked={selfAssessment === 'accurate'}
              onChange={(e) => {
                setSelfAssessment(e.target.value as SelfAssessment);
                setHasUnsavedChanges(true);
              }}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
            />
            <span className="ml-2 text-sm text-gray-700">
              I think my predictions are accurate
            </span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="confidence"
              value="underrated"
              checked={selfAssessment === 'underrated'}
              onChange={(e) => {
                setSelfAssessment(e.target.value as SelfAssessment);
                setHasUnsavedChanges(true);
              }}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
            />
            <span className="ml-2 text-sm text-gray-700">
              I may be underestimating my grades
            </span>
          </label>
        </div>
      </div>
      
      <div className="mt-6 flex justify-end items-center">
        <span className="mr-3 text-sm text-gray-600">Save & Continue</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={isEnabled}
            onChange={handleToggle}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        </label>
      </div>
    </div>
  );
};

export default GradeInputForm;