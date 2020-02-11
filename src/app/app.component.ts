import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NavService } from './nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eastmarches';
  viewName = ' /';
  showNavbar = false;
  showSidebar = false;

  constructor(private router: Router, private navService: NavService) {};

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

  toggleSidebar()  {
    this.showSidebar = !this.showSidebar;
    this.navService.setToggle(this.showSidebar);
  }
}
