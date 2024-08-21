import { calculateScores } from "./scoreCalculator";
import { PlayerScores } from "./player";

let scores: PlayerScores;
beforeEach(() => (scores = new PlayerScores()));

describe("calculateScores adds upper number values to totals", () => {
  it("includes ones", () => {
    scores.ones = 2;
    const result = calculateScores(scores);
    expect(result.numbersTotal).toBe(scores.ones);
    expect(result.upperTotal).toBe(scores.ones);
    expect(result.total).toBe(scores.ones);
  });

  it("includes twos", () => {
    scores.twos = 4;
    const result = calculateScores(scores);
    expect(result.numbersTotal).toBe(scores.twos);
    expect(result.upperTotal).toBe(scores.twos);
    expect(result.total).toBe(scores.twos);
  });

  it("includes threes", () => {
    scores.threes = 6;
    const result = calculateScores(scores);
    expect(result.numbersTotal).toBe(scores.threes);
    expect(result.upperTotal).toBe(scores.threes);
    expect(result.total).toBe(scores.threes);
  });

  it("includes fours", () => {
    scores.fours = 8;
    const result = calculateScores(scores);
    expect(result.numbersTotal).toBe(scores.fours);
    expect(result.upperTotal).toBe(scores.fours);
    expect(result.total).toBe(scores.fours);
  });

  it("includes fives", () => {
    scores.fives = 10;
    const result = calculateScores(scores);
    expect(result.numbersTotal).toBe(scores.fives);
    expect(result.upperTotal).toBe(scores.fives);
    expect(result.total).toBe(scores.fives);
  });

  it("includes sixes", () => {
    scores.sixes = 12;
    const result = calculateScores(scores);
    expect(result.numbersTotal).toBe(scores.sixes);
    expect(result.upperTotal).toBe(scores.sixes);
    expect(result.total).toBe(scores.sixes);
  });

  it("should add number bonus to totals", () => {
    scores.threes = 12;
    scores.fours = 12;
    scores.fives = 20;
    scores.sixes = 24;
    const result = calculateScores(scores);
    expect(result.numbersTotal).toBe(68);
    expect(result.upperTotal).toBe(103);
    expect(result.total).toBe(103);
  });
});

describe("calculateScores adds lower score values to totals", () => {
  it("includes three of a kind", () => {
    scores.threeOfAKind = 24;
    const result = calculateScores(scores);
    expect(result.lowerTotal).toBe(scores.threeOfAKind);
    expect(result.total).toBe(scores.threeOfAKind);
  });

  it("includes four of a kind", () => {
    scores.fourOfAKind = 24;
    const result = calculateScores(scores);
    expect(result.lowerTotal).toBe(scores.fourOfAKind);
    expect(result.total).toBe(scores.fourOfAKind);
  });

  it("includes full house", () => {
    scores.fullHouse = 25;
    const result = calculateScores(scores);
    expect(result.lowerTotal).toBe(scores.fullHouse);
    expect(result.total).toBe(scores.fullHouse);
  });

  it("includes small straight", () => {
    scores.smallStraight = 30;
    const result = calculateScores(scores);
    expect(result.lowerTotal).toBe(scores.smallStraight);
    expect(result.total).toBe(scores.smallStraight);
  });

  it("includes large straight", () => {
    scores.largeStraight = 40;
    const result = calculateScores(scores);
    expect(result.lowerTotal).toBe(scores.largeStraight);
    expect(result.total).toBe(scores.largeStraight);
  });

  it("includes yahtzee", () => {
    scores.yahtzee = 50;
    const result = calculateScores(scores);
    expect(result.lowerTotal).toBe(scores.yahtzee);
    expect(result.total).toBe(scores.yahtzee);
  });

  it("includes chance", () => {
    scores.chance = 21;
    const result = calculateScores(scores);
    expect(result.lowerTotal).toBe(scores.chance);
    expect(result.total).toBe(scores.chance);
  });

  it("does not include bonuses if yahtzee is empty", () => {
    scores.yahtzeeBonus1 = 1;
    const result = calculateScores(scores);
    expect(result.lowerTotal).toBe(0);
    expect(result.total).toBe(0);
  });

  it("includes bonuses if yahtzee is filled", () => {
    scores.yahtzee = 50;
    scores.yahtzeeBonus1 = 1;
    scores.yahtzeeBonus2 = 1;
    scores.yahtzeeBonus3 = 1;
    scores.yahtzeeBonus4 = 1;
    const result = calculateScores(scores);
    expect(result.lowerTotal).toBe(450);
    expect(result.total).toBe(450);
  });
});
