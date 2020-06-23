import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../interfaces/interfaces';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getUsers() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
  }


  getMenuOpts() {
    return this.httpClient.get<Componente[]>('/assets/data/menu.json');
  }

  getAlbums() {
          return this.httpClient.get<any[]>('http://jsonplaceholder.typicode.com/albums');
        }

  getHeroes() {
    return this.httpClient.get('/assets/data/superheroes.json')
    .pipe(
      delay(2000)
    );
  }
}
