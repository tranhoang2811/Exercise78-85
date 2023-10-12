import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-exercise82',
  templateUrl: './exercise82.component.html',
  styleUrls: ['./exercise82.component.css'],
})
export class Exercise82Component {
  @ViewChild('a') a!: ElementRef<HTMLInputElement>;
  @ViewChild('b') b!: ElementRef<HTMLInputElement>;

  public result: number = 0;

  public onClick(event: Event): void {
    alert((event as PointerEvent).pointerId);
  }

  public onSubmit(value: string): void {
    alert(value);
  }

  public sum(a: string, b: string): void {
    this.result = parseInt(a) + parseInt(b);
  }

  public subtract(a: string, b: string): void {
    this.result = parseInt(a) - parseInt(b);
  }

  public multiply(a: string, b: string): void {
    this.result = parseInt(a) * parseInt(b);
  }

  public divide(a: string, b: string): void {
    this.result = parseInt(a) / parseInt(b);
  }

  public reset(): void {
    this.a.nativeElement.value = '';
    this.b.nativeElement.value = '';
    this.result = 0;
  }
}
