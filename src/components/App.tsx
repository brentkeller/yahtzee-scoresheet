import React, { useState } from 'react';
import './App.css';
import { ScoreSheet } from './ScoreSheet';
import { Game } from '../models/game';
import { NewGameButton } from './NewGameButton';

interface IGameContext {
  game?: Game;
  updateGame: (game?: Game) => void;
}

export const GameContext = React.createContext<IGameContext>({
  game: new Game(),
  updateGame: (game?: Game) => {},
});

export const App: React.FC = () => {
  const [game, setGame] = useState<Game | undefined>();

  return (
    <GameContext.Provider value={{ game, updateGame: setGame }}>
      <main className="app">
        <header className="header">
          <h1>Yahtzee</h1>
          <div>
            <NewGameButton />
          </div>
        </header>
        <div className="body">{game ? <ScoreSheet /> : <p>Start a new game</p>}</div>
      </main>
    </GameContext.Provider>
  );
};
