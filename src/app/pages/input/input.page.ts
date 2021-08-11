import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {
  constructor() {}
  nombre: string = '';
  biografia: string = '';

  ngOnInit() {}
  obtenerNombre(event: CustomEvent) {
    console.log(event.detail.value);
  }
}
