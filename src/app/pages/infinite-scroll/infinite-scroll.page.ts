import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {
  usuarios: any[] = Array(200);
  @ViewChild(IonInfiniteScroll, { static: true })
  infiniteScroll: IonInfiniteScroll;

  constructor() {}

  ngOnInit() {}
  loadData(event) {
    setTimeout(() => {
      console.log('Done');

      if (this.usuarios.length == 60) {
        event.target.complete();
        this.infiniteScroll.disabled = true;
        return;
      }

      var masUsuarios = Array(20);
      this.usuarios.push(...masUsuarios);
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
    }, 1000);
  }
}
