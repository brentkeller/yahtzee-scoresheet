import React, { useState } from 'react';
import './App.css';
import { ScoreSheet } from './ScoreSheet';
import { Game } from '../models/game';
import { GameMenu } from './GameMenu';
import { Button } from './Button';

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
  const [menuVisible, setMenuVisible] = useState(false);

  const showMenu = () => setMenuVisible(true);
  const hideMenu = () => setMenuVisible(false);

  const startNewGame = () => {
    setGame(new Game());
    showMenu();
  };

  return (
    <GameContext.Provider value={{ game, updateGame: setGame }}>
      <main className="app">
        <header className="header">
          <h1>Yahtzee</h1>
          <div>
            <Button onClick={showMenu}>Players</Button>
          </div>
        </header>
        <div className="body">
          {game ? <ScoreSheet /> : <Button onClick={startNewGame}>New Game</Button>}
        </div>
        {menuVisible && <GameMenu onClose={hideMenu} />}
      </main>
    </GameContext.Provider>
  );
};
