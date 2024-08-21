import { PlayerScores } from "./player";

const getScoreValue = (scores: PlayerScores, name: string): number => {
  return scores[name] || 0;
};

const sumFields = (scores: PlayerScores, fields: string[]): number => {
  let sum = 0;
  fields.forEach((x) => (sum += +getScoreValue(scores, x)));
  return sum;
};

const upperNumberFields = ["ones", "twos", "threes", "fours", "fives", "sixes"];
const lowerNumberFields = [
  "threeOfAKind",
  "fourOfAKind",
  "fullHouse",
  "smallStraight",
  "largeStraight",
  "yahtzee",
  "chance",
];

export const calculateScores = (scores: PlayerScores): PlayerScores => {
  scores.numbersTotal = sumFields(scores, upperNumberFields);
  scores.numbersBonus = scores.numbersTotal >= 63 ? 35 : undefined;
  scores.upperTotal =
    scores.numbersTotal + getScoreValue(scores, "numbersBonus");
  scores.lowerTotal =
    sumFields(scores, lowerNumberFields) + calculateYahtzeeBonuses(scores);
  scores.total = scores.upperTotal + scores.lowerTotal;
  return scores;
};

const calculateYahtzeeBonuses = (scores: PlayerScores): number => {
  if (getScoreValue(scores, "yahtzee") === 0) return 0;
  let bonusTotal = 0;
  if (scores.yahtzeeBonus1 === 1) bonusTotal += 100;
  if (scores.yahtzeeBonus2 === 1) bonusTotal += 100;
  if (scores.yahtzeeBonus3 === 1) bonusTotal += 100;
  if (scores.yahtzeeBonus4 === 1) bonusTotal += 100;
  return bonusTotal;
};
