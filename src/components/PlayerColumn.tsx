import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { InputCell } from './InputCell';
import { Player } from '../player';
import { calculateScores } from '../scoreCalculator';

enum ActionType {
  SetScore = 'SetScore',
}

interface PlayerAction {
  type: ActionType;
  payload: {
    fieldName: string;
    value?: number;
  };
}

const playerReducer: React.Reducer<Player, PlayerAction> = (state, action) => {
  switch (action.type) {
    case ActionType.SetScore: {
      const scores = { ...state.scores };
      scores[action.payload.fieldName] = action.payload.value;
      return {
        ...state,
        scores: calculateScores(scores),
      };
    }
  }
};

const PlayerColumn: React.FC<{ name: string }> = ({ name }) => {
  const [player, dispatch] = useReducer<React.Reducer<Player, PlayerAction>>(
    playerReducer,
    new Player(name),
  );

  const updateValue = (fieldName: string, value?: number) => {
    dispatch({ type: ActionType.SetScore, payload: { fieldName, value } });
  };

  return (
    <div className="column">
      <div className="cell">{player && player.name}</div>
      <InputCell value={player.scores.ones} fieldName="ones" setValue={updateValue} />
      <InputCell value={player.scores.twos} fieldName="twos" setValue={updateValue} />
      <InputCell value={player.scores.threes} fieldName="threes" setValue={updateValue} />
      <InputCell value={player.scores.fours} fieldName="fours" setValue={updateValue} />
      <InputCell value={player.scores.fives} fieldName="fives" setValue={updateValue} />
      <InputCell value={player.scores.sixes} fieldName="sixes" setValue={updateValue} />
      <div className="cell">{player && player.scores && player.scores.numbersTotal}</div>
      <div className="cell">{player && player.scores && player.scores.numbersBonus}</div>
      <div className="cell">{player && player.scores && player.scores.upperTotal}</div>
    </div>
  );
};

PlayerColumn.propTypes = {
  name: PropTypes.string.isRequired,
};

export { PlayerColumn };
