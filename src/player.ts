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

export class Player {
  name: string;
  scores: PlayerScores;

  constructor(name: string) {
    this.name = name;
    this.scores = new PlayerScores();
  }
}
