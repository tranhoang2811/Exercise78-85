import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise83',
  templateUrl: './exercise83.component.html',
  styleUrls: ['./exercise83.component.css'],
})
export class Exercise83Component {
  public name: string = '';
  public address: string = '';

  public setDefaultAddress(): void {
    this.address = '123 Main St';
  }
}
