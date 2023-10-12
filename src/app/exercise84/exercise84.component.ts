import { Component, ElementRef, ViewChild } from '@angular/core';
import { CalculateService } from '../calculate.service';

@Component({
  selector: 'app-exercise84',
  templateUrl: './exercise84.component.html',
  styleUrls: ['./exercise84.component.css'],
})
export class Exercise84Component {
  public a: string = '';
  public b: string = '';
  public c: string = '';
  public result: string = '';

  constructor(private calculateService: CalculateService) {}

  public solve(): void {
    const a = Number(this.a);
    const b = Number(this.b);
    const c = Number(this.c);
    this.result = this.calculateService.solveQuadraticEquation(a, b, c);
  }

  public reset(): void {
    this.a = '';
    this.b = '';
    this.c = '';
    this.result = '';
  }
}
