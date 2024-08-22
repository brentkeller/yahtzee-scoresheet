import React from "react";
import { InputCell } from "./InputCell";
import { YahtzeeBonusInput } from "./YahtzeeBonusInput";
import { Player } from "../models/player";
import { CheckboxInputCell } from "./CheckboxInputCell";

interface IPlayerColumn {
  player: Player;
  updatePlayer: (player: Player) => void;
}

export const PlayerColumn: React.FC<IPlayerColumn> = ({
  player,
  updatePlayer,
}) => {
  const updateValue = (fieldName: string, value?: number) => {
    player.updateScore(fieldName, value);
    updatePlayer(player);
  };

  const bonusCellClass = player.scores.yahtzee ? "" : "disabled";

  return (
    <>
      <InputCell
        value={player.scores.ones}
        fieldName="ones"
        setValue={updateValue}
        validValues={validValuesForDie(1)}
      />
      <InputCell
        value={player.scores.twos}
        fieldName="twos"
        setValue={updateValue}
        validValues={validValuesForDie(2)}
      />
      <InputCell
        value={player.scores.threes}
        fieldName="threes"
        setValue={updateValue}
        validValues={validValuesForDie(3)}
      />
      <InputCell
        value={player.scores.fours}
        fieldName="fours"
        setValue={updateValue}
        validValues={validValuesForDie(4)}
      />
      <InputCell
        value={player.scores.fives}
        fieldName="fives"
        setValue={updateValue}
        validValues={validValuesForDie(5)}
      />
      <InputCell
        value={player.scores.sixes}
        fieldName="sixes"
        setValue={updateValue}
        validValues={validValuesForDie(6)}
      />
      <div className="cell score-cell">
        {player && player.scores && player.scores.numbersTotal}
      </div>
      <div className="cell score-cell">
        {player && player.scores && player.scores.numbersBonus}
      </div>
      <div className="cell score-cell">
        {player && player.scores && player.scores.upperTotal}
      </div>
      <div className="section-divider"></div>
      <InputCell
        value={player.scores.threeOfAKind}
        fieldName="threeOfAKind"
        setValue={updateValue}
      />
      <InputCell
        value={player.scores.fourOfAKind}
        fieldName="fourOfAKind"
        setValue={updateValue}
      />
      <CheckboxInputCell
        value={player.scores.fullHouse}
        fieldName="fullHouse"
        setValue={updateValue}
        fixedValue={25}
      />
      <CheckboxInputCell
        value={player.scores.smallStraight}
        fieldName="smallStraight"
        setValue={updateValue}
        fixedValue={30}
      />
      <CheckboxInputCell
        value={player.scores.largeStraight}
        fieldName="largeStraight"
        setValue={updateValue}
        fixedValue={40}
      />
      <CheckboxInputCell
        value={player.scores.yahtzee}
        fieldName="yahtzee"
        setValue={updateValue}
        fixedValue={50}
      />
      <InputCell
        value={player.scores.chance}
        fieldName="chance"
        setValue={updateValue}
      />
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
      <div className="cell score-cell">
        {player && player.scores && player.scores.lowerTotal}
      </div>
      <div className="cell score-cell">
        {player && player.scores && player.scores.upperTotal}
      </div>
      <div className="cell score-cell">
        {player && player.scores && player.scores.total}
      </div>
    </>
  );
};

function validValuesForDie(die: number) {
  let validValues = new Set<number>([0]);

  for (let i = 1; i <= 6; i++) {
    validValues.add(die * i);
  }

  return validValues;
}
