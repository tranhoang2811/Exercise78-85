import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise80',
  templateUrl: './exercise80.component.html',
  styleUrls: ['./exercise80.component.css'],
})
export class Exercise80Component {
  public success: string = 'text-success';
  public error: string = 'text-error';
  public primary: string = 'text-primary';
  public normal: string = 'text-normal';
  public multiClass = {
    'text-primary': true,
    'text-normal': true,
    'text-error': true,
  };
  public complexity: string = 'text-complexity';
  public isSuccess: boolean = false;

  public toggleSuccess(): void {
    this.isSuccess = !this.isSuccess;
  }
}
