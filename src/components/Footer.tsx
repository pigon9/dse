import React from 'react';
import { AlertCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center">
          <p className="text-sm text-gray-600">© 2025 HKDSE University Predictor</p>
          <p className="text-xs text-gray-500 flex items-center mt-1">
            <AlertCircle className="h-3 w-3 mr-1" />
            Predictions are estimates based on available data
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;