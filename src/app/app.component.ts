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
    if  (this.router.url === "/" || this.router.url === "/hero")  {
      this.viewName = "/"
      this.showNavbar = true;
    } else if  (this.router.url === "/nav")  {
      this.viewName = "/nav"
      this.showNavbar = true;
    } else if  (this.router.url === "/atlas")  {
      this.viewName = "/atlas"
      this.showNavbar = false;
    } else if  (this.router.url === "/hyland")  {
      this.viewName = "/hyland"
      this.showNavbar = false;
    } else if  (this.router.url === "/hool")  {
      this.viewName = "/hool"
      this.showNavbar = false;
    } else if  (this.router.url === "/farnorth")  {
      this.viewName = "/farnorth"
      this.showNavbar = false;
    } else if  (this.router.url === "/mulan")  {
      this.viewName = "/mulan"
      this.showNavbar = false;
    } else if  (this.router.url === "/shackles")  {
      this.viewName = "/shackles"
      this.showNavbar = false;
    } else if  (this.router.url === "/stolen")  {
      this.viewName = "/stolen"
      this.showNavbar = false;
    } else if  (this.router.url === "/era")  {
      this.viewName = "/era"
      this.showNavbar = true;
    } else  {
      this.viewName = "/notfound"
      this.showNavbar = true;
    }
  }

  toggleSidebar()  {
    this.showSidebar = !this.showSidebar;
    this.navService.setToggle(this.showSidebar);
  }
}
