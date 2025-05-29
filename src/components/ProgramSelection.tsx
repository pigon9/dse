import React, { useState, useEffect } from 'react';
import { usePredictor } from '../context/PredictorContext';
import { Program, University } from '../types';
import { programs } from '../data/programs';
import { Building, Filter, Check, X, Plus, Star } from 'lucide-react';

const ProgramSelection: React.FC = () => {
  const { selectedPrograms, updateSelectedPrograms, calculateResults, setPriorityMode } = usePredictor();
  const [selectedUniversity, setSelectedUniversity] = useState<University | ''>('');
  const [selectedFaculty, setSelectedFaculty] = useState('');
  const [isFirstPriority, setIsFirstPriority] = useState(false);
  const [filteredPrograms, setFilteredPrograms] = useState<Program[]>([]);
  
  // Get unique universities
  const universities = [...new Set(programs.map(p => p.university))];
  
  // Get faculties for selected university
  const faculties = [...new Set(
    programs
      .filter(p => !selectedUniversity || p.university === selectedUniversity)
      .map(p => p.faculty)
  )];
  
  // Update filtered programs when university or faculty changes
  useEffect(() => {
    let result = [...programs];
    
    if (selectedUniversity) {
      result = result.filter(p => p.university === selectedUniversity);
    }
    
    if (selectedFaculty) {
      result = result.filter(p => p.faculty === selectedFaculty);
    }
    
    setFilteredPrograms(result);
  }, [selectedUniversity, selectedFaculty]);
  
  const toggleProgram = (program: Program) => {
    const isSelected = selectedPrograms.some(p => p.id === program.id);
    
    if (isSelected) {
      updateSelectedPrograms(selectedPrograms.filter(p => p.id !== program.id));
    } else {
      updateSelectedPrograms([...selectedPrograms, program]);
    }
  };
  
  const clearFilters = () => {
    setSelectedUniversity('');
    setSelectedFaculty('');
  };
  
  const handleViewResults = () => {
    setPriorityMode(isFirstPriority);
    calculateResults();
  };

  const togglePriorityMode = () => {
    setIsFirstPriority(!isFirstPriority);
  };
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Filters Sidebar */}
      <div className="md:col-span-1">
        <div className="bg-white rounded-lg shadow-md p-4 sticky top-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-800 flex items-center">
              <Filter className="h-4 w-4 mr-2" />
              Select Institution
            </h3>
            {(selectedUniversity || selectedFaculty) && (
              <button 
                onClick={clearFilters}
                className="text-xs text-blue-600 hover:text-blue-800"
              >
                Clear All
              </button>
            )}
          </div>
          
          {/* Priority Mode Toggle */}
          <div className="mb-6 p-3 bg-amber-50 border border-amber-200 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Star className="h-4 w-4 text-amber-500 mr-2" />
                <span className="text-sm font-medium text-amber-700">First Priority Mode</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={isFirstPriority}
                  onChange={togglePriorityMode}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
            <p className="text-xs text-amber-800 mt-2">
              {isFirstPriority 
                ? "Using minimum Best 5 scores for comparison (Band A programs)"
                : "Using median Best 5 scores for comparison (standard mode)"}
            </p>
          </div>

          {/* University Selection */}
          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-700 mb-2">University</h4>
            <div className="space-y-2">
              {universities.map(university => (
                <button
                  key={university}
                  onClick={() => setSelectedUniversity(university)}
                  className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                    selectedUniversity === university
                      ? 'bg-blue-100 border border-blue-200 text-blue-700'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  {university}
                </button>
              ))}
            </div>
          </div>
          
          {/* Faculty Selection */}
          {selectedUniversity && (
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">Faculty</h4>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {faculties.map(faculty => (
                  <button
                    key={faculty}
                    onClick={() => setSelectedFaculty(faculty)}
                    className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                      selectedFaculty === faculty
                        ? 'bg-blue-100 border border-blue-200 text-blue-700'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    {faculty}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Programs List */}
      <div className="md:col-span-3">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
              <Building className="mr-2 h-6 w-6 text-blue-600" />
              Available Programs
            </h2>
            <p className="text-gray-600 mb-4">
              {selectedUniversity 
                ? `Showing programs for ${selectedUniversity}${selectedFaculty ? ` - ${selectedFaculty}` : ''}`
                : 'Please select a university to view available programs'}
            </p>
            
            {/* Selected Counter */}
            <div className="mt-4 flex justify-between items-center">
              <span className="text-sm text-gray-600">
                {selectedPrograms.length} program{selectedPrograms.length !== 1 ? 's' : ''} selected
              </span>
              <span className="text-sm text-gray-600">
                {filteredPrograms.length} program{filteredPrograms.length !== 1 ? 's' : ''} available
              </span>
            </div>
          </div>
          
          {/* Programs Grid */}
          <div className="grid grid-cols-1 gap-4">
            {filteredPrograms.length > 0 ? (
              filteredPrograms.map(program => {
                const isSelected = selectedPrograms.some(p => p.id === program.id);
                
                return (
                  <div 
                    key={program.id}
                    className={`border rounded-lg p-4 transition-all ${
                      isSelected 
                        ? 'border-blue-600 bg-blue-50' 
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-gray-900">{program.name}</h3>
                        <div className="text-sm text-gray-600 mt-1">
                          {program.university} · {program.jupasCode}
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          {program.faculty}
                        </div>
                      </div>
                      <button
                        onClick={() => toggleProgram(program)}
                        className={`h-6 w-6 rounded-full flex items-center justify-center transition-colors ${
                          isSelected 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                        }`}
                      >
                        {isSelected ? (
                          <Check className="h-4 w-4" />
                        ) : (
                          <Plus className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                    
                    <div className="mt-3 text-xs flex flex-wrap gap-2">
                      <span className="inline-flex items-center px-2 py-1 rounded-full bg-amber-100 text-amber-800">
                        Min: {Object.values(program.minRequirements).join('')}
                      </span>
                      <span className="inline-flex items-center px-2 py-1 rounded-full bg-emerald-100 text-emerald-800">
                        Median: {program.medianBest5}
                      </span>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                  <X className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">
                  {selectedUniversity ? 'No programs found' : 'Select a university'}
                </h3>
                <p className="text-gray-600 mt-1">
                  {selectedUniversity 
                    ? 'Try selecting a different faculty or university'
                    : 'Choose a university to view available programs'}
                </p>
                {selectedUniversity && (
                  <button
                    onClick={clearFilters}
                    className="mt-4 text-sm text-blue-600 hover:text-blue-800"
                  >
                    Clear selection
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramSelection;