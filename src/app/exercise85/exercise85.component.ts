import { Component } from '@angular/core';
import { CalculateService } from '../calculate.service';

@Component({
  selector: 'app-exercise85',
  templateUrl: './exercise85.component.html',
  styleUrls: ['./exercise85.component.css'],
})
export class Exercise85Component {
  public dayInWeek: string = '123';
  public lunarTime: string = '123';
  public year: string = '123';
  public month: string = '123';
  public day: string = '123';

  constructor(private calculateService: CalculateService) {}
}
