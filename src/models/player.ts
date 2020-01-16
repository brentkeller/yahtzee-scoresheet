import uuid from 'uuid/v4';
import { calculateScores } from './scoreCalculator';

export class PlayerScores {
  ones?: number;
  twos?: number;
  threes?: number;
  fours?: number;
  fives?: number;
  sixes?: number;
  numbersTotal?: number;
  numbersBonus?: number;
  upperTotal?: number;
  threeOfAKind?: number;
  fourOfAKind?: number;
  fullHouse?: number;
  smallStraight?: number;
  largeStraight?: number;
  yahtzee?: number;
  chance?: number;
  bonusYahtzees?: number;
  lowerTotal?: number;
  total?: number;
  [key: string]: number | undefined; // Index signature
}

export interface PlayerData {
  id: string;
  name: string;
  scores: PlayerScores;
}

export class Player {
  id: string;
  name: string;
  scores: PlayerScores;

  constructor(name: string) {
    this.id = uuid();
    this.name = name;
    this.scores = new PlayerScores();
  }

  updateScore(fieldName: string, value?: number) {
    const scores = { ...this.scores };
    scores[fieldName] = value;
    this.scores = calculateScores(scores);
  }

  reset() {
    this.scores = new PlayerScores();
  }

  static fromData(p: PlayerData) {
    const newPlayer = new this(p.name);
    newPlayer.id = p.id;
    newPlayer.scores = p.scores;
    return newPlayer;
  }
}
