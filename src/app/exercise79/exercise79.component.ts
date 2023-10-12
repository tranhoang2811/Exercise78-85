import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise79',
  templateUrl: './exercise79.component.html',
  // *INFO: Remove comment to use inline template
  // template: `
  //   <div class="container">
  //     <h1>Exercise 79 incline template</h1>
  //     <div>
  //       <h2>Name</h2>
  //       <input [value]="name" [id]="nameId" />
  //       <h2>Email</h2>
  //       <input [disabled]="isDisabled" value="{{ email }}" [id]="emailId" />
  //     </div>
  //     <button type="button" (click)="changeDisabled()">Change disabled</button>
  //   </div>
  // `,
  styleUrls: ['./exercise79.component.css'],
})
export class Exercise79Component {
  public name: string = 'Tran Dang Hoang';
  public email: string = 'hoang@gmail.com';
  public nameId: string = 'nameId';
  public emailId: string = 'emailId';
  public isDisabled: boolean = false;

  constructor() {}

  public changeDisabled(): void {
    this.isDisabled = !this.isDisabled;
  }
}
