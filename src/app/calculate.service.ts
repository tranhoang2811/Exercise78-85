import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculateService {
  constructor() {}

  public solveQuadraticEquation(a: number, b: number, c: number): string {
    const delta = b * b - 4 * a * c;
    if (delta < 0) {
      return 'No solution';
    } else if (delta === 0) {
      return `x1 = x2 = ${-b / (2 * a)}`;
    } else {
      return `x1 = ${(-b + Math.sqrt(delta)) / (2 * a)}, x2 = ${
        (-b - Math.sqrt(delta)) / (2 * a)
      }`;
    }
  }
}
