import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { RouterOutlet } from '@angular/router';

import { AppComponent } from './app.component';
import { CalcComponent } from './calc/calc.component';


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterOutlet
  ],
  declarations: [
    AppComponent,
    CalcComponent
  ],
  providers: [ provideRouter(routes)],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

