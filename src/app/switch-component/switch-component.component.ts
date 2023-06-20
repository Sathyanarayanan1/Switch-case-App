import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-component',
  templateUrl: './switch-component.component.html',
  styleUrls: ['./switch-component.component.sass']
})
export class SwitchComponentComponent {
  Name: string;
  constructor() {
    this.Name = 'Sathya';
  }
}
