import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopinfoComponent } from '../../components/popinfo/popinfo.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor( private popCtrl: PopoverController) { }


  ngOnInit() {
  }

  async mostrarPop(evento) {
    const popover = await this.popCtrl.create({
      component: PopinfoComponent,
      event: evento,
      mode: 'ios',
      backdropDismiss: false
    });

    await popover.present();

    // const {data} = await popover.onDidDismiss();
    const {data} = await popover.onWillDismiss();
    console.log('Padre: ', data);

  }

}
