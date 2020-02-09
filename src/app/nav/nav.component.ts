import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  constructor() { }
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];

  ngOnInit(): void {
  }

}
