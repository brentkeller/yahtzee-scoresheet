import React from 'react';
import './App.css';
import { ScoreSheet } from './components/ScoreSheet';

const App: React.FC = () => {
  return (
    <main className="app">
      <header className="header">
        <h1>Yahtzee</h1>
        <div>
          <a href="#">New Game</a>
        </div>
      </header>
      <div className="body">
        <ScoreSheet />
      </div>
    </main>
  );
};

export default App;
