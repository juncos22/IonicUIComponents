import { Injectable } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class ComponentsIonicService {
  accion: string = 'ninguna';

  constructor(public actionSheetController: ActionSheetController) {}
  async presentarActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Este es un ActionSheet de prueba',
      animated: false,
      backdropDismiss: false,
      mode: 'ios',
      buttons: [
        {
          text: 'Borrar',
          role: 'destructive',
          icon: 'close-circle',
          handler: () => {
            this.accion = 'Borrar';
            console.log('Delete clicked');
          },
        },
        {
          text: 'Compartir',
          icon: 'share',
          handler: () => {
            this.accion = 'Compartir';
            console.log('Share clicked');
          },
        },
        {
          text: 'Play (open modal)',
          icon: 'caret-forward-circle',
          handler: () => {
            this.accion = 'Reproducir';
            console.log('Play clicked');
          },
        },
        {
          text: 'Favoritos',
          icon: 'heart',
          handler: () => {
            this.accion = 'Añadir a favoritos';
            console.log('Favorite clicked');
          },
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            this.accion = 'Cancelar';
            console.log('Cancel clicked');
          },
        },
      ],
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
