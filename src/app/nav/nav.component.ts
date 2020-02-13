import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { MatSidenav } from '@angular/material/sidenav';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { NgxXml2jsonService } from 'ngx-xml2json';

import { NavService } from '../nav.service';
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
  @ViewChild('sidenav') sidenav: MatSidenav;
  private headers = new HttpHeaders(); 
  private testFile = 'assets/booklet/index.xml';
  pages: Array<Page>;
  bookmark: Page;

  constructor(private viewportScroller: ViewportScroller, private navService: NavService, private http: HttpClient, private ngxXml2jsonService: NgxXml2jsonService) {
    this.viewportScroller.setOffset([0, 64]);
    this.headers = this.headers.append('Content-Type', 'text/xml'); 
    this.headers = this.headers.append('Accept', 'text/xml');

    this.http.get(this.testFile, {responseType: 'text'}).subscribe(data => {
      this.pages = new Array<Page>(this.read(data)['files'].file.length);
      this.read(data)['files'].file.forEach(i => {
        this.http.get('assets/booklet/' + i + '.xml', {responseType: 'text'}).subscribe(data => {
          var json = this.read(data);
          this.pages.splice(parseInt(json['page'].order, 10), 1, this.parse(json, i));
        });
      });
    });
  }

  ngOnInit()  {
    this.navService.$toggle.subscribe(val=> {
      this.sidenav.toggle(val);
    });
  }

  read(data)  {
    const parser = new DOMParser();
    const xml = parser.parseFromString(data, 'text/xml');
    const json = this.ngxXml2jsonService.xmlToJson(xml);
    return json;
  }

  parse(json, filename) {
    var sections = new Array<Section>();
    var bookmark = 0;

    this.arrayify(json['page'].section).forEach(section => {
      var subsections: Array<Subsection> = new Array<Subsection>();
      var list: Array<Subsection> = new Array<Subsection>();
      var table: Table;

      if (section.subsection != undefined)  {
        this.arrayify(section.subsection).forEach(subsection => {
          subsections.push(new Subsection(subsection.header, subsection.text));
        });
      }

      if (section.list != null)  {
        this.arrayify(section.list).forEach(point => {
          list.push(new Subsection(point.header, point.text));
        });
      }

      if (section.table != null)  {
        var columns: Array<string> = new Array<string>();
        var rows: Array<Row> = new Array<Row>();

        if (section.table.column != null)  {
          this.arrayify(section.table.column).forEach(column => {
            columns.push(column);
          });
        }

        if (section.table.row != null)  {
          this.arrayify(section.table.row).forEach(row => {
            var cells: Array<string> = new Array<string>();
            this.arrayify(row.cell).forEach(cell => {
              cells.push(cell);
            });
            rows.push(new Row(row.name, cells));
          });
        }

        table = new Table(section.table.header, columns, rows);
      }
      
      sections.push(new Section(filename + "-" + bookmark, section.header, section.text, subsections, list, table));
      bookmark++;
    });
    
    var page = new Page(Number(json.page.order), json.page.title, sections);
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
