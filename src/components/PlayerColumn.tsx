import React, { useState } from "react";
import { InputCell } from "./InputCell";
import { Player } from '../player';

export const PlayerColumn: React.FC<{name:string}> = ({ name }) => {
  const [player, setPlayer] = useState(new Player(name));

  const updateValue = (fieldName: string, value: string) =>
    setPlayer(currentPlayer => {
      const temp = { ...currentPlayer, [fieldName]: value };
      temp.upperTotal = +temp.ones + +temp.twos + +temp.threes;
      return temp;
    });

  console.log("player", player);
  return (
    <div className="column">
      <div className="cell">{player && player.name}</div>
      <InputCell value={player.ones} fieldName="ones" setValue={updateValue} />
      <InputCell value={player.twos} fieldName="twos" setValue={updateValue} />
      <InputCell
        value={player.threes}
        fieldName="threes"
        setValue={updateValue}
      />
      <InputCell
        value={player.fours}
        fieldName="fours"
        setValue={updateValue}
      />
      <InputCell
        value={player.fives}
        fieldName="fives"
        setValue={updateValue}
      />
      <InputCell
        value={player.sixes}
        fieldName="sixes"
        setValue={updateValue}
      />
      <div className="cell"></div>
      <div className="cell"></div>
      <div className="cell">{player && player.upperTotal}</div>
    </div>
  );
};
