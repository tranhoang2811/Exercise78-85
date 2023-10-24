import { Injectable } from '@angular/core';
import { LunarDate } from 'vietnamese-lunar-calendar';
import { DAY_OF_WEEK_NAMES } from './constants/calculate';

@Injectable({
  providedIn: 'root',
})
export class CalculateService {
  constructor() {}

  public getRange(start: number, end: number): Array<string> {
    return new Array(end - start + 1)
      .fill(0)
      .map((_, index) => (index + start).toString());
  }

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

  public convertSolarToLunar(
    solarYear: number,
    solarMonth: number,
    solarDay: number
  ): Record<string, string> {
    const convertedLunarDate = new LunarDate(solarYear, solarMonth, solarDay);
    const dayOfWeek: number = new Date(
      solarYear,
      solarMonth - 1,
      solarDay
    ).getDay();
    const dayOfWeekName: string = DAY_OF_WEEK_NAMES[dayOfWeek];
    const lunarDate = `${convertedLunarDate.date}/${convertedLunarDate.month}/${convertedLunarDate.year}`;
    const lunarDay = `${convertedLunarDate.lunarDate.can} ${convertedLunarDate.lunarDate.chi}`;
    const lunarMonth = `${convertedLunarDate.lunarMonth.can} ${convertedLunarDate.lunarMonth.chi}`;
    const lunarYear = `${convertedLunarDate.lunarYear.can} ${convertedLunarDate.lunarYear.chi}`;

    return {
      dayOfWeek: dayOfWeekName,
      lunarDate,
      lunarYear,
      lunarMonth,
      lunarDay,
    };
  }
}
