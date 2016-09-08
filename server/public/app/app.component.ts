// APP COMPONENT //

// angular imports
import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

// custom imports //

// service

@Component({
  selector: 'my-app',
  template: `<h1>HELLO WORLD!</h1>
    <nav>
      <a [routerLink]="['/home']" routerLinkActive="active" >Home</a>
    </nav>
    `
})

export class AppComponent { }
