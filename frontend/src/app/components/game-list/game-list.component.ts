import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game, GameService
  
 } from '../../services/game.service';
@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Lista de Jogos</h2>
    <ul>
      <li *ngFor="let game of games">
        {{ game.nome }} ({{ game.tipo }} - {{ game.ano }})
        <button (click)="deleteGame(game.id!)">🗑️ Excluir</button>
      </li>
    </ul>
  `
})
export class GameListComponent implements OnChanges {
  @Input() refresh = false;
  games: Game[] = [];

  constructor(private gameService: GameService) {}

  ngOnChanges() {
    this.loadGames();
  }

  loadGames() {
    this.gameService.getGames().subscribe(data => this.games = data);
  }

  deleteGame(id: number) {
    this.gameService.deleteGame(id).subscribe(() => this.loadGames());
  }
}
