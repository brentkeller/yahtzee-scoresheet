import React from 'react';
import './App.css';
import { ScoreSheet } from './components/ScoreSheet';

const App: React.FC = () => {
  return (
    <div className="app">
      <ScoreSheet />
    </div>
  );
};

export default App;
