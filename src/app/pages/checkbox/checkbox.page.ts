import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {
  checkedValue: boolean = false;
  public form = [
    { val: 'Pepperoni', isChecked: true },
    { val: 'Sausage', isChecked: false },
    { val: 'Mushroom', isChecked: false },
  ];

  constructor() {}

  ngOnInit() {}

  recibirCheckbox(event: CustomEvent) {
    console.log(event.detail.checked);
    var checked = event.detail.checked;
    if (checked) {
      console.log('Esta seleccionado');
    } else {
      console.log('No esta seleccionado');
    }
  }
}
