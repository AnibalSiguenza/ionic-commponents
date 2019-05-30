import { Component, OnInit, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  titulo: string;


  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {
    this.titulo = 'Alert page';
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Cancelar');
          },
        },
        {
          text: 'OK',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Boton OK');
          },
        },
      ]
    });

    await alert.present();
  }

  async cambiarTitulo() {
    const alert = await this.alertCtrl.create({
      header: 'Dime el nuevo título',
      inputs: [
        {
          name: 'nuevoTitulo',
          type: 'text',
          placeholder: 'título'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (data) => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log('Nuevo nombre ' + data.nuevoTitulo);
            this.titulo = data.nuevoTitulo;
          }
        }
      ]
    });

    await alert.present();
  }
}
