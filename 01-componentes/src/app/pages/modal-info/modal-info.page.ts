import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  @Input() nombre;
  @Input() pais;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  salirSinArg() {
   this.modalCtrl.dismiss();
  }

  salirConArg() {
   this.modalCtrl.dismiss({
     nombre: 'Felipe',
     pais: 'Mexico'
   });
  }

}
