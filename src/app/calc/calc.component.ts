import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.scss'
})
export class CalcComponent {
  public number1: number = null!;
  public number2: number = null!;
  public result: number = null!;

  calculate() {
    this.result = +this.number1 + this.number2;
  }
}
