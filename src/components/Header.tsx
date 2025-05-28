import React from 'react';
import { GraduationCap } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center space-x-2">
          <GraduationCap className="h-8 w-8 text-blue-600" />
          <div>
            <h1 className="text-xl font-bold text-gray-900">HKDSE Predictor</h1>
            <p className="text-xs text-gray-500">University Admission Likelihood</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;