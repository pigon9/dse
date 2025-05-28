import React from 'react';
import { RouterProvider } from './components/Router';
import { PredictorProvider } from './context/PredictorContext';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <PredictorProvider>
        <RouterProvider />
      </PredictorProvider>
    </div>
  );
}

export default App;