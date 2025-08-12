import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Game, GameService } from '../../services/game.service';

@Component({
  selector: 'app-game-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Cadastrar Jogo</h2>
    <form (ngSubmit)="submitForm()">
      <input [(ngModel)]="game.nome" name="nome" placeholder="Nome" required />
      <input [(ngModel)]="game.tipo" name="tipo" placeholder="Tipo" required />
      <input [(ngModel)]="game.ano" name="ano" placeholder="Ano" type="number" required />
      <button type="submit">Salvar</button>
    </form>
  `
})
export class GameFormComponent {
  @Output() gameCreated = new EventEmitter<void>();

  game: Game = { nome: '', tipo: '', ano: new Date().getFullYear() };

  constructor(private gameService: GameService) {}

  submitForm() {
    this.gameService.createGame(this.game).subscribe(() => {
      this.game = { nome: '', tipo: '', ano: new Date().getFullYear() };
      this.gameCreated.emit();
    });
  }
}
