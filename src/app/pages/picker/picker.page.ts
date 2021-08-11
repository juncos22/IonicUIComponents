import { Component, OnInit } from '@angular/core';
import { PickerController } from '@ionic/angular';

@Component({
  selector: 'app-picker',
  templateUrl: './picker.page.html',
  styleUrls: ['./picker.page.scss'],
})
export class PickerPage implements OnInit {
  constructor(public _pickerCtrl: PickerController) {}

  ngOnInit() {}
  async mostrarPickerBasico() {
    const picker = await this._pickerCtrl.create({
      columns: [
        {
          name: 'Mobile Frameworks',
          options: [
            {
              text: 'Flutter',
              value: 'flutter',
            },
            {
              text: 'Ionic',
              value: 'ionic',
            },
            {
              text: 'React Native',
              value: 'react_native',
            },
            {
              text: 'Xamarin',
              value: 'xamarin',
            },
          ],
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (value) => {
            console.log('Cancelar value', value);
          },
        },
        {
          text: 'Confirmar',
          handler: (value) => {
            console.log('Confirmar value', value);
          },
        },
      ],
    });
    await picker.present();
  }
  async mostrarPickerAvanzado() {
    const picker = await this._pickerCtrl.create({
      columns: [
        {
          name: 'Mobile Frameworks',
          options: [
            {
              text: 'Flutter',
              value: 'flutter',
            },
            {
              text: 'Ionic',
              value: 'ionic',
            },
            {
              text: 'React Native',
              value: 'react_native',
            },
            {
              text: 'Xamarin',
              value: 'xamarin',
            },
          ],
        },
        {
          name: 'Javascript Frameworks',
          options: [
            {
              text: 'Angular',
              value: 'angular',
            },
            {
              text: 'React',
              value: 'react',
            },
            {
              text: 'Vue',
              value: 'vue',
            },
          ],
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (value) => {
            console.log('Cancelar value', value);
          },
        },
        {
          text: 'Confirmar',
          handler: (value) => {
            console.log('Confirmar value', value);
          },
        },
      ],
    });
    await picker.present();
  }
}
