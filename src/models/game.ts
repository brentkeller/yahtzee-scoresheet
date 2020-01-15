import { Player } from './player';

export class Game {
  date: Date;
  players: Player[];
  currentPlayerIndex?: number;

  constructor(game?: Game) {
    if (game) {
      this.date = game.date;
      this.players = game.players;
      this.currentPlayerIndex = game.currentPlayerIndex;
    } else {
      this.date = new Date();
      this.players = [];
    }
  }

  addPlayer(player: Player) {
    if (!this.players) this.players = [];
    this.players.push(player);
    if (!this.currentPlayerIndex) this.currentPlayerIndex = 0;
  }

  removePlayer(index: number) {
    this.players.splice(index, 1);
    if (this.currentPlayerIndex) {
      if (this.currentPlayerIndex > this.players.length - 1)
        this.currentPlayerIndex = this.players.length - 1;
      if (this.currentPlayerIndex < 0) this.currentPlayerIndex = undefined;
    }
  }

  updatePlayer(player: Player) {
    const index = this.players.findIndex(p => p.id === player.id);
    this.players[index] = player;
  }
}
