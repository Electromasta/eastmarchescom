import { Component, OnInit } from '@angular/core';

import { tileLayer, latLng, CRS, marker } from 'leaflet';

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

  layers = [  //y, x
    marker([ -487, 449 ]).bindTooltip("<b>Akros</b><br><p>The seat of power of an empire, where contracts and loyalty are enforced with geas magic. Noble houses play games of power using the merchants, peasants and their chosen champions.</p>", {permanent: false, opacity: 1, direction: 'top'}),  //Akros
    marker([ -523, 378 ]).bindTooltip("<b>Twin Cities</b><br><p>The Twin Cities, Uru-Bhast and Uru-Nekhan, rebuilt by Gadea the Great in honor the sons of the diety Muru.</p>", {permanent: false, opacity: 1, direction: 'top'}),  //Twin Cities
    marker([ -458, 484 ]).bindTooltip("<b>Ravenwatch</b><br><p>Ravenwatch is a town in the empire surrounded by forests on all sides. The monks of the abbey preach nonviolent passivism.</p>", {permanent: false, opacity: 1, direction: 'top'}),  //Ravenwatch
    marker([ -445, 420 ]).bindTooltip("<b>Phandalin</b><br><p>A Mining Town, whos resources are under strict control of the Empire, and is a well known tourist trap.</p>", {permanent: false, opacity: 1, direction: 'top'}),  //Phandalin
    marker([ -508, 526 ]).bindTooltip("<b>Saltmarsh</b><br><p>Saltmarsh is a fishing town. Whether or not the town is a part of the empire depends on who you ask, and is a very controversial subject.</p>", {permanent: false, opacity: 1, direction: 'top'}),  //Saltmarsh
    marker([ -499, 717 ]).bindTooltip("<b>Joanapur</b><br><p>A city on a chain of islands, where laws are more of suggestions, gangs and pirates roam unchecked, and the majority of people live in slums.</p>", {permanent: false, opacity: 1, direction: 'top'})   //Joanapur
  ];

  ngOnInit(): void {
  }

}
