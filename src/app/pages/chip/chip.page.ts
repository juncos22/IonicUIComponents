import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.page.html',
  styleUrls: ['./chip.page.scss'],
})
export class ChipPage implements OnInit {
  @ViewChild(IonContent, { static: false }) content: IonContent;

  fakeArray = [
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    11,
    1,
    1,
    1,
    1,
    1,
    ,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
  ];
  constructor() {}

  scrollDown() {
    this.content.scrollToBottom(100);
  }
  scrollUp() {
    this.content.scrollToTop(500);
  }
  ngOnInit() {}
}
