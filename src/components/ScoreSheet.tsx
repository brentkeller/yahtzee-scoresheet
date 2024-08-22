import React, { useContext } from "react";
import {
  GiInvertedDice1,
  GiInvertedDice2,
  GiInvertedDice3,
  GiInvertedDice4,
  GiInvertedDice5,
  GiInvertedDice6,
} from "react-icons/gi";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { PlayerColumn } from "./PlayerColumn";
import { GameContext } from "./App";
import { Player } from "../models/player";
import { Game } from "../models/game";
import { Mobile, Default } from "./Responsive";

export const ScoreSheet: React.FC = () => {
  const { game, updateGame } = useContext(GameContext);

  const updatePlayer = (player: Player) => {
    if (game) {
      game.updatePlayer(player);
      updateGame(new Game(game));
    }
  };

  const nextPlayer = () => {
    if (game) {
      game.changePlayerIndex(1);
      updateGame(new Game(game));
    }
  };

  const prevPlayer = () => {
    if (game) {
      game.changePlayerIndex(-1);
      updateGame(new Game(game));
    }
  };

  const multiplePlayers = game && game.players.length > 1;
  let currentPlayer;
  if (game && game.players.length > 0 && game.currentPlayerIndex >= 0) {
    currentPlayer = game.players[game.currentPlayerIndex];
  }

  return (
    <div className="scoresheet">
      <div>
        <div className="section-divider">Upper Section</div>
        <div className="cell">
          <span className="die-label">Aces</span>
          <GiInvertedDice1 />
        </div>
        <div className="cell">
          <span className="die-label">Twos</span>
          <GiInvertedDice2 />
        </div>
        <div className="cell">
          <span className="die-label">Threes</span>
          <GiInvertedDice3 />
        </div>
        <div className="cell">
          <span className="die-label">Fours</span>
          <GiInvertedDice4 />
        </div>
        <div className="cell">
          <span className="die-label">Fives</span>
          <GiInvertedDice5 />
        </div>
        <div className="cell">
          <span className="die-label">Sixes</span>
          <GiInvertedDice6 />
        </div>
        <div className="cell">Total Score</div>
        <div className="cell">Bonus (63+)</div>
        <div className="cell">Total (Upper)</div>
        <div className="section-divider">Lower Section</div>
        <div className="cell">3 of a kind</div>
        <div className="cell">4 of a kind</div>
        <div className="cell">Full House</div>
        <div className="cell">Sm Straight</div>
        <div className="cell">Lg Straight</div>
        <div className="cell">Yahtzee</div>
        <div className="cell">Chance</div>
        <div className="cell">Yahtzee Bonus</div>
        <div className="cell">Total (Lower)</div>
        <div className="cell">Total (Upper)</div>
        <div className="cell">Grand Total</div>
      </div>
      <div>
        <div className="section-divider">How to score</div>
        <div className="cell instructions">Count and add only Aces</div>
        <div className="cell instructions">Count and add only Twos</div>
        <div className="cell instructions">Count and add only Threes</div>
        <div className="cell instructions">Count and add only Fours</div>
        <div className="cell instructions">Count and add only Fives</div>
        <div className="cell instructions">Count and add only Sixes</div>
        <div className="cell instructions" />
        <div className="cell instructions">Score 35</div>
        <div className="cell instructions" />
        <div className="section-divider"></div>
        <div className="cell instructions">
          Add total
          <br />
          of all dice
        </div>
        <div className="cell instructions">
          Add total
          <br /> of all dice
        </div>
        <div className="cell instructions">Score 25</div>
        <div className="cell instructions">Score 30</div>
        <div className="cell instructions">Score 40</div>
        <div className="cell instructions">Score 50</div>
        <div className="cell instructions">
          Score total
          <br /> of all dice
        </div>
        <div className="cell instructions" />
        <div className="cell instructions" />
        <div className="cell instructions" />
        <div className="cell instructions" />
      </div>
      <Mobile>
        {currentPlayer ? (
          <div>
            <div className="section-divider player-name">
              {multiplePlayers && <MdChevronLeft onClick={prevPlayer} />}
              {currentPlayer.name}
              {multiplePlayers && <MdChevronRight onClick={nextPlayer} />}
            </div>
            <PlayerColumn
              player={currentPlayer}
              updatePlayer={updatePlayer}
              key={currentPlayer.id}
            />
          </div>
        ) : (
          <p>No players</p>
        )}
      </Mobile>
      <Default>
        {game?.players && game?.players.length > 0 ? (
          game?.players.map((p) => {
            return (
              <div key={p.id}>
                <div className="section-divider player-name">{p.name}</div>
                <PlayerColumn player={p} updatePlayer={updatePlayer} />
              </div>
            );
          })
        ) : (
          <p>No players</p>
        )}
      </Default>
    </div>
  );
};
