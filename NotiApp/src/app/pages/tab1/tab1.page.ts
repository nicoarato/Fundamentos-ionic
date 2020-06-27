import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../../services/noticias.service';
import { RespuestaTopHeadlines, Article } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor(private noticiasService: NoticiasService) {}

  noticias: Article[] = [];
  ngOnInit() {
    this.noticiasService.getTopHeadlines().subscribe(
      info => {
        console.log('Noticias', info );
        this.noticias.push( ...info.articles);
      }
    );
  }
}
