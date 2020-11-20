import { Component, OnInit } from '@angular/core';

import { MatTabChangeEvent } from '@angular/material/tabs';

import { Page } from '../nav/model/page.model';
import { Section } from '../nav/model/section.model';

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {
  pages: Array<Page> = new Array<Page>(1);
  bookmark: Page;

  constructor() { }

  ngOnInit(): void {
    this.pages.push(new Page(0, "Human", [new Section("test", "Header", "test text", null, null, null), new Section("test", "Header", "test text", null, null, null)]));
  }

  tabChanged(tabChangeEvent: MatTabChangeEvent)  {
    this.pages.forEach(page => {
      if (page.order == tabChangeEvent.index) {
        this.bookmark = page
      }
    });
  }

}
