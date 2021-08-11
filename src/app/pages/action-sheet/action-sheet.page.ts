import { Component, OnInit } from '@angular/core';
import { ComponentsIonicService } from 'src/app/services/components-ionic.service';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {
  constructor(public componentsIonic: ComponentsIonicService) {}

  ngOnInit() {}

  async presentarAlerta() {
    await this.componentsIonic.presentarActionSheet();
  }
}
