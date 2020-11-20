import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { MatSidenav } from '@angular/material/sidenav';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { NgxXml2jsonService } from 'ngx-xml2json';

import { Page } from './model/page.model';
import { Section } from './model/section.model';
import { Subsection } from './model/subsection.model';
import { Table } from './model/table.model';
import { Row } from './model/row.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  private headers = new HttpHeaders(); 
  bfapiurl = 'https://eaknep3ofh.execute-api.us-east-1.amazonaws.com/bfapi/get-chapter/';
  index = [
            {"bookmark": "landing", "title": "World and Starter Adventures", "index": 0},
            {"bookmark": "general", "title": "General Houserules", "index": 1},
            {"bookmark": "races", "title": "Races", "index": 2},
            {"bookmark": "classes", "title": "Classes", "index": 3},
            {"bookmark": "feats", "title": "Feats and Fighting Styles", "index": 4},
            {"bookmark": "cultures", "title": "Cultural Centers", "index": 5},
            {"bookmark": "factions", "title": "Factions (Paladins)", "index": 6},
            {"bookmark": "pantheon", "title": "Pantheon", "index": 7}
          ];
  pages: Array<Page>;
  bookmark: Page;

  constructor(private viewportScroller: ViewportScroller, private http: HttpClient, private ngxXml2jsonService: NgxXml2jsonService) {
    this.viewportScroller.setOffset([0, 64]);
    this.headers = this.headers.append('Content-Type', 'text/xml'); 
    this.headers = this.headers.append('Accept', 'text/xml');
    this.pages = new Array<Page>(this.index.length);

    this.index.forEach(chapter => {
      this.http.get(this.bfapiurl + chapter.bookmark).subscribe(data => {
        this.pages[chapter.index] = this.parse(data["Items"], chapter);
      });
    });
  }

  ngOnInit()  {
  }

  parse(json, filename) {
    var sections = new Array<Section>();
    var bookmark = 0;

    this.arrayify(json).forEach(section => {
      var subsections: Array<Subsection> = new Array<Subsection>();
      var list: Array<Subsection> = new Array<Subsection>();
      var table: Table;

      if (section.subsections != undefined)  {
        this.arrayify(section.subsections.L).forEach(subsection => {
          var sublist: Array<Subsection> = new Array<Subsection>();
          if (subsection.M.list != null)  {
            this.arrayify(subsection.M.list.L).forEach(point => {
              sublist.push(new Subsection(point.M.name.S, point.M.desc.S));
            });
          }
          subsections.push(new Subsection(subsection.M.name.S, subsection.M.desc.S, sublist));
        });
      }

      if (section.list != null)  {
        this.arrayify(section.list.L).forEach(point => {
          list.push(new Subsection(point.M.name.S, point.M.desc.S));
        });
      }

      if (section.displayTable != null)  {
        var columns: Array<string> = new Array<string>();
        var rows: Array<Row> = new Array<Row>();

        if (section.displayTable.M.columns != null)  {
          this.arrayify(section.displayTable.M.columns.L).forEach(column => {
            columns.push(column.S);
          });
        }

        console.log(section);
        if (section.displayTable.M.rows != null)  {
          this.arrayify(section.displayTable.M.rows.L).forEach(row => {
            var cells: Array<string> = new Array<string>();
            this.arrayify(row.L).forEach(cell => {
              cells.push(cell.S);
            });
            rows.push(new Row("row.name", cells));
          });
        }

        table = new Table(section.displayTable.M.name.S, columns, rows);
      }
      
      sections.push(new Section(filename + "-" + bookmark, section.name.S, section.desc.S, subsections, list, table));
      bookmark++;
    });
    
    var page = new Page(0, filename.title, sections);
    return page;
  }

  arrayify(x)  {
    if (x != undefined && x.length == undefined)  {
      var temp = new Array();
      temp.push(x);
      x = temp;
    }
    return x;
  }

  tabChanged(tabChangeEvent: MatTabChangeEvent)  {
    this.pages.forEach(page => {
      if (page.order == tabChangeEvent.index) {
        this.bookmark = page
      }
    });
  }

  onBMClick(event, id) {
    if (id != "#")
      this.viewportScroller.scrollToAnchor(id.bookmark);
    else
      this.viewportScroller.scrollToPosition([0, 0]);
    
  }
}
