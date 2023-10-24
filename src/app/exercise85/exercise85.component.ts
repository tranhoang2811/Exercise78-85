import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CalculateService } from '../calculate.service';

@Component({
  selector: 'app-exercise85',
  templateUrl: './exercise85.component.html',
  styleUrls: ['./exercise85.component.css'],
})
export class Exercise85Component {
  public convertToLunarForm: FormGroup;
  public result: Record<string, string> = {};

  public dayRange: Array<string> = [];
  public monthRange: Array<string> = [];
  public yearRange: Array<string> = [];

  constructor(
    private formBuilder: FormBuilder,
    private calculateService: CalculateService
  ) {
    this.dayRange = this.calculateService.getRange(1, 31);
    this.monthRange = this.calculateService.getRange(1, 12);
    this.yearRange = this.calculateService.getRange(1900, 2100);
    this.convertToLunarForm = this.formBuilder.group({
      day: formBuilder.control(this.dayRange[0]),
      month: formBuilder.control(this.monthRange[0]),
      year: formBuilder.control(this.yearRange[0]),
    });
  }

  public onSubmit(): void {
    const { day, month, year } = this.convertToLunarForm.value;
    this.result = this.calculateService.convertSolarToLunar(
      parseInt(year),
      parseInt(month),
      parseInt(day)
    );
  }
}
