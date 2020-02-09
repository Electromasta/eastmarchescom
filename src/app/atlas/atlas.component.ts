import { Component, OnInit } from '@angular/core';

import { tileLayer, latLng, CRS } from 'leaflet';

@Component({
  selector: 'app-atlas',
  templateUrl: './atlas.component.html',
  styleUrls: ['./atlas.component.css']
})
export class AtlasComponent implements OnInit {
  constructor() { }
  leafoptions = {
    layers: [
      tileLayer('/assets/leaflet/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...', tileSize: 1024 })
    ],
    crs: CRS.Simple,
    zoom: 2,
    minZoom: 0,
    maxZoom: 4,
    center: latLng(-500, 500),
    noWrap: true,
    attributionControl: false
  };

  ngOnInit(): void {
  }

}
