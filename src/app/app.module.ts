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

/*
I still have this error: 
An error was thrown in afterAll
Uncaught TypeError: __webpack_require__(...).context is not a function
TypeError: __webpack_require__(...).context is not a function
    at Object.7832 (http://localhost:9876/_karma_webpack_/webpack:/src/test.ts:24:25)
    at __webpack_require__ (http://localhost:9876/_karma_webpack_/webpack:/webpack/bootstrap:19:1)
    at __webpack_exec__ (http://localhost:9876/_karma_webpack_/main.js:297:48)
    at http://localhost:9876/_karma_webpack_/main.js:298:78
    at Function.__webpack_require__.O (http://localhost:9876/_karma_webpack_/webpack:/webpack/runtime/chunk loaded:23:1)
    at http://localhost:9876/_karma_webpack_/main.js:299:56
    at webpackJsonpCallback (http://localhost:9876/_karma_webpack_/webpack:/webpack/runtime/jsonp chunk loading:34:1)
    at http://localhost:9876/_karma_webpack_/main.js:1:73

this is a portion of my angular.json file:
"test": {
          "builder": "@angular-devkit/build-angular:karma",
          "options": {
            "main": "src/test.ts",
            "polyfills": [
              "zone.js",
              "zone.js/testing"
            ],
            "tsConfig": "tsconfig.spec.json",
            "karmaConfig": "src/karma.conf.js",
            "inlineStyleLanguage": "scss",
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [
              "src/styles.scss"
            ],
            "scripts": []
          }
        }

this is my karma file:         
module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/Calculator'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' }
      ]
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadlessCI'],
    singleRun: false,
    restartOnFileChange: true,
    customLaunchers: {
      ChromeHeadlessCI: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox', '--disable-gpu']
      }
    }
  });
};


this is my test.ts file: 
import 'zone.js/testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

// Declare require for TypeScript to recognize it
declare const require: {
  context(path: string, deep?: boolean, filter?: RegExp): {
    keys(): string[];
    <T>(id: string): T;
  };
};

// Initialize the Angular testing environment
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

// Find all the tests in the project
const context = require.context('./', true, /\.spec\.ts$/);
context.keys().map(context);


this is my tsconfig.spec.json:
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/spec",
    "types": [
      "jasmine", "node"
    ]
  },
  "files": [
    "src/test.ts",
    "src/polyfills.ts"
  ],
  "include": [
    "src/** /*.spec.ts",
    "src/** /*.d.ts"
  ]
}


*/