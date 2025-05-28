import React, { useState, useEffect } from 'react';
import { usePredictor } from '../context/PredictorContext';
import { Program } from '../types';
import { programs, searchPrograms } from '../data/programs';
import { Search, Building, Filter, Check, X, Plus, Star } from 'lucide-react';

const ProgramSelection: React.FC = () => {
  const { selectedPrograms, updateSelectedPrograms, calculateResults, setPriorityMode } = usePredictor();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPrograms, setFilteredPrograms] = useState<Program[]>(programs);
  const [isFirstPriority, setIsFirstPriority] = useState(false);
  const [activeFilters, setActiveFilters] = useState<{
    universities: Set<string>;
    faculties: Set<string>;
  }>({
    universities: new Set(),
    faculties: new Set(),
  });
  
  // Update filtered programs when search or filters change
  useEffect(() => {
    let result = searchQuery 
      ? searchPrograms(searchQuery) 
      : [...programs];
    
    if (activeFilters.universities.size > 0) {
      result = result.filter(p => 
        activeFilters.universities.has(p.university)
      );
    }
    
    if (activeFilters.faculties.size > 0) {
      result = result.filter(p => 
        activeFilters.faculties.has(p.faculty)
      );
    }
    
    setFilteredPrograms(result);
  }, [searchQuery, activeFilters]);
  
  const toggleProgram = (program: Program) => {
    const isSelected = selectedPrograms.some(p => p.id === program.id);
    
    if (isSelected) {
      updateSelectedPrograms(selectedPrograms.filter(p => p.id !== program.id));
    } else {
      updateSelectedPrograms([...selectedPrograms, program]);
    }
  };
  
  const universities = [...new Set(programs.map(p => p.university))];
  const faculties = [...new Set(programs.map(p => p.faculty))];
  
  const toggleUniversityFilter = (university: string) => {
    const newUniversities = new Set(activeFilters.universities);
    
    if (newUniversities.has(university)) {
      newUniversities.delete(university);
    } else {
      newUniversities.add(university);
    }
    
    setActiveFilters({
      ...activeFilters,
      universities: newUniversities
    });
  };
  
  const toggleFacultyFilter = (faculty: string) => {
    const newFaculties = new Set(activeFilters.faculties);
    
    if (newFaculties.has(faculty)) {
      newFaculties.delete(faculty);
    } else {
      newFaculties.add(faculty);
    }
    
    setActiveFilters({
      ...activeFilters,
      faculties: newFaculties
    });
  };
  
  const clearFilters = () => {
    setActiveFilters({
      universities: new Set(),
      faculties: new Set()
    });
    setSearchQuery('');
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
              Filters
            </h3>
            {(activeFilters.universities.size > 0 || activeFilters.faculties.size > 0) && (
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

          {/* University Filter */}
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-700 mb-2">University</h4>
            <div className="space-y-1">
              {universities.map(university => (
                <div key={university} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`uni-${university}`}
                    checked={activeFilters.universities.has(university)}
                    onChange={() => toggleUniversityFilter(university)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor={`uni-${university}`} className="ml-2 text-sm text-gray-700">
                    {university}
                  </label>
                </div>
              ))}
            </div>
          </div>
          
          {/* Faculty Filter */}
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">Faculty</h4>
            <div className="space-y-1 max-h-64 overflow-y-auto pr-2">
              {faculties.map(faculty => (
                <div key={faculty} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`fac-${faculty}`}
                    checked={activeFilters.faculties.has(faculty)}
                    onChange={() => toggleFacultyFilter(faculty)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor={`fac-${faculty}`} className="ml-2 text-sm text-gray-700">
                    {faculty}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Programs List */}
      <div className="md:col-span-3">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
              <Building className="mr-2 h-6 w-6 text-blue-600" />
              Select University Programs
            </h2>
            <p className="text-gray-600 mb-4">
              Choose programs you're interested in applying to. You can select multiple programs.
            </p>
            
            {/* Search Bar */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search by program name, JUPAS code, university..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-full p-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            {/* Selected Counter */}
            <div className="mt-4 flex justify-between items-center">
              <span className="text-sm text-gray-600">
                {selectedPrograms.length} program{selectedPrograms.length !== 1 ? 's' : ''} selected
              </span>
              <span className="text-sm text-gray-600">
                {filteredPrograms.length} result{filteredPrograms.length !== 1 ? 's' : ''}
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
                <h3 className="text-lg font-medium text-gray-900">No programs found</h3>
                <p className="text-gray-600 mt-1">
                  Try adjusting your filters or search query
                </p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-sm text-blue-600 hover:text-blue-800"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramSelection;