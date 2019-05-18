import React from "react";
import { PlayerColumn } from "./PlayerColumn";

export const ScoreSheet: React.FC = () => {
  return (
    <div className="flex flex-1">
      <div className="column">
        <div className="cell">Upper Section</div>
        <div className="cell">Aces</div>
        <div className="cell">Twos</div>
        <div className="cell">Threes</div>
        <div className="cell">Fours</div>
        <div className="cell">Fives</div>
        <div className="cell">Sixes</div>
        <div className="cell">Total Score</div>
        <div className="cell">Bonus</div>
        <div className="cell">Total</div>
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
      <div className="column">
        <div className="cell">How to score</div>
        <div className="cell">Count and add only Aces</div>
        <div className="cell">Count and add only Twos</div>
        <div className="cell">Count and add only Threes</div>
        <div className="cell">Count and add only Fours</div>
        <div className="cell">Count and add only Fives</div>
        <div className="cell">Count and add only Sixes</div>
        <div className="cell" />
        <div className="cell">Score 35</div>
        <div className="cell" />
        <div className="cell">Add total of all dice</div>
        <div className="cell">Add total of all dice</div>
        <div className="cell">Score 25</div>
        <div className="cell">Score 30</div>
        <div className="cell">Score 40</div>
        <div className="cell">Score 50</div>
        <div className="cell">Score total of all dice</div>
        <div className="cell" />
        <div className="cell" />
        <div className="cell" />
        <div className="cell" />
      </div>
      <PlayerColumn name="Brent" />
    </div>
  );
};
