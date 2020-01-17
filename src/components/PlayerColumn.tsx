import React from 'react';
import { InputCell } from './InputCell';
import { YahtzeeBonusInput } from './YahtzeeBonusInput';
import { Player } from '../models/player';

interface IPlayerColumn {
  player: Player;
  updatePlayer: (player: Player) => void;
}

export const PlayerColumn: React.FC<IPlayerColumn> = ({ player, updatePlayer }) => {
  const updateValue = (fieldName: string, value?: number) => {
    player.updateScore(fieldName, value);
    updatePlayer(player);
  };

  const bonusCellClass = player.scores.yahtzee ? '' : 'disabled';

  return (
    <>
      <InputCell value={player.scores.ones} fieldName="ones" setValue={updateValue} />
      <InputCell value={player.scores.twos} fieldName="twos" setValue={updateValue} />
      <InputCell value={player.scores.threes} fieldName="threes" setValue={updateValue} />
      <InputCell value={player.scores.fours} fieldName="fours" setValue={updateValue} />
      <InputCell value={player.scores.fives} fieldName="fives" setValue={updateValue} />
      <InputCell value={player.scores.sixes} fieldName="sixes" setValue={updateValue} />
      <div className="cell score-cell">{player && player.scores && player.scores.numbersTotal}</div>
      <div className="cell score-cell">{player && player.scores && player.scores.numbersBonus}</div>
      <div className="cell score-cell">{player && player.scores && player.scores.upperTotal}</div>
      <div className="section-divider"></div>
      <InputCell
        value={player.scores.threeOfAKind}
        fieldName="threeOfAKind"
        setValue={updateValue}
      />
      <InputCell value={player.scores.fourOfAKind} fieldName="fourOfAKind" setValue={updateValue} />
      <InputCell value={player.scores.fullHouse} fieldName="fullHouse" setValue={updateValue} />
      <InputCell
        value={player.scores.smallStraight}
        fieldName="smallStraight"
        setValue={updateValue}
      />
      <InputCell
        value={player.scores.largeStraight}
        fieldName="largeStraight"
        setValue={updateValue}
      />
      <InputCell value={player.scores.yahtzee} fieldName="yahtzee" setValue={updateValue} />
      <InputCell value={player.scores.chance} fieldName="chance" setValue={updateValue} />
      <div className={`cell ${bonusCellClass}`}>
        <YahtzeeBonusInput
          value={player.scores.yahtzeeBonus1}
          fieldName="yahtzeeBonus1"
          setValue={updateValue}
        />
        <YahtzeeBonusInput
          value={player.scores.yahtzeeBonus2}
          fieldName="yahtzeeBonus2"
          setValue={updateValue}
        />
        <YahtzeeBonusInput
          value={player.scores.yahtzeeBonus3}
          fieldName="yahtzeeBonus3"
          setValue={updateValue}
        />
        <YahtzeeBonusInput
          value={player.scores.yahtzeeBonus4}
          fieldName="yahtzeeBonus4"
          setValue={updateValue}
        />
      </div>
      <div className="cell score-cell">{player && player.scores && player.scores.lowerTotal}</div>
      <div className="cell score-cell">{player && player.scores && player.scores.upperTotal}</div>
      <div className="cell score-cell">{player && player.scores && player.scores.total}</div>
    </>
  );
};
