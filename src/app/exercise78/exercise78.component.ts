import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise78',
  templateUrl: './exercise78.component.html',
  styleUrls: ['./exercise78.component.css'],
})
export class Exercise78Component {
  public bindingText: string = 'Hello Angular!';

  constructor() {}

  getBindingText(): string {
    return this.bindingText;
  }
}
