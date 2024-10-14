import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CalcComponent } from './calc.component';

describe('CalcComponent', () => {
  let component: CalcComponent;
  let fixture: ComponentFixture<CalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        FormsModule,
      ],
      declarations: [CalcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should initialize numbers and result to null', () => {
    expect(component.number2).toBeNull();
    expect(component.number1).toBeNull();
    expect(component.result).toBeNull();
  });

  it('should calculate the sum of number1 and number2', () => {
    component.number1 = 51;
    component.number2 = 101;

    component.calculate();

    expect(component.result).toBe(152);
  });

  it('should handle adding negative numbers', () => {
    component.number1 = -5;
    component.number2 = -10;

    component.calculate();

    expect(component.result).toBe(-15);
  });

  it('should handle adding zero', () => {
    component.number1 = 0;
    component.number2 = 10;

    component.calculate();

    expect(component.result).toBe(10);
  });
});
