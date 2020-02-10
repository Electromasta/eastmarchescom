import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {};
  title = 'eastmarches';
  viewName = ' /';
  showNavbar = false;

  changeOfRoutes()  {
    if  (this.router.url === "/hero")  {
      this.viewName = " /hero"
      this.showNavbar = true;
    }
    if  (this.router.url === "/nav")  {
      this.viewName = " /nav"
      this.showNavbar = true;
    }
    if  (this.router.url === "/atlas")  {
      this.viewName = " /atlas"
      this.showNavbar = false;
    }
    if  (this.router.url === "/era")  {
      this.viewName = " /era"
      this.showNavbar = true;
    }
  }
}
