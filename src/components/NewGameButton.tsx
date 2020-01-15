import React, { useContext } from 'react';
import { GameContext } from './App';
import { Game } from '../models/game';
import { Player } from '../models/player';

const NewGameButton: React.FC = () => {
  const { game, updateGame } = useContext(GameContext);

  const newGame = () => {
    const newGame = new Game();
    newGame.addPlayer(new Player('Timmy'));
    updateGame(newGame);
  };

  const addPlayer = () => {
    if (game) {
      game.addPlayer(new Player('Mike'));
      updateGame(new Game(game));
      console.log('added');
    }
  };

  const removePlayer = () => {
    if (game) {
      game.removePlayer(game.players.length - 1);
      updateGame(new Game(game));
      console.log('removed');
    }
  };

  return (
    <div>
      <button onClick={newGame}>New game</button>
      <button onClick={addPlayer}>Add player</button>
      <button onClick={removePlayer}>Remove player</button>
    </div>
  );
};

export { NewGameButton };
