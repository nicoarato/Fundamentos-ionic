import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  albunes: any[] = [];
  textoBuscar = '';
  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.dataService.getAlbums()
    .subscribe( alb => {
      console.log(alb);
      this.albunes = alb;
    });
  }

  buscar(event) {

    this.textoBuscar = event.detail.value;
  }

}
