import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  titulo = 'Alerta';
  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'Cancel',
          cssClass: 'danger',
          handler: (blah) => {
            console.log('Botón Cancel');
          }
        },
        {
          text: 'Ok',
          cssClass: 'primary',
          handler: (blah) => {
            console.log('Botón OK');
          }
        }
      ],
    });

    await alert.present();
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({

      header: 'Ingresa un Input',
      inputs: [
        {
          name: 'entrada',
          type: 'text',
          placeholder: 'Nombre'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            this.titulo = data.entrada;
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }
}
