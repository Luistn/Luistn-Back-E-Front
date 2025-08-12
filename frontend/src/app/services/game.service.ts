import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Game {
  id?: number;
  nome: string;
  tipo: string;
  ano: number;
}

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private api = 'http://localhost:3000/api/games';

  constructor(private http: HttpClient) {}

  getGames(): Observable<Game[]> { 
    return this.http.get<Game[]>(this.api);
  }

  getGameById(id: number): Observable<Game> {
    return this.http.get<Game>(`${this.api}/${id}`);
  }

  createGame(game: Game): Observable<Game> {
    return this.http.post<Game>(this.api, game);
  }

  updateGame(id: number, game: Game): Observable<Game> {
    return this.http.put<Game>(`${this.api}/${id}`, game);
  }

  deleteGame(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`);
  }
}
