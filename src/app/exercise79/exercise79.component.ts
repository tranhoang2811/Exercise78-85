import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise79',
  templateUrl: './exercise79.component.html',
  styleUrls: ['./exercise79.component.css'],
})
export class Exercise79Component {
  public name: string = 'Tran Dang Hoang';
  public email: string = 'hoang@gmail.com';
  public nameId: string = 'nameId';
  public emailId: string = 'emailId';
  public isDisabled: boolean = false;
  // TODO: Confirm about requirement
  constructor() {}
}
