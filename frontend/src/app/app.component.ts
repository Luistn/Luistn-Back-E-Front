import { Component } from '@angular/core';
import { GameFormComponent } from './components/game-form/game-form.component';
import { GameListComponent } from './components/game-list/game-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GameFormComponent, GameListComponent],
  template: `
    <h1>Catálogo de Jogos 🎮</h1>
    <app-game-form (gameCreated)="onGameCreated()"></app-game-form>
    <app-game-list [refresh]="refreshList"></app-game-list>
  `
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  refreshList = false;

  onGameCreated() {
    this.refreshList = !this.refreshList;
  }
}
