import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaTopHeadlines } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }


  getTopHeadlines() {
    return this.http.get<RespuestaTopHeadlines>(`http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=bba05307e8084ce685cab0e910a5621d`);
  }
}
